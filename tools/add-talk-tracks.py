#!/usr/bin/env python3
"""
One-shot: add first-pass talk-track notes to the 7 pages that had none.

Inserted immediately before the bg.js <script> tag, because bg.js reads
window.PAGE_NOTES at init to seed PAGE_NOTES_DEFAULT (the fallback the i18n layer
and the notes-author picker both resolve against). Defining the notes after bg.js
would leave that fallback empty.
"""

import os
import re
import sys

NOTES = {}

NOTES['data-engineering'] = """
<h3>Talk Track</h3>
<p>The pitch here is that data engineering on Snowflake does not require a separate stack. Ingestion, transformation, and orchestration are all native — so there is no Airflow cluster to babysit, no separate Spark environment, and no data movement between them. Walk the two tabs: how data gets in, then how it gets shaped.</p>

<h3>Key Points</h3>
<ul>
  <li><strong>Four ingestion paths, one per shape of problem:</strong> COPY INTO for bulk files, Snowpipe for event-driven file arrival, Openflow for connector-based movement from 200+ sources, and Snowpipe Streaming for sub-second row-level pushes.</li>
  <li><strong>Snowpipe Streaming has no staging files.</strong> Rows go through an SDK straight into channels. This is the answer for Kafka, CDC, and IoT — not micro-batching files into a stage.</li>
  <li><strong>Dynamic Tables are the headline.</strong> Write a SELECT, set a TARGET_LAG, and Snowflake owns scheduling, dependency order, and incremental refresh. Declarative, not imperative — customers stop writing orchestration logic.</li>
  <li><strong>Streams &amp; Tasks remain the escape hatch</strong> when you need explicit control: row-level change capture plus DAGs of SQL or Snowpark steps.</li>
  <li><strong>dbt runs as a native Snowflake object</strong> via <code>snow dbt deploy</code> — no dbt Cloud subscription and no external scheduler.</li>
  <li><strong>Snowpark</strong> covers the Python, Java, and Scala DataFrame crowd without moving data out.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>What is orchestrating your pipelines today, and what does it cost you to keep it running?</li>
  <li>How much of your pipeline code exists purely to figure out what changed since last run? That is the Dynamic Tables conversation.</li>
  <li>What is your current latency from source system to queryable data — and what do you actually need it to be?</li>
  <li>Are you running dbt today? Where does it execute, and who maintains that runner?</li>
</ul>"""

NOTES['storage'] = """
<h3>Talk Track</h3>
<p>The point of this page is that there is one storage layer, not three. Structured tables, semi-structured JSON, and unstructured files all live in the same place, under the same governance, queryable from the same SQL. Most customers arrive with a warehouse for structured data and a lake for everything else — this is where that split stops being necessary.</p>

<h3>Key Points</h3>
<ul>
  <li><strong>Structured, semi-structured, and unstructured are peers here.</strong> VARIANT holds JSON, Avro, Parquet, ORC, and XML with no fixed schema, queried with dot notation — no shredding step.</li>
  <li><strong>Unstructured files are first-class:</strong> documents, images, video, and audio sit alongside tables, with presigned URLs for access. This is what makes the document-AI story possible later.</li>
  <li><strong>Micro-partitioning is automatic and unavoidable</strong> — every table gets it, with no tuning knobs. That is the "zero maintenance" claim, and it is worth pausing on if they come from a world of manual partition management.</li>
  <li><strong>Clustering and Search Optimization are the two opt-in accelerators</strong> for large tables. Both have deep-dive pages if the audience is technical.</li>
  <li><strong>Stages cover both directions:</strong> internal stages for Snowflake-managed file storage, external stages to read S3, Azure Blob, or GCS in place via a Storage Integration — without loading.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>How many separate storage systems are in your current architecture, and what governs each one?</li>
  <li>What are you doing with JSON today — shredding it into columns on ingest, or querying it as-is?</li>
  <li>Do you have unstructured data you would want to run AI against? Where does it live now?</li>
  <li>How much data would you rather query in place than load?</li>
</ul>"""

