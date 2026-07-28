# Interactive TDD — Agent Context File
> Load this file at the start of a session to get full project context.
> Last updated: July 2026

---

## Project Overview

**What it is:** A multi-page interactive HTML presentation ("Technical Deep Dive") for Snowflake sales conversations. Each page is a standalone HTML file rendered in a browser. No build step — pure HTML/CSS/JS.

**Location:** `/Users/pmatson/Documents/SnowWork/Interactive TDD/`

**Git repo:** `github.com/sfc-gh-pmatson/snowflake-tdd` (private)

---

## File Structure

```
Interactive TDD/
├── index.html              # Landing page — Platform Architecture Diagram
├── shared.css              # ALL shared styles, tokens, icon registry
├── bg.js                   # Animated background (loaded on sub-pages)
├── resources.js            # Resource bar + Code modal lifecycle manager
├── sf-icons/               # All SVG icons (Snowflake_ICON_*.svg)
├── icons/                  # Legacy PNGs (mostly superseded by sf-icons/)
└── pages/
    ├── pillars.html         # Easy / Connected / Trusted pillars
    ├── snowgrid.html        # Cross-cloud infrastructure (Snowgrid)
    ├── iceberg.html         # Apache Iceberg overview
    ├── iceberg-v3.html      # Iceberg v3 advantages
    ├── iceberg-catalog-linked.html
    ├── iceberg-snowflake.html
    ├── ai-data-cloud.html
    ├── bcdr.html
    ├── coming-soon.html
    └── _template.html       # Starter template for new pages
```

---

## Shared CSS — Design Tokens

```css
/* Color palette */
--sf-blue:       #29B5E8;   /* Core Snowflake Blue — primary accent */
--sf-blue-mid:   #1a8cc4;   /* Darker blue for contrast */
--sf-blue-dark:  #0059a3;   /* Deep blue */
--sf-blue-glow:  rgba(41,181,232,0.22);
--sf-navy:       #050d1a;   /* Page background (darkest) */
--sf-ink:        #071525;   /* Dark text on light backgrounds */
--sf-card:       #0c1e3a;   /* Card background */
--sf-card2:      #0e2244;   /* Alt card background */
--sf-border:     rgba(41,181,232,0.16);
--sf-light:      #70D9F5;   /* Light blue highlight */
--code-bg:       #1d252f;

/* Partner / external brand colors */
--aws-c:         #FF9900;
--azure-c:       #0078D4;
--gcp-c:         #EB3474;
--databricks-c:  #FF3621;   /* Apache Spark / Databricks red */
--spark-c:       #e25a1c;   /* Apache Spark orange */
--flink-c:       #e6526f;   /* Apache Flink red */
--polaris-c:     #007880;   /* Apache Polaris teal */
--trino-c:       #DD00A1;   /* Trino magenta */
--dremio-c:      #006d6f;   /* Dremio teal */

/* Type scale */
--fs-h6: 0.72rem;  /* ~12px — tags, captions, eyebrows */
--fs-h5: 0.82rem;  /* ~13px — body text */
--fs-h4: 0.95rem;  /* ~15px — card titles */
--fs-h3: 1.15rem;  /* ~18px — subheadings */
--fs-h2: 1.35rem;  /* ~22px — headings */
--fs-h1: 1.75rem;  /* ~28px — display headings */
```

---

## Shared CSS — Key Components

### Layout
- `.sf-slide` — full viewport slide container (flex column)
- `.slide-canvas` — content area below nav bar
- `.slide-canvas.with-nav` — accounts for nav bar height
- `.content-wrap` — constrained max-width content column

### Navigation
- `.nav-bar` — top navigation strip
- `.btn-back` — back button (sf-blue tinted)
- `.nav-label` — page title in nav
- `.nav-tags` — container for status pills (GA, Preview, etc.)
- `.nav-tag-ga` — "Generally Available" green pill
- `.nav-tag-pp` — Public Preview amber pill
- `.nav-tag-priv` — Private Preview pink pill

