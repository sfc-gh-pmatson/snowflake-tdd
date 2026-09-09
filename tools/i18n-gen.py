#!/usr/bin/env python3
"""
i18n-gen.py — build the per-page Spanish files from the English catalog.

Layout produced:

    languages/es/_global.js        language name + shared chrome (always loaded)
    languages/es/<slug>.js         one file per page (loaded only on that page)

Why split: a page view then downloads only its own slice, so the cost of a page
load stays flat as more of the deck gets translated. A single combined file grows
to ~344 KB fully translated and is fetched on every page.

Existing Spanish is always preserved — translations are read back out of the
current files (and from a legacy languages/es.js if present) before regenerating,
so reviewer edits are never lost.

    python3 tools/i18n-gen.py                 # regenerate
    python3 tools/i18n-gen.py --coverage      # report only, write nothing
"""

import argparse
import glob
import json
import os
import re
from html import unescape
import subprocess
import sys

LANG = 'es'
NAME = 'Español'

GLOBAL_FILE = """\
// ─────────────────────────────────────────────────────────────────────────
// Spanish (es) — shared chrome. Loaded on every page.
//
// Per-page strings live in languages/es/<page-slug>.js
// Agreed terminology: languages/GLOSSARY.md
// How to edit safely: languages/README.md
// ─────────────────────────────────────────────────────────────────────────

window.TDD_LANG_REGISTER({
  code: 'es',
  name: 'Español',

  global: {
    'back': '← Atrás',
    'tag.ga': 'Disponibilidad General',
    'tag.pupr': 'Vista Previa Pública',
    'tag.prpr': 'Vista Previa Privada',
    'tag.bc': 'Business Critical',
    'tag.ent': 'Enterprise',
    'footer.copyright': '© 2026 Snowflake Inc. Todos los derechos reservados',
  },
});
"""

PAGE_HEADER = """\
// ─────────────────────────────────────────────────────────────────────────
// Spanish (es) — %(slug)s
//
// ⚠️  FIRST-PASS AI TRANSLATION — not yet reviewed by a native speaker.
//
// Edit only the text inside the quotes. The English original is in the
// comment above each entry. Never change a key. Never translate product
// names, SQL keywords, or metrics. See languages/GLOSSARY.md.
//
// Entries marked "// TODO" are untranslated: the page shows English. To
// translate one, delete the "// TODO " prefix and replace the English.
//
// When finished run:  python3 tools/i18n-check.py
// ─────────────────────────────────────────────────────────────────────────

window.TDD_LANG_PAGE({
  code: 'es',
  slug: '%(slug)s',
"""


