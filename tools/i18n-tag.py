#!/usr/bin/env python3
"""
i18n-tag.py — add data-i18n / data-i18n-html attributes to deck pages.

Why this exists: the deck has 414 distinct leaf classes holding text, and the 30
most common cover only 39% of them, so there is no small whitelist to tag
against. Keys are therefore generated from document structure rather than
hand-authored.

Usage:
    python3 tools/i18n-tag.py --dry-run            # report only, change nothing
    python3 tools/i18n-tag.py                      # tag all pages
    python3 tools/i18n-tag.py pages/storage.html   # tag specific pages
    python3 tools/i18n-tag.py --extract            # dump keys+English as JSON

Key format:
    <first-class>              when that class holds text exactly once on the page
    <first-class>.<n>          when repeated, numbered in document order
    <tag>.<n>                  for elements with no class

Attribute choice:
    data-i18n        element content is pure text
    data-i18n-html   content contains inline markup, so the whole block is one
                     unit (never split a sentence around <strong>/<code>)

Translation units: an element qualifies when it has its own direct text. Its
subtree is then skipped, so a parent and its child are never both tagged.
Elements holding direct text *and* a block-level child are skipped rather than
tagged, so a container can never swallow the whole page.

IMPORTANT: ordinal keys are sensitive to element order. If you reorder elements
on a page, re-run this tool and run tools/i18n-check.py to catch stale keys.
"""

import argparse
import glob
import json
import os
import re
import sys
from html.parser import HTMLParser

CODE_TOKEN_CLASSES = {
    'code-kw', 'code-fn', 'code-id', 'code-str',
    'code-num', 'code-punc', 'code-comment',
}
CODE_CONTAINER_CLASSES = {
    'code-block', 'code-modal-code', 'mlf-code-panel', 'mlf-code-block',
    'mp-query', 'ts-panel-code',
}
CODE_CONTAINER_IDS = {'ts-code'}
SKIP_SUBTREE_TAGS = {'script', 'style', 'pre', 'code', 'svg', 'head'}

# Chrome that bg.js tags centrally at runtime — leave alone so the two
# mechanisms cannot fight over the same element.
CENTRAL_CHROME_CLASSES = {'btn-back', 'nav-tag', 'arch-footer'}

EXCLUDE_FILES = {'_template.html'}

