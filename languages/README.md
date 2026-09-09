# Translations — how this works

The deck is English in the HTML. Translations are applied at runtime from files in
this folder. Drop in a language and it appears in the nav-bar globe picker — there
is no manifest to edit.

A language is **one folder per language, one file per page**:

```
languages/
  es/                    Spanish
    _global.js           language name + shared chrome — loaded on every page
    index.js             one file per page, named after the page slug
    sql-analytics.js
    …                    (79 pages)
  language_template.js   copy this to start a new language (skipped by the loader)
  GLOSSARY.md            agreed terminology — please follow it
  README.md              this file
```

Viewing a page downloads only `_global.js` plus that page's own file — about 3 KB
gzipped, regardless of how much of the deck has been translated. A single combined
file would be 83 KB gzipped and fetched on every page.

A flat `languages/<code>.js` holding every page still works, if you ever want a
language kept in one file. The loader accepts both.

---

## For reviewers

You will be editing the files in **`es/`** — one per page, so you can work through
the deck a page at a time and never touch anything you are not reviewing. They are
JavaScript files, so a few rules matter.

### What to change

Only the text **inside the quotes on the right of the colon**:

```js
// Query structured, semi-structured, geospatial, and time-series data together
'lead': 'Consulta datos estructurados, semiestructurados, geoespaciales y de series…',
   ▲                                    ▲
   │                                    └── change THIS
   └── never change the key
```

The **English original is in the comment directly above** every entry, so you never
need to open the page to see what a string means.

### What never to change

- **Keys** (the part before the colon). Changing one silently disables that translation.
- **Product names:** Snowflake, Cortex, Snowpark, Streamlit, Iceberg, Horizon, …
- **SQL keywords and identifiers:** `SELECT`, `QUALIFY`, `ASOF JOIN`, `DATE_SPINE`, `VARIANT`, …
- **Metrics, figures, version numbers.**
- **Anything inside `<...>`** — those are HTML tags. Translate the words around them,
  leave the tags exactly as they are.

### Entries marked `// TODO`

Not yet translated. They are commented out, so the page shows English. To translate
one, remove the `// TODO ` prefix and replace the English with Spanish:

```js
// before
// TODO 'card.title': 'Time Series Analytics',
// after
'card.title': 'Análisis de Series Temporales',
```

### HTML entities

A plain `data-i18n` value is applied with `textContent`, which does **not** decode HTML
entities — a value containing `&amp;` renders literally as `&amp;` on the slide. Those
values therefore hold real characters (`&`, `—`, `·`, `©`).

A `data-i18n-html` value goes through `innerHTML`, where entities are decoded normally,
so those are left exactly as the page authored them.

You do not have to think about this: `i18n-gen.py` decodes text-content values on the
way out, so an entity that slips into a translation gets corrected automatically.

### Run the checker before committing

```bash
python3 tools/i18n-check.py
```

This catches a broken quote or backtick **before** it can break the deck, and reports
drift, coverage, and orphaned keys. A non-zero exit means do not commit yet.

### Previewing your work

```bash
python3 -m http.server 8090
```

Then open <http://localhost:8090/index.html> and pick Español from the globe icon in
the nav bar. Note that opening the files directly from disk (`file://`) will **not**
work — language discovery needs a web server.

If your changes do not appear, hard-reload (⌘⇧R / Ctrl⇧R). The browser caches the
language files aggressively.

Only the page you are looking at loads its own file, so a change to
`es/sql-analytics.js` shows up on that page and nowhere else. Shared items — the Back
button, the availability tags, the footer — live in `es/_global.js`.

---

## For maintainers

### Tooling

| Command | What it does |
|---|---|
| `python3 tools/i18n-tag.py` | Adds `data-i18n` attributes to pages. Re-run after adding or reordering page content. |
| `python3 tools/i18n-tag.py --dry-run` | Reports what would be tagged, changes nothing. |
| `python3 tools/i18n-extract.py` | Dumps `{slug: {key: english}}` as JSON. |
| `python3 tools/i18n-gen.py` | Regenerates `es/_global.js` and `es/<slug>.js`. **Preserves existing Spanish**, including reviewer edits. |
| `python3 tools/i18n-gen.py --coverage` | Per-page translated/total counts. |
| `python3 tools/i18n-check.py` | Syntax, drift, coverage, orphans. |
| `python3 tools/i18n-todo.py --list` | What is still untranslated, per page. |
| `python3 tools/i18n-todo.py <slug>…` | Dumps the English still needing translation as JSON. |
| `python3 tools/i18n-validate-es.py` | Structural check of the Spanish: HTML tag parity, lost figures, do-not-translate terms, ¿/¡. |
| `python3 tools/i18n-validate-es.py --only <file>` | Same, for one overlay batch file. |
| `python3 tools/i18n-precommit.py` | **Commit check.** Reports staged English edits that invalidate an existing translation. Warns by default; blocks only if configured. |
| `python3 tools/i18n-precommit.py --all` | Same check against the working tree instead of the index. |
| `python3 tools/i18n-precommit.py --block` | Enforce for one run, whatever the config says. |
| `python3 tools/i18n-precommit.py --install` | Installs it as `.git/hooks/pre-commit`. |

