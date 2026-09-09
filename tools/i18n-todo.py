#!/usr/bin/env python3
"""
i18n-todo.py — dump the untranslated English, per page, as JSON for translating.

    python3 tools/i18n-todo.py --list            # pages and counts
    python3 tools/i18n-todo.py <slug> [<slug>…]  # English needing translation
    python3 tools/i18n-todo.py --batch N M       # pages N..M of the list

Output shape is exactly what tools/es-translations/<slug>.json must contain,
with the English left in place as a starting point:

    { "<slug>": { "<key>": "<english>", … } }
"""

import argparse
import glob
import importlib.util
import json
import os
import subprocess
import sys


def load(name):
    path = os.path.join(os.path.dirname(os.path.abspath(__file__)), name)
    spec = importlib.util.spec_from_file_location(name.replace('-', '_')[:-3], path)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('slugs', nargs='*')
    ap.add_argument('--list', action='store_true')
    ap.add_argument('--batch', nargs=2, type=int, metavar=('FROM', 'TO'))
    args = ap.parse_args()

    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    os.chdir(root)

    english = json.loads(subprocess.run(
        [sys.executable, 'tools/i18n-extract.py'], capture_output=True, text=True).stdout)

    chk = load('i18n-check.py')
    have = {}
    for code, files in chk.discover().items():
        if code != 'es':
            continue
        d, err = chk.load_files(files, code)
        if err or not d:
            continue
        for section in ('pages', 'blocks'):
            for slug, kv in d[section].items():
                for k, v in kv.items():
                    if str(v).strip():
                        have.setdefault(slug, set()).add(k)

    # anything already sitting in the overlay counts as done too
    for f in glob.glob('tools/es-translations/*.json') + ['tools/es-translations.json']:
        if not os.path.exists(f):
            continue
        try:
            for slug, kv in json.load(open(f, encoding='utf-8')).items():
                for k, v in kv.items():
                    if str(v).strip():
                        have.setdefault(slug, set()).add(k)
        except Exception:
            pass

    todo = {}
    for slug, keys in english.items():
        pend = {k: v for k, v in keys.items() if k not in have.get(slug, set())}
        if pend:
            todo[slug] = pend

    order = sorted(todo, key=lambda s: (-len(todo[s]), s))

    if args.list:
        words = 0
        for i, slug in enumerate(order, 1):
            w = sum(len(v.split()) for v in todo[slug].values())
            words += w
            print('%3d  %4d keys %5d words  %s' % (i, len(todo[slug]), w, slug))
        print('\n%d pages, %d keys, %d words remaining'
              % (len(order), sum(len(v) for v in todo.values()), words))
        return

    if args.batch:
        lo, hi = args.batch
        slugs = order[lo - 1:hi]
    else:
        slugs = args.slugs

    out = {s: todo[s] for s in slugs if s in todo}
    json.dump(out, sys.stdout, ensure_ascii=False, indent=1)


if __name__ == '__main__':
    main()