NOTES['storage-micropartitions'] = """
<h3>Talk Track</h3>
<p>This is the page that explains why Snowflake is fast without anyone tuning it. Micro-partitioning is automatic, and the metadata Snowflake keeps per partition is what lets it skip most of the table before reading a byte. Use the ORDERS visual — 400M rows where a date predicate prunes three of four partitions and cuts I/O by 75%.</p>

<h3>Key Points</h3>
<ul>
  <li><strong>Partitions are immutable, 50–500 MB, compressed, columnar.</strong> DML never overwrites one — updates write new partitions. That single design choice is what makes Time Travel and zero-copy cloning cheap.</li>
  <li><strong>The metadata is the magic.</strong> Per column, per partition: min/max, distinct count, null count. Snowflake compares predicates against that before scanning.</li>
  <li><strong>Pruning is the payoff.</strong> Partitions whose ranges cannot satisfy the predicate are never read. Emphasise that this happens with no hints, no indexes, and no DBA.</li>
  <li><strong>Time Travel and Fail-Safe fall out of immutability</strong> rather than being a bolted-on backup system. Previous versions already exist, so AT(TIMESTAMP) is just a metadata lookup.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>Who owns partitioning strategy in your current platform, and how much of their week goes to it?</li>
  <li>When a query is slow today, what is your diagnostic process — and how often does the answer involve rebuilding or reindexing?</li>
  <li>How do you recover from a bad UPDATE or DELETE right now? Compare that to querying the table as it was 10 minutes ago.</li>
</ul>"""

NOTES['storage-clustering'] = """
<h3>Talk Track</h3>
<p>Two accelerators for large tables that solve genuinely different problems, and the most common mistake is reaching for the wrong one. Clustering co-locates data for range and scan queries. Search Optimization builds access paths for needle-in-haystack lookups. The "when to use / when to skip" panels are the useful part — resist demoing both without framing the choice.</p>

<h3>Key Points</h3>
<ul>
  <li><strong>Clustering:</strong> pick cluster keys from columns that appear most in WHERE clauses with moderate-to-high cardinality. Low-cardinality keys do not help; very high cardinality can cost more than it returns.</li>
  <li><strong>Reclustering is serverless and automatic</strong> once a key is defined — Snowflake watches clustering depth and reorganises in the background. No maintenance window.</li>
  <li><strong>It is a cost model, not a free win.</strong> Reclustering burns serverless credits proportional to data reorganised. Use SYSTEM$CLUSTERING_INFORMATION to check depth and overlaps, and be honest about ROI on tables that churn heavily.</li>
  <li><strong>Search Optimization is for selective point lookups:</strong> equality and range predicates on high-cardinality columns, substring and LIKE search on text, and VARIANT path lookups.</li>
  <li><strong>SOS is transparent</strong> — no query rewrite, no hints. One ALTER TABLE enables it per column and access type; access paths build incrementally on serverless credits.</li>
  <li><strong>The distinction to land:</strong> clustering makes scans read less; SOS makes lookups avoid scanning. Wide range queries want clustering, single-row retrieval wants SOS.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>What do your slowest queries filter on, and how selective are those filters?</li>
  <li>Are the painful queries scanning ranges, or hunting for a handful of rows?</li>
  <li>How large are the tables in question, and how often are they rewritten? That drives the reclustering cost conversation.</li>
  <li>Are you searching inside text or JSON today, and how is that performing?</li>
</ul>"""

NOTES['snowflake-tables'] = """
<h3>Talk Track</h3>
<p>This is the foundational page — everything else in the storage section builds on it. Three table types with different durability and billing, then the capabilities that make Snowflake tables different from a conventional warehouse: zero-copy cloning, Time Travel, and MERGE. Lead with the table-type comparison, because choosing wrongly is a real and recurring cost mistake.</p>

<h3>Key Points</h3>
<ul>
  <li><strong>Permanent, Transient, Temporary</strong> differ on Time Travel (0–90 days, 0–1 day, 0–1 day), Fail-Safe (7 days, none, none), and storage billing. Transient is the answer for rebuildable staging data — customers often pay full Fail-Safe cost on tables they could regenerate.</li>
  <li><strong>Constraints are mostly informational.</strong> NOT NULL is enforced; UNIQUE, PRIMARY KEY, and FOREIGN KEY are NOVALIDATE and exist for tooling and the optimizer. Say this plainly — it surprises people migrating from an RDBMS, and it is better heard from you than discovered in production.</li>
  <li><strong>Zero-copy clone is metadata-only.</strong> No data is copied, so a full-size dev environment is instant and initially free, diverging in storage only as it changes. This is one of the strongest demo moments in the deck.</li>
  <li><strong>Time Travel queries the past without restoring a backup</strong> — by timestamp, offset, or query ID.</li>
  <li><strong>MERGE handles upserts and SCD Type 1 and 2</strong> atomically in one statement.</li>
  <li><strong>CHANGE_TRACKING is the prerequisite for Streams</strong> and the CDC story on the data engineering page.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>How do you create development and test environments today, and how long does a refresh take?</li>
  <li>Are you paying for Fail-Safe on staging tables you could rebuild from source?</li>
  <li>Do you rely on the database to enforce uniqueness and referential integrity? Let us talk about where that responsibility moves.</li>
  <li>How are you handling slowly changing dimensions today?</li>
</ul>"""

