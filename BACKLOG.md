# Interactive TDD — Backlog

---

## Module Pages To Build

### Storage — Micro-Partitioning Deep Dive
Dedicated page going deeper on how Snowflake's micro-partitioning works, with visual diagrams of partition metadata, pruning mechanics, and how DML/Time Travel interact with immutable partitions.

Key concepts: 50–500 MB compressed columnar chunks · column-level min/max/bloom metadata · partition pruning in query plans · MVCC-style immutability · Time Travel & Fail-Safe retention · SYSTEM$CLUSTERING_INFORMATION output interpretation

### Storage — Clustering & Search Optimization Deep Dive
Dedicated page covering when and how to use cluster keys and the Search Optimization Service, with guidance on choosing cluster keys, monitoring effectiveness, and comparing against search optimization.

Key concepts: when to cluster vs. not · choosing cluster key columns · monitoring depth with SYSTEM$CLUSTERING_INFORMATION · automatic reclustering cost model · Search Optimization Service — equality, substring, geo · ALTER TABLE ADD SEARCH OPTIMIZATION · monitoring with SEARCH_OPTIMIZATION_HISTORY

---

### Postgres PG Lake
Expose Postgres-resident Iceberg tables to Snowflake via the pg_lake catalog integration.

- **Docs:** https://docs.snowflake.com/user-guide/snowflake-postgres/postgres-pg_lake
- **Guide:** https://www.snowflake.com/en/developers/guides/sync-data-from-postgres-to-snowflake-with-iceberg-and-pg-lake/

Key concepts: pg_lake overview · `SNOWFLAKE_POSTGRES` catalog integration · catalog-linked database auto-discovery · querying pg_lake Iceberg tables · refresh behavior

### Postgres Mirroring
Replicate Postgres tables into Snowflake as native tables (not Iceberg) via CDC.

- **Docs:** https://docs.snowflake.com/user-guide/snowflake-postgres/postgres-data-mirroring
- **Guide:** https://www.snowflake.com/en/developers/guides/snowflake-postgres-mirror-to-snowflake/1
- **Blog:** https://www.snowflake.com/en/blog/engineering/postgres-to-snowflake-replication-mirroring/

Key concepts: mirroring vs pg_lake · `CREATE MIRROR` · CDC mechanics · monitoring lag · when to use each

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