def js_string(s):
    """Prefer single quotes so a stray backtick cannot break the deck."""
    if '<' in s or '`' in s or '${' in s or '\n' in s:
        return '`' + s.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${') + '`'
    if "'" in s:
        return '"' + s.replace('\\', '\\\\').replace('"', '\\"') + '"'
    return "'" + s.replace('\\', '\\\\') + "'"


def comment(s, width=88):
    flat = re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', '', s)).strip()
    return flat if len(flat) <= width else flat[:width - 1] + '…'


def read_js(path, fn):
    """Run a language file under a stub and return what it registered."""
    r = subprocess.run(
        ['node', '-e', """
        var out = {};
        global.window = {
          TDD_LANG_REGISTER: function(e) {
            out.global = e.global || {};
            ['pages','blocks','notes'].forEach(function(k){ if (e[k]) out[k] = e[k]; });
          },
          TDD_LANG_PAGE: function(e) {
            out.page = e.page || {}; out.blocks = e.blocks || {};
            if (e.notes) out.notes = e.notes;
            out.slug = e.slug;
          }
        };
        require(process.argv[1]);
        process.stdout.write(JSON.stringify(out));
        """, os.path.abspath(path)],
        capture_output=True, text=True)
    if r.returncode or not r.stdout.strip():
        print('warning: could not read %s' % path, file=sys.stderr)
        return {}
    return json.loads(r.stdout)


def load_existing(root_dir):
    """Collect {slug: {key: es}} and {slug: notes} from whatever exists now."""
    pages, blocks, notes = {}, {}, {}

    # New split layout
    for f in sorted(glob.glob(os.path.join(root_dir, '*.js'))):
        if os.path.basename(f) == '_global.js':
            continue
        d = read_js(f, 'page')
        slug = d.get('slug') or os.path.basename(f)[:-3]
        if d.get('page'):
            pages.setdefault(slug, {}).update(d['page'])
        if d.get('blocks'):
            blocks.setdefault(slug, {}).update(d['blocks'])
        if d.get('notes'):
            notes[slug] = d['notes']

    # Legacy single file, so the first migration keeps its translations
    legacy = 'languages/%s.js' % LANG
    if os.path.exists(legacy):
        d = read_js(legacy, 'all')
        for slug, kv in (d.get('pages') or {}).items():
            pages.setdefault(slug, {}).update(kv)
        for slug, kv in (d.get('blocks') or {}).items():
            blocks.setdefault(slug, {}).update(kv)
        for slug, v in (d.get('notes') or {}).items():
            notes.setdefault(slug, v)

    # Optional overlay of newly translated strings. A directory is supported so
    # bulk translation can be split into batch files without merge conflicts.
    #
    # Overlays FILL GAPS ONLY — they never overwrite a string already present in
    # languages/es/. Reviewers are told to edit those files directly, and an
    # overlay that won would silently revert their work on the next run.
    overlays = sorted(glob.glob('tools/es-translations/*.json'))
    if os.path.exists('tools/es-translations.json'):
        overlays.append('tools/es-translations.json')
    for overlay in overlays:
        for slug, kv in json.load(open(overlay, encoding='utf-8')).items():
            for k, v in kv.items():
                if not str(v).strip():
                    continue
                tgt = blocks if k.startswith('explain.') else pages
                tgt.setdefault(slug, {}).setdefault(k, v)

    npath = 'tools/es-notes.json'
    if os.path.exists(npath):
        for slug, v in json.load(open(npath, encoding='utf-8')).items():
            notes.setdefault(slug, v)

    return pages, blocks, notes


def text_content_keys():
    """
    (slug, key) pairs applied with textContent rather than innerHTML.

    textContent does not decode HTML entities, so a value holding "&amp;" would
    render literally as "&amp;" on the slide. Those values are decoded on the way
    out so a translation carrying an entity cannot reintroduce the bug.
    """
    keys = set()
    for f in glob.glob('pages/*.html') + ['index.html']:
        slug = os.path.basename(f).replace('.html', '')
        try:
            src = open(f, encoding='utf-8').read()
        except OSError:
            continue
        for m in re.finditer(r'data-i18n(-html)?="([^"]+)"', src):
            if not m.group(1):
                keys.add((slug, m.group(2)))
    return keys


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--coverage', action='store_true')
    args = ap.parse_args()

    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    os.chdir(root)

    english = json.loads(subprocess.run(
        [sys.executable, 'tools/i18n-extract.py'],
        capture_output=True, text=True).stdout)

    out_dir = os.path.join('languages', LANG)
    os.makedirs(out_dir, exist_ok=True)
    have_pages, have_blocks, have_notes = load_existing(out_dir)

    # Decode entities for textContent keys, wherever they came from.
    tck = text_content_keys()
    for slug, kv in have_pages.items():
        for k, v in list(kv.items()):
            if (slug, k) in tck and re.search(r'&(?:#\d+|#x[0-9a-fA-F]+|\w+);', str(v)):
                kv[k] = unescape(str(v))

    done = miss = 0
    per = {}
    for slug, keys in english.items():
        d = 0
        for k in keys:
            src = have_blocks if k.startswith('explain.') else have_pages
            if src.get(slug, {}).get(k):
                d += 1
        per[slug] = (d, len(keys))
        done += d
        miss += len(keys) - d
    total = done + miss

    if args.coverage:
        print('keys total   : %d' % total)
        print('translated   : %d (%.0f%%)' % (done, done / total * 100 if total else 0))
        print('untranslated : %d (falls back to English)' % miss)
        print('\nper page:')
        for slug in sorted(per):
            d, t = per[slug]
            tag = '' if d == t else ('  ← partial' if d else '  ← none')
            print('   %3d/%-3d  %-42s%s' % (d, t, slug, tag))
        return

    open(os.path.join(out_dir, '_global.js'), 'w', encoding='utf-8').write(GLOBAL_FILE)

    written = 0
    for slug in sorted(english):
        keys = english[slug]
        page_keys = {k: v for k, v in keys.items() if not k.startswith('explain.')}
        blk_keys = {k: v for k, v in keys.items() if k.startswith('explain.')}

        buf = [PAGE_HEADER % {'slug': slug}]
        if page_keys:
            buf.append('\n  page: {\n')
            for k, en in page_keys.items():
                es = have_pages.get(slug, {}).get(k)
                buf.append('    // %s\n' % comment(en))
                if es:
                    buf.append('    %s: %s,\n' % (js_string(k), js_string(es)))
                else:
                    buf.append('    // TODO %s: %s,\n' % (js_string(k), js_string(en)))
            buf.append('  },\n')
        if blk_keys:
            buf.append('\n  // HTML blocks this page builds in JS.\n  blocks: {\n')
            for k, en in blk_keys.items():
                es = have_blocks.get(slug, {}).get(k)
                buf.append('    // %s\n' % comment(en))
                if es:
                    buf.append('    %s: %s,\n' % (js_string(k), js_string(es)))
                else:
                    buf.append('    // TODO %s: %s,\n' % (js_string(k), js_string(en)))
            buf.append('  },\n')
        if have_notes.get(slug):
            buf.append('\n  // Translated talk-track notes. A selected personal notes\n'
                       '  // author still takes priority over this.\n')
            buf.append('  notes: %s,\n' % js_string(have_notes[slug]))
        buf.append('});\n')

        open(os.path.join(out_dir, '%s.js' % slug), 'w', encoding='utf-8').write(''.join(buf))
        written += 1

    sizes = [os.path.getsize(os.path.join(out_dir, f))
             for f in os.listdir(out_dir) if f.endswith('.js')]
    print('wrote %d files to %s/' % (written + 1, out_dir))
    print('  translated %d/%d keys, %d pending' % (done, total, miss))
    print('  per page: avg %.1f KB, max %.1f KB  (loaded per page view)'
          % (sum(sizes) / len(sizes) / 1024, max(sizes) / 1024))


if __name__ == '__main__':
    main()
