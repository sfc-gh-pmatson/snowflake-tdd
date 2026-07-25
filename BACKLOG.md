# Interactive TDD — Implementation Backlog

Items queued for future modules/pages.

---

## Postgres PG Lake

Expose Postgres-resident Iceberg tables to Snowflake via the pg_lake catalog integration.

- **Docs:** https://docs.snowflake.com/user-guide/snowflake-postgres/postgres-pg_lake
- **Guide:** https://www.snowflake.com/en/developers/guides/sync-data-from-postgres-to-snowflake-with-iceberg-and-pg-lake/

**Key concepts to cover:**
- What pg_lake is and how it works (Postgres → Iceberg → Snowflake via catalog integration)
- Creating a `SNOWFLAKE_POSTGRES` catalog integration
- Creating a catalog-linked database (CLD) to auto-discover tables
- Querying pg_lake Iceberg tables from Snowflake
- Refresh behavior and auto-discovery

---

## Postgres Mirroring

Replicate Postgres tables directly into Snowflake as native Snowflake tables (not Iceberg).

- **Docs:** https://docs.snowflake.com/user-guide/snowflake-postgres/postgres-data-mirroring
- **Guide:** https://www.snowflake.com/en/developers/guides/snowflake-postgres-mirror-to-snowflake/1
- **Launch blog:** https://www.snowflake.com/en/blog/engineering/postgres-to-snowflake-replication-mirroring/

**Key concepts to cover:**
- How mirroring differs from pg_lake (native tables vs Iceberg)
- Setting up a Snowflake Postgres instance as the source
- `CREATE MIRROR` syntax and configuration
- CDC-based replication mechanics
- Monitoring mirror status and lag
- Comparison with pg_lake: when to use each approach
