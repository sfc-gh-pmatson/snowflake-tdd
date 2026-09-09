#!/usr/bin/env python3
"""
i18n-validate-es.py — structural validation of the Spanish against the English.

This does not judge whether the Spanish is *good* — only that it is structurally
safe to ship. A human reviewer judges the prose. The failures caught here are the
ones that silently break a page or contradict the glossary:

  ERROR   tag mismatch      inline HTML differs from the English (a lost </strong>
                            can swallow the rest of a card)
  ERROR   lost placeholder  a number, version, or metric present in the English
                            has gone missing
  ERROR   dnt translated    a product name / SQL keyword / tier name that must
                            never be translated is absent from the Spanish
  WARN    kept-term         a term the glossary keeps in English looks translated
  WARN    identical         Spanish byte-identical to English (may be legitimate
                            for a bare product name, so only a warning)
  WARN    punctuation       a question or exclamation without ¿ / ¡

    python3 tools/i18n-validate-es.py            # validate languages/es/
    python3 tools/i18n-validate-es.py --overlay  # validate the pending JSON too
"""

import argparse
import glob
import importlib.util
import json
import os
import re
import subprocess
import sys

# Must survive translation verbatim — product and vendor names.
DNT = [
    'Snowflake', 'Cortex', 'Snowpark', 'Streamlit', 'Iceberg', 'Horizon',
    'Polaris', 'Arctic', 'CoWork', 'Snowgrid', 'Unistore', 'Snowsight',
    'Snowpipe', 'AWS', 'Azure', 'GCP', 'Databricks', 'Spark', 'Delta',
    'Parquet', 'Kafka', 'dbt', 'Business Critical', 'Virtual Private Snowflake',
]

# 'Enterprise' and 'Standard' are tier names, but they are also ordinary English
# adjectives that appear in prose ("Enterprise-Ready", "Standard pattern",
# "standard HTTP POST"). Requiring them verbatim produced stilted Spanish such as
# "patrón Standard" and "Gobernanza Enterprise", so they warn instead of failing:
# a human decides whether a given instance is the tier or the adjective.
DNT_SOFT = ['Enterprise', 'Standard']

# Glossary says keep these English. Flag if the English had them and the Spanish
# does not — but 'data warehouse' is explicitly allowed to become 'almacén de datos'.
KEEP_ENGLISH = ['warehouse', 'clustering', 'lakehouse', 'pipeline', 'streaming',
                'throughput', 'notebook']

SQL_RE = re.compile(r'\b(SELECT|FROM|WHERE|QUALIFY|GROUP BY|ORDER BY|JOIN|ASOF|'
                    r'DATE_SPINE|TIMESERIES|VARIANT|GEOGRAPHY|GEOMETRY|FLATTEN|'
                    r'INFER_SCHEMA|MERGE|COPY INTO|CREATE|ALTER|GRANT|H3|ST_\w+|'
                    r'MATCH_RECOGNIZE|RANGE BETWEEN|LATERAL|PIVOT|UNPIVOT)\b')

TAG_RE = re.compile(r'<(/?)(\w+)[^>]*>')
NUM_RE = re.compile(r'\d+(?:[.,]\d+)?%?')
# Numeric character references (&#8217;) contain digits that are not figures. They
# must be compared as entities, not counted as metrics, or a translator is forced
# to keep an English possessive apostrophe just to satisfy the figure check.
ENT_RE = re.compile(r'&(?:#\d+|#x[0-9a-fA-F]+|\w+);')


def figures(s):
    return sorted(NUM_RE.findall(ENT_RE.sub(' ', s)))


def load(name):
    path = os.path.join(os.path.dirname(os.path.abspath(__file__)), name)
    spec = importlib.util.spec_from_file_location(name.replace('-', '_')[:-3], path)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def tags(s):
    return [(m.group(1), m.group(2).lower()) for m in TAG_RE.finditer(s)]