### How a page becomes translatable

1. `data-i18n` (plain text) or `data-i18n-html` (contains inline markup) on its elements.
2. A matching entry under `page` in `languages/es/<slug>.js`.

Untagged pages stay English no matter what the language file contains. Code panels are
never tagged, so SQL can never be altered by a translation.

### JS-built prose

Some pages build explain-panel prose in JS and inject it as `innerHTML`, where
`data-i18n` cannot reach. Those pages call `window.TDD_I18N.block('explain.<key>')` and
register `window.TDD_I18N.onChange(...)` to re-render. Translations live under
`blocks` in that page's file. 12 pages are wired this way.

### Bulk translation workflow

Translations can be staged as JSON overlays before they become language files, which
is how the first pass was done — it lets the work be split into batches without merge
conflicts:

```
tools/es-translations/*.json      { "<slug>": { "<key>": "<spanish>" } }
```

`i18n-gen.py` reads every file in that directory (and a single
`tools/es-translations.json`, if present) and folds them into `languages/es/`.

**Overlays fill gaps only — they never overwrite a string already in
`languages/es/`.** That matters because reviewers edit those files directly, and an
overlay that won would silently revert their work on the next `i18n-gen.py` run. It
did exactly that until the precedence was fixed.

The overlay directory is optional and is normally absent. The first-pass batches were
removed once folded in, because keeping a second copy of every string invites edits to
the wrong file. Recreate it only to stage a new bulk pass.
`i18n-validate-es.py` checks them structurally — tag parity, preserved figures,
do-not-translate terms — which is what catches a lost `</strong>` before it can
swallow the rest of a card.

Structural validity is not translation quality. The validator cannot tell you the
Spanish is *good*; that is what the reviewer is for.

### The commit gate

`tools/i18n-precommit.py` runs from `.git/hooks/pre-commit`. It exists because of one
specific failure: **English text edited while a translation for it still exists.** The
deck then shows Spanish that no longer says what the English says, and nobody reviewing
the English diff would notice, because the Spanish lives in a different file.

It compares the *staged* tree against `HEAD`, so it judges exactly what you are about to
commit, not your working copy.

**The check is optional and warns by default** — it reports findings and the commit
proceeds. That is deliberate: this is a correctness risk, not a broken build, and a gate
that blocks by default gets bypassed reflexively with `--no-verify`, which trains people
to ignore it. Switch it to blocking once enough of the deck is translated that stale
Spanish would actually reach an audience.

| mode | behaviour |
|---|---|
| `warn` | report findings, commit proceeds (**default**) |
| `block` | refuse the commit when a translation was invalidated |
| `off` | skip the check entirely, print nothing |

Set it in `tools/i18n-precommit.conf`, override per commit with the environment:

```bash
TDD_I18N=block git commit -m "…"    # enforce once
TDD_I18N=off   git commit -m "…"    # skip once
```

Precedence is command-line flag > `TDD_I18N` > config file > `warn`.

**What it reports** (blocking only in `block` mode):
- an English string changed and a translation for that key exists that was not remade
- a staged language file does not parse (a stray backtick here breaks the whole deck)

**Always advisory**, because neither breaks anything:
- new translatable keys (they fall back to English)
- translated keys whose element no longer exists (dead weight; `i18n-gen.py` prunes them)

Staleness is judged by the English source comment stored above each entry, which
`i18n-gen.py` maintains. So the fix for a blocked commit is: update the translation, run
`python3 tools/i18n-gen.py`, and stage the result. Editing the Spanish by hand without
regenerating will still block — deliberately, since nothing then proves the new Spanish
matches the new English.

In `block` mode, bypass once with `git commit --no-verify`.

### ⚠️ Ordinal keys are order-sensitive

Keys like `hsp-feature-title.3` are numbered in document order. **If you reorder
elements on a page, re-run `i18n-tag.py` and then `i18n-check.py`** — otherwise a
translation can end up attached to the wrong element. The drift check exists precisely
to catch this; it compares the stored English comment against the live page.

### Adding a new language

Preferred: create `languages/<code>/`, copy `es/_global.js` to `<code>/_global.js`,
translate the name and chrome, then add `<code>/<slug>.js` files as you go. Pages with
no file stay English — you do not need all 79 up front.

For a quick one-file language, copy `language_template.js` to `languages/<code>.js`
instead. The loader accepts either shape.

Everything you omit stays English.

### Deployment

The `languages/` folder and each language subfolder are discovered through nginx
`autoindex`, configured in `nginx-analytics.conf`, which also enables gzip (the language
files compress about 4x). **That config must be deployed** for translations to work on
the hosted app.