### Header Block (used on all sub-pages)
```html
<div class="s6-top">
  <div style="display:flex;align-items:center;justify-content:space-between">
    <span class="slide-tag tag-blue">Section Name</span>
  </div>
  <div class="s6-header">Main Heading</div>
  <div class="s6-sub">Subheading text</div>
</div>
```
- `.s6-top` — header block; background: `var(--sf-blue)`
- `.s6-header` — large heading; color: `var(--sf-ink)` (dark)
- `.s6-sub` — subheading; color: `rgba(7,21,37,.65)` (dark muted)

### Slide Tags
All render as white text on semi-transparent white background (readable on sf-blue header):
- `.slide-tag.tag-blue` — blue label
- `.slide-tag.tag-amber` — amber label
- `.slide-tag.tag-green` — green label
- `.slide-tag.tag-purple` — purple label (use tag-blue instead per brand)

### Icon System
```html
<!-- Base usage -->
<span class="sf-img sf-icon-{name}"></span>

<!-- Sized -->
<span class="sf-img sf-icon-{name}" style="width:40px;height:40px;"></span>

<!-- White icon (on colored background) -->
<span class="sf-img sf-icon-{name}" style="width:24px;height:24px;filter:brightness(0) invert(1);"></span>

<!-- Colored icon (make it sf-blue) -->
<span class="sf-img sf-icon-{name}" style="width:28px;height:28px;filter:brightness(0) saturate(100%) invert(46%) sepia(99%) saturate(400%) hue-rotate(165deg) brightness(97%);"></span>
```

### Complete Icon Class Registry
| Class | SVG file |
|---|---|
| `sf-icon-ext-engines` | Snowflake_ICON_Embedded_Analytics.svg |
| `sf-icon-partners` | Snowflake_ICON_Handshake.svg |
| `sf-icon-marketplace` | Snowflake_ICON_Marketplace.svg |
| `sf-icon-data-eng` | Snowflake_ICON_Data_Engineering.svg |
| `sf-icon-analytics` | Snowflake_ICON_Analytics.svg |
| `sf-icon-transactions` | Snowflake_ICON_Transactions.svg |
| `sf-icon-ai` | Snowflake_ICON_AI_Star_Triple.svg |
| `sf-icon-apps-collab` | Snowflake_ICON_Application_Collaboration.svg |
| `sf-icon-horizon` | Snowflake_ICON_Horizon.svg |
| `sf-icon-sql` | Snowflake_ICON_SQL.svg |
| `sf-icon-js` | Snowflake_ICON_JavaScala.svg |
| `sf-icon-snowpark` | Snowflake_ICON_Snowpark.svg |
| `sf-icon-python` | Snowflake_ICON_Python.svg |
| `sf-icon-spark` | Snowflake_ICON_Spark_Connect.svg |
| `sf-icon-spcs` | Snowflake_ICON_Snowpark_Containers.svg |
| `sf-icon-cpu` | Snowflake_ICON_Industry_Hardware_Semiconductors.svg |
| `sf-icon-gpu` | Snowflake_ICON_GPU.svg |
| `sf-icon-data-mesh` | Snowflake_ICON_DataMesh.svg |
| `sf-icon-lakehouse` | Snowflake_ICON_Lakehouse.svg |
| `sf-icon-warehouse` | Snowflake_ICON_Warehouse_Data.svg |
| `sf-icon-unstructured` | Snowflake_ICON_Unstructured_Data.svg |
| `sf-icon-semi-struct` | Snowflake_ICON_Semi_Structured_Data.svg |
| `sf-icon-structured` | Snowflake_ICON_Structured_Data.svg |
| `sf-icon-iceberg` | Snowflake_ICON_Iceberg_Tables.svg |
| `sf-icon-sf-tables` | Snowflake_ICON_Snowflake_Storage.svg |
| `sf-icon-hybrid` | Snowflake_ICON_Hybrid_Tables.svg |
| `sf-icon-server` | Snowflake_ICON_Server.svg |
| `sf-icon-cloud` | Snowflake_ICON_Cloud.svg |
| `sf-icon-servers` | Snowflake_ICON_Servers.svg |
| `sf-icon-platform` | Snowflake_ICON_Platform.svg |
| `sf-icon-third-party` | Snowflake_ICON_3rd_Party_App_2.svg |
| `sf-icon-data-apps` | Snowflake_ICON_Workloads_Data_Applications.svg |
| `sf-icon-data-apps-hl` | Snowflake_ICON_Workloads_Data_Applications_Highlight.svg |
| `sf-icon-security-gov` | Snowflake_ICON_Security_Governance.svg |
| `sf-icon-speed-2` | Snowflake_ICON_Speed_2.svg |
| `sf-icon-be-excellent` | Snowflake_ICON_Be_Excellent.svg |
| `sf-icon-connected` | Snowflake_ICON_Connected.svg |
| `sf-icon-launch` | Snowflake_ICON_Launch.svg |
| `sf-icon-eliminate-delays` | Snowflake_ICON_Eliminate_Delays.svg |
| `sf-icon-metadata` | Snowflake_ICON_Metadata.svg |
| `sf-icon-location` | Snowflake_ICON_Location.svg |
| `sf-icon-time` | Snowflake_ICON_Time.svg |
| `sf-icon-check` | Snowflake_ICON_Check.svg |
| `sf-icon-azure-logo` | Snowflake_ICON_Azure_logo.svg |
| `sf-icon-gcp-logo` | Snowflake_ICON_GCP_logo.svg |

