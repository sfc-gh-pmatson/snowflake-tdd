#!/usr/bin/env python3
"""
i18n-precommit.py — pre-commit gate for translation safety.

Answers one question: **do the staged changes invalidate an existing
translation?**

The dangerous case is not a missing translation — an untranslated key falls back
to English and the deck stays correct. The dangerous case is English text that
was edited while a translation for it still exists: the deck then confidently
shows Spanish that no longer says what the English says. Nobody reviewing the
English diff would notice, because the Spanish lives in a different file.

Checks, against the staged tree (the index) versus HEAD:

  BLOCKING
    1. stale       an English string changed and a translation for that key
                   exists — that translation is now wrong
    2. syntax      a staged language file does not parse (a stray backtick here
                   breaks the whole deck at runtime)

  ADVISORY (never blocks)
    3. new         new translatable keys — safe, they fall back to English
    4. dropped     translated keys whose element no longer exists — dead weight

Optional by default: the mode is **warn**, so findings are reported and the commit
proceeds. Opt in to enforcement when it matters.

    mode = warn | block | off      tools/i18n-precommit.conf
    TDD_I18N=block git commit      one-off override
    TDD_I18N=off   git commit      skip once

Usage:
    python3 tools/i18n-precommit.py            # check staged changes
    python3 tools/i18n-precommit.py --all      # check the working tree instead
    python3 tools/i18n-precommit.py --block    # enforce for this run
    python3 tools/i18n-precommit.py --install  # install as .git/hooks/pre-commit

In block mode, bypass for one commit with `git commit --no-verify`.
"""

import argparse
import importlib.util
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile

HOOK = """#!/bin/sh
# Installed by tools/i18n-precommit.py — reports staged English changes that have
# invalidated an existing translation. Advisory unless mode = block is set in
# tools/i18n-precommit.conf. Skip once with TDD_I18N=off.
exec python3 "$(git rev-parse --show-toplevel)/tools/i18n-precommit.py"
"""


CONFIG = 'tools/i18n-precommit.conf'
MODES = ('warn', 'block', 'off')


def read_config_mode(root):
    """mode = warn|block|off from the config file, or None if unset."""
    path = os.path.join(root, CONFIG)
    if not os.path.exists(path):
        return None
    for line in open(path, encoding='utf-8'):
        line = line.split('#')[0].strip()
        if not line or '=' not in line:
            continue
        k, v = [x.strip().lower() for x in line.split('=', 1)]
        if k == 'mode' and v in MODES:
            return v
    return None


def resolve_mode(args):
    """
    Precedence: CLI flag > TDD_I18N env var > config file > warn.

    Warn is the default deliberately. This check reports a correctness risk, not
    a broken build, and a gate that blocks by default gets bypassed reflexively
    with --no-verify, which trains people to ignore it. Opt in to blocking once
    the deck is actually translated and stale Spanish would matter.
    """
    if args.mode:
        return args.mode
    if args.block:
        return 'block'
    if args.warn_only:
        return 'warn'
    env = (os.environ.get('TDD_I18N') or '').strip().lower()
    if env in MODES:
        return env
    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    return read_config_mode(root) or 'warn'


def verdict(fail, mode):
    """Turn findings into an exit code according to the mode."""
    if not fail:
        return 0
    if mode == 'block':
        print('\nCommit blocked. Use `git commit --no-verify` to override,')
        print('or set mode = warn in %s to stop blocking.' % CONFIG)
        return 1
    print('\n\033[33mAdvisory only — the commit proceeded.\033[0m')
    print('To make this block instead: set `mode = block` in %s,' % CONFIG)
    print('or run one commit with `TDD_I18N=block git commit ...`')
    return 0


def git(*args, **kw):
    r = subprocess.run(['git'] + list(args), capture_output=True, text=True, **kw)
    return r.stdout, r.returncode


def load_check_module():
    """Reuse the language-file loader from i18n-check.py (hyphenated filename)."""
    path = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'i18n-check.py')
    spec = importlib.util.spec_from_file_location('i18n_check', path)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def extract_from(root, tools_dir):
    out = subprocess.run(
        [sys.executable, os.path.join(tools_dir, 'i18n-extract.py'), '--root', root],
        capture_output=True, text=True)
    if out.returncode or not out.stdout.strip():
        return None
    return json.loads(out.stdout)