NOTES['snowflake-postgres'] = """
<h3>Talk Track</h3>
<p>Snowflake Postgres is a managed, production-grade Postgres running inside Snowflake — the same Postgres their developers already know, with the analytics platform on the other side of the wall instead of across an ETL pipeline. The strategic message: transactional and analytical data stop being two estates with a pipeline between them. Note the availability tag on the page and set expectations honestly.</p>

<h3>Key Points</h3>
<ul>
  <li><strong>It is real Postgres,</strong> not a compatibility layer. Existing apps, drivers, extensions, and developer skills carry over.</li>
  <li><strong>Zero-ETL to analytics:</strong> transactional data syncs to Snowflake automatically, with no separate tooling to build or operate. It can also write to Iceberg.</li>
  <li><strong>One platform, one bill, one governance model</strong> — Postgres sits alongside warehouses and Iceberg tables under Horizon Catalog, rather than being a separate system with its own access controls and audit trail.</li>
  <li><strong>Enterprise requirements are covered:</strong> automated HA and failover, customer-managed keys, private connectivity, and a single security perimeter with global compliance.</li>
  <li><strong>Mirroring is the mechanism</strong> behind the zero-ETL claim — always-on replication, configured once, with Live Views for freshness. There is a deep-dive page; go there if they press on how it actually works.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>Where does your Postgres run today, and who carries the pager for it?</li>
  <li>What moves transactional data into analytics right now, and how often does it break?</li>
  <li>How stale is the data your dashboards show against your operational systems?</li>
  <li>Are your application developers and your data team fighting over the same database?</li>
</ul>"""

NOTES['postgres-mirroring'] = """
<h3>Talk Track</h3>
<p>This is the how behind the zero-ETL claim on the Snowflake Postgres page. The important architectural distinction is push versus pull: a Postgres extension pushes change batches out, rather than Snowflake polling Postgres on a schedule. That is what makes sub-minute lag achievable without hammering the operational database.</p>

<h3>Key Points</h3>
<ul>
  <li><strong>Push-based CDC, not pull.</strong> The snowflake_cdc extension continuously pushes change batches into Iceberg change logs on object storage. No scheduled extract, no query load spikes against the source.</li>
  <li><strong>CREATE MIRROR is one command</strong> for an entire database or selected schemas. Schema changes such as ADD COLUMN are handled — this is the question every DBA asks, so raise it before they do.</li>
  <li><strong>Live Views deliver the freshness.</strong> Unapplied change batches are merged with the base table on the fly, so queries see data within seconds rather than waiting for the next apply cycle.</li>
  <li><strong>Transactional consistency is preserved.</strong> All tables move forward together in one transaction, landing exactly on a Postgres transaction boundary — never a half-applied multi-table change. This is the differentiator against naive per-table replication.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>What is your current replication mechanism, and what load does it place on the source database?</li>
  <li>Have you been bitten by a report reading two tables from different points in time?</li>
  <li>How do schema changes flow through your pipeline today — automatically, or as a ticket?</li>
  <li>What lag can your business actually tolerate between transaction and analysis?</li>
</ul>"""

ANCHOR = '  <script src="../bg.js"></script>'


def main():
    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    os.chdir(root)
    done = 0
    for slug, body in NOTES.items():
        path = 'pages/%s.html' % slug
        src = open(path, encoding='utf-8').read()
        if 'window.PAGE_NOTES' in src:
            print('  skip %s — already has notes' % slug)
            continue
        if ANCHOR not in src:
            print('  FAIL %s — anchor not found' % slug)
            continue
        for bad in ('`', '${'):
            if bad in body:
                print('  FAIL %s — note body contains %r' % (slug, bad))
                return 1
        block = '  <script>\n    window.PAGE_NOTES = `%s`;\n  </script>\n' % body
        src = src.replace(ANCHOR, block + ANCHOR, 1)
        open(path, 'w', encoding='utf-8').write(src)
        print('  added %s (%d words)' % (slug, len(re.sub(r'<[^>]+>', ' ', body).split())))
        done += 1
    print('\n%d pages updated' % done)
    return 0


if __name__ == '__main__':
    sys.exit(main())
