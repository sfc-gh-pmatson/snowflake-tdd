# Interactive TDD — Backlog

---

## TEMP Icons — Awaiting Dedicated Assets

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
| `data-engineering.html` | Streams & Tasks card | `sf-icon-streams` (placeholder) | Official Snowflake Streams & Tasks icon |
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

## Code Display Standardization Audit

Review all pages and standardize code display to the **overlay modal pattern** (★ DEFAULT: code left, explain right, full-screen backdrop). As of the ml-functions.html conversion, five distinct code display patterns exist:

| Pattern | Pages | Action |
|---|---|---|
| ★ Overlay modal (default) | `snowflake-cowork.html`, `external-engines.html`, `delta-direct.html`, `external-tables.html`, `internal-marketplace.html`, `org-listings.html` | Keep as-is |
| Inline split panel | `native-apps.html`, `data-sharing.html`, `marketplace.html`, `data-clean-rooms.html`, `gpu.html`, `ml-functions.html` + others | Evaluate — convert to overlay if UX warrants |
| Per-page dedicated overlays | `cortex-ai-functions.html`, `cortex-ai-gateway.html`, `ml-overview.html`, `snowpark.html` | Convert to overlay modal |
| Legacy code-modal (bg.js hidden div) | ~19 pages | Convert to overlay modal or inline split panel |
| ~~Slide-up from bottom~~ | ~~`ml-functions.html`~~ | ✓ Converted to inline split panel |

**Priority:** Per-page dedicated overlays first (caf/cag/mlo/sp panels) → legacy bg.js modals → inline split panel pages (lower priority, already good UX).
