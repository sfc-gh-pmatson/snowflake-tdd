# Snowflake Interactive TDD

Interactive Technical Deep Dive for the Snowflake Platform. Built for Snowflake SE demos and team enablement.

## Live site

> **Snowhouse SPCS (Snowflake-internal):** go/interactive-tdd
>
> Requires Snowhouse (SSO) login. Accessible to all Snowflake employees (PUBLIC role granted).
>
> To run without a Snowflake login, download the zip and follow the [Running locally](#running-locally) instructions below.

## Running locally

### Option 1 — Just open the file (simplest)

1. Download the zip from GitHub: **Code → Download ZIP**
2. Unzip it anywhere on your machine
3. Open `index.html` in your browser

This works in most cases. If icons or styles look broken (a Chrome security restriction with local files), use Option 2.

### Option 2 — Local server (recommended)

Requires Python 3 (pre-installed on macOS).

1. Download and unzip as above
2. Open Terminal, `cd` into the unzipped folder
3. Run:
   ```bash
   bash serve.sh
   ```
   This starts a local server and opens [http://localhost:8080](http://localhost:8080) in your browser automatically.

To stop the server, press `Ctrl+C` in the terminal.

---

## What's in it

### Completed modules

**Platform**

| Module | Page |
|--------|------|
| Platform Architecture | `index.html` |
| Snowflake Pillars | `pages/pillars.html` |
| AI Data Cloud | `pages/ai-data-cloud.html` |
| Snowgrid & Cross-Cloud | `pages/snowgrid.html` |
| Business Continuity & DR | `pages/bcdr.html` |
| Cost Management | `pages/cost-management.html` |
| Well-Architected Framework | `pages/well-architected-framework.html` |
| Partner Ecosystem | `pages/partners.html` |

**Storage & Tables**

| Module | Page |
|--------|------|
| Storage Hub | `pages/storage.html` |
| Storage — Micro-Partitioning | `pages/storage-micropartitions.html` |
| Storage — Clustering & Search Optimization | `pages/storage-clustering.html` |
| Snowflake Native Tables | `pages/snowflake-tables.html` |
| Data Warehouse | `pages/data-warehouse.html` |

**Compute**

| Module | Page |
|--------|------|
| Compute Hub | `pages/compute.html` |
| Virtual Warehouses | `pages/compute-warehouses.html` |
| Compute Scaling | `pages/compute-scaling.html` |
| Specialized Compute | `pages/compute-specialized.html` |
| Serverless Compute | `pages/compute-serverless.html` |
| GPU / AI Compute | `pages/gpu.html` |

**Transactions & OLTP**

| Module | Page |
|--------|------|
| Transactions Hub | `pages/transactions.html` |
| Interactive Tables (Hybrid Tables) | `pages/interactive-tables.html` |
| Snowflake Postgres | `pages/snowflake-postgres.html` |
| Postgres Mirroring | `pages/postgres-mirroring.html` |

**Data Lakehouse & Iceberg**

| Module | Page |
|--------|------|
| Data Lakehouse | `pages/data-lakehouse.html` |
| Apache Iceberg on Snowflake | `pages/iceberg.html` |
| Iceberg — Snowflake Managed | `pages/iceberg-snowflake.html` |
| Iceberg — Catalog-Linked DB | `pages/iceberg-catalog-linked.html` |
| Iceberg v3 | `pages/iceberg-v3.html` |
| Delta Direct | `pages/delta-direct.html` |
| External Tables | `pages/external-tables.html` |
| Apache Spark on Snowflake | `pages/apache-spark.html` |
| External Engines | `pages/external-engines.html` |

**Data Engineering & Pipelines**

| Module | Page |
|--------|------|
| Data Engineering Hub | `pages/data-engineering.html` |
| Snowpark (Python, Java, Scala) | `pages/snowpark.html` |
| Snowflake CLI + Git Integration | `pages/cli-git.html` |
| DevOps / Database Change Management | `pages/devops-dcm.html` |
| Snowpark Container Services (SPCS) | `pages/containers.html` |
| SQL Analytics | `pages/sql-analytics.html` |
| SQL Analytics — Semi-Structured | `pages/sql-analytics-semistructured.html` |
| SQL Analytics — Time Series | `pages/sql-analytics-timeseries.html` |
| SQL Analytics — Window Functions | `pages/sql-analytics-windows.html` |
| SQL Analytics — Geospatial | `pages/sql-analytics-geospatial.html` |
| Snowflake Notebooks | `pages/snowflake-notebooks.html` |
| Streamlit-in-Snowflake | `pages/streamlit.html` |
| Apps & Collaboration | `pages/apps-collaboration.html` |

**Data Mesh & Sharing**

| Module | Page |
|--------|------|
| Data Mesh | `pages/data-mesh.html` |
| Data Sharing | `pages/data-sharing.html` |
| Native Apps | `pages/native-apps.html` |
| Snowflake Marketplace | `pages/marketplace.html` |
| Internal Marketplace | `pages/internal-marketplace.html` |
| Organizational Listings | `pages/org-listings.html` |
| Data Clean Rooms | `pages/data-clean-rooms.html` |

**Governance (Horizon Catalog)**

| Module | Page |
|--------|------|
| Horizon Catalog | `pages/horizon.html` |
| Horizon — Search & Discovery | `pages/horizon-search.html` |
| Horizon — Tagging | `pages/horizon-tagging.html` |
| Horizon — Classification | `pages/horizon-classification.html` |
| Horizon — Lineage | `pages/horizon-lineage.html` |
| Horizon — Data Quality (DMF) | `pages/horizon-dmf.html` |
| Horizon — Trust Center | `pages/horizon-trust.html` |
| Horizon — Access | `pages/horizon-access.html` |
| Horizon — Policies | `pages/horizon-policies.html` |

**Cortex AI**

| Module | Page |
|--------|------|
| Cortex AI — Landing | `pages/cortex-ai.html` |
| Built-in LLM / AI Functions | `pages/cortex-ai-functions.html` |
| Cortex Search | `pages/cortex-search.html` |
| Cortex Analyst + Semantic Views | `pages/cortex-analyst.html` |
| Cortex Agents | `pages/cortex-agents.html` |
| Document AI Pipeline | `pages/document-ai.html` |
| Cortex Code (CoCo) | `pages/cortex-code.html` |
| Snowflake CoWork | `pages/snowflake-cowork.html` |
| MCP & Connectors | `pages/mcp-connectors.html` |
| Cortex Sense Runtime | `pages/cortex-sense.html` |
| Cortex Sense — Agent Skills | `pages/cortex-sense-skills.html` |

**Snowflake ML**

| Module | Page |
|--------|------|
| Snowflake ML — Landing | `pages/snowflake-ml.html` |
| In-SQL ML Functions | `pages/ml-functions.html` |
| MLOps (Model Registry, Feature Store, ML Jobs) | `pages/mlops.html` |
| ML Agent | `pages/ml-agent.html` |

---

### Key features

**Keyboard shortcuts (all pages)**
- `←` — go back to previous page
- `H` — platform architecture (home)
- `M` — Snowflake ML landing
- `A` — Cortex AI landing
- `G` — Horizon Catalog (Governance)
- `E` — Data Engineering hub
- `L` — Data Lakehouse
- `C` — Compute hub
- `W` — Well-Architected Framework
- `N` — toggle talk-track notes panel
- `?` — show keyboard shortcut help popup

**Talk-track notes panel**
Press `N` on any module page to open a side panel with SE talk-track content:
- **Talk Track** — narrative for the customer conversation
- **Key Points** — 3–4 technical bullets
- **Questions to Ask** — discovery questions

The panel is draggable (grab the left edge to resize) and closeable with `N`, `Escape`, or the × button.

**Interactive code panels**
Most module pages have clickable components that open a detail panel with:
- Syntax-highlighted SQL/Python code examples
- Explanation of the feature and when to use it

Three panel styles are used across the site:
- **Overlay modal** (default) — full-screen dark overlay, split code/explain
- **Inline split panel** — persistent panel below the card grid
- **Slide-up panel** — overlays from the bottom without a full-screen backdrop

**Resource bar**
Each page has a resource bar (hover bottom of slide) with direct links to:
- Snowflake docs
- Developer guides / quickstarts
- Code examples (opens a full-width code modal)

**SPCS deployment**
The app is containerised and deployed to SPCS on `SFCOGSOPS-SNOWHOUSE_AWS_US_WEST_2`. Deployment is **manual only** (GitHub Actions auto-deploy is disabled). See `deploy-snowhouse.sh`.

## Structure

```
snowflake-tdd/
├── index.html              ← Platform architecture landing page
├── shared.css              ← All shared styles and design tokens
├── bg.js                   ← Shared JS: keyboard nav, notes panel, shortcuts
├── resources.js            ← Resource bar logic
├── deploy-snowhouse.sh     ← Manual SPCS deploy script
├── pages/
│   ├── _template.html      ← Copy this to start a new module
│   ├── coming-soon.html
│   └── ...                 ← All module pages (~78 pages)
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
7. Run `deploy-snowhouse.sh` to push to SPCS (confirm with repo owner before deploying)

## Design tokens

All tokens are in `shared.css` under `:root`:

| Token | Value | Use |
|-------|-------|-----|
| `--sf-blue` | `#29B5E8` | Primary brand blue |
| `--sf-blue-light` | `#70D9F5` | Light blue highlight |
| `--sf-blue-mid` | `#1a8cc4` | Mid-range blue for contrast |
| `--sf-blue-dark` | `#0059a3` | Dark blue backgrounds |
| `--sf-navy` | `#050d1a` | Darkest backgrounds |
| `--sf-ink` | `#071525` | Body text on light bg |
| `--sf-card` | `#0c1e3a` | Dark card backgrounds |
