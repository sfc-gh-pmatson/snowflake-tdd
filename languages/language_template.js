// ─────────────────────────────────────────────────────────────────────────
// LANGUAGE TEMPLATE — copy this to add a new language.
//
// There are two supported shapes. Prefer the first.
//
// ── 1. One folder per language, one file per page (recommended) ───────────
//
//     languages/de/_global.js     language name + shared chrome
//     languages/de/index.js       one file per page, named after the slug
//     languages/de/storage.js
//
// A page view then downloads only _global.js plus its own file (~3 KB
// gzipped) instead of every translation in the deck. This is how `es` is
// built — copy languages/es/ and replace the strings.
//
//   _global.js contains:   window.TDD_LANG_REGISTER({ code, name, global })
//   <slug>.js contains:    window.TDD_LANG_PAGE({ code, slug, page, blocks, notes })
//
// Pages with no file simply stay English. You do not need all 79 up front.
//
// ── 2. A single flat file (what this template is) ─────────────────────────
//
//     languages/de.js      everything in one file
//
// Still fully supported and simpler to start with; the cost is that the whole
// file is fetched on every page view. Use the shape below, then split it later
// if it grows.
//
// How to use this file:
//   1. Copy it to languages/<code>.js  (e.g. languages/de.js)
//   2. Set `code` to the BCP 47 language code and `name` to the language's
//      own name as a speaker would write it (Deutsch, Français, 日本語).
//   3. Fill in what you want. Anything omitted stays English — a partial
//      file is perfectly valid.
//   4. Drop it in this folder. It is discovered automatically from the nginx
//      directory listing and appears in the globe picker; no manifest to edit.
//
// This template is skipped by the loader, so it never appears as a language.
//
// ── Finding the keys ─────────────────────────────────────────────────────
// Only elements carrying data-i18n (textContent) or data-i18n-html
// (innerHTML) are translated, and the attribute value is the key:
//
//     <div class="sqa-title" data-i18n-html="title">One Platform.</div>
//                            ^^^^^^^^^^^^^^^^^^^^^ key is "title"
//
// All 79 pages are tagged, so every page is translatable.
//
// Do not read the keys out of the HTML by hand — dump them:
//
//     python3 tools/i18n-todo.py --list             # pages and counts
//     python3 tools/i18n-todo.py storage bcdr       # the English, as JSON
//
// Most keys are GENERATED and positional — `hsp-feature-title.3` is the third
// element of that class in document order. Roughly 1,600 of the 2,200 keys look
// like this. A couple of early pages (sql-analytics, sql-analytics-timeseries)
// were hand-tagged with semantic keys such as `feature.multimodal.title`, so do
// not expect one naming style across the deck.
//
// ⚠️  Because ordinal keys are positional, reordering elements on a page can
// attach a translation to the wrong element. After any reordering run
// `i18n-tag.py` then `i18n-check.py` — the drift check exists to catch this.
//
// ── HTML entities ────────────────────────────────────────────────────────
// A data-i18n value is applied with textContent, which does NOT decode
// entities: writing '&amp;' there makes the slide literally show "&amp;".
// Use real characters — & — · © ™ — in those values.
//
// A data-i18n-html value goes through innerHTML, where entities are decoded
// normally, so leave those as the page authored them.
//
// ── What NOT to translate ────────────────────────────────────────────────
//   • Product names: Snowflake, Cortex, Snowpark, Streamlit, Iceberg, Horizon,
//     Polaris, Arctic, CoWork, Snowgrid, Unistore, Snowsight, Snowpipe
//   • Third-party names: AWS, Azure, GCP, Databricks, Spark, Delta, Parquet,
//     Kafka, dbt
//   • Tier names: Business Critical, Virtual Private Snowflake. (Enterprise and
//     Standard are tier names AND ordinary adjectives — translate them only
//     when they are clearly the adjective.)
//   • SQL keywords, function names, type names: QUALIFY, ASOF JOIN, DATE_SPINE,
//     VARIANT, FLATTEN, H3, ST_*
//   • Code panel contents (never tagged, so safe by construction) — and do not
//     translate SQL that appears inline in prose either
//   • Metrics, figures, version numbers, dates
//
// languages/GLOSSARY.md carries the full termbase, including terms deliberately
// kept in English (warehouse, clustering, pipeline, streaming, throughput,
// notebook, lakehouse). Add a section there for your language before starting
// bulk work — agreeing terminology up front turns review into a consistency
// check instead of a vocabulary debate.
//
// ── Checking your work ───────────────────────────────────────────────────
//     python3 tools/i18n-check.py        syntax, drift, coverage, orphans
//
// i18n-gen.py and i18n-validate-es.py are currently Spanish-specific; they are
// worth generalising if a second language gets past the experiment stage.
// ─────────────────────────────────────────────────────────────────────────

window.TDD_LANG_REGISTER({
  code: 'CHANGEME',            // e.g. 'de'
  name: 'Your Language',       // e.g. 'Deutsch'

  // Shared chrome — translated once, applies to every page. bg.js tags these
  // centrally, so they work on all 79 pages without editing any of them.
  global: {
    'back': '← Back',
    'tag.ga': 'Generally Available',
    'tag.pupr': 'Public Preview',
    'tag.prpr': 'Private Preview',
    'tag.bc': 'Business Critical',
    'tag.ent': 'Enterprise',
    'footer.copyright': '© 2026 Snowflake Inc. All Rights Reserved',
  },

  // Per-page strings, keyed by page slug (the HTML filename without .html).
  // Overrides `global` for that page.
  pages: {
    // A generated-key page — this is what most of the deck looks like.
    // Dump the real keys with: python3 tools/i18n-todo.py horizon-trust
    'horizon-trust': {
      'nav-label': 'Trust Center',
      'hsp-title': 'Continuous Security Monitoring',
      'hsp-feature-title.1': 'Scanner Packages',
      'hsp-feature-body.1': 'CIS Benchmarks, Threat Intelligence...',
      // 'hsp-feature-title.2': ...
    },

    // A hand-tagged page, kept as an example of the semantic key style.
    'sql-analytics': {
      'nav.label': 'SQL Analytics',
      'header': 'SQL Analytics on Snowflake',
      'title': 'One Platform.<br>Every Data Shape.',
      'feature.multimodal.title': 'Multi-Modal SQL',
    },
  },

  // HTML blocks a page builds in JS and injects as innerHTML — the interactive
  // explain panels, for example. These have no element for data-i18n to target,
  // so the page asks for them by key via window.TDD_I18N.block('<key>').
  // Keyed by page slug, like `pages`.
  //
  // To find the keys, look at the page's ITEMS array: each entry has a `key`,
  // and the lookup key is 'explain.' + that key. 12 pages are wired this way.
  blocks: {
    // 'sql-analytics-timeseries': {
    //   'explain.datespine': `<h4>DATE_SPINE</h4><p>...</p>`,
    //   'explain.timeslice':  `<h4>TIME_SLICE</h4><p>...</p>`,
    // },
  },

  // Full talk-track notes, keyed by page slug. These replace the page's
  // built-in notes. A selected personal notes author still takes priority
  // over these, so an author's own notes are never overwritten by a
  // translation.
  notes: {
    // 'sql-analytics': `<h3>Talk Track</h3><p>...</p>`,
  },
});