def materialize(rev, dest, paths):
    """
    Write a git revision's files into dest. rev may be a tree-ish.

    Paths absent from the revision are dropped rather than passed to git
    archive, which fails the whole call on an unmatched pathspec — that happens
    naturally when languages/ is newer than HEAD.
    """
    os.makedirs(dest, exist_ok=True)
    present = []
    for p in paths:
        out, rc = git('ls-tree', '--name-only', rev, p)
        if rc == 0 and out.strip():
            present.append(p)
    if not present:
        return False
    p = subprocess.run(['git', 'archive', rev] + present, capture_output=True)
    if p.returncode:
        return False
    t = subprocess.run(['tar', '-x', '-C', dest], input=p.stdout, capture_output=True)
    return t.returncode == 0


def flat(s):
    return re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', '', s)).strip()


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--all', action='store_true',
                    help='compare the working tree to HEAD instead of the index')
    ap.add_argument('--mode', choices=('warn', 'block', 'off'),
                    help='override the configured mode for this run')
    ap.add_argument('--warn-only', action='store_true',
                    help='alias for --mode warn')
    ap.add_argument('--block', action='store_true',
                    help='alias for --mode block')
    ap.add_argument('--install', action='store_true')
    args = ap.parse_args()

    mode = resolve_mode(args)
    if mode == 'off' and not args.install:
        return 0

    tools_dir = os.path.dirname(os.path.abspath(__file__))
    root = os.path.dirname(tools_dir)
    os.chdir(root)

    top, rc = git('rev-parse', '--show-toplevel')
    if rc:
        print('i18n: not a git repository — skipping')
        return 0
    top = top.strip()
    prefix, _ = git('rev-parse', '--show-prefix')
    prefix = prefix.strip()

    if args.install:
        hook = os.path.join(top, '.git', 'hooks', 'pre-commit')
        if os.path.exists(hook):
            print('refusing to overwrite existing hook: %s' % hook)
            print('add this line to it instead:')
            print('  python3 "$(git rev-parse --show-toplevel)/tools/i18n-precommit.py" || exit 1')
            return 1
        open(hook, 'w').write(HOOK)
        os.chmod(hook, 0o755)
        print('installed %s' % hook)
        return 0

    if prefix:
        print('i18n: the deck is not at the repository root (prefix %r);' % prefix)
        print('      this check assumes it is. Skipping rather than guessing.')
        return 0

    page_paths = ['pages', 'index.html']
    lang_paths = ['languages']

    # ── which staged files matter ────────────────────────────────────────────
    if args.all:
        changed, _ = git('diff', '--name-only', 'HEAD')
        new_rev = None            # working tree
    else:
        changed, _ = git('diff', '--cached', '--name-only', '--diff-filter=ACMR')
        tree, rc = git('write-tree')
        if rc:
            print('i18n: could not read the index — skipping')
            return 0
        new_rev = tree.strip()

    changed = [c for c in changed.strip().split('\n') if c]
    pages_touched = [c for c in changed
                     if c.startswith('pages/') or c == 'index.html']
    langs_touched = [c for c in changed if c.startswith('languages/')]

    if not pages_touched and not langs_touched:
        print('i18n: no page or language changes staged — nothing to check')
        return 0

    fail = 0
    tmp = tempfile.mkdtemp(prefix='i18n-precommit-')
    try:
        # ── 2. syntax of staged language files ──────────────────────────────
        bad_syntax = []
        for f in langs_touched:
            if not f.endswith('.js'):
                continue
            src = (subprocess.run(['git', 'show', '%s:%s' % (new_rev or '', f)],
                                  capture_output=True).stdout
                   if new_rev else open(f, 'rb').read())
            tf = os.path.join(tmp, os.path.basename(f))
            open(tf, 'wb').write(src)
            r = subprocess.run(['node', '--check', tf], capture_output=True, text=True)
            if r.returncode:
                lines = r.stderr.strip().split('\n')
                bad_syntax.append((f, lines[1][:90] if len(lines) > 1 else lines[0][:90]))

        if bad_syntax:
            fail = 1
            print('\n\033[31m✗ language file does not parse\033[0m — this would break the deck')
            for f, msg in bad_syntax:
                print('    %s' % f)
                print('      %s' % msg)

        if not pages_touched:
            if not bad_syntax:
                print('i18n: only language files staged, all parse — ok')
            return verdict(fail, mode)

        # ── build old and new English catalogs ──────────────────────────────
        # Language files are read from the same tree, so the check reflects what
        # is actually being committed, not the working copy.
        old_dir = os.path.join(tmp, 'head')
        if not materialize('HEAD', old_dir, page_paths + lang_paths):
            print('i18n: could not read HEAD (first commit?) — skipping comparison')
            return fail
        old = extract_from(old_dir, tools_dir)

        if new_rev:
            new_dir = os.path.join(tmp, 'staged')
            if not materialize(new_rev, new_dir, page_paths + lang_paths):
                print('i18n: could not read the staged tree — skipping')
                return fail
        else:
            new_dir = root
        new = extract_from(new_dir, tools_dir)

        if old is None or new is None:
            print('i18n: extraction failed — skipping comparison')
            return fail

        # ── read the language side of the same tree ─────────────────────────
        # translated : (slug, key) -> [codes]        has non-empty Spanish
        # stored_en  : (slug, key, code) -> comment  the English it was made from
        chk = load_check_module()
        cwd = os.getcwd()
        translated, stored_en = {}, {}
        try:
            os.chdir(new_dir)
            langs = chk.discover()
            for code, files in langs.items():
                d, err = chk.load_files(files, code)
                if not err and d:
                    for section in ('pages', 'blocks'):
                        for slug, kv in d[section].items():
                            for k, v in kv.items():
                                if str(v).strip():
                                    translated.setdefault((slug, k), []).append(code)
                for f in files:
                    if os.path.basename(f) == '_global.js':
                        continue
                    src = open(f, encoding='utf-8').read()
                    sm = re.search(r"slug:\s*'([^']+)'", src)
                    file_slug = sm.group(1) if sm else None
                    cur = file_slug
                    for m in re.finditer(
                            r"^\s*'([\w.-]+)': \{|//\s*(.+)\n\s*(?://\s*TODO\s*)?"
                            r"['\"]([^'\"]+)['\"]\s*:", src, re.M):
                        if m.group(1):
                            if not file_slug:
                                cur = m.group(1)
                            continue
                        if cur:
                            stored_en[(cur, m.group(3), code)] = m.group(2).strip()
        finally:
            os.chdir(cwd)

        # ── 1. stale: English changed and the translation was not remade ─────
        # The English source is stored as a comment above every entry, so a
        # translation that was genuinely updated (via i18n-gen.py) carries the
        # new English and is not reported.
        stale, added, dropped = [], [], []
        for slug, keys in new.items():
            for k, en in keys.items():
                prev = old.get(slug, {}).get(k)
                if prev is None:
                    if (slug, k) not in translated:
                        added.append((slug, k))
                    continue
                if flat(prev) == flat(en):
                    continue
                codes = translated.get((slug, k))
                if not codes:
                    continue          # untranslated: falls back to English
                behind = []
                for code in codes:
                    cmt = (stored_en.get((slug, k, code)) or '').rstrip('…').strip()
                    if cmt and flat(en).startswith(cmt[:min(40, len(cmt))]):
                        continue      # comment matches the new English: remade
                    behind.append(code)
                if behind:
                    stale.append((slug, k, behind, flat(prev), flat(en)))

        for (slug, k), codes in translated.items():
            if k not in new.get(slug, {}):
                dropped.append((slug, k, codes))

        if stale:
            fail = 1
            print('\n\033[31m✗ %d translation(s) invalidated by this commit\033[0m'
                  % len(stale))
            print('  The English changed but the translation did not — the deck would')
            print('  show text that no longer matches.\n')
            for slug, k, codes, was, now in stale[:12]:
                print('    %s / %s   [%s]' % (slug, k, ','.join(codes)))
                print('        was: %s' % was[:88])
                print('        now: %s' % now[:88])
            if len(stale) > 12:
                print('    … and %d more' % (len(stale) - 12))
            print('\n  Fix by updating the translation in languages/<code>/%s.js,'
                  % stale[0][0])
            print('  then run `python3 tools/i18n-gen.py` to refresh the stored English.')

        if dropped:
            print('\n\033[33m! %d translated key(s) no longer exist on their page\033[0m'
                  % len(dropped))
            print('  Harmless, but dead weight. `python3 tools/i18n-gen.py` prunes them.')
            for slug, k, codes in dropped[:6]:
                print('    %s / %s   [%s]' % (slug, k, ','.join(codes)))
            if len(dropped) > 6:
                print('    … and %d more' % (len(dropped) - 6))

        if added:
            print('\n\033[33m! %d new translatable key(s)\033[0m — these fall back to '
                  'English, so nothing is broken' % len(added))
            by_page = {}
            for slug, k in added:
                by_page.setdefault(slug, 0)
                by_page[slug] += 1
            for slug in sorted(by_page, key=lambda s: -by_page[s])[:6]:
                print('    %3d  %s' % (by_page[slug], slug))
            print('  Run `python3 tools/i18n-gen.py` to add them as // TODO entries.')

        if not stale and not bad_syntax:
            print('\n\033[32m✓ no translation invalidated by this commit\033[0m'
                  '  (%d page file(s) checked)' % len(pages_touched))
    finally:
        shutil.rmtree(tmp, ignore_errors=True)

    return verdict(fail, mode)


if __name__ == '__main__':
    sys.exit(main())