### External Logo Class Registry
These live in `other-icons/` and use brand colors defined as CSS variables.

| Class | File (other-icons/) | Brand color var |
|---|---|---|
| `img-ext-aws` | AWS_logo.svg | `--aws-c: #FF9900` |
| `img-ext-azure` | Azure_logo.svg | `--azure-c: #0078D4` |
| `img-ext-gcp` | GCP_logo.svg | `--gcp-c: #EB3474` |
| `img-ext-pg` | *(sf-icons/Snowflake_ICON_Postgres.svg)* | — |
| `img-ext-databricks` | Databricks_logo.svg | `--databricks-c: #FF3621` |
| `img-ext-spark` | apache_spark_logo.svg | `--spark-c: #e25a1c` |
| `img-ext-spark-mark` | apache_spark.svg | — mark only, use in small icon circles |
| `img-ext-flink` | Flink_logo.png | `--flink-c: #c679d4` |
| `img-ext-flink-mark` | Flink.png | — mark only, use in small icon circles |
| `img-ext-dremio` | dremio_logo.png | `--dremio-c: #006d6f` |
| `img-ext-polaris` | apache_polaris_logo.svg | `--polaris-c: #007880` |
| `img-ext-trino` | trino_logo.svg | `--trino-c: #DD00A1` |
| `img-ext-trino` | trino_logo.svg | `#DD00A1` (Trino magenta) |
| `sf-icon-resource-docs` | Snowflake_ICON_Documentation.svg |
| `sf-icon-resource-code` | Snowflake_ICON_Code.svg |
| `sf-icon-resource-guide` | Snowflake_ICON_Case_Study.svg |
| `sf-icon-resource-blog` | Snowflake_ICON_Blog.svg |

### Resource Bar
Every page can have a resource bar that shows Docs/Code/Guide/Blog buttons.

```html
<!-- 1. Configure before resources.js -->
<script>
  window.RESOURCE_CONFIG = {
    docs:  'https://docs.snowflake.com/...',  // URL or null
    code:  true,                              // true = show Code modal button
    guide: 'https://quickstarts.snowflake.com/...',
    blog:  null,
  };
</script>
<script src="../resources.js"></script>

<!-- 2. Add trigger + bar at bottom of .sf-slide -->
<div class="resource-trigger">
  <div class="resource-bar"></div>
</div>

<!-- 3. For code modal: add hidden content block anywhere in body -->
<div id="code-modal-content" style="display:none;">
  <div class="code-modal-code">
    <pre class="code-block"><code>
      <span class="code-kw">SELECT</span> <span class="code-id">*</span>
      <span class="code-kw">FROM</span> <span class="code-id">my_table</span>;
    </code></pre>
  </div>
  <div class="code-modal-explain">Explanation text here.</div>
</div>
```

