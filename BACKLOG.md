# Interactive TDD — Backlog

---

## Module Pages To Build

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
