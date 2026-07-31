# Snowflake Interactive TDD

Interactive Technical Deep Dive for the Snowflake Platform. Built for Snowflake SE demos and team enablement.

## Live site

> **SPCS (primary):** [https://esnlxl-sfsenorthamerica-pmat-aws1.snowflakecomputing.app/](https://esnlxl-sfsenorthamerica-pmat-aws1.snowflakecomputing.app/)
>
> **GitHub Pages:** [https://sfc-gh-pmatson.github.io/snowflake-tdd/](https://sfc-gh-pmatson.github.io/snowflake-tdd/)

## What's in it

### Completed modules

| Module | Page |
|--------|------|
| Platform Architecture | `index.html` |
| Snowflake Pillars | `pages/pillars.html` |
| AI Data Cloud | `pages/ai-data-cloud.html` |
| Data Lakehouse | `pages/data-lakehouse.html` |
| Apache Iceberg on Snowflake | `pages/iceberg.html` |
| Iceberg — Snowflake Managed | `pages/iceberg-snowflake.html` |
| Iceberg — Catalog Integration | `pages/iceberg-catalog-linked.html` |
| Iceberg v3 | `pages/iceberg-v3.html` |
| Snowgrid & Cross-Cloud | `pages/snowgrid.html` |
| Business Continuity & DR | `pages/bcdr.html` |
| Interactive Tables (Hybrid Tables) | `pages/interactive-tables.html` |
| Snowpark (Python, Java, Scala) | `pages/snowpark.html` |
| Cortex AI — Landing | `pages/cortex-ai.html` |
| Built-in LLM Functions | `pages/cortex-ai-functions.html` |
| Document AI Pipeline | `pages/document-ai.html` |
| Cortex Agents | `pages/cortex-agents.html` |
| Cortex Analyst + Semantic Views | `pages/cortex-analyst.html` |
| Cortex Search | `pages/cortex-search.html` |
| Cortex Code (CoCo) | `pages/cortex-code.html` |
| Snowflake ML — Landing | `pages/snowflake-ml.html` |
| In-SQL ML Functions | `pages/ml-functions.html` |
| MLOps (Model Registry, Feature Store, ML Jobs) | `pages/mlops.html` |
| ML Agent | `pages/ml-agent.html` |
| Data Mesh | `pages/data-mesh.html` |
| Snowflake CoWork | `pages/snowflake-cowork.html` |
| Partner Ecosystem | `pages/partners.html` |

### Key features

**Keyboard shortcuts (all pages)**
- `←` — go back to previous page
- `H` — go home to the platform architecture index
- `N` — toggle talk-track notes panel (slides in from the right)

**Talk-track notes panel**
Press `N` on any completed module page to open a side panel with SE talk-track content:
- **Talk Track** — narrative for the customer conversation
- **Key Points** — 3–4 technical bullets
- **Questions to Ask** — discovery questions

The panel is draggable (grab the left edge to resize) and closeable with `N`, `Escape`, or the × button.

**Interactive code panels**
Most module pages have clickable components that open a detail panel with:
- Syntax-highlighted SQL/Python code examples
- Explanation of the feature and when to use it
- Left/right arrow navigation between examples

**Resource bar**
Each page has a resource bar (hover bottom of slide) with direct links to:
- Snowflake docs
- Developer guides / quickstarts
- Code examples (opens a full-width code modal)

**SPCS deployment**
The app is containerised and deployed to Snowflake SPCS via GitHub Actions on every push to `main`. See `.github/workflows/deploy.yml`.

## Structure

```
snowflake-tdd/
├── index.html              ← Platform architecture landing page
├── shared.css              ← All shared styles and design tokens
├── bg.js                   ← Shared JS: keyboard nav, notes panel
├── resources.js            ← Resource bar logic
├── pages/
│   ├── _template.html      ← Copy this to start a new module
│   ├── coming-soon.html
│   └── ...                 ← All module pages
├── sf-icons/               ← Official Snowflake SVG icons
└── other-icons/            ← Third-party logos (AWS, GCP, Azure, etc.)
```

## Adding a new module

1. Copy `pages/_template.html` to `pages/your-module.html`
2. Replace `MODULE_NAME`, add your content, and set `window.RESOURCE_CONFIG`
3. Add talk-track notes: define `window.PAGE_NOTES` as an HTML string **before** `<script src="../bg.js">`:
   ```html
   <script>
     window.PAGE_NOTES = `
   <h3>Talk Track</h3>
   <p>Your narrative here.</p>
   <h3>Key Points</h3>
   <ul><li>Point 1</li></ul>
   <h3>Questions to Ask</h3>
   <ul><li>Question 1?</li></ul>`;
   </script>
   <script src="../bg.js"></script>
   ```
4. Wire the link in `index.html` from `coming-soon.html` to your new page
5. Remove the `in-progress-tag` span from the index.html link once the page is live
6. Update the project tracker spreadsheet (Design → Done, Sign Off → In Progress)
7. Commit and push — GitHub Actions deploys to SPCS automatically

## Design tokens

All tokens are in `shared.css` under `:root`:

| Token | Value | Use |
|-------|-------|-----|
| `--sf-blue` | `#29B5E8` | Primary brand blue |
| `--sf-blue-dark` | `#0059a3` | Dark blue backgrounds |
| `--sf-navy` | `#050d1a` | Darkest backgrounds |
| `--sf-ink` | `#071525` | Body text on light bg |
| `--sf-card` | `#0c1e3a` | Dark card backgrounds |
| `--sf-light` | `#70D9F5` | Light blue highlight |