### Code Block Syntax Classes
| Class | Color | Use for |
|---|---|---|
| `code-kw` | Pink `#ef87b8` | SQL keywords (SELECT, FROM, CREATE, etc.) |
| `code-fn` | Blue `#02a0f9` | Function names, type names |
| `code-id` | Green `#35ae91` | Identifiers, table/column names, strings |
| `code-str` | Green `#35ae91` | String literals |
| `code-num` | Orange `#ff9f36` | Numeric values |
| `code-punc` | Orange `#ff9f36` | Punctuation — commas, parens, operators |
| `code-comment` | Gray `#666` italic | SQL comments (`-- comment`) |

### Card Patterns

**White card with sf-blue border (current standard):**
```css
background: #fff;
border: 3px solid var(--sf-blue);
border-radius: 12px;
/* title */ color: #071525;
/* body */  color: rgba(7,21,37,.58);
```

**Hover state:**
```css
background: rgba(41,181,232,.06);
border-color: var(--sf-blue);
transform: translateX(5px); /* or translateY(-2px) */
```

**Icon on sf-blue background:**
```css
background: var(--sf-blue);
border: 1px solid var(--sf-blue);
border-radius: 10px; /* or 50% for circle */
/* icon inside: filter:brightness(0) invert(1) to make white */
```

**sf-blue filled block (badge/footer style):**
```css
background: var(--sf-blue);
border: 3px solid var(--sf-blue);
border-radius: 10-12px;
/* text: var(--sf-ink) for body, #fff for hero value */
```

---

## Snowflake Brand Guidelines Summary
Source: https://www.snowflake.com/brand-guidelines/

### Official Colors
| Name | Hex | Role |
|---|---|---|
| Snowflake Blue | `#29B5E8` | Primary brand color |
| Mid Blue | `#11567F` | Contrasting blue |
| Midnight | `#000000` | Dark backgrounds |
| Star Blue | `#71D3DC` | Secondary accent (teal) |
| Valencia Orange | `#FF9F36` | Secondary accent |
| Purple Moon | `#7D44CF` | Secondary accent only — NOT a pillar color |
| First Light | `#D45B90` | Secondary accent (rose) |
| Windy City | `#8A999E` | Neutral gray |
| Iceberg | `#003545` | Tertiary dark blue |
| Winter | `#24323D` | Tertiary dark neutral |

### Typography
- **Headlines:** Texta Heavy (licensed — not available as web font)
- **Subheads / Alternate:** Lato (free, Google Fonts)
- **Body:** Lato
- **Web fallback:** `-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif` (Lato not loaded — add via Google Fonts if needed)

### Logo Rules
- **Snowflake Blue logo** → use on white or dotted backgrounds
- **White logo** → use on full-bleed Snowflake Blue, color-overlay images
- **Bug (icon)** → ALWAYS include ® registration mark
- Local files: `sf-icons/Snowflake_ICON_Logo.svg` (icon only), `sf-icons/Snowflake_ICON_Wordmark.svg` (icon + text)

### Button Specs
- Shape: pill (`border-radius: 80px`)
- Font: Texta Heavy, ALL CAPS, black text on white
- Height: 34px | Padding: 27px L/R, 12px T/B | Max width: 195px
- Max 13 characters
- Styles: Flat (filled) or Outlined (1px border)

---

## Design Rules & Conventions

1. **Never use purple as a primary/pillar color** — Purple Moon is a brand secondary accent only. Use `var(--sf-blue)` instead.
2. **Icon on colored background** → add `filter:brightness(0) invert(1)` to make it white
3. **s6-top (header block)** → background is `var(--sf-blue)`, text is dark (`--sf-ink`)
4. **Slide tags in header** → white text, semi-transparent white border (visible on blue bg)
5. **White cards** → 3px solid `var(--sf-blue)` border, dark text for titles, muted dark for body
6. **Transparent/dark cards** → 1px `rgba(41,181,232,.2)` border, white/light text
7. **All new icons** → `.sf-img` base class + specific `.sf-icon-*` class; add to shared.css if new
8. **Do not add new PNG references** — all icons should use SVGs from `sf-icons/`
9. **Page-specific styles** go in the page's `<style>` block, NOT in shared.css
10. **Shared/reused styles** go in shared.css
