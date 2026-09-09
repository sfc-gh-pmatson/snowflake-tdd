# Interactive TDD — Backlog

---

## Content Accuracy Audit — Errant/Hallucinated Code

Full page-by-page review of code panels for factual accuracy against real Snowflake syntax/APIs — not just visual/style consistency.

**Known issue:** `pages/apache-spark.html` → "Snowpark Connect (SCOS)" panel (`PANELS['snowpark-connect']`, ~line 348) contains fabricated SQL/API that doesn't match real Snowpark Connect:
- `CREATE OR REPLACE SNOWPARK_CONNECT_INTEGRATION ... ENABLED = TRUE ALLOWED_NAMESPACES = (...)` — not a real DDL statement
- `spark.snowflake.integration` / `spark.snowflake.warehouse` Spark config keys — invented, not part of the actual Snowpark Connect setup
- Verify against current Snowpark Connect (SCOS) docs and rewrite with accurate setup steps (or pull from the `spark-migration` skill's SCOS reference material)

**Scope for the audit:** check all code panels across all 78 pages for similar fabrications (invented SQL syntax, made-up config keys/API names, plausible-but-wrong parameter names) — prioritize newer/less-reviewed pages first.

---

## Content Freshness — Update Logic & Page Staleness Tracking

Some pages cover fast-moving Snowflake capabilities (new model releases, PrPr → GA transitions, feature GA dates) and go stale without anyone noticing. Need a system for identifying which pages need regular review and prompting updates before content becomes outdated or wrong.

**Example:** The AI/Cortex pages reference specific models and their availability status (PrPr/PuPr/GA). As new models ship and existing ones move through availability stages, the page content silently drifts out of date with no signal that a review is due.

**Open questions to resolve before scoping:**
- Which pages are "volatile" (need regular review) vs "stable" (rarely change)? Likely candidates: any page naming specific models, citing availability stage (PrPr/PuPr/GA), or citing dated pricing/limits.
- Review cadence: fixed schedule (e.g. monthly sweep) vs. event-triggered (e.g. tied to Snowflake release notes / PLT data)?
- Detection mechanism: manual tagging (`data-review-cadence` or similar metadata per page) vs. automated staleness signal (e.g. cross-reference `product_launch_timelines` skill data against claims made on each page)?
- Where do "needs update" flags surface — a dashboard, a checklist in this backlog, inline page annotations for the author?

**Possible approach:**
1. Tag volatile pages/sections with a lightweight metadata marker (e.g. `<!-- review: quarterly, topic: model-availability -->`) noting what to check and how often.
2. Build a simple script/checklist that surfaces pages due for review based on last-reviewed date.
3. For model/availability-specific claims, consider cross-checking against the `product_launch_timelines` skill (internal PLT data) to flag pages citing a stage that has since changed.
4. Start with the AI/Cortex pages as the pilot since they're the clearest volatile case, then expand the tagging pass to other fast-moving areas (pricing, GA feature lists).

---

## Multi-Language Support

Explore internationalization for the deck — audience may include non-English speakers.

### Status: IN PROGRESS — infrastructure complete, slides 100% translated (first pass), NOT reviewed

**⚠️ Native-speaker review is now the remaining work.** All 79 pages are tagged and
**all 2,201 slide keys (~21,000 words) are translated** — a first-pass AI translation,
structurally validated but **not reviewed by a native speaker**. Talk-track notes are
still English by earlier decision (2 of 79 pages translated).

**Layout: one folder per language, one file per page.** `languages/es/_global.js` holds
the language name and shared chrome and loads on every page; `languages/es/<slug>.js`
loads only on that page. A page view transfers about **3 KB gzipped** and that stays
flat as coverage grows — the single-file design it replaced was **83 KB gzipped on every
page** at only 3% translated, and would have reached roughly 130 KB fully translated.
gzip is enabled in `nginx-analytics.conf`. A flat `languages/<code>.js` is still
supported for a language kept in one file.

**Infrastructure shipped and verified:**
- **All 79 pages tagged** — 2,374 `data-i18n` / `data-i18n-html` attributes. Verified:
  visible text byte-identical before/after, code token spans untouched, zero
  parent/child nesting, attributes confirmed real by an HTML parser.
- **12 pages wired for JS-built prose** — 60 `explain` blocks keyed semantically from
  their own `<h4>`, routed through `window.TDD_I18N.block()` with an `onChange`
  re-render. All inline scripts syntax-checked.
- **Tooling** (`tools/`): `i18n-tag.py` (tagging + nested cleanup), `i18n-extract.py`
  (English catalog + DNT classification, entity decoding for text keys), `i18n-gen.py`
  (regenerates the per-page files, **preserving reviewer edits**), `i18n-check.py`
  (syntax / drift / coverage / orphans), `i18n-todo.py` (what is still untranslated, and
  the English to translate), `i18n-validate-es.py` (tag parity, lost figures,
  do-not-translate terms, ¿/¡), `i18n-precommit.py` (optional commit check).
- **`languages/GLOSSARY.md`** — agreed terminology fixed before bulk translation, with a
  documented do-not-translate list and the `warehouse` vs `almacén de datos` distinction.
- **`languages/README.md`** — reviewer instructions and maintainer runbook.
- **Optional commit check** (`tools/i18n-precommit.py`, wired into the existing
  `.git/hooks/pre-commit` ahead of the link check) — compares the **staged** tree to
  `HEAD` and reports a commit that (a) edits English for which a translation exists
  without remaking that translation, or (b) stages a language file that does not parse.
  **Warns by default and lets the commit through**; `mode = block|warn|off` in
  `tools/i18n-precommit.conf`, overridable per commit with `TDD_I18N=block|off`.
  Warn is the default on purpose — a gate that blocks by default gets bypassed
  reflexively with `--no-verify`. Switch to `block` once coverage is high enough that
  stale Spanish would reach an audience.
  New keys and dropped keys are advisory only, since both degrade safely to English.
  Staleness is judged by the English source comment `i18n-gen.py` stores above each
  entry, so hand-editing Spanish without regenerating still blocks by design.
  Verified against a fixture repo across six cases: stale blocks, regenerated passes,
  hand-edited-only blocks, untranslated-page edits pass, broken language file blocks,
  new keys pass with a warning.
- **The language files are reviewer-editable by design** — one file per page, so a
  reviewer can work a page at a time; single-quoted strings for plain text,
  backticks only where HTML requires them, English source as a comment above every
  entry, and untranslated keys emitted as `// TODO` so they fall back safely.

**Translated:** all 79 pages, 2,201/2,201 slide keys (100%), plus global chrome. Done as
8 parallel batches staged through `tools/es-translations/*.json`. Migration to the
per-page layout was verified lossless. Fully translated pages transfer ~3.3 KB gzipped
— essentially unchanged from 2.5 KB at 3% coverage, confirming the per-page design.

**Cross-batch consistency was a real risk and needed a normalization pass** — 23 strings
where independent translators diverged (`Skills`, `listing`, Scale Up/Across/Out,
adjectival `Enterprise`/`Standard`). All recorded in `languages/GLOSSARY.md`.

**Tooling added:** `i18n-todo.py` (what is left, and the English to translate) and
`i18n-validate-es.py` (HTML tag parity, lost figures, do-not-translate terms, ¿/¡).
Final state: 0 errors, 71 warnings — 59 legitimately identical to English (product
names), 5 `!` inside SQL such as `!FORECAST()`, 7 deliberate adjectival
`Enterprise`/`Standard`.


**Shipped:**
- **Drop-in `languages/` folder**, mirroring `notes/`: `_global.js` self-registers via `window.TDD_LANG_REGISTER()` and each page file via `window.TDD_LANG_PAGE()`; languages are discovered from the nginx `autoindex` listing, including subdirectories — no manifest to maintain. A missing per-page file is a normal 404 and simply leaves that page in English. `language_template.js` is a copy-and-edit starting point and is skipped by the loader.
- **i18n loader in `bg.js`** — translates only elements carrying `data-i18n` (textContent) or `data-i18n-html` (innerHTML, for blocks with inline markup like `<br>`). The English original is stashed in `data-i18n-en-text` / `data-i18n-en-html` on first translation, so switching back is an in-place restore with no page reload.
- **Nav-bar language picker** (`#lang-picker`), with a fixed top-right fallback for `index.html`, which has no `.nav-bar`. Hidden entirely when only one language is registered. Choice persists in `localStorage['tdd-lang']` and syncs across windows via `storage` events.
- **Global chrome tagged centrally** by `bg.js` (`tagGlobalChrome()`), so Back / GA / Preview tags / footer translate on all 79 pages without editing any of them. Matching is limited to a fixed dictionary of known chrome strings inside narrow selectors (`.btn-back`, `.nav-tag`, `.arch-footer`).
- **`languages/es/`** — complete first-pass Spanish: global chrome plus all 79 pages (2,201/2,201 slide keys), including the six `sql-analytics-timeseries` explain panels. 2 pages have translated talk-track notes.
- **`blocks` channel for JS-built content** — pages that construct HTML in JS and inject it as `innerHTML` have no element for `data-i18n` to target. Those pages call `window.TDD_I18N.block('<key>')` for a translated block (resolved against `blocks[<page-slug>]`) and register `window.TDD_I18N.onChange(fn)` to re-render when the language changes. Used by the `ITEMS[].explain` panels on `sql-analytics-timeseries`; each item carries a stable `key`, and the English written in the page remains the fallback.
- **Notes precedence:** the language layer swaps `PAGE_NOTES_DEFAULT`, and `applyNotes()` already resolves `author notes || PAGE_NOTES_DEFAULT`, so **a selected notes author always wins over a translation** with no special-casing. Verified across all four author/language combinations.

**Verified:** code nodes byte-identical across languages (24–35 per page spot-checked, plus the original 108); SQL construct labels (`DATE_SPINE`, `ASOF JOIN`, `RANGE BETWEEN`) untranslated; trademark parity exact across all 2,201 keys (no `™`/`®` dropped or invented); untagged pages degrade to full English with no blanks or console errors; language persists across navigation; clean revert with zero residual Spanish.

**Fixed: HTML entities were rendering literally.** The extractor stored raw source
text for `data-i18n` keys, which are applied with `textContent` and so do not decode
entities — the Spanish nav read `Aplicaciones &amp; colaboración` on screen. 306 keys
were affected. The extractor now decodes entities for text-content keys (leaving
`data-i18n-html` untouched, since `innerHTML` decodes them), `i18n-gen.py` re-decodes
on every run so a stray entity in a translation cannot ship, and 283 already-translated
values were corrected. Verified clean across 79 pages × 3 language states with a
positive-control detector.

**Also added `charset utf-8` to `nginx-analytics.conf`.** The accented Spanish in the
language files previously rendered correctly only because every page carries a charset
meta and a classic `<script src>` inherits the document encoding. It is now declared on
the response.

**Fixed: overlay files silently reverted reviewer edits.** `i18n-gen.py` applied
`tools/es-translations/*.json` with a plain assignment, so it overwrote whatever was
already in `languages/es/` — the exact files `languages/README.md` tells reviewers to
edit. Reproduced by hand-editing a value and watching the next run revert it. Overlays
now fill gaps only (`setdefault`), and the eight now-redundant batch files were removed
after verifying they held **zero** strings not already in `languages/es/`. `tools/`
is now seven Python tools plus `i18n-precommit.conf`, with no data files.

**Deploy gotcha, now fixed in both scripts: `:latest` does not redeploy.** Pushing a
new `:latest` and running `ALTER SERVICE FROM SPECIFICATION` — or SUSPEND + RESUME —
restarts the container on the node's **cached** copy of that tag. `SHOW SERVICE
CONTAINERS` showed `image_digest` unchanged from the previous day's build across two
apparently successful deploys, so the deck kept serving old code while every status
check said READY. Both `deploy-demo.sh` and `deploy-snowhouse.sh` now build and push a
git-SHA tag alongside `:latest`, pin the spec to that tag (a digest the node has never
seen, which forces a real pull), and then print the running `image_digest` so a no-op
deploy cannot masquerade as a successful one. Verify with `SHOW SERVICE CONTAINERS`, not
`SYSTEM$GET_SERVICE_STATUS` — the latter reports READY either way and does not expose
the digest.

**⚠️ The Spanish copy is a first-pass AI translation and has NOT been reviewed by a native speaker.** It proves the mechanism; it should not be shown to a Spanish-speaking customer until someone fluent reviews it.

**Known limitations / still open:**
- **Native-speaker review of ~21,000 words is the outstanding effort.** Terminology
  decisions and a punch list of strings needing a human call are in
  `languages/GLOSSARY.md`.
- **Talk-track notes remain English** (14,859 words, deferred by decision). Only
  `sql-analytics` and `index` have translated notes.
- **Layout overflow verified clean** at 972×941 across all 79 pages: no element
  overflowed in Spanish that did not already overflow in English, and no page gained a
  horizontal scrollbar. Two gaps remain — only one viewport was tested, and elements
  with `overflow: hidden` or `text-overflow: ellipsis` are skipped by the check, so
  silently clipped text would not be caught.
- **Ordinal keys are order-sensitive.** `hsp-feature-title.3` is positional, so
  reordering elements on a page can attach a translation to the wrong element. Re-run
  `i18n-tag.py` then `i18n-check.py` after any reordering — the drift check exists to
  catch exactly this.
- **Two pre-existing inline-script syntax oddities** in `cortex-agents.html` and
  `snowpark.html` fail naive extraction. Confirmed present before this work and not
  caused by it; the pages render fine.
- Per-author note translations (an author carrying both English and Spanish talk tracks).

- **Brief flash of English** on translated pages: language files are discovered by an async `fetch` of the directory listing, so translation cannot be applied before first paint. Hiding content until the swap would trade this for a blank flash, which is worse for a live presentation.
- **⚠️ NOT DEPLOYED — `nginx-analytics.conf` must ship for any of this to work on the hosted app.** It now carries three things the deck depends on: `autoindex` on `/languages/` (without it no language files are discovered and the app stays English), `gzip` (the language files compress ~4x), and `charset utf-8` (so the accented Spanish does not rely on each page's charset meta). Both the Snowhouse and demo-account services are still running pre-i18n images. Directory listing does not exist over `file://`, so opening pages from disk is also English-only — a local `python3 -m http.server` behaves like production.
- **`.btn-back` variants stay English** — 66 pages use "← Back" (translated), but 13 use page-specific labels ("← Compute", "← Horizon Catalog", "← Cortex Sense") which are not in the chrome dictionary.
- Additional languages beyond Spanish.
- Per-author note translations (a notes author carrying both English and Spanish talk tracks) — deferred; author notes currently show in whatever language they were written in.

### Original open questions (now largely answered)
- Which languages? (driven by target audience/customers)
- Scope: full page translation, or just UI chrome (nav, buttons, labels)?
- Approach: static pre-translated page variants vs. runtime translation toggle
- Talk-track notes (`window.PAGE_NOTES`) and code panel explanations also need translation, not just visible slide text

### Proposed approach: runtime i18n with locale files

English HTML remains the single source of truth. Translations are applied on top of the
DOM at runtime — the HTML files are never duplicated or modified per language.

**1. Locale files**

```
locales/
  en.json
  es.json
  de.json
```

Each file maps a key to a translated string:

```json
{
  "cortex-agents.title": "Agentes Cortex",
  "cortex-agents.subtitle": "IA autónoma que razona sobre sus datos..."
}
```

**2. Tag translatable elements in the HTML**

```html
<div class="s6-header" data-i18n="cortex-agents.title">Cortex Agents</div>
```

Key convention `page.element` keeps the JSON organized by page and avoids collisions
where the same English phrase needs different translations on different pages.

**3. Runtime swap in `bg.js`**

```js
function setLocale(lang) {
  if (lang === 'en') { location.reload(); return; }   // English lives in the HTML
  fetch('../locales/' + lang + '.json')
    .then(function(r) { return r.json(); })
    .then(function(strings) {
      document.querySelectorAll('[data-i18n]').forEach(function(el) {
        var key = el.dataset.i18n;
        if (strings[key]) el.textContent = strings[key];
      });
      localStorage.setItem('tdd-locale', lang);
    });
}
```

Language picker sits in the nav-bar (globe icon → dropdown). Selection persists via
`localStorage` under `tdd-locale` and re-applies on every page load, so the choice
survives navigation between modules.

**4. Speaker notes need a parallel mechanism**

`window.PAGE_NOTES` is a JS object, not DOM content, so `data-i18n` does not reach it.
Options:
- Namespace notes by locale in the same page file: `window.PAGE_NOTES_ES = {...}`
- Or move notes into the locale JSON under a reserved prefix (`notes.*`) and have the
  notes panel read from the active locale bundle rather than the global

The second keeps all translated content in one place per language and is preferable if
notes are translated at all. Decide based on whether translated talk-tracks are in scope
— an SE presenting in Spanish may still want English notes for themselves.

**What does NOT get tagged**
- Snowflake product names (Cortex Agents, Iceberg, Snowpark) — these stay in English
- Code examples and SQL snippets
- Metrics and figures ($16M, 70%, 5X)
- Global nav/help/feedback UI — handled centrally in `bg.js`, translate there once

Realistically ~40–60% of text nodes on a given page need a tag.

### Tradeoffs and risks

| Concern | Detail |
|---|---|
| Tagging effort | 78 pages need `data-i18n` attributes added. A Python pass can propose candidates but needs human review to separate prose from product names and figures. |
| Translation quality | Technical positioning copy translates poorly by machine. AI-generated first pass (e.g. `AI_TRANSLATE`) is viable, but needs native-speaker review before it is customer-credible. |
| Layout overflow | German runs ~30% longer than English. Tightly-fitted cards, pills, and fixed-width labels will break. Expect per-locale CSS adjustments or looser base layouts. |
| Ongoing maintenance | Every new module needs locale entries or it silently falls back to English. Acceptable degradation, but coverage drifts without discipline. |

### Suggested sequencing

Do not tag all 78 pages up front. Instead:

1. Build the framework end-to-end (locale loader, nav picker, `localStorage` persistence)
2. Tag **one or two representative pages** as proof of concept — include a dense one to
   surface layout overflow early
3. Validate with an SE who presents in that language — is machine translation good
   enough, or does every page need review?
4. Only then decide whether the full tagging pass is justified

The code is the small part. The content curation and review loop is the real investment,
so validate demand before committing to it.

---

## New Page: Blessed Architectures

A gallery page (`pages/architectures.html`) displaying Snowflake's official "blessed architecture" reference diagrams as images.

**Concept:**
- Grid of architecture cards, each showing a named pattern (e.g. "Data Lakehouse", "Real-Time Ingest", "AI/ML Pipeline", "Secure Data Sharing")
- Clicking a card opens the image in a full-screen lightbox overlay for presentation-quality viewing
- Images sourced from official Snowflake architecture assets (ask SE/Field CTO team for the canonical set)

**Content to gather before building:**
- Official blessed architecture image files (PNG/SVG) from Field CTO / SE Enablement
- Canonical names and category groupings for each architecture
- Any source Google Slides or Lucidcharts to pull from

**Implementation notes:**
- Use `content-wrap` grid layout, 2–3 columns
- Lightbox: full-screen overlay with close button + keyboard Escape support (same pattern as cw-overlay)
- Nav category: "Platform" (or a new "Architecture" section if the set is large enough)
- Add to `coming-soon.html` links in `index.html` once page is built
- Register in `bg.js` NAV_SECTIONS under appropriate section

---

## New Subpage: 10i Business Logic (Semantic Views Context)

Under the AI / Cortex AI area, build a dedicated "Business Logic" subpage covering Semantic Views as the business-logic layer over raw tables (metrics, dimensions, relationships, verified queries).

**Context:** `cortex-ai.html` has a "Business Logic" card that currently links out to `cortex-analyst.html`, but that page is about Cortex Analyst generally, not a focused Semantic-Views-as-business-logic treatment. Decide whether to build a standalone sub-page or expand the existing Cortex Analyst page with a dedicated section, then wire the `cortex-ai.html` card accordingly.

---

## TEMP Icons — Awaiting Dedicated Assets

Also placeholder icons (render *something*, but the wrong thing) on sub-pages for: Native Apps, Zero-ETL Data Sharing, Snowflake Marketplace, Data Clean Rooms — needs a pass to identify exact classes and source correct assets.

| Page | Context | Current placeholder | Needed |
|---|---|---|---|
| `interactive-tables.html` | Interactive Table (def card + flow target) | `sf-icon-interactive-table` (reuses Dynamic Tables SVG) | Official Interactive Tables icon |
| `interactive-tables.html` | Interactive Warehouse (def card + flow target) | `sf-icon-warehouse` (generic warehouse) | Official Interactive Warehouse icon |
| `cortex-agents.html` | Flow node — Question | Emoji `&#x1F4AC;` (💬) | Proper Snowflake-style icon for "user question / input" |
| `cortex-agents.html` | Flow node — Reason | Emoji `&#x1F9E0;` (🧠) | Proper Snowflake-style icon for "reasoning / thinking" |
| `cortex-agents.html` | Flow node — Tools | Emoji `&#x1F527;` (🔧) | Proper Snowflake-style icon for "tool execution" |
| `cortex-agents.html` | Flow node — Answer | Emoji `&#x2705;` (✅) | Proper Snowflake-style icon for "output / answer" |
| `cortex-analyst.html` | Pipeline node — Business Question | Emoji `&#x1F4AC;` (💬) | Proper Snowflake-style icon for "user question / input" |
| `cortex-analyst.html` | Pipeline node — Result + Charts | Emoji `&#x2705;` (✅) | Proper Snowflake-style icon for "output / answer" |
| `data-engineering.html` | dbt in Snowflake card | `sf-icon-data-mesh` (placeholder) | Official dbt / dbt-in-Snowflake icon |
| `data-engineering.html` | Snowpark card | `sf-icon-python` (Python logo placeholder) | Official Snowflake Snowpark icon |
| `data-engineering.html` | Openflow card | `sf-icon-connected` (placeholder) | Official Snowflake Openflow icon |

**Note:** Third-party logos require brand approval before use in customer-facing materials.

---

## Partner Logos — Missing Assets

Cards marked with a dashed border on `partners.html` are logo-less. Source the official SVG/PNG logo for each and add to `other-icons/`, then wire up a new `img-ext-*` class in `shared.css` and update the card markup.

| Partner | Lane | Notes |
|---|---|---|
| DataRobot | ML / Data Science | Not on SimpleIcons; try datarobot.com brand assets |
| SAS | ML / Data Science | SAS Institute — try sas.com/en_us/content/dam/SAS/support/en/sas-community-questions/brand-assets |
| Immuta | Security &amp; Gov. | Not on SimpleIcons; try immuta.com press kit |
| BigID | Security &amp; Gov. | Not on SimpleIcons; try bigid.com press resources |
| OneTrust | Security &amp; Gov. | Not on SimpleIcons; try onetrust.com brand center |
| Striim | Streaming | Not on SimpleIcons; try striim.com press kit |

---

## Light Mode

Add a light theme toggle alongside (or replacing, for certain contexts) the current dark-only design.

**Current state:** `shared.css` hardcodes `color-scheme: dark` in `:root` (line 37) and every color token (`--sf-navy`, `--sf-ink`, `--sf-card`, `--sf-card2`, `--sf-border`, `--code-bg`, etc.) is a fixed dark value. There is no light variant defined anywhere — all 78 pages inherit these tokens with zero overrides.

**Proposed approach: CSS custom-property theme swap**

1. **Split tokens into a `[data-theme]` scheme** in `shared.css`:
   - Keep `:root` as the dark (default) values.
   - Add `[data-theme="light"] { ... }` overrides for the surface/ink tokens (`--sf-navy`, `--sf-ink`, `--sf-card`, `--sf-card2`, `--sf-border`, `--sf-blue-light`, `--code-bg`, `--code-downlight`, etc.) plus `color-scheme: light`.
   - Brand accent tokens (`--sf-blue`, `--ai-c`, partner colors like `--aws-c`/`--databricks-c`) likely stay identical across themes — only surface/background/text tokens need a light set.
2. **Toggle mechanism:** a sun/moon icon in the nav bar (`bg.js`, injected centrally like the feedback button) that sets `document.documentElement.dataset.theme` and persists the choice in `localStorage` (e.g. `tdd-theme`), applied on load before paint to avoid a flash of the wrong theme.
3. **Per-page audit needed:** any page-local `<style>` block that hardcodes a dark color instead of referencing a shared token (e.g. inline `#0c1e3a` instead of `var(--sf-card)`) will not respond to the toggle and needs to be fixed to use tokens.

**Open questions to resolve before scoping:**
- Is this a global toggle (all pages) or should some contexts (e.g. presenter mode / projector use) stay dark-only?
- Do partner/technology brand colors (AWS orange, Databricks red, etc.) need contrast adjustments on a light background, or do they already pass contrast?
- Code panel syntax colors (`--code-*` tokens) were tuned for a dark `--code-bg`; they likely need a distinct light-mode code palette rather than reusing the same hex values on a white background.
- Icon set: `sf-icons/` SVGs — confirm they render correctly on light backgrounds (some may assume dark canvas).

**Suggested sequencing:**
1. Audit `shared.css` for any hardcoded dark colors used outside the token system.
2. Define the light token set and `[data-theme="light"]` block.
3. Build the toggle + `localStorage` persistence in `bg.js` (mirrors the existing feedback-button injection pattern).
4. Validate on 2–3 representative pages (a dense data page, a code-heavy page, a diagram-heavy page) before rolling out account-wide.
5. Fix any per-page hardcoded colors surfaced during validation.

---

## Zoom Support

Let presenters and viewers scale the deck up — for large rooms, projectors, screen shares, and accessibility.

**Current state:** Zoom is not actively blocked — all 81 pages use `content="width=device-width, initial-scale=1"` with no `user-scalable=no` or `maximum-scale`, so browser zoom (⌘+/Ctrl+ and pinch) already works. The gaps are that there is no in-app control, and several patterns fight against scaling:

- **Root font-size is viewport-driven and capped:** `shared.css:59` sets `html { font-size: clamp(13px, 1.3vw, 16px); }`. Every `rem` in the deck derives from this, and it plateaus at **16px** — so on a 4K projector or large TV the deck stops getting bigger no matter the display size. This also defeats browser *text-only* zoom (Firefox's "Zoom text only", OS font-size preferences), which cannot override a `vw`-based root size.
- **Content column is capped:** `--content-width: min(1000px, 96vw)` (`shared.css:48`) means extra screen real estate goes to margins rather than content.
- **Fixed-position chrome does not participate in layout:** the nav bar (`shared.css:218`), slide-up code panel (`:416`), code modal overlay (`:488`), and the `bg.js`-injected feedback button (`:588`), hint popup (`:615`), and notes panel (`:9`, `:365`) are all `position: fixed`. At high zoom on a small viewport these can overlap each other or clip content, and the notes panel's fixed width will crowd out the page.
- **Good news for diagrams:** all 296 assets in `sf-icons/` are SVG, so any zoom/pan feature stays crisp at any scale — no raster re-authoring needed.

**Note — "zoom" here is ambiguous and should be pinned down before scoping.** Three distinct features could be meant, and they have very different costs:

1. **Presentation scale control** (likely intent): a global zoom in/out control so the whole deck can be scaled for the room. Cheapest and highest value.
2. **Diagram zoom/pan**: click a diagram to zoom and pan within it, for walking through architecture visuals in detail. Medium cost, per-diagram interaction work.
3. **Accessibility zoom robustness**: guarantee the deck stays usable at 200% browser zoom (a WCAG 1.4.4 expectation) and honors user font-size preferences. Mostly an audit-and-fix pass.

**Proposed approach for (1) — presentation scale control**

1. **Decouple root font-size from the viewport.** Replace the `clamp(13px, 1.3vw, 16px)` root size with a scale variable, e.g. `html { font-size: calc(var(--tdd-scale, 1) * 16px); }`, so a single token drives every `rem` in the deck. Keep a viewport-derived *default* if responsive behavior on small screens is still wanted, but stop capping it at 16px.
2. **Add the control in `bg.js`**, injected centrally like the feedback button and notes picker: zoom in/out/reset, persisted in `localStorage` (e.g. `tdd-zoom`), applied before paint to avoid a flash at the wrong scale. Bind `+` / `-` / `0` keys, consistent with the existing single-key shortcuts (`N`, `S`, `P`).
3. **Raise or scale `--content-width`** alongside the zoom level so scaling up actually reveals more content instead of just enlarging a fixed-width column.
4. **Audit the fixed-position chrome** at 150% / 200% for overlap and clipping — particularly the notes panel alongside the nav bar, which is the most likely collision.
5. **Validate on representative pages** (a dense data page, a code-heavy page, a diagram-heavy page) before rolling out.

**Open questions to resolve before scoping:**
- Which of the three interpretations above is actually wanted? (Or more than one.)
- Should zoom be a per-device preference (`localStorage`, like the theme and notes-author choices) or reset each session?
- Should the Speaker View window scale independently of the main window, or follow it? It has its own fixed-size layout and its own `localStorage` channel already.
- Does the zoom level need to survive page navigation? Each page is a separate document, so this requires the same before-paint application pattern as the notes-author selection.
- Is browser-native zoom (⌘+) sufficient for the actual presenting workflow, making an in-app control unnecessary? Worth testing in a real room before building anything.

---

## Usage Analytics — Visuals & Tracking Improvements

Nginx now logs the Snowflake user (`Sf-Context-Current-User` header) alongside each request, parsed into the `TDD_PAGE_VIEWS` view (Snowhouse: `TEMP.PMATSON.TDD_PAGE_VIEWS`; demo account: `DEMO.PUBLIC.TDD_PAGE_VIEWS`), and surfaced in a local Streamlit dashboard (`analytics-dashboard/`) showing distinct users, page views, view days, and avg daily users.

**Known gaps / follow-ups:**
- **Tracking accuracy:** asset-extension filter is a denylist (`.css`, `.js`, `.svg`, `.png`, `.ico`, `.woff`, `.gif`, `.mp4`, `.jpg`, `.jpeg`) — new asset types added to the site could slip through as false "page views" until added to the filter. Consider switching to an allowlist keyed on `.html` paths instead.
- **Session definition:** 30-minute gap heuristic for `session_number` is a reasonable default but untested against real multi-day usage patterns — revisit once there's more traffic history.
- **Event table retention:** `SPCS_GET_LOGS()` only sees data within the account's event table retention window (untested — no grant to inspect it directly). Longer-term trend tracking needs a scheduled job to materialize daily aggregates into a durable table before rows age out.
- **Visuals:** current dashboard is metric cards + a bar chart + two tables — no time-range filter, no week-over-week comparison, no per-page trend view. Consider adopting the metric-card popover-filter pattern from the `dashboard-metrics-snowflake` Streamlit scaffold (time range selector, chart/table toggle) for a more polished view.
- **Cross-environment comparison:** dashboard can show Snowhouse or Demo Account individually via a sidebar toggle, but not both side-by-side — could add a combined view once both environments have meaningful traffic.
- **Deploy decision:** dashboard currently runs local-only (`analytics-dashboard/snowflake.yml` manifest exists only so CoCo Desktop's local-launch panel finds it — no `STREAMLIT` object deployed). Decide whether this should become a real deployed Streamlit app for shared visibility, or stay a personal local tool.

---

## Code Display Standardization Audit

Review all pages and standardize code display to the **overlay modal pattern** (★ DEFAULT: code left, explain right, full-screen backdrop). As of the ml-functions.html conversion, five distinct code display patterns exist:

| Pattern | Pages | Action |
|---|---|---|
| ★ Overlay modal (default) | `snowflake-cowork.html`, `external-engines.html`, `delta-direct.html`, `external-tables.html`, `internal-marketplace.html`, `org-listings.html` | Keep as-is |
| Inline split panel | `native-apps.html`, `data-sharing.html`, `marketplace.html`, `data-clean-rooms.html`, `gpu.html`, `ml-functions.html` + others | Evaluate — convert to overlay if UX warrants |
| Per-page dedicated overlays | `cortex-ai-functions.html`, `cortex-ai-gateway.html`, `ml-overview.html`, `snowpark.html` | Convert to overlay modal |
| Legacy code-modal (bg.js hidden div) | ~19 pages | Convert to overlay modal or inline split panel |

**Priority:** Per-page dedicated overlays first (caf/cag/mlo/sp panels) → legacy bg.js modals → inline split panel pages (lower priority, already good UX).