BLOCK_TAGS = {'div', 'p', 'ul', 'ol', 'li', 'table', 'tr', 'td', 'th',
              'section', 'header', 'footer', 'nav', 'article', 'aside',
              'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'form'}
VOID_TAGS = {'br', 'img', 'input', 'hr', 'meta', 'link', 'source', 'area',
             'base', 'col', 'embed', 'param', 'track', 'wbr'}
CANDIDATE_TAGS = {'div', 'span', 'p', 'li', 'td', 'th', 'a', 'strong', 'em',
                  'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'label', 'button',
                  'small', 'b', 'i'}

HAS_LETTERS = re.compile(r'[A-Za-z]{2}')


class Node:
    __slots__ = ('tag', 'attrs', 'children', 'texts', 'tag_end', 'parent', 'raw_start')

    def __init__(self, tag, attrs, tag_end, parent, raw_start):
        self.tag = tag
        self.attrs = attrs
        self.children = []
        self.texts = []          # direct text pieces
        self.tag_end = tag_end   # offset of '>' of the opening tag
        self.parent = parent
        self.raw_start = raw_start


class Builder(HTMLParser):
    """Builds a light DOM with byte offsets for the end of each opening tag."""

    def __init__(self, html):
        super().__init__(convert_charrefs=False)
        self.html = html
        self.lines = [0]
        for line in html.split('\n'):
            self.lines.append(self.lines[-1] + len(line) + 1)
        self.root = Node('#root', {}, 0, None, 0)
        self.stack = [self.root]
        self.feed(html)

    def off(self):
        line, col = self.getpos()
        return self.lines[line - 1] + col

    def _tag_end(self, start):
        """Offset just before the closing '>' of the tag starting at `start`."""
        i = self.html.find('>', start)
        if i == -1:
            return start
        return i - 1 if self.html[i - 1] == '/' else i

    def handle_starttag(self, tag, attrs):
        start = self.off()
        node = Node(tag.lower(), dict(attrs), self._tag_end(start),
                    self.stack[-1], start)
        self.stack[-1].children.append(node)
        if tag.lower() not in VOID_TAGS:
            self.stack.append(node)

    def handle_startendtag(self, tag, attrs):
        start = self.off()
        node = Node(tag.lower(), dict(attrs), self._tag_end(start),
                    self.stack[-1], start)
        self.stack[-1].children.append(node)

    def handle_endtag(self, tag):
        tag = tag.lower()
        for i in range(len(self.stack) - 1, 0, -1):
            if self.stack[i].tag == tag:
                del self.stack[i:]
                return

    def handle_data(self, data):
        if data.strip():
            self.stack[-1].texts.append(data)

    def handle_entityref(self, name):
        self.stack[-1].texts.append('&%s;' % name)

    def handle_charref(self, name):
        self.stack[-1].texts.append('&#%s;' % name)


def cls_of(node):
    return node.attrs.get('class', '').split()


def skipped(node):
    if node.tag in SKIP_SUBTREE_TAGS:
        return True
    c = set(cls_of(node))
    if c & (CODE_CONTAINER_CLASSES | CODE_TOKEN_CLASSES):
        return True
    if node.attrs.get('id') in CODE_CONTAINER_IDS:
        return True
    return False


def all_text(node):
    parts = list(node.texts)
    for ch in node.children:
        parts.append(all_text(ch))
    return ' '.join(p for p in parts if p)


def inner_html(html, node):
    """Reconstruct inner HTML from the source between the opening and closing tags."""
    start = html.find('>', node.tag_end) + 1
    # find matching close by scanning for the last child's end, else the close tag
    close = html.find('</%s' % node.tag, start)
    depth = 0
    pos = start
    while True:
        nxt_open = html.find('<%s' % node.tag, pos)
        nxt_close = html.find('</%s' % node.tag, pos)
        if nxt_close == -1:
            break
        if nxt_open != -1 and nxt_open < nxt_close:
            depth += 1
            pos = nxt_open + 1
        else:
            if depth == 0:
                close = nxt_close
                break
            depth -= 1
            pos = nxt_close + 1
    return html[start:close] if close > start else ''


def collect(html, node, out):
    """Top-down walk collecting translation units; a unit's subtree is skipped."""
    for ch in node.children:
        if skipped(ch):
            continue
        c = set(cls_of(ch))
        has_direct_text = any(t.strip() for t in ch.texts)
        has_block_child = any(k.tag in BLOCK_TAGS for k in ch.children)

        if (has_direct_text and not has_block_child
                and ch.tag in CANDIDATE_TAGS
                and 'data-i18n' not in ' '.join(ch.attrs.keys())
                and not (c & CENTRAL_CHROME_CLASSES)):
            text = re.sub(r'\s+', ' ', all_text(ch)).strip()
            if text and HAS_LETTERS.search(text):
                raw = inner_html(html, ch)
                has_markup = bool(re.search(r'<[a-zA-Z/]', raw))
                out.append({
                    'pos': ch.tag_end,
                    'basis': (cls_of(ch) or [ch.tag])[0],
                    'attr': 'data-i18n-html' if has_markup else 'data-i18n',
                    'english': re.sub(r'\s+', ' ', raw).strip() if has_markup else text,
                })
                continue   # absorb subtree
        collect(html, ch, out)
    return out


def assign_keys(found):
    counts = {}
    for f in found:
        counts[f['basis']] = counts.get(f['basis'], 0) + 1
    seen = {}
    for f in found:
        b = f['basis']
        if counts[b] == 1:
            f['key'] = b
        else:
            seen[b] = seen.get(b, 0) + 1
            f['key'] = '%s.%d' % (b, seen[b])
    return found


def process(path, write=True):
    html = open(path, encoding='utf-8').read()
    body = html.find('<body')
    tree = Builder(html)
    found = [f for f in assign_keys(collect(html, tree.root, []))
             if f['pos'] > body]
    # de-dupe keys after the body filter
    found = assign_keys([dict(f, basis=f['basis']) for f in found])
    if write and found:
        out = html
        # tag_end is the index of the opening tag's '>', so insert AT that
        # index to land inside the tag. Inserting at +1 would put the text
        # into the element's content instead.
        for f in sorted(found, key=lambda x: -x['pos']):
            out = out[:f['pos']] + ' %s="%s"' % (f['attr'], f['key']) + out[f['pos']:]
        open(path, 'w', encoding='utf-8').write(out)
    return found


def strip_nested(path):
    """
    Remove data-i18n from any element that has a tagged ancestor.

    A tagged parent replaces its whole innerHTML, so a tagged child would be
    clobbered anyway; worse, it invites a fragment translation of part of a
    sentence. The parent always wins.
    """
    from html.parser import HTMLParser

    html = open(path, encoding='utf-8').read()
    victims = []

    class Finder(HTMLParser):
        def __init__(self, h):
            super().__init__(convert_charrefs=True)
            self.stack = []
            self.feed(h)

        def handle_starttag(self, tag, attrs):
            d = dict(attrs)
            key = d.get('data-i18n') or d.get('data-i18n-html')
            if key and any(x for x in self.stack if x):
                victims.append(key)
            if tag not in VOID_TAGS:
                self.stack.append(key)

        def handle_endtag(self, tag):
            if self.stack:
                self.stack.pop()

    Finder(html)
    if not victims:
        return 0
    for key in victims:
        html = re.sub(r'\s+data-i18n(?:-html)?="%s"' % re.escape(key), '', html, count=1)
    open(path, 'w', encoding='utf-8').write(html)
    return len(victims)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('files', nargs='*')
    ap.add_argument('--dry-run', action='store_true')
    ap.add_argument('--extract', action='store_true')
    args = ap.parse_args()

    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    os.chdir(root)

    files = args.files or (sorted(glob.glob('pages/*.html')) + ['index.html'])
    files = [f for f in files if os.path.basename(f) not in EXCLUDE_FILES]

    catalog, total, words, nested = {}, 0, 0, 0
    for f in files:
        found = process(f, write=not (args.dry_run or args.extract))
        if not (args.dry_run or args.extract):
            nested += strip_nested(f)
        slug = os.path.basename(f).replace('.html', '')
        if found:
            catalog[slug] = {x['key']: x['english'] for x in found}
        total += len(found)
        w = sum(len(re.sub(r'<[^>]+>', ' ', x['english']).split()) for x in found)
        words += w
        if not args.extract:
            print('%-44s %4d keys  %5d words' % (slug, len(found), w))

    if args.extract:
        json.dump(catalog, sys.stdout, ensure_ascii=False, indent=1)
    else:
        print('\n%d files, %d keys, %d words' % (len(files), total, words))
        if nested:
            print('removed %d nested child tags (parent wins)' % nested)
        if args.dry_run:
            print('(dry run — no files changed)')


if __name__ == '__main__':
    main()
