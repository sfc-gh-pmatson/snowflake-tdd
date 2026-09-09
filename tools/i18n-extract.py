#!/usr/bin/env python3
"""
i18n-extract.py — read the English source string for every tagged element.

Works directly off the data-i18n / data-i18n-html attribute rather than parser
offsets: find the attribute, walk left to the opening tag, then walk right with
a depth counter to the matching close tag. Deterministic and offset-drift free.

Also extracts the JS `explain:` blocks keyed by their `key:` property.

Usage:
    python3 tools/i18n-extract.py                 # JSON to stdout
    python3 tools/i18n-extract.py --stats         # summary only
"""

import argparse
import glob
import json
import os
import re
import sys
from html import unescape

EXCLUDE_FILES = {'_template.html'}
ATTR = re.compile(r'\sdata-i18n(-html)?="([^"]+)"')
ANY_TAG = re.compile(r'<[^>]+>')

# Strings that must never be translated: SQL keywords, identifiers, product
# names, pure metrics. These are omitted from the language file so they fall
# back to English rather than inviting a wrong translation.
DNT_NAMES = {
    'snowflake', 'cortex', 'snowpark', 'streamlit', 'iceberg', 'horizon',
    'polaris', 'arctic', 'cowork', 'snowgrid', 'unistore', 'snowsight',
    'snowpipe', 'aws', 'azure', 'gcp', 'databricks', 'spark', 'delta',
    'parquet', 'kafka', 'dbt', 'python', 'sql', 'json', 'csv', 'yaml',
    'api', 'rest', 'llm', 'ml', 'ai', 'etl', 'elt', 'cdc', 'iam', 's3',
    'adls', 'gcs', 'oauth', 'saml', 'scim', 'rbac', 'gpu', 'cpu', 'vpc',
    'openflow', 'terraform', 'github', 'gitlab', 'salesforce', 'sharepoint',
    'slack', 'tableau', 'looker', 'sigma', 'powerbi', 'excel', 'pandas',
    'pytorch', 'tensorflow', 'xgboost', 'sklearn', 'ray', 'docker',
}


def opening_tag_name(html, attr_pos):
    """Tag name of the element whose opening tag contains attr_pos."""
    lt = html.rfind('<', 0, attr_pos)
    m = re.match(r'<([A-Za-z][\w-]*)', html[lt:lt + 40])
    return (m.group(1).lower() if m else None), lt


def inner_of(html, attr_pos):
    """Raw inner HTML of the element whose opening tag contains attr_pos."""
    tag, lt = opening_tag_name(html, attr_pos)
    if not tag:
        return ''
    gt = html.find('>', attr_pos)
    if gt == -1 or html[gt - 1] == '/':
        return ''
    start = gt + 1
    depth, pos = 0, start
    open_re = re.compile(r'<%s\b' % re.escape(tag), re.I)
    close_re = re.compile(r'</%s\s*>' % re.escape(tag), re.I)
    while True:
        mo = open_re.search(html, pos)
        mc = close_re.search(html, pos)
        if not mc:
            return html[start:]
        if mo and mo.start() < mc.start():
            depth += 1
            pos = mo.end()
        elif depth:
            depth -= 1
            pos = mc.end()
        else:
            return html[start:mc.start()]


def is_dnt(raw):
    t = ANY_TAG.sub(' ', raw)
    t = re.sub(r'&[a-z]+;|&#\d+;', ' ', t)
    t = re.sub(r'\s+', ' ', t).strip()
    if not t:
        return True
    if not re.search(r'[A-Za-z]{3}', t):
        return True                                    # numbers / symbols only
    if re.fullmatch(r"[A-Z0-9_$!*().,\-\s/:+%'\"=<>\[\]]+", t) and len(t) <= 48:
        return True                                    # SQL keyword / all-caps
    words = re.findall(r"[A-Za-z][A-Za-z0-9.+_-]*", t)
    if words and all(w.lower().strip('._-') in DNT_NAMES for w in words):
        return True                                    # product names only
    if len(words) == 1 and '_' in words[0]:
        return True                                    # snake_case identifier
    return False


def extract_page(path):
    html = open(path, encoding='utf-8').read()
    body = html.find('<body')
    out = {}
    for m in ATTR.finditer(html):
        if m.start() < body:
            continue
        key = m.group(2)
        raw = inner_of(html, m.start())
        raw = re.sub(r'\s+', ' ', raw).strip()
        if not raw:
            continue
        # A plain data-i18n value is applied with textContent, which does NOT
        # decode HTML entities — a stored "&amp;" would render literally as
        # "&amp;". Decode here so the catalog holds the characters the reader
        # actually sees. data-i18n-html goes through innerHTML, where entities
        # are decoded by the browser, so those are left exactly as authored.
        if not m.group(1):
            raw = unescape(raw)
        out[key] = raw
    return out


def extract_explain(path):
    """
    Pull the JS `explain:` blocks.

    The `key:` property is not always adjacent to `explain:` — some pages
    declare it at the top of the object literal — so search backwards from each
    `explain:` for the nearest preceding key rather than requiring adjacency.
    """
    html = open(path, encoding='utf-8').read()
    out = {}
    for m in re.finditer(r"explain:\s*`(.*?)`", html, re.S):
        pre = html[max(0, m.start() - 4000):m.start()]
        km = None
        for k in re.finditer(r"key:\s*'([^']+)'", pre):
            km = k
        if not km:
            continue
        out['explain.' + km.group(1)] = re.sub(r'\s+', ' ', m.group(1)).strip()
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--stats', action='store_true')
    ap.add_argument('--root', help='extract from this directory instead of the '
                                   'repo (used to read a git revision)')
    args = ap.parse_args()
    root = args.root or os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    os.chdir(root)

    files = sorted(glob.glob('pages/*.html')) + ['index.html']
    files = [f for f in files if os.path.basename(f) not in EXCLUDE_FILES]

    cat = {}
    n_tr = n_dnt = w_tr = 0
    for f in files:
        slug = os.path.basename(f).replace('.html', '')
        page = extract_page(f)
        page.update(extract_explain(f))
        keep = {}
        for k, v in page.items():
            if is_dnt(v):
                n_dnt += 1
            else:
                keep[k] = v
                n_tr += 1
                w_tr += len(ANY_TAG.sub(' ', v).split())
        if keep:
            cat[slug] = keep

    if args.stats:
        print('pages           : %d' % len(cat))
        print('translatable    : %d keys, %d words' % (n_tr, w_tr))
        print('skipped as DNT  : %d keys (fall back to English)' % n_dnt)
        top = sorted(cat.items(), key=lambda kv: -len(kv[1]))[:12]
        print('\nlargest pages:')
        for s, ks in top:
            w = sum(len(ANY_TAG.sub(' ', v).split()) for v in ks.values())
            print('   %4d keys %5d words  %s' % (len(ks), w, s))
    else:
        json.dump(cat, sys.stdout, ensure_ascii=False, indent=1)


if __name__ == '__main__':
    main()
