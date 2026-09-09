#!/usr/bin/env python3
"""
i18n-check.py — validate the language files. Run this before committing.

Understands the per-page layout:

    languages/es/_global.js     shared chrome
    languages/es/<slug>.js      one file per page

A flat languages/<code>.js is also accepted, for a language kept in one file.

Four checks:
  1. syntax    every language file parses (catches a broken backtick before it
               can break the deck)
  2. drift     the English comment stored above each entry still matches the
               page. Catches reordered or reworded elements, which would
               otherwise show a confidently wrong translation.
  3. coverage  translated vs total keys, per page
  4. orphans   keys with no matching element on the page

Exit code is non-zero if syntax or drift fails, so this can gate a commit.
"""

import glob
import json
import os
import re
import subprocess
import sys

FAIL = 0

STUB = """
global.window = {
  TDD_LANG_REGISTER: function(e) {
    out.code = e.code || out.code;
    ['pages','blocks','notes'].forEach(function(k){
      var s = e[k]; if (!s) return;
      for (var slug in s) out[k][slug] = s[slug];
    });
  },
  TDD_LANG_PAGE: function(e) {
    out.code = e.code || out.code;
    if (e.page)   out.pages[e.slug]  = e.page;
    if (e.blocks) out.blocks[e.slug] = e.blocks;
    if (e.notes)  out.notes[e.slug]  = e.notes;
  }
};
"""


def load_files(paths, code_hint):
    """Load a set of files under the stub and merge what they register."""
    script = ('var out = {code: %s, pages:{}, blocks:{}, notes:{}};\n' % json.dumps(code_hint)
              + STUB
              + 'process.argv.slice(1).forEach(function(p){ require(p); });\n'
              + 'process.stdout.write(JSON.stringify(out));')
    r = subprocess.run(['node', '-e', script] + [os.path.abspath(p) for p in paths],
                       capture_output=True, text=True)
    if r.returncode:
        return None, r.stderr.strip().split('\n')[0]
    return json.loads(r.stdout), None


def discover():
    """Return {code: [file, ...]} for every language present."""
    langs = {}
    for d in sorted(glob.glob('languages/*')):
        if os.path.isdir(d):
            files = sorted(glob.glob(os.path.join(d, '*.js')))
            if files:
                langs[os.path.basename(d)] = files
        elif d.endswith('.js') and os.path.basename(d) != 'language_template.js':
            langs[os.path.basename(d)[:-3]] = [d]
    return langs


def main():
    global FAIL
    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    os.chdir(root)

    langs = discover()
    if not langs:
        print('no language files found under languages/')
        return

    english = json.loads(subprocess.run(
        [sys.executable, 'tools/i18n-extract.py'],
        capture_output=True, text=True).stdout)

    print('── 1. syntax ' + '─' * 52)
    loaded = {}
    for code, files in langs.items():
        bad = False
        for f in files:
            r = subprocess.run(['node', '--check', f], capture_output=True, text=True)
            if r.returncode:
                lines = r.stderr.strip().split('\n')
                print('  FAIL %s' % f)
                print('       %s' % (lines[1][:100] if len(lines) > 1 else lines[0][:100]))
                FAIL = bad = 1
        if bad:
            continue
        d, err = load_files(files, code)
        if err:
            print('  FAIL %s could not load: %s' % (code, err))
            FAIL = 1
            continue
        loaded[code] = d
        print('  ok   %s — %d files parse' % (code, len(files)))

    print('\n── 2. drift (stored English comment vs page) ' + '─' * 21)
    for code, files in langs.items():
        drift = []
        for f in files:
            if os.path.basename(f) == '_global.js':
                continue
            src = open(f, encoding='utf-8').read()
            sm = re.search(r"slug:\s*'([^']+)'", src)
            # A flat file carries many pages, so fall back to tracking the
            # slug header inside it; a per-page file states its slug once.
            file_slug = sm.group(1) if sm else None
            cur = file_slug
            for m in re.finditer(
                    r"^\s*'([\w.-]+)': \{|//\s*(.+)\n\s*(?://\s*TODO\s*)?['\"]([^'\"]+)['\"]\s*:",
                    src, re.M):
                if m.group(1):
                    if not file_slug:
                        cur = m.group(1)
                    continue
                cmt, key = m.group(2).strip(), m.group(3)
                if not cur or cur not in english:
                    continue
                en = english[cur].get(key)
                if en is None:
                    continue
                flat = re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', '', en)).strip()
                stored = cmt.rstrip('…').strip()
                if stored and not flat.startswith(stored[:min(40, len(stored))]):
                    drift.append((cur, key))
        if drift:
            FAIL = 1
            print('  FAIL %s — %d stale keys' % (code, len(drift)))
            for s, k in drift[:8]:
                print('       %s / %s' % (s, k))
        else:
            print('  ok   %s — no drift' % code)

    print('\n── 3. coverage ' + '─' * 50)
    for code, d in loaded.items():
        done = tot = 0
        partial = []
        for slug, keys in english.items():
            n = sum(1 for k in keys
                    if (d['blocks'] if k.startswith('explain.') else d['pages'])
                    .get(slug, {}).get(k))
            done += n
            tot += len(keys)
            if n < len(keys):
                partial.append((slug, n, len(keys)))
        print('  %s: %d/%d keys (%.0f%%), %d pages incomplete'
              % (code, done, tot, done / tot * 100 if tot else 0, len(partial)))
        for slug, n, t in partial[:10]:
            print('       %3d/%-3d %s' % (n, t, slug))
        if len(partial) > 10:
            print('       … and %d more' % (len(partial) - 10))
        notes = sum(1 for v in d['notes'].values() if str(v).strip())
        print('       notes translated: %d/%d pages' % (notes, len(english)))

    print('\n── 4. orphans ' + '─' * 51)
    for code, d in loaded.items():
        orphan = []
        for section in ('pages', 'blocks'):
            for slug, keys in d[section].items():
                for k in keys:
                    if k not in english.get(slug, {}):
                        orphan.append('%s/%s' % (slug, k))
        print('  %s: %d keys with no matching element' % (code, len(orphan)))
        for o in orphan[:8]:
            print('       %s' % o)

    print('\n%s' % ('FAILED — fix the above before committing' if FAIL else 'All checks passed'))
    sys.exit(FAIL)


if __name__ == '__main__':
    main()