def check(slug, key, en, es):
    errs, warns = [], []

    if tags(en) != tags(es):
        errs.append('tag mismatch: %s vs %s'
                    % (''.join('<%s%s>' % t for t in tags(en))[:60],
                       ''.join('<%s%s>' % t for t in tags(es))[:60]))

    en_nums = figures(en)
    es_nums = figures(es)
    if en_nums != es_nums:
        missing = [n for n in en_nums if n not in es_nums]
        if missing:
            errs.append('lost figure(s): %s' % ', '.join(missing[:6]))

    for term in DNT:
        if re.search(r'\b%s\b' % re.escape(term), en) and term not in es:
            errs.append('must not be translated, missing: %s' % term)

    for term in DNT_SOFT:
        if re.search(r'\b%s\b' % re.escape(term), en) and term not in es:
            warns.append('"%s" not kept — correct only if it is the adjective, '
                         'not the tier name' % term)

    for m in set(SQL_RE.findall(en)):
        if m not in es:
            errs.append('SQL construct missing: %s' % m)

    low_en, low_es = en.lower(), es.lower()
    for term in KEEP_ENGLISH:
        if term in low_en and term not in low_es:
            if term == 'warehouse' and 'data warehouse' in low_en:
                continue          # allowed to become 'almacén de datos'
            warns.append('glossary keeps "%s" in English; not found' % term)

    if en.strip() == es.strip() and len(en.split()) > 2:
        warns.append('identical to English')

    stripped = re.sub(r'<[^>]+>', '', es)
    if '?' in stripped and '¿' not in stripped:
        warns.append('question without ¿')
    if '!' in stripped and '¡' not in stripped:
        warns.append('exclamation without ¡')

    return errs, warns


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--overlay', action='store_true',
                    help='also validate tools/es-translations/*.json')
    ap.add_argument('--only', help='validate just this JSON overlay file')
    ap.add_argument('--quiet', action='store_true')
    args = ap.parse_args()

    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    os.chdir(root)

    english = json.loads(subprocess.run(
        [sys.executable, 'tools/i18n-extract.py'], capture_output=True, text=True).stdout)

    have = {}
    chk = load('i18n-check.py')
    if args.only:
        # Validate one overlay in isolation, so a translator working on a batch
        # is not shown other batches' findings.
        try:
            for slug, kv in json.load(open(args.only, encoding='utf-8')).items():
                for k, v in kv.items():
                    if str(v).strip():
                        have.setdefault(slug, {})[k] = v
        except Exception as e:
            print('  FAIL %s is not valid JSON: %s' % (args.only, e))
            return 1
    else:
        for code, files in chk.discover().items():
            if code != 'es':
                continue
            d, err = chk.load_files(files, code)
            if not err and d:
                for section in ('pages', 'blocks'):
                    for slug, kv in d[section].items():
                        for k, v in kv.items():
                            if str(v).strip():
                                have.setdefault(slug, {})[k] = v

    if args.overlay:
        for f in sorted(glob.glob('tools/es-translations/*.json')):
            try:
                for slug, kv in json.load(open(f, encoding='utf-8')).items():
                    for k, v in kv.items():
                        if str(v).strip():
                            have.setdefault(slug, {})[k] = v
            except Exception as e:
                print('  FAIL %s is not valid JSON: %s' % (f, e))
                return 1

    n_err = n_warn = n = 0
    by_page = {}
    for slug, kv in sorted(have.items()):
        for key, es in kv.items():
            en = english.get(slug, {}).get(key)
            if en is None:
                continue
            n += 1
            errs, warns = check(slug, key, en, es)
            if errs or warns:
                by_page.setdefault(slug, []).append((key, errs, warns))
            n_err += len(errs)
            n_warn += len(warns)

    for slug in sorted(by_page):
        rows = by_page[slug]
        hard = sum(1 for _, e, _ in rows if e)
        if args.quiet and not hard:
            continue
        print('\n%s' % slug)
        for key, errs, warns in rows:
            if args.quiet and not errs:
                continue
            print('  %s' % key)
            for e in errs:
                print('      \033[31mERROR\033[0m %s' % e)
            for w in warns:
                print('      \033[33mwarn \033[0m %s' % w)

    print('\n%d translated strings checked — %d error(s), %d warning(s)'
          % (n, n_err, n_warn))
    return 1 if n_err else 0


if __name__ == '__main__':
    sys.exit(main())
