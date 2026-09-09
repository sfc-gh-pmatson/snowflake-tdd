// ─────────────────────────────────────────────────────────────
// notes/notes_template.js — TEMPLATE, not an active note set
// ─────────────────────────────────────────────────────────────
//
// HOW TO MAKE THIS YOUR OWN:
//   1. Copy this file to notes/<yourid>.js  (e.g. notes/jsmith.js)
//   2. Change `id` to match your filename, and set `name` to your
//      display name as it should appear in the notes picker.
//   3. Edit the notes below. Every page's built-in talk track is
//      pre-filled here as a starting point — rewrite what you want
//      to change, and DELETE any page you have no opinion on so it
//      falls back to the built-in notes automatically.
//   4. Reload with ./serve.sh and pick your name from the top bar.
//
// This file itself is skipped by the loader, so it never appears in
// the picker. Only your renamed copy will.
//
// KEY = page filename without .html ('index' for the root page)
//
// Markup conventions:
//   <h3>Section Header</h3>
//   <p>Paragraph text.</p>
//   <ul><li><strong>Lead-in:</strong> detail.</li></ul>
//
// NOTE ON VISIBILITY: files in this folder ship with the deployed app
// and are publicly readable by anyone in the account who can reach it.
// Keep them free of anything you would not want a colleague reading.
//
// Pages with no built-in notes yet (add a key for any of these if you
// want your own): coming-soon, data-engineering, postgres-mirroring, snowflake-postgres, snowflake-tables, storage-clustering, storage-micropartitions, storage

window.TDD_NOTES_REGISTER({

  id: 'CHANGEME',      // must match this file's name: notes/<id>.js
  name: 'Your Name',   // shown in the notes picker

  notes: {

    'ai-data-cloud': `
<h3>Talk Track</h3>
<p>The AI Data Cloud is Snowflake's vision for what a data platform looks like when AI is a first-class capability — not an add-on. The key insight: most AI projects fail not because of model quality, but because of data quality, data access, and governance. Snowflake solves the data problem so teams can focus on the model problem.</p>
<p>This slide positions Snowflake as the foundation for enterprise AI — the place where your data already lives, plus native AI tooling on top of it.</p>

<h3>Key Points</h3>
<ul>
  <li>AI runs <strong>where the data lives</strong> — no data movement, no RAG pipelines to external systems, governance enforced at the compute layer.</li>
  <li>Three layers: <strong>governed data</strong> (Horizon), <strong>AI functions</strong> (Cortex), <strong>AI apps</strong> (Agents, CoWork, Analyst).</li>
  <li>Supports the full AI stack: SQL-native inference, fine-tuning, agent orchestration, and code generation in one platform.</li>
  <li>Data sharing means customers can <strong>license AI models and datasets</strong> through the Marketplace — not just share raw tables.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>Where is your team spending most of their time in AI projects — is it data prep, model building, or production deployment?</li>
  <li>Are you running AI inference on data that lives outside Snowflake today? What does that data movement cost you?</li>
  <li>Who in your org is trying to use AI but hitting data access or governance blockers?</li>
</ul>`,

    'apache-spark': `
<h3>Talk Track</h3>
<p>Snowflake gives customers two paths to run Apache Spark workloads: the Snowflake Connector for Spark (no code changes, repoint existing jobs) and Snowpark — a Snowflake-native DataFrame API for Python, Java, and Scala that runs natively in Snowflake compute. Together, they let teams modernize Spark workloads without ripping out existing investments.</p>

<h3>Key Points</h3>
<ul>
  <li><strong>Zero migration required:</strong> The Spark connector lets existing PySpark and Scala jobs read and write Snowflake tables directly — no rewrite, no data movement to a separate cluster.</li>
  <li><strong>Snowpark is the native path:</strong> For new workloads, Snowpark's Python/Java/Scala DataFrame API pushes compute into Snowflake — no cluster to manage, no infrastructure to size.</li>
  <li><strong>Performance:</strong> Snowpark runs on Snowflake's elastic compute, scales automatically, and doesn't require tuning executor/memory settings like a Spark cluster does.</li>
  <li><strong>Cost model:</strong> You pay for the Snowflake warehouse credits used during execution — not for an always-on Spark cluster.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>Are you running Spark today — on Databricks, EMR, or self-managed?</li>
  <li>What's the primary use case — ETL/ELT, ML feature engineering, or complex transformations?</li>
  <li>How much time does your team spend on Spark infrastructure management vs. writing business logic?</li>
</ul>`,

    'apps-collaboration': `
<h3>Talk Track</h3>
<p>The Applications & Collaboration story is about how Snowflake helps you generate revenue from your data, not just analyze it. You can build applications that run inside your customers' Snowflake accounts (Native Apps), share live data and AI models with partners without copying anything (Zero-ETL Sharing), and tap into 750+ third-party data and SaaS providers through the Marketplace. The key architecture insight: everything runs inside the Snowflake security boundary — no data movement, no integration complexity, no separate infrastructure.</p>

<h3>Key Points</h3>
<ul>
  <li><strong>Build:</strong> Native Apps run code inside the customer's account. Your app accesses their data; they never expose raw data to you. Commercialize on Marketplace.</li>
  <li><strong>Share:</strong> Zero-ETL sharing — consumers query your live data via SQL. No exports, no pipelines, no copies. Works across clouds and organizations.</li>
  <li><strong>Connect:</strong> 750+ data sources on Snowflake Marketplace. Spend your Snowflake contract on third-party data and apps — no separate purchasing process.</li>
  <li><strong>Data Clean Rooms:</strong> Collaborate on sensitive data without either party exposing raw records. Privacy-preserving joins for marketing, healthcare, finance.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>Do you share data with partners, customers, or other business units today — how are you doing that, and what's the data freshness?</li>
  <li>Are there external data sources (demographics, firmographics, weather, financial) you're paying for through separate vendors?</li>
  <li>Are you building applications that need to access customer data — could that run inside the customer's Snowflake account instead of extracting the data?</li>
</ul>`,

    'bcdr': `
<h3>Talk Track</h3>
<p>Business continuity for a data platform used to mean expensive standby clusters and manual failover procedures. Snowflake's approach is continuous replication with automated client redirect — so when a region goes down, your applications reconnect to the secondary automatically, often with no code changes. The primary and secondary stay synchronized to within seconds.</p>

<h3>Key Points</h3>
<ul>
  <li><strong>Continuous replication:</strong> Changes stream to the secondary in near-real-time. No scheduled sync windows, no batch replication jobs.</li>
  <li><strong>Client redirect:</strong> Connection strings point to a Snowflake account URL. On failover, Snowflake redirects traffic to the secondary — most drivers handle this transparently.</li>
  <li><strong>Failover Groups:</strong> Replicate databases, shares, and integrations as a unit. A single failover command promotes the secondary and all associated objects atomically.</li>
  <li><strong>No standby cost during normal operation:</strong> Secondary warehouses don't run until they're needed — you pay for storage, not idle compute.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>Have you had a data platform outage in the last 2 years? What was the business impact and recovery time?</li>
  <li>What's your current RTO/RPO requirement from your business or compliance team?</li>
  <li>Are there specific workloads (reporting, BI dashboards, customer-facing APIs) that need to be resilient independent of internal ETL jobs?</li>
</ul>`,

    'cli-git': `
<h3>Talk Track</h3>
<p>The Snowflake CLI and Git Integration bring Snowflake development into modern software workflows — version control, CI/CD pipelines, and developer tooling. Teams can manage Snowflake objects, deploy code, and sync repositories directly from the command line or GitHub Actions.</p>

<h3>Key Points</h3>
<ul>
  <li><strong>Snowflake CLI (snow):</strong> A single command-line tool for managing Snowflake objects, running SQL, deploying Snowpark apps, and managing SPCS services — replaces SnowSQL and simplifies CI/CD integration.</li>
  <li><strong>Git integration:</strong> Snowflake can sync directly with a GitHub or GitLab repository. Execute SQL files, Snowpark procedures, and Streamlit apps straight from the repo without staging files manually.</li>
  <li><strong>DevOps-native:</strong> Works with GitHub Actions, GitLab CI, and Terraform — Snowflake objects become infrastructure-as-code that goes through the same PR and review process as application code.</li>
  <li><strong>DCM (Database Change Management):</strong> Declarative schema management built into Snowflake — define tables, roles, and objects in YAML manifests and let Snowflake handle the diff and apply.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>How do you manage Snowflake schema changes today — manual DDL scripts, Liquibase, Flyway, or something else?</li>
  <li>Are your data engineers or analytics engineers already using dbt or a CI/CD pipeline?</li>
  <li>How long does it take to promote a Snowflake change from dev to production?</li>
</ul>`,

    'compute': `
<h3>Talk Track</h3>
<p>Snowflake\'s compute model is fundamentally different from traditional data warehouses. Compute is fully decoupled from storage, which means you can run as many virtual warehouses as you need against the same data simultaneously — no resource contention, no data copying.</p>

<h3>Key Differentiators</h3>
<ul>
  <li><strong>Pay only for what you use:</strong> Warehouses suspend automatically when idle and resume in seconds. Customers stop paying the moment queries stop running.</li>
  <li><strong>Three scaling levers:</strong> Scale Up (bigger warehouse for complex queries), Scale Across (multi-cluster for concurrency), Scale Out (workload isolation across separate warehouses).</li>
  <li><strong>Specialized compute:</strong> Adaptive Warehouses (Gen2) auto-tune for mixed workloads. QAS offloads large scans to serverless. Snowpark-Optimized warehouses provide 16x memory for ML.</li>
  <li><strong>Serverless by default:</strong> Tasks, Snowpipe, Cortex AI functions, and Search Optimization run on Snowflake-managed compute — no warehouse required, billed per second.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>What are your primary compute workloads — BI queries, ETL, ML training, or AI inference?</li>
  <li>Do you have concurrency problems (too many users hitting the same warehouse) or query performance problems (individual slow queries)?</li>
  <li>How do you currently manage and attribute compute costs to different teams?</li>
</ul>`,

    'compute-scaling': `
<h3>Talk Track</h3>
<p>Snowflake gives three scaling levers, each solving a different problem. Scale Across for workload isolation, Scale Up for query complexity, Scale Out for concurrency and adaptive throughput.</p>
<h3>The Three Levers</h3>
<ul>
  <li><strong>Scale Across:</strong> Different teams fighting over the same warehouse? Give each workload its own warehouse. Full isolation of size, cost, and suspension.</li>
  <li><strong>Scale Up:</strong> Slow single query? Bigger warehouse = more nodes = more parallel processing. Doubling size roughly halves query time at the same credit cost.</li>
  <li><strong>Scale Out:</strong> Too many concurrent users queueing? Multi-Cluster Warehouses add identical clusters. Adaptive Warehouses auto-tune throughput within a single warehouse.</li>
</ul>`,

    'compute-serverless': `
<h3>Talk Track</h3>
<p>An important Snowflake concept that many customers miss: a growing share of Snowflake features run on <em>Snowflake-managed serverless compute</em> &#8212; not user-managed virtual warehouses. These services auto-scale, auto-suspend, and bill per second with zero idle cost. Customers often don&#39;t realize these exist as a separate billing line.</p>

<h3>Why It Matters</h3>
<ul>
  <li>No warehouse sizing, no auto-suspend configuration, no cluster management</li>
  <li>Snowflake handles capacity and scaling internally</li>
  <li>Perfect for event-driven and scheduled workloads where warehouse overhead is wasteful</li>
  <li>Often cheaper for bursty workloads than keeping a warehouse running</li>
</ul>

<h3>Key Services</h3>
<ul>
  <li><strong>Serverless Tasks:</strong> Run SQL or Snowpark on a schedule or triggered by a stream. No warehouse = no idle credits. Only pay while code is running.</li>
  <li><strong>Snowpipe / Streaming:</strong> Snowpipe handles file-triggered ingestion (S3 events, GCS notifications). Snowpipe Streaming handles SDK-pushed event data at sub-second latency &#8212; critical for IoT, clickstreams, CDC.</li>
  <li><strong>Cortex AI Compute:</strong> COMPLETE, CLASSIFY, EXTRACT, SUMMARIZE &#8212; all serverless. No warehouse needed for LLM inference. Billed per token.</li>
  <li><strong>Search Optimization Service:</strong> Maintains equality and range search indexes on table columns. Background serverless job &#8212; customers just enable it per column and point lookups get fast.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>Are you running scheduled SQL pipelines with a warehouse that sits idle most of the day? (Serverless Tasks candidate)</li>
  <li>Do you have streaming or event-driven data sources? (Snowpipe Streaming)</li>
  <li>Are you doing LLM inference today outside of Snowflake? (Cortex AI Compute)</li>
</ul>`,

    'compute-specialized': `
<h3>Talk Track</h3>
<p>Beyond standard warehouse sizing, Snowflake has three specialized compute features that address specific performance and workload scenarios without requiring customers to manage separate infrastructure.</p>

<h3>Positioning</h3>
<ul>
  <li><strong>Adaptive Warehouses (Gen2):</strong> This is the new default for all warehouses. The warehouse auto-tunes itself for mixed query patterns using QTM and MQPL settings. Most customers benefit immediately just by using a Gen2 warehouse &#8212; no config required.</li>
  <li><strong>Query Acceleration Service (QAS):</strong> Best for dashboards with a mix of fast queries and occasional large scan queries (the \u201clong tail\u201d problem). QAS handles the large scans on serverless compute so the warehouse isn&#39;t bogged down. Pay only when QAS kicks in.</li>
  <li><strong>Snowpark-Optimized:</strong> A separate warehouse type with 16x more memory per node. Required for training ML models, running PyTorch/XGBoost on large datasets, or heavy Snowpark Python UDFs that need to hold large objects in memory.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>Do you have a mix of fast and slow queries hitting the same warehouse? (QAS candidate)</li>
  <li>Are you training ML models or running heavy Python on Snowflake? (Snowpark-Optimized candidate)</li>
  <li>Are you on Gen1 warehouses still? (Adaptive/Gen2 upgrade conversation)</li>
</ul>`,

    'compute-warehouses': `
<h3>Talk Track</h3>
<p>The Virtual Warehouse is Snowflake\'s compute unit. Unlike traditional data warehouses, compute is completely separated from storage — you can run ten different warehouses against the same data tables at the same time with zero resource contention.</p>

<h3>Isolation Model</h3>
<ul>
  <li>Every warehouse is a private, isolated cluster of compute nodes</li>
  <li>Multiple warehouses share the same underlying data without interfering with each other</li>
  <li>A BI warehouse running Tableau queries never impacts a concurrent ETL warehouse loading data</li>
</ul>

<h3>Auto-Suspend / Auto-Resume</h3>
<ul>
  <li>Warehouses suspend automatically after a configurable idle timeout (minimum 1 minute)</li>
  <li>They resume instantly (2-3 seconds) when a new query arrives</li>
  <li>Credits are only consumed while the warehouse is actively running — no idle cost</li>
  <li>This is the core of Snowflake\'s pay-per-use model</li>
</ul>

<h3>Caching Tiers</h3>
<ul>
  <li><strong>Result Cache:</strong> Identical query in last 24 hours? Returned instantly at zero credit cost</li>
  <li><strong>Data Cache:</strong> Frequently accessed micro-partitions cached on warehouse local SSD. Dramatically reduces remote storage reads</li>
  <li><strong>Metadata Cache:</strong> Row counts, MIN/MAX, NULL counts answered without touching data at all</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>Do you have workloads that run on a schedule vs. ad-hoc? (Good auto-suspend candidates)</li>
  <li>Are you running mixed workloads — BI, ETL, and ML — on the same cluster today?</li>
</ul>`,

    'containers': `
<h3>Talk Track</h3>
<p>Snowpark Container Services (SPCS) lets customers run any containerized workload — custom AI models, third-party applications, GPU inference, long-running services — directly inside Snowflake. The container has native access to Snowflake data, governance, and network policies without any data leaving the platform.</p>

<h3>Key Points</h3>
<ul>
  <li><strong>Full container flexibility:</strong> Any Docker image can run in SPCS — LLMs, ML inference servers, APIs, Streamlit apps, or internal tools. No data movement to an external cluster needed.</li>
  <li><strong>GPU compute available:</strong> SPCS supports GPU-accelerated compute pools for model training and inference workloads that require more than CPU.</li>
  <li><strong>Governed by default:</strong> SPCS services run inside the customer's Snowflake account. Snowflake's RBAC, network policies, and private link settings apply automatically.</li>
  <li><strong>Public or private endpoints:</strong> Services can expose a public HTTPS endpoint (useful for demos and internal tools) or remain private and accessible only from within Snowflake.</li>
  <li><strong>Replaces external infrastructure:</strong> Teams no longer need a separate Kubernetes cluster or EC2 instance to host model serving endpoints or custom applications alongside their Snowflake data.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>Are you running any ML models or APIs outside of Snowflake that need to access Snowflake data?</li>
  <li>Do you have GPU workloads today — model training, fine-tuning, or inference?</li>
  <li>How do you currently manage model serving infrastructure?</li>
</ul>`,

    'cortex-agents': `
<h3>Talk Track</h3>
<p>Cortex Agents are where Snowflake crosses the line from "AI functions you call" to "AI that acts on your behalf." An agent doesn't answer a single question — it plans a strategy, calls tools, observes results, and iterates until the question is fully answered. The key architecture decision: every tool call (SQL queries, search, Python functions, REST APIs) runs inside Snowflake's security boundary with RBAC applied. The agent can only see what the calling user can see.</p>

<h3>Key Points</h3>
<ul>
  <li><strong>Reasoning loop:</strong> Plan → Act → Observe → Decide. The agent orchestrates multiple tool calls to answer complex questions that a single LLM call can't handle.</li>
  <li><strong>Tools available:</strong> SQL Executor (generates and runs queries), Cortex Search (RAG on your documents), Semantic Views (NL-to-SQL), Python UDFs, MCP Servers, REST APIs.</li>
  <li><strong>Governance at every step:</strong> RBAC applies to every SQL query the agent generates. The agent can't retrieve data the user doesn't have access to. Every action is audited.</li>
  <li><strong>Differentiated vs LangChain/CrewAI:</strong> No external orchestration server, no data copy to a vector store, no separate API key management. Built into the platform.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>Are there questions your analysts ask that require joining multiple data sources and multiple steps — the kind that take an analyst 30 minutes to answer?</li>
  <li>Do you have a use case for an internal AI assistant that can query your data and answer questions in plain English?</li>
  <li>How are you thinking about governance for agentic AI — is it a blocker today that AI could access data users shouldn't see?</li>
</ul>`,

    'cortex-ai': `
<h3>Talk Track</h3>
<p>Cortex AI is Snowflake's complete AI platform — not a single feature, but a full stack from data access through LLM inference to AI app deployment. The key architectural insight is that all of it runs inside the Snowflake security boundary. Your data never leaves governance. You get access to the best frontier models from OpenAI, Anthropic, Meta, Mistral, and Snowflake's own Arctic models — selected per use case, not locked in.</p>

<h3>Key Points</h3>
<ul>
  <li><strong>Apps layer:</strong> Snowflake CoWork (enterprise AI assistant) and CoCo (coding IDE) — end-user AI applications built on the platform.</li>
  <li><strong>APIs layer:</strong> Cortex Agents (multi-step reasoning), AI Functions (SQL-native LLM calls), Agentic ML (model inference).</li>
  <li><strong>Context layer:</strong> Cortex Sense Runtime, MCP connectors, Semantic Views, Business Logic — how agents understand your specific data.</li>
  <li><strong>Model choice:</strong> 30+ models across 8 providers. Swap models without changing your application code. Pay by token, no minimum commitment.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>Where are you running AI inference today — is it hitting an external API with data exported from Snowflake?</li>
  <li>Who are the target users for AI in your org — are they business analysts, data engineers, or customer-facing employees?</li>
  <li>Do you have concerns about sending sensitive data to external AI APIs? That's a core reason customers move to Cortex.</li>
</ul>`,

    'cortex-ai-functions': `
<h3>Talk Track</h3>
<p>The built-in AI functions are Snowflake's most accessible AI entry point — they work like any SQL function. A data analyst who's never touched a model can write <code>SELECT AI_SENTIMENT(review_text) FROM reviews</code> and get sentiment scores on millions of rows. No Python, no model deployment, no API keys. The functions run server-side on Snowflake's GPU infrastructure with full governance applied.</p>

<h3>Key Points</h3>
<ul>
  <li><strong>Zero infrastructure:</strong> No model hosting, no vector DB, no embedding pipeline to build. Call the function; get the result.</li>
  <li><strong>Composable in SQL:</strong> Mix AI_CLASSIFY + AI_EXTRACT + AI_SENTIMENT in a single SELECT. The query optimizer handles parallelism and batching automatically.</li>
  <li><strong>For every data type:</strong> Text, documents (PDF/image via AI_PARSE_DOCUMENT), audio (AI_TRANSCRIBE), and structured columns. One platform for all modalities.</li>
  <li><strong>Custom AI Functions:</strong> Define your own LLM-backed function with a custom prompt, model, and output schema — callable from any SQL query.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>Are there unstructured text columns in your data that analysts can't currently query for insights — reviews, tickets, emails?</li>
  <li>Are you spending engineering time building classification or extraction pipelines in Python that could be replaced with a SQL function?</li>
  <li>Do you have PDFs or scanned documents you need to extract structured data from? AI_PARSE_DOCUMENT + AI_EXTRACT handles that in one query.</li>
</ul>`,

    'cortex-analyst': `
<h3>Talk Track</h3>
<p>Cortex Analyst is natural language to SQL — but accurate enough to use in production. The key is Semantic Views: you define your business metrics, dimensions, relationships, and terminology once, and Cortex Analyst uses that definition to generate SQL that reflects your actual business logic, not just the table schema. Business users ask questions like "what were top-selling products last quarter by region?" and get accurate SQL and charts, not hallucinated joins.</p>

<h3>Key Points</h3>
<ul>
  <li><strong>Semantic Views are the secret:</strong> Define fact tables, dimensions, metrics, and synonyms. Cortex Analyst uses this to constrain query generation — it knows that "revenue" maps to a specific calculated field, not just any column named "amount."</li>
  <li><strong>Verified Query Representations (VQRs):</strong> Seed the model with example question-to-SQL pairs from your data team. Proven queries are returned verbatim, not regenerated.</li>
  <li><strong>REST API:</strong> Embed Analyst in any internal tool — Streamlit apps, Slack bots, internal portals. The REST API handles the NL→SQL→result pipeline.</li>
  <li><strong>Accuracy vs generic NL-to-SQL:</strong> Most NL-to-SQL fails because it doesn't know business semantics. Semantic Views encode that knowledge explicitly.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>Do you have business users who need data answers but have to go through an analyst or data team to get a SQL query written?</li>
  <li>Have you tried NL-to-SQL tools before? Where did they fail — was it incorrect joins, wrong metric definitions, or ambiguous column names?</li>
  <li>Do you have a defined set of business metrics (revenue, ARR, churn rate) that are calculated consistently across your org?</li>
</ul>`,

    'cortex-code': `
<h3>Talk Track</h3>
<p>Cortex Code (CoCo) is Snowflake's AI coding assistant — specifically tuned for the Snowflake platform. Unlike generic coding assistants, CoCo understands your actual data catalog, your schemas, your query history, and the Snowflake-specific APIs. It's not just autocomplete; it's an agent that can write queries against your real tables, build Streamlit apps, and debug issues by querying the platform itself.</p>

<h3>Key Points</h3>
<ul>
  <li><strong>Snowflake-aware context:</strong> CoCo has access to your table schemas, recent query history, and Snowflake documentation. It doesn't generate generic SQL — it generates SQL against your actual data.</li>
  <li><strong>Full agentic loop:</strong> CoCo can run queries, interpret results, and iterate. Ask it to "find all tables with PII and add masking policies" — it will search, analyze, and apply.</li>
  <li><strong>Skills and plugins:</strong> Extensible with custom skills for domain-specific workflows. Snowflake-internal teams ship skills for account analysis, customer intelligence, and more.</li>
  <li><strong>Desktop IDE:</strong> Runs as a native desktop application with a persistent workspace, git integration, and the full Snowflake CLI available.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>How much time do your data engineers and analysts spend writing boilerplate SQL, documentation, or debugging queries?</li>
  <li>Do you have Snowflake-specific tasks — like data governance policy application or performance analysis — that require deep platform knowledge?</li>
  <li>Are you looking for an AI coding assistant that your team can use safely without data leaving your governance boundary?</li>
</ul>`,

    'cortex-search': `
<h3>Talk Track</h3>
<p>Cortex Search is Snowflake's built-in hybrid search service — vector similarity plus BM25 keyword scoring combined in one service that stays current automatically. You CREATE CORTEX SEARCH SERVICE and point it at a column, set a TARGET_LAG, and Snowflake handles indexing, embedding, and refresh. The service is callable from SQL, the REST API, or directly from Cortex Agents. No separate vector database to maintain.</p>

<h3>Key Points</h3>
<ul>
  <li><strong>Hybrid retrieval:</strong> Combines dense vector embeddings (semantic similarity) with BM25 sparse retrieval (exact keyword matching). Better than either alone — no tuning required.</li>
  <li><strong>Always fresh:</strong> TARGET_LAG keeps the index up-to-date as new rows arrive. No manual re-indexing, no batch jobs.</li>
  <li><strong>RAG foundation:</strong> Cortex Search is the retrieval layer for RAG pipelines. Pair it with AI_COMPLETE for a full RAG workflow in two Snowflake objects.</li>
  <li><strong>No separate infra:</strong> Pinecone, Weaviate, Chroma — these are all external services you'd otherwise need to host, sync, and govern separately. Cortex Search eliminates all of that.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>Are you building or using a RAG pipeline today? Where does the vector store live, and how are you keeping it in sync with source data?</li>
  <li>Do you have document search or enterprise search use cases where users need to find information across a large corpus of text?</li>
  <li>Are you spending engineering time managing a separate vector database alongside Snowflake?</li>
</ul>`,

    'cortex-sense': `
<h3>Talk Track</h3>
<p>Cortex Sense is the context runtime that powers Snowflake CoCo and CoWork. Instead of requiring customers to manually model semantic views or configure every metric definition, Cortex Sense automatically builds and continuously refreshes a business context index from data across the entire Snowflake estate — connectors, semantic views, unstructured docs, and business logic. Every AI surface inherits this context from day one.</p>

<h3>Key Points</h3>
<ul>
  <li><strong>Zero manual modeling:</strong> Cortex Sense discovers and indexes context automatically — schema metadata, lineage, query patterns, Semantic Views, and document stores.</li>
  <li><strong>Four source categories:</strong> Ecosystem connectors (dbt, Databricks, Tableau), Structured Knowledge (Semantic Views, lineage), Unstructured Knowledge (Cortex Search, wikis, SharePoint), and Business Logic (Glossary, Knowledge Graph, Skills).</li>
  <li><strong>Continuously refreshed:</strong> As schemas evolve, new data lands, or business definitions change, Cortex Sense updates its internal index automatically.</li>
  <li><strong>Proven accuracy gain:</strong> Agentic Search on unstructured data boosted agent answer accuracy from 5% to 67% in enterprise document scenarios.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>How do your analysts currently find which table or metric to use for a given question?</li>
  <li>Do you have business glossary terms or semantic definitions managed somewhere today?</li>
  <li>How often do schema changes break existing dashboards or reports?</li>
</ul>`,

    'cortex-sense-skills': `
<h3>Talk Track</h3>
<p>Curated Business Agent Skills are pre-built, composable skill packs for Sales, Marketing, and Finance — grounded in the customer's Cortex Sense context from day one. Each skill is a discrete, callable capability (like Client 360 or Variance Analysis) that can be configured, combined, and extended without starting from scratch.</p>

<h3>Key Points</h3>
<ul>
  <li><strong>Pre-built for three core functions:</strong> Sales (client intel, deal tracking, call summaries), Marketing (campaign briefs, audience segmentation, competitive watch), Finance (variance analysis, forecasting, spend analysis).</li>
  <li><strong>Grounded out of the box:</strong> Each skill inherits the customer's Cortex Sense context — so "revenue" means what the customer's business glossary says it means, not a generic LLM interpretation.</li>
  <li><strong>Point-and-configure:</strong> Skills are customizable — prompts, tools, and metric definitions can be adjusted for each customer's business without writing new agents.</li>
  <li><strong>Composable:</strong> Skills can be combined into multi-step workflows, extended with custom skills, or published as reusable components via Agent Studio.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>Which business function would benefit most from an AI agent today — sales, marketing, or finance?</li>
  <li>Do your teams have well-defined metrics and KPIs, or is there ambiguity in definitions?</li>
  <li>What would it mean for your Sales or Finance team to have an agent that already understands your data?</li>
</ul>`,

    'cost-management': `
<h3>Talk Track</h3>
<p>Snowflake's FinOps capabilities are built into the platform — no separate cost monitoring tool required. Resource Monitors, Budgets, Query Acceleration Service, and Cost Explorer give customers real-time visibility, automatic guardrails, and optimization recommendations across compute, storage, and serverless services.</p>

<h3>Key Points</h3>
<ul>
  <li><strong>Resource Monitors:</strong> Set credit limits on warehouses or at the account level. Automatically suspend, notify, or take action when thresholds are hit — prevents runaway queries from blowing a budget.</li>
  <li><strong>Budgets:</strong> Org-level and account-level budgets with alerting. Allocate spend by team, project, or cost center using custom budgets and tags.</li>
  <li><strong>Query Acceleration Service:</strong> Automatically offloads large scans and parallel parts of queries to additional compute — improves performance without upsizing the warehouse.</li>
  <li><strong>ACCOUNT_USAGE views:</strong> Every credit, storage byte, query, and user action is logged in Snowflake's own ACCOUNT_USAGE schema — query it with SQL to build any cost report you need.</li>
  <li><strong>Storage Lifecycle Policies:</strong> Move infrequently accessed data to cheaper COOL/COLD tiers automatically without changing queries.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>How do you manage Snowflake costs today — do you have visibility into which teams or workloads are driving spend?</li>
  <li>Have you had any surprise billing events — runaway queries, unexpected storage growth?</li>
  <li>Do you do any chargeback or showback to internal teams for Snowflake usage?</li>
</ul>`,

    'cpu-gpu': `
<h3>Talk Track</h3>
<p>Snowflake has two distinct compute planes that often confuse customers: Virtual Warehouses (CPU-based, SQL-optimized) and SPCS Compute Pools (GPU or CPU containers). Virtual Warehouses are the primary compute for all SQL workloads — they auto-suspend, scale horizontally with multi-cluster, and are sized in T-shirt sizes. Compute Pools are container infrastructure that runs arbitrary code: ML training, model serving, APIs, heavy Python — where you need a GPU, persistent processes, or custom runtimes.</p>

<h3>CPU — Virtual Warehouses</h3>
<ul>
  <li><strong>Sizing:</strong> XS to 6XL. Each size doubles the credits/hour and the compute resources. Right-size with query profiling — most OLAP queries run fine on M or L.</li>
  <li><strong>Multi-Cluster (MCW):</strong> Horizontally scales for concurrency, not query size. If you have 500 simultaneous users, MCW spins up additional clusters — not bigger nodes.</li>
  <li><strong>Serverless:</strong> Snowflake manages sizing automatically. Best for tasks (Snowpipe, dynamic tables, search optimization) — not interactive user queries.</li>
</ul>

<h3>GPU — SPCS Compute Pools</h3>
<ul>
  <li><strong>GPU_NV_S/M/L:</strong> NVIDIA A10G cards for inference. The S (1 GPU) is cost-effective for batch inference; L (8 GPUs) for high-throughput serving.</li>
  <li><strong>GPU_NV_XS:</strong> Single A10G, lowest cost. Good for dev/test of ML inference services.</li>
  <li><strong>Use case:</strong> Custom model endpoints, fine-tuning, heavy embedding generation, real-time inference APIs — anything that requires a GPU or a persistent process.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>Are your queries queuing? (MCW candidate) Or running slow? (bigger warehouse or clustering)</li>
  <li>Do you need to run custom ML models that aren't covered by Cortex AI? (GPU compute pool)</li>
  <li>Are you building low-latency inference APIs? (SPCS service with GPU pool + endpoint)</li>
</ul>`,

    'data-clean-rooms': `
<h3>Talk Track</h3>
<p>Data Clean Rooms solve a very specific and very common problem: two organizations want to run analytics on the intersection of their data, but neither can share their raw records with the other. Classic example: a retailer and an ad network want to measure campaign attribution — did the customers who saw the ad actually buy? The retailer has purchase data, the ad network has impression data. With a DCR, they can compute the overlap and attribution without either party ever seeing the other's customer records.</p>

<h3>Key Points</h3>
<ul>
  <li><strong>No raw data exposure:</strong> The DCR returns only aggregate results. Individual records are never visible to the other party — enforced by the clean room template, not just policy.</li>
  <li><strong>Built on Native Apps:</strong> Snowflake DCR is implemented as a Native App — the analysis logic is deployed into both parties' accounts, governed by Snowflake's security boundary.</li>
  <li><strong>Template-driven:</strong> Approved analyses are defined in Jinja templates. Neither party can run arbitrary SQL against the other's data — only pre-approved queries.</li>
  <li><strong>Key verticals:</strong> Advertising/media measurement, healthcare research, financial data consortiums, retail-bank partnerships.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>Are there partner organizations you want to do joint analytics with but can't share raw data?</li>
  <li>Do you have marketing attribution use cases that require matching your customer data against an ad platform's impression data?</li>
  <li>Are there regulatory constraints (HIPAA, GDPR) that prevent direct data sharing with research partners?</li>
</ul>`,

    'data-lakehouse': `
<h3>Talk Track</h3>
<p>The traditional data architecture forced a tradeoff: data lakes were cheap and open but unmanaged and slow; data warehouses were fast and governed but expensive and closed. The lakehouse pattern is the answer — open formats on your storage, with warehouse performance and governance on top. Snowflake's version of this is zero-copy: your Spark jobs write Iceberg, Snowflake reads it, with no ETL in between.</p>

<h3>Key Points</h3>
<ul>
  <li><strong>Access in place:</strong> Query Iceberg, Delta, and Parquet on S3/ADLS/GCS. No ingestion, no copies. The file Spark wrote is the file Snowflake reads.</li>
  <li><strong>AI-ready:</strong> Cortex AI functions, Cortex Agents, and Cortex Analyst all run directly on lakehouse data. No export to a separate vector store or AI platform.</li>
  <li><strong>Unified governance:</strong> Masking policies, row-level security, and RBAC from Snowflake Horizon apply to all lakehouse data — even tables written by other engines.</li>
  <li>Key differentiator vs Databricks: governance applies to all readers, not just Spark sessions. Snowflake enforces policy even when Databricks queries the same file.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>Do you have data in S3 or ADLS today that you're not able to query efficiently without moving it first?</li>
  <li>Are different teams using different engines (Spark, Snowflake, dbt) to access the same data? Are you managing duplicate copies?</li>
  <li>How are you enforcing governance on data in your lake today — is it consistent across all access patterns?</li>
</ul>`,

    'data-mesh': `
<h3>Talk Track</h3>
<p>Data Mesh is an organizational architecture pattern — federated ownership of data products by domain teams, with a shared infrastructure layer underneath. Snowflake is the platform that makes Data Mesh practical at scale: Snowflake's Data Sharing lets domain teams publish live data products to other teams without copying data, while Horizon governance ensures each team maintains control over who accesses their data and under what conditions.</p>

<h3>Key Points</h3>
<ul>
  <li><strong>Data products = live shares:</strong> A domain team publishes a curated Snowflake database as a share. Consumers query it live — no ETL pipeline, no data duplication, always current.</li>
  <li><strong>Federated governance:</strong> Each domain team sets masking policies and row access rules on their own data. The central team defines standards; domain teams enforce them locally.</li>
  <li><strong>Marketplace as the discovery layer:</strong> Snowflake's Internal Marketplace lets teams publish data products with metadata, documentation, and SLAs. Consumers request access through a governed workflow.</li>
  <li><strong>Decentralized compute:</strong> Each domain team has its own warehouse. They're billed for their own usage. Central IT doesn't bottleneck data access.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>Is your current data architecture centralized (one team owns all pipelines) or are you trying to move toward domain ownership?</li>
  <li>How long does it take for a product team to get access to data from another team's system today?</li>
  <li>Are there teams who refuse to use Snowflake because they don't want to lose control over their data? Data Sharing addresses that concern directly.</li>
</ul>`,

    'data-sharing': `
<h3>Talk Track</h3>
<p>Zero-ETL Data Sharing is one of Snowflake's most differentiated capabilities. Traditional data sharing requires extracting, transforming, and loading data into the recipient's system — with all the pipeline complexity, freshness lag, and governance headaches that implies. Snowflake sharing is fundamentally different: the provider creates a share object pointing at live tables, the consumer mounts it as a read-only database, and they query your actual live data with no ETL, no staging, no copies.</p>

<h3>Key Points</h3>
<ul>
  <li><strong>Zero copies:</strong> Consumers query your actual storage — no data duplication, always live and consistent.</li>
  <li><strong>No compute cost to provider:</strong> The consumer's warehouse runs the query. You don't pay for their analytics.</li>
  <li><strong>Works across clouds and regions:</strong> Replication handles cross-region automatically; consumers query their regional replica.</li>
  <li><strong>Listings vs Direct Shares:</strong> Direct shares are account-to-account. Listings (Marketplace/Internal) allow self-service discovery and installation.</li>
  <li><strong>Governance preserved:</strong> Dynamic data masking, row-level security policies can be applied to shared objects.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>How do you currently share data with business partners, customers, or subsidiaries — what's the freshness and maintenance burden?</li>
  <li>Do you have different teams (finance, marketing, ops) running Snowflake accounts that need the same source data without copying it?</li>
  <li>Are there partners who would benefit from live access to a subset of your data, governed by your policies?</li>
</ul>`,

    'data-warehouse': `
<h3>Talk Track</h3>
<p>Snowflake is a modern Enterprise Data Warehouse (EDW) built for the cloud &#8212; but it\'s fundamentally different from legacy on-premise warehouses like Teradata, Netezza, or even early cloud warehouses. The core difference: compute and storage are completely separated, which means infinite scalability, zero contention, and a pay-only-for-what-you-use model that legacy systems can\'t match.</p>

<h3>EDW vs Legacy Warehouse</h3>
<ul>
  <li><strong>Legacy:</strong> Monolithic, fixed compute/storage ratio, scale by buying more hardware, ETL required, one workload at a time</li>
  <li><strong>Snowflake:</strong> Elastic compute, infinite storage, multiple workloads in parallel, ELT (load then transform in-platform), pay per second</li>
</ul>

<h3>Key Differentiators</h3>
<ul>
  <li><strong>Single repository:</strong> All org data in one place &#8212; no silos, no data marts, no copies</li>
  <li><strong>ELT architecture:</strong> Load raw, transform in-platform using SQL. Faster than ETL, more flexible</li>
  <li><strong>Elastic compute:</strong> Multiple warehouses, no resource contention. BI, ETL, and ML run concurrently on the same data</li>
  <li><strong>Zero-copy cloning:</strong> Instant dev/test environments. No storage cost for clones</li>
  <li><strong>Cross-cloud, cross-region:</strong> Query as a single global dataset via Snowgrid</li>
</ul>

<h3>5 Business Needs EDW Addresses</h3>
<ul>
  <li>Real-time access for faster decisions (ELT over ETL)</li>
  <li>360-degree customer view (unified from CRM, web, ERP)</li>
  <li>Compliance and data lineage (GDPR, CCPA in one place)</li>
  <li>Self-service analytics for non-technical users (via CoCo/CoWork)</li>
  <li>Single global repository across clouds and regions</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>How many separate databases or data marts are you managing today?</li>
  <li>How long does it take to get data from a source system into a report?</li>
  <li>Do your BI and ETL workloads compete for the same cluster today?</li>
  <li>Are you paying for an on-premise warehouse that\'s sitting idle most of the day?</li>
</ul>`,

    'delta-direct': `
<h3>Talk Track</h3>
<p>Delta Direct is Snowflake's answer to customers who run Databricks and Snowflake side by side. Instead of exporting Delta tables to Parquet, loading into Snowflake, and maintaining a pipeline, Delta Direct creates a live read-through from Snowflake directly to the Delta transaction log and underlying Parquet files. Your data engineers keep writing to Delta in Databricks; your analysts query it from Snowflake with full SQL, RBAC, and Snowflake's performance optimizations. No copies, no pipelines, no staleness.</p>

<h3>Key Points</h3>
<ul>
  <li><strong>No data movement:</strong> Snowflake reads the Delta transaction log and Parquet files directly from your object storage (S3, ADLS, GCS). The data stays in one place.</li>
  <li><strong>Setup:</strong> Create an EXTERNAL VOLUME (storage access) and a CATALOG INTEGRATION (Delta/Unity Catalog). Then CREATE DATABASE FROM CATALOG INTEGRATION.</li>
  <li><strong>Governance:</strong> Snowflake RBAC, masking policies, and row access policies apply to Delta tables just like native Snowflake tables.</li>
  <li><strong>Performance:</strong> Snowflake reads Delta's Parquet files with predicate pushdown and partition pruning — comparable to reading native Iceberg.</li>
  <li><strong>Write-back:</strong> Delta Direct is currently read-only from Snowflake. Writes to Delta tables must go through Databricks or Spark.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>Do you have a Databricks environment where data engineers write Delta tables, and Snowflake where analysts want to query them?</li>
  <li>What&apos;s your current ETL process to move data from Delta into Snowflake — how fresh is the data and how much does the pipeline cost to maintain?</li>
  <li>Do you use Unity Catalog as your Databricks metastore? (simplifies Delta Direct setup)</li>
</ul>`,

    'devops-dcm': `
<h3>Talk Track</h3>
<p>Snowflake's Database Change Management (DCM) brings infrastructure-as-code discipline to database schema management. Teams define Snowflake objects — tables, schemas, roles, warehouses — in declarative YAML manifests, check them into source control, and let DCM handle the diff and apply. No more manual DDL scripts, no more schema drift between environments.</p>

<h3>Key Points</h3>
<ul>
  <li><strong>Declarative by design:</strong> Define the desired state of your Snowflake objects in YAML. DCM figures out what needs to be created, altered, or dropped — you never write migration scripts.</li>
  <li><strong>Three-environment pattern:</strong> Dev → Staging → Production with explicit promotion gates. DCM tracks state separately per environment so changes are validated before they reach production.</li>
  <li><strong>Version-controlled:</strong> Manifests live in Git alongside application code. Schema changes go through the same PR review process as any other code change.</li>
  <li><strong>Built-in RBAC:</strong> DCM applies role-based access control to objects automatically — no manual GRANT statements scattered across migration files.</li>
  <li><strong>CI/CD integration:</strong> Works with GitHub Actions and the Snowflake CLI. Schema changes can be validated, previewed, and deployed in a pipeline.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>How do you manage schema changes across dev, staging, and production Snowflake environments today?</li>
  <li>Do you have schema drift — where dev and prod environments have gotten out of sync?</li>
  <li>Are your data engineers part of a software engineering team that uses Git and CI/CD?</li>
</ul>`,

    'document-ai': `
<h3>Talk Track</h3>
<p>Document AI is the pipeline for turning unstructured files into governed, structured data. You upload PDFs, invoices, contracts, or scanned images to a Snowflake Stage. One SQL query uses AI_PARSE_DOCUMENT to OCR or extract the text, AI_CLASSIFY to identify the document type, AI_EXTRACT to pull specific fields, and AI_REDACT to remove PII — all server-side, all governed. The output is a typed table you can join with the rest of your data.</p>

<h3>Key Points</h3>
<ul>
  <li><strong>No external OCR service needed:</strong> AI_PARSE_DOCUMENT handles PDF, PNG, JPEG, TIFF, DOCX in three modes: OCR (scanned), LAYOUT (structured PDFs), and MULTIMODAL (charts/diagrams).</li>
  <li><strong>Field extraction without training:</strong> AI_EXTRACT pulls named fields using natural language field names. No labeled training data required.</li>
  <li><strong>Classification enables routing:</strong> AI_CLASSIFY identifies invoice vs contract vs receipt so you can apply the right extraction schema per document type.</li>
  <li><strong>Compliance-ready:</strong> AI_REDACT removes PII, PHI, and financial data before storing or sharing. GDPR and HIPAA use cases solved in one function call.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>Are there paper or PDF-based processes in your business that analysts can't query today — invoices, contracts, intake forms?</li>
  <li>Do you have a manual data entry step where someone is copying fields from PDFs into a database? This pipeline eliminates that.</li>
  <li>Do you have compliance requirements that prevent storing PII from scanned documents in queryable tables?</li>
</ul>`,

    'external-engines': `
<h3>Talk Track</h3>
<p>The External Engines story is about meeting customers where they are. Snowflake doesn't require you to abandon your existing Spark jobs, Flink pipelines, or Kafka infrastructure. Instead, Snowflake exposes native connectors and open standard interfaces (Iceberg, Delta Sharing) that let external engines read from and write to Snowflake data — with the same governance, lineage, and access controls that apply to native Snowflake workloads.</p>

<h3>Key Points</h3>
<ul>
  <li><strong>Spark:</strong> Two options — Snowpark for Spark (PySpark API, compute runs ON Snowflake) or the Spark Connector (compute runs in the Spark cluster, data moves). For lift-and-shift migrations, Snowpark for Spark is the path of least resistance.</li>
  <li><strong>Flink:</strong> Primarily a streaming ingestion story. The Kafka Connector for Snowflake or Snowpipe Streaming SDK routes Flink output into Snowflake landing tables.</li>
  <li><strong>Kafka:</strong> Kafka Connector for Snowflake (open source, Confluent certified) loads topics directly into Snowflake tables. Snowpipe Streaming is the high-performance path for sub-second latency.</li>
  <li><strong>Trino/Dremio:</strong> Federation story — these engines can query Snowflake tables alongside other sources. Useful in data mesh architectures where queries span multiple systems.</li>
  <li><strong>Databricks:</strong> Coexistence story — Delta Sharing, Iceberg, and Unity Catalog integration let both platforms share live data without copying.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>Do you have existing Spark pipelines or Databricks workloads that transform data before loading into Snowflake — could those run directly on Snowflake instead?</li>
  <li>Are you using Kafka today — what's your current path from Kafka topics to analytics-ready tables?</li>
  <li>Do you have a requirement to query across multiple data platforms (Snowflake + S3 + Databricks) in a single query?</li>
</ul>`,

    'external-tables': `
<h3>Talk Track</h3>
<p>External Tables let Snowflake query raw files directly in object storage — Parquet, ORC, CSV, JSON — without ever loading them into Snowflake. The key use case is "I have data in S3 that I only query occasionally and don't want to pay to store twice." External Tables give you Snowflake SQL over that data, with full governance, at the cost of querying the files directly (slower than native tables but free in terms of storage).</p>

<h3>Key Points</h3>
<ul>
  <li><strong>No ingestion:</strong> Files stay in S3/ADLS/GCS. Snowflake reads them on each query — no COPY INTO required.</li>
  <li><strong>Schema detection:</strong> INFER_SCHEMA automatically detects column names and types from Parquet/ORC files. No manual DDL.</li>
  <li><strong>Partitioning:</strong> Define partition columns to enable partition pruning. Critical for performance on large file sets.</li>
  <li><strong>AUTO REFRESH:</strong> Uses cloud storage events (S3 events, Azure Event Grid) to automatically update the external table metadata when new files land.</li>
  <li><strong>vs Iceberg:</strong> External Tables are simpler and work with any file format. Iceberg provides richer metadata, ACID transactions, and better query performance. For new workloads, Iceberg is preferred.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>Do you have data in S3/ADLS that you need to query but can't or don't want to load into Snowflake?</li>
  <li>Is this data queried frequently (load it) or occasionally (external table)?</li>
  <li>Do your files have consistent schema? (Parquet/ORC yes; CSV needs manual schema)</li>
</ul>`,

    'gpu': `
<h3>Talk Track</h3>
<p>GPU compute on Snowflake is the story of bringing GPU-powered workloads inside the data security boundary — instead of extracting data to a separate ML platform that has GPUs. There are two GPU surfaces: SPCS Compute Pools (you manage the container and model) and Cortex-managed GPU (fine-tuning, Notebook Container Runtime — Snowflake manages the GPU for you). The key message is that you don't need to choose between "easy but limited" Cortex AI and "powerful but complex" bring-your-own GPU. You can use both, and they share the same governance, data access, and billing boundary.</p>

<h3>Key Points</h3>
<ul>
  <li><strong>SPCS GPU Pools:</strong> NVIDIA A10G cards (XS = 1 GPU, S = 1 GPU, M = 4 GPU, L = 8 GPU). You containerize your model and deploy it. Full control, full responsibility.</li>
  <li><strong>Cortex Fine-Tuning:</strong> Fully managed — provide training data as a table, pick a base model, call FINETUNE(). GPU infrastructure is invisible. Best for customizing Cortex LLMs on your own domain data.</li>
  <li><strong>Notebook Container Runtime:</strong> Attach a GPU compute pool to a Snowflake Notebook. Data scientists get a Jupyter-like environment with GPU access and direct access to Snowflake tables — no data export needed.</li>
  <li><strong>Snowpark-Optimized:</strong> CPU-based but high-memory (16× RAM). Use when you need large memory for ML training or heavy Python UDFs — not GPU, but often the right answer before going to SPCS.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>Are your data scientists currently pulling data out of Snowflake into SageMaker or Vertex AI to run GPU workloads? What's the data freshness and governance overhead?</li>
  <li>Do you have domain-specific terminology (product names, internal jargon, industry acronyms) where a general-purpose LLM underperforms? (Fine-tuning candidate)</li>
  <li>Are you building real-time inference services that need sub-100ms latency? (SPCS GPU service with persistent endpoint)</li>
</ul>`,

    'horizon': `
<h3>Talk Track</h3>
<p>Snowflake Horizon Catalog is the governance, discovery, and context layer that runs across the entire Snowflake platform. Every table, column, and data asset is covered by a single governance model — the same policies that apply to a human analyst apply to an AI agent.</p>
<h3>Three Layers</h3>
<ul>
  <li><strong>Discover:</strong> Search across all data assets. Apply tags that propagate governance downstream. Automatically classify sensitive data (PII, PHI) and apply policies without manual work.</li>
  <li><strong>Monitor:</strong> Column-level lineage across Snowflake and external systems. Data Metric Functions measure freshness, completeness, uniqueness on a schedule. Trust Center runs CIS benchmarks and threat detection continuously.</li>
  <li><strong>Protect:</strong> RBAC, network policies, MFA, SSO, Tri-Secret Secure (customer-managed keys), and OAuth. Five data policy types — masking, row access, projection, aggregation, and tokenization — all defined once and enforced everywhere.</li>
</ul>
<h3>Key Differentiators</h3>
<ul>
  <li>One governance model applies to both humans AND AI agents</li>
  <li>Policies follow data through Iceberg and external catalogs via REST Catalog interop</li>
  <li>AI Guardrails redact PII from agent outputs before they reach users</li>
  <li>Tag-based policy inheritance: tag once, governance follows automatically</li>
</ul>
<h3>Questions to Ask</h3>
<ul>
  <li>How do you currently enforce data access controls across BI, ETL, and AI tools?</li>
  <li>Do you have PII/PHI classification in place? Is it automated or manual?</li>
  <li>Does your security team have visibility into what AI agents are accessing?</li>
</ul>`,

    'horizon-access': `
<h3>Talk Track</h3>
<p>Access Control in Snowflake is handled through a layered model: RBAC controls what objects a role can access, Network Policies restrict which networks can connect, Authentication Policies enforce MFA and identity requirements, and Tri-Secret Secure adds a customer-controlled encryption key on top of Snowflake\'s encryption.</p>
<h3>Key Points</h3>
<ul>
  <li><strong>RBAC:</strong> Every Snowflake operation requires a privilege. Roles are hierarchical — ACCOUNTADMIN owns everything, SYSADMIN manages objects, and custom roles give least-privilege access to specific data.</li>
  <li><strong>Network Policies:</strong> Allowlist specific IP ranges. Can be attached at the account level or per user. Critical for enterprise deployments requiring network-level isolation.</li>
  <li><strong>MFA:</strong> Enforced via Authentication Policies. Can require MFA for all users, specific roles, or specific client types.</li>
  <li><strong>Tri-Secret Secure:</strong> Snowflake\'s encryption + customer-managed key = two keys required to decrypt. If customer revokes key, data becomes immediately inaccessible — even to Snowflake.</li>
</ul>
<h3>Questions to Ask</h3>
<ul>
  <li>Do you have a requirement for customer-managed encryption keys?</li>
  <li>Is MFA required for all data platform access in your organization?</li>
  <li>Do you use SSO/IdP today — Okta, Azure AD, Ping?</li>
</ul>`,

    'horizon-classification': `
<h3>Talk Track</h3>
<p>Data Classification is how Horizon Catalog discovers sensitive data at scale. Instead of manually reviewing thousands of columns, Snowflake ML classifiers scan column names, data types, and sample values to detect PII, PHI, and financial data — then automatically apply system tags and trigger governance policies.</p>
<h3>Key Points</h3>
<ul>
  <li>System classifiers cover the most common PII/PHI patterns out of the box — emails, SSNs, phone numbers, DOBs, medical record numbers</li>
  <li>Results stored in ACCOUNT_USAGE.DATA_CLASSIFICATION_LATEST — queryable for compliance reporting</li>
  <li>auto_tag: true option applies system tags automatically from classification results</li>
  <li>Once tagged, masking policies bound to those tags activate automatically</li>
</ul>
<h3>Questions to Ask</h3>
<ul>
  <li>Do you know where all your PII lives today across Snowflake?</li>
  <li>Do you have compliance requirements (GDPR, CCPA, HIPAA) that require PII tracking?</li>
  <li>How would you prove to an auditor that all PII is masked for non-privileged roles?</li>
</ul>`,

    'horizon-dmf': `
<h3>Talk Track</h3>
<p>Data Metric Functions (DMFs) are Snowflake\'s native data quality monitoring layer. They run on a schedule inside Snowflake compute, measure quality at the column or table level, and store results in a queryable table. No external data quality tool required.</p>
<h3>Key Points</h3>
<ul>
  <li>Built-in DMFs cover the 80% case &#8212; freshness, nulls, uniqueness, row count, duplicates</li>
  <li>Custom DMFs handle domain-specific rules: referential integrity, valid ZIP codes, date ranges</li>
  <li>Results are stored in SNOWFLAKE.LOCAL schema &#8212; query them with SQL or build dashboards</li>
  <li>Pair with Snowflake Alerts for automated notification when quality drops below threshold</li>
  <li>DMF compute runs serverless &#8212; no warehouse needed, billed per execution</li>
</ul>
<h3>Questions to Ask</h3>
<ul>
  <li>How do you monitor data quality today &#8212; Great Expectations, dbt tests, custom scripts?</li>
  <li>How quickly do you detect when a pipeline produces null or stale data?</li>
  <li>Do your data consumers have SLA expectations on freshness?</li>
</ul>`,

    'horizon-lineage': `
<h3>Talk Track</h3>
<p>Lineage in Snowflake is automatic &#8212; it\'s derived from query execution history, not manually curated. Every time a query runs, Snowflake captures which source columns were read to produce which output columns. This means customers get column-level lineage without any tagging or annotation work.</p>
<h3>Key Points</h3>
<ul>
  <li>Column-level lineage spans Snowflake objects AND external BI systems (Tableau, Power BI, dbt) via connectors</li>
  <li>GET_LINEAGE() is the programmatic API for impact analysis before schema changes</li>
  <li>Lineage feeds the AI trust model &#8212; agents know the provenance of every piece of data they use</li>
  <li>Downstream blast radius: "what breaks if I rename this column?" is answerable instantly</li>
</ul>
<h3>Questions to Ask</h3>
<ul>
  <li>Do you know the downstream impact before making a schema change today?</li>
  <li>If an analyst reports a bad number, how long does it take to find the root cause?</li>
  <li>Do your BI dashboards connect to Snowflake directly? (Lineage will span into those)</li>
</ul>`,

    'horizon-policies': `
<h3>Talk Track</h3>
<p>Snowflake\'s data protection policies are the enforcement layer beneath tagging and classification. They\'re defined once in SQL, applied to a table or column, and enforce automatically on every query — whether from a human, a BI tool, or an AI agent.</p>
<h3>Five Policy Types</h3>
<ul>
  <li><strong>Masking:</strong> Replace sensitive column values based on role. Full mask, partial mask, or hash. Most common policy type.</li>
  <li><strong>Row Access:</strong> Filter rows based on a policy table mapping roles to allowed values. Zero query changes for the end user.</li>
  <li><strong>Projection:</strong> Prevent a column from being SELECTed directly. Column appears in schema but results are blocked. Good for "you can filter but not export".</li>
  <li><strong>Aggregation:</strong> Require aggregation — raw row-level values can\'t be returned. MIN_GROUP_SIZE prevents re-identification through small groups.</li>
  <li><strong>Tokenization:</strong> Replace values with tokens via an external vault. Original value only accessible with the vault key — keeps data usable but protected.</li>
</ul>
<h3>Questions to Ask</h3>
<ul>
  <li>Do you have masking policies in place today, or do you rely on role-based access to avoid exposing PII?</li>
  <li>Do analysts need to be able to filter on PII without being able to export it? (→ Projection Policy)</li>
  <li>Do you have re-identification risk from small group analytics? (→ Aggregation Policy)</li>
</ul>`,

    'horizon-search': `
<h3>Talk Track</h3>
<p>Horizon Catalog Search is the discovery layer that lets data consumers and AI agents find the right data before running a query. Rather than asking someone which table to use, users search in plain language and see results ranked by trust signals: freshness, popularity, documentation coverage, and tags.</p>
<h3>Key Points</h3>
<ul>
  <li>Search spans the full data estate — not just Snowflake tables, but external Iceberg tables, BI dashboards, and connected databases</li>
  <li>Results show metadata alongside name: owner, last modified, tags, and popularity rank</li>
  <li>CoCo can drive catalog search via conversational prompts — "find the table with customer LTV data"</li>
</ul>
<h3>Questions to Ask</h3>
<ul>
  <li>How do analysts today figure out which table to use for a given question?</li>
  <li>Do you have a data catalog today — Alation, Collibra, Atlan?</li>
  <li>How much time is spent on "data archaeology" vs actual analysis?</li>
</ul>`,

    'horizon-tagging': `
<h3>Talk Track</h3>
<p>Tagging is the foundation of Horizon Catalog governance. Rather than applying policies column by column, customers create a tag taxonomy (Confidential, PII, Internal, etc.) and then policies propagate automatically to every tagged object. This scales governance to thousands of tables without manual policy assignment.</p>
<h3>Key Points</h3>
<ul>
  <li>Tags are first-class Snowflake objects — queryable, versioned, governed by RBAC</li>
  <li>Tag propagation: table tag → columns; column tag → query results</li>
  <li>Tag-based policy inheritance is the most scalable governance pattern — tag once, enforce everywhere</li>
  <li>CoCo can classify and tag objects from a plain-language prompt: "tag all email columns as PII"</li>
</ul>
<h3>Questions to Ask</h3>
<ul>
  <li>Do you have a data classification taxonomy today?</li>
  <li>How many columns have PII today — do you know?</li>
  <li>Is governance applied manually, per column, or systematically?</li>
</ul>`,

    'horizon-trust': `
<h3>Talk Track</h3>
<p>Trust Center is Snowflake\'s built-in security monitoring product. It runs continuously, checks your account against CIS benchmarks, detects known threat actors and leaked credentials, and now includes an AI governance panel showing every agent and its policy status.</p>
<h3>Key Points</h3>
<ul>
  <li>No setup required &#8212; scanners run automatically and populate findings in SNOWFLAKE.TRUST_CENTER.FINDINGS</li>
  <li>Three scanner types: Security Essentials (CIS), Threat Intelligence (known bad actors), AI Security (agent governance)</li>
  <li>Findings are queryable via SQL &#8212; customers can build their own security dashboards or pipe findings to SIEM tools</li>
  <li>AI Security scanner is new: shows every Cortex Agent, its MCP tools, caller grants, and AI Guardrail status</li>
</ul>
<h3>Questions to Ask</h3>
<ul>
  <li>Does your security team have visibility into Snowflake configuration today?</li>
  <li>Are you running CIS benchmarks for Snowflake manually?</li>
  <li>Do you have AI agents in production &#8212; does your security team know what tools they can call?</li>
</ul>`,

    'iceberg': `
<h3>Talk Track</h3>
<p>Apache Iceberg is the open table format that's winning the data lakehouse standards war. Snowflake not only supports Iceberg — Snowflake co-authored the spec and leads Apache Polaris, the open-source REST catalog. So when customers bet on Iceberg, they're betting on a format that Snowflake has more engineering influence over than any other vendor.</p>

<h3>Key Points</h3>
<ul>
  <li>Iceberg is a <strong>table format</strong>, not a storage system. It defines how Parquet files are organized and tracked. Any engine that understands the spec can read/write the same files.</li>
  <li><strong>Snowflake-managed Iceberg:</strong> Snowflake handles the catalog, compaction, and optimization. You get full Snowflake performance on your S3 storage.</li>
  <li><strong>Catalog-linked Iceberg:</strong> Point Snowflake at Unity Catalog, AWS Glue, or any REST catalog. Snowflake reads those tables without owning the metadata.</li>
  <li>Snowflake co-authored <strong>Iceberg v3</strong>, which adds Variant type, deletion vectors, and row lineage — all already supported in Snowflake.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>Are you already writing Iceberg tables from Spark or dbt? Where does the catalog live today?</li>
  <li>Which engines need to read the same data — is it just Snowflake, or Spark + Snowflake + Trino?</li>
  <li>Are you using Unity Catalog or AWS Glue today? We can federate directly into those without moving anything.</li>
</ul>`,

    'iceberg-catalog-linked': `
<h3>Talk Track</h3>
<p>Catalog-linked databases let Snowflake federate into an external Iceberg catalog — Unity Catalog, AWS Glue, Apache Polaris — without moving or copying any data. You create a Catalog Integration that authenticates to the external catalog, then create a Catalog-Linked Database. From that point, the external tables appear as Snowflake objects with full SQL access.</p>

<h3>Key Points</h3>
<ul>
  <li><strong>Zero data movement:</strong> The files stay in their original location. Snowflake reads the Iceberg metadata from the external catalog and accesses the Parquet files directly.</li>
  <li><strong>Supported catalogs:</strong> Unity Catalog, AWS Glue, Apache Polaris (open-source), and any Iceberg REST catalog that follows the spec.</li>
  <li><strong>Auto-discovery:</strong> Tables added to the external catalog are automatically visible in Snowflake without manually creating external table definitions.</li>
  <li><strong>Governance applies:</strong> Even on externally-cataloged tables, Snowflake masking and row-access policies apply to queries run through Snowflake.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>Are you using Unity Catalog or AWS Glue as your primary catalog today? What percentage of your Iceberg tables live there?</li>
  <li>Do your data teams currently have to switch between Databricks and Snowflake to access different parts of the data estate?</li>
  <li>Are there tables in your lake that you want Snowflake SQL analysts to access without the data team migrating or duplicating them?</li>
</ul>`,

    'iceberg-snowflake': `
<h3>Talk Track</h3>
<p>With Snowflake-managed Iceberg, you get the best of both worlds: open format files on your own storage, with Snowflake handling all the hard parts — catalog management, compaction, clustering, and optimization. You own the data; Snowflake runs the engine. And because it's open Iceberg, Spark, Flink, and Trino can all read the same tables.</p>

<h3>Key Points</h3>
<ul>
  <li><strong>Your storage, Snowflake's engine:</strong> Files live in your S3/ADLS/GCS bucket in Parquet format. You have direct access to the objects. Snowflake manages the Iceberg metadata and catalog endpoint.</li>
  <li><strong>Full query performance:</strong> Automatic clustering, micro-partition pruning, result caching all apply to Iceberg tables — same as native Snowflake tables.</li>
  <li><strong>Polaris catalog endpoint:</strong> Snowflake exposes your tables as an Iceberg REST catalog. Any Iceberg-compatible engine can read them using this endpoint — no proprietary driver needed.</li>
  <li><strong>DDL is familiar:</strong> <code>CREATE ICEBERG TABLE ... CATALOG='SNOWFLAKE'</code> — one additional parameter versus a regular table.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>Do you have a storage cost target that's driving the interest in keeping data in S3 vs Snowflake-managed storage?</li>
  <li>Which engines outside of Snowflake need write access to these tables? That affects whether managed vs externally-managed is the right fit.</li>
  <li>Are you currently running clustering or optimization jobs manually on your lake? We eliminate that overhead.</li>
</ul>`,

    'iceberg-v3': `
<h3>Talk Track</h3>
<p>Iceberg v3 is the next-generation spec that closes the remaining gaps between open format tables and native warehouse tables. Snowflake co-authored it and already supports the key features. The headline additions: Variant-type support (semi-structured data natively in Iceberg), deletion vectors (faster deletes and updates without full file rewrites), and row lineage for audit and time-travel.</p>

<h3>Key Points</h3>
<ul>
  <li><strong>Variant type:</strong> Store JSON, Avro, and semi-structured data in Iceberg tables. Previously you needed to stringify JSON or use a separate table format.</li>
  <li><strong>Deletion vectors:</strong> Mark rows as deleted without rewriting the Parquet files. Dramatically faster DELETE and UPDATE operations on large Iceberg tables.</li>
  <li><strong>Row lineage:</strong> Every row has a provenance identifier. Enables point-in-time queries and audit trails at the row level — not just snapshot-level time travel.</li>
  <li><strong>Snowflake's advantage:</strong> As a co-author of the spec, Snowflake ships v3 support at the same time as the spec is ratified — not months later.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>Are you storing semi-structured or JSON data in separate tables or systems from your structured Iceberg data today?</li>
  <li>How are you handling deletes and updates on your Iceberg tables currently — are you rewriting partitions manually?</li>
  <li>Do you have regulatory requirements around row-level audit trails or data lineage?</li>
</ul>`,

    'index': `
<h3>Talk Track</h3>
<p>This is the Snowflake Interactive Technical Deep Dive — a living architecture diagram you can navigate like a product demo. Every block is a clickable topic. Use it to drive a discovery call, pre-call prep, or a whiteboarding session.</p>

<h3>Architecture Overview</h3>
<ul>
  <li><strong>Top:</strong> Cortex AI apps (CoCo, CoWork, Snowflake Intelligence, Cortex Agents) — the intelligent surfaces built on top of the platform.</li>
  <li><strong>Compute layer:</strong> SQL, Java/Scala (Snowpark), Python, and Cortex ML — all the ways customers process and analyze data.</li>
  <li><strong>Storage layer:</strong> Native Snowflake tables, Iceberg, Data Mesh, and Data Lakehouse — flexible, governed, zero-copy storage.</li>
  <li><strong>Foundation:</strong> Snowgrid — the cross-cloud, cross-region replication and data sharing fabric.</li>
</ul>

<h3>Key Talking Points</h3>
<ul>
  <li>Snowflake is a <strong>single platform</strong> — storage, compute, governance, and AI are unified. No separate clusters, no data movement, no tool sprawl.</li>
  <li><strong>Open by design</strong> — Iceberg tables, REST catalog, and 1,400+ partner integrations mean customers are never locked in.</li>
  <li><strong>AI is first-class</strong> — Cortex AI is built in, not bolted on. CoCo and CoWork give every employee an AI-native interface to their data.</li>
  <li><strong>Governed at the core</strong> — Horizon provides data governance, classification, masking, and lineage across the entire platform.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>Where does your team spend the most time today — ingestion, transformation, BI, or something else?</li>
  <li>Which areas of the architecture are you most focused on — AI, data engineering, governance, or cost?</li>
  <li>What does your current data stack look like — and what are the biggest pain points?</li>
</ul>

<h3>Keyboard Shortcuts</h3>
<ul>
  <li><strong>N</strong> — Toggle this talk track</li>
  <li><strong>P</strong> — Open page navigator</li>
  <li><strong>S</strong> — Open speaker notes window (secondary screen)</li>
  <li><strong>&#8592;</strong> — Go back</li>
  <li><strong>H</strong> — Return home from any page</li>
  <li><strong>M</strong> — Jump to Snowflake ML</li>
  <li><strong>A</strong> — Jump to Cortex AI</li>
  <li><strong>G</strong> — Jump to Governance (Horizon)</li>
  <li><strong>E</strong> — Jump to Data Engineering</li>
  <li><strong>L</strong> — Jump to Data Lakehouse</li>
  <li><strong>C</strong> — Jump to Compute</li>
  <li><strong>W</strong> — Jump to Well-Architected Framework</li>
</ul>`,

    'interactive-tables': `
<h3>Talk Track</h3>
<p>Snowflake's OLTP story is one of the most differentiated capabilities in the portfolio. Hybrid Tables bring row-level locking, primary keys, foreign keys, and single-digit millisecond point lookups to Snowflake — the same platform your analytics team uses. This means you can power operational applications, transactional workflows, and analytics from a single platform without running a separate OLTP database.</p>

<h3>Key Points</h3>
<ul>
  <li><strong>Sub-millisecond point reads:</strong> Hybrid Tables use a row-based storage engine optimized for primary key lookups — not the columnar engine used for analytics scans.</li>
  <li><strong>Single platform:</strong> Run operational apps (order status, user profiles, inventory) and analytics (aggregations, dashboards) on the same tables. No ETL between OLTP and OLAP.</li>
  <li><strong>Familiar SQL:</strong> Foreign keys, unique constraints, INSERT/UPDATE/DELETE with row-level locking. Standard SQL application code works as-is.</li>
  <li><strong>Governance unified:</strong> Same Horizon policies (masking, row access, RBAC) apply to both the operational read path and the analytical query path.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>Do you have an operational data store (RDS, MySQL, DynamoDB) separate from Snowflake that you're ETL-ing data out of for analytics?</li>
  <li>Are there operational applications querying Snowflake today that are hitting latency issues because they're doing point lookups on analytical tables?</li>
  <li>Is there a "source of truth" operational database that your analytics team is always 24 hours behind on because of replication lag?</li>
</ul>`,

    'internal-marketplace': `
<h3>Talk Track</h3>
<p>The Internal Marketplace solves the data product discovery problem inside large organizations. Today, getting access to data from another team typically means a ticket, a Slack message, a meeting, and a week of waiting. Internal Marketplace is the self-service alternative: data teams publish governed data products once; business users discover and install them on demand — like an internal app store for data. No IT ticket, no pipeline, no copy.</p>
<h3>Key Points</h3>
<ul>
  <li><strong>Self-service discovery:</strong> Published listings appear in the "Your Organization" tab in Snowflake Marketplace inside every account in the org.</li>
  <li><strong>No data movement:</strong> Zero-copy sharing. Consumers query live data from the provider account.</li>
  <li><strong>Governance preserved:</strong> Masking and row access policies applied by the provider are enforced for all consumers.</li>
  <li><strong>Usage tracking:</strong> Provider sees who installed, which accounts are querying, and query volume over time.</li>
</ul>
<h3>Questions to Ask</h3>
<ul>
  <li>How do teams currently share data internally — ETL pipelines, S3 exports, or individual grants?</li>
  <li>How long does it currently take for a business user to get access to a new dataset?</li>
</ul>`,

    'marketplace': `
<h3>Talk Track</h3>
<p>Snowflake Marketplace has 750+ data providers offering live, queryable data sets — weather, demographics, firmographics, financial data, alternative data, and now AI models. The big differentiator: you don't download anything. When you install a Marketplace listing, you get a read-only database in your account backed by the provider's live data. Your warehouse runs the query; you get fresher data than any download-and-load approach, with no pipeline to maintain.</p>

<h3>Key Points</h3>
<ul>
  <li><strong>No downloads:</strong> Marketplace data is always live. Install a listing and query it like a local table — but the data is the provider's actual storage.</li>
  <li><strong>Native Apps on Marketplace:</strong> Not just data — you can install apps too. Cortex agents, analytics tools, ML models, all in your account.</li>
  <li><strong>Capacity Drawdown:</strong> Spend your Snowflake contract balance on third-party Marketplace purchases — one vendor, one contract, one invoice.</li>
  <li><strong>Provider revenue:</strong> If you have data worth monetizing, Marketplace gives you a distribution channel to all Snowflake customers globally.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>What external data sources are you paying for today that could be consolidated through Marketplace? (weather, geo-enrichment, firmographics)</li>
  <li>Do you have a separate vendor contract for each data provider, or would one consolidated purchase through Snowflake help?</li>
  <li>Do you have data or IP that you could productize and distribute to your own customers or partners through the Marketplace?</li>
</ul>`,

    'mcp-connectors': `
<h3>Talk Track</h3>
<p>MCP (Model Context Protocol) is Snowflake's governed interoperability layer — the standard by which Cortex AI agents connect to external tools, APIs, data sources, and models. Snowflake acts as the MCP gateway, meaning all tool calls go through Snowflake's security and governance layer rather than making raw outbound API calls.</p>

<h3>Key Points</h3>
<ul>
  <li><strong>Governed tool access:</strong> Every tool an agent calls — Salesforce, Jira, Slack, external APIs — is registered as an MCP server with explicit permissions. No uncontrolled outbound calls.</li>
  <li><strong>Native Snowflake tools:</strong> SQL execution, Cortex Search, Cortex Analyst, and the Document AI pipeline are all available as first-class MCP tools without any external configuration.</li>
  <li><strong>External connectors:</strong> Connect agents to Salesforce, ServiceNow, GitHub, Confluence, and hundreds of other SaaS tools through the MCP connector catalog.</li>
  <li><strong>Enterprise security:</strong> MCP connections use Snowflake's External Access Integrations — network rules, secrets, and OAuth tokens are managed centrally, not scattered in agent config files.</li>
  <li><strong>Auditability:</strong> All tool calls are logged in Snowflake's event table — full observability on what agents accessed, when, and why.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>What external systems do your agents or workflows need to read from or write to?</li>
  <li>How do you manage API credentials and access policies for AI tools today?</li>
  <li>Does your security team have visibility into what external calls your AI systems are making?</li>
</ul>`,

    'ml-agent': `
<h3>Talk Track</h3>
<p>Agentic ML is where Snowflake's ML platform and Cortex Agents intersect. Instead of building a static model pipeline, you give an AI agent access to ML tools — model training, prediction, drift monitoring — and it orchestrates the workflow autonomously. This enables self-improving pipelines where an agent detects drift, retrains the model, evaluates it, and promotes it to production, all without human intervention.</p>

<h3>Key Points</h3>
<ul>
  <li><strong>ML as agent tools:</strong> Model training, PREDICT calls, drift analysis — all available as tools for Cortex Agents. The agent decides when and how to invoke them.</li>
  <li><strong>Autonomous pipeline management:</strong> An agent can monitor model performance via Dynamic Tables, trigger retraining when drift exceeds a threshold, and log the results to the Model Registry.</li>
  <li><strong>Governed automation:</strong> The agent runs under a service account role. RBAC controls what data it can access for training and inference — same governance as any other Snowflake workload.</li>
  <li><strong>Natural language ML:</strong> Ask an agent to "retrain the churn model excluding the last 30 days of data and compare it to the current production version."</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>How much of your ML team's time is spent on operational tasks — monitoring, retraining, deployment — versus building new models?</li>
  <li>Have you thought about what it would mean to automate the retraining and evaluation loop for your most important models?</li>
  <li>Are there ML workflows that are currently triggered manually by a data scientist that could be automated end-to-end?</li>
</ul>`,

    'ml-functions': `
<h3>Talk Track</h3>
<p>Snowflake's in-SQL ML functions let data analysts build forecasting, anomaly detection, and classification models without writing a single line of Python or deploying any infrastructure. You call a function, pass it your time series or training data, and get back predictions. These are Snowflake-managed models — no model selection, no hyperparameter tuning, no deployment pipeline. It just works.</p>

<h3>Key Points</h3>
<ul>
  <li><strong>FORECAST:</strong> Time series forecasting with automatic seasonality detection, exogenous variables support, and confidence intervals. Works on thousands of series simultaneously.</li>
  <li><strong>ANOMALY_DETECTION:</strong> Identifies outliers in time series or tabular data. Returns anomaly score and direction. Used for fraud detection, ops monitoring, data quality.</li>
  <li><strong>CLASSIFICATION / REGRESSION:</strong> Snowflake-managed binary classification and regression models. Train on labeled data, call PREDICT on new rows.</li>
  <li><strong>SQL-native:</strong> Called with CREATE SNOWFLAKE.ML.FORECAST — standard DDL. No Python environment, no notebook, no external service call.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>Are you building demand forecasting, sales forecasting, or financial projections today? Are data scientists having to build custom models for each time series?</li>
  <li>Do you have anomaly detection needs — fraud, system monitoring, data quality — that are currently handled by hand-coded thresholds?</li>
  <li>Are there analysts who want to run predictive analytics but are blocked because they don't have Python or ML skills?</li>
</ul>`,

    'mlops': `
<h3>Talk Track</h3>
<p>MLOps in Snowflake means the entire lifecycle — feature engineering, training, evaluation, registry, deployment, and monitoring — runs inside the same platform where the data lives. The Model Registry is the centerpiece: every model version is tracked, every run is logged, and inference is callable from SQL or REST API with the same RBAC and governance as any other Snowflake object.</p>

<h3>Key Points</h3>
<ul>
  <li><strong>Model Registry:</strong> Version models, log training metrics, tag artifacts. Deploy a specific version by changing an alias — no code changes required in the application.</li>
  <li><strong>Inference surfaces:</strong> Batch (Snowpark UDF called in SQL), real-time (REST endpoint with millisecond latency), or in-pipeline (Dynamic Table + model UDF).</li>
  <li><strong>Feature Store:</strong> Feature views are versioned SQL transformations. Point-in-time correct — training data matches what the model sees at inference time, preventing training/serving skew.</li>
  <li><strong>Model monitoring:</strong> Track drift, accuracy, and data quality post-deployment. Alert on drift using Snowflake alerts and dynamic tables.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>How long does it take your team to go from a trained model to production inference today?</li>
  <li>Are you experiencing training/serving skew — where your model's offline performance doesn't match its production performance?</li>
  <li>Do you have models deployed in production without visibility into how their accuracy is changing over time?</li>
</ul>`,

    'native-apps': `
<h3>Talk Track</h3>
<p>Native Apps are the most powerful data distribution model Snowflake has built. You ship code — stored procedures, UDFs, Streamlit UIs, even full containerized services — directly into the consumer's Snowflake account. Their data never leaves their account, your logic runs next to their data. It's the opposite of traditional SaaS: instead of pulling customer data to your servers, you push your application to their data.</p>

<h3>Key Points</h3>
<ul>
  <li><strong>App Package:</strong> The provider-side object that bundles all versions and distribution logic. Contains the setup script, manifest, and code staged in Snowflake.</li>
  <li><strong>Application Roles:</strong> The consumer grants permissions to your app via named application roles — you define what access the app requests, not the consumer's admin.</li>
  <li><strong>Versioning:</strong> Release channels let you roll out patches incrementally. Push a new patch; consumers on that channel get it automatically.</li>
  <li><strong>SPCS Integration:</strong> Your app can include containerized microservices — APIs, ML inference, heavy compute — running in the consumer's SPCS environment.</li>
  <li><strong>Monetization:</strong> List on Snowflake Marketplace with usage-based pricing. Consumers install directly; billing handled by Snowflake.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>Do you have IP (models, algorithms, proprietary logic) that you want to deliver to customers without exposing the source?</li>
  <li>Are customers asking for data products that they can query directly in their own environment?</li>
  <li>What's the current distribution/update story for your data products — are you shipping copies of data or running ETL pipelines?</li>
</ul>`,

    'org-listings': `
<h3>Talk Track</h3>
<p>Organizational Listings are the foundational building block of Internal Marketplace. A listing packages any Snowflake object — a table, a view, a semantic view, a Native App — with metadata (title, description, tags, SLAs) and makes it discoverable across accounts in your Snowflake organization. Think of it as the product packaging for a data product: the underlying share provides the data access; the listing provides the storefront, versioning, and consumer analytics.</p>
<h3>Key Points</h3>
<ul>
  <li><strong>Listing vs Share:</strong> A share provides access. A listing is the discoverability and distribution layer on top.</li>
  <li><strong>Versioning:</strong> Publish v1 and v2 simultaneously; consumers migrate on their own schedule.</li>
  <li><strong>Targeting:</strong> Restrict to specific accounts or open to the whole org.</li>
  <li><strong>Beyond tables:</strong> Listings can wrap Native Apps, AI models, and semantic views.</li>
</ul>`,

    'partners': `
<h3>Talk Track</h3>
<p>Snowflake's partner ecosystem is a key part of the value proposition — customers don't have to rip and replace their existing tooling to adopt Snowflake. Their Fivetran ingestion, dbt transformations, Tableau dashboards, and Informatica pipelines all continue to work, just pointed at Snowflake instead of a legacy warehouse. In many cases, the partner tools actually perform better with Snowflake because of elastic compute and zero-copy cloning.</p>

<h3>Key Points</h3>
<ul>
  <li><strong>Ingestion:</strong> Fivetran, Airbyte, Matillion, Informatica, Glue — all have native Snowflake connectors. Customers keep their existing ingestion tooling.</li>
  <li><strong>Transformation:</strong> dbt is the dominant transformation tool for Snowflake. Dynamic Tables offer a Snowflake-native alternative for teams that prefer SQL-based pipelines.</li>
  <li><strong>BI/Analytics:</strong> Tableau, PowerBI, Looker, Sigma — all query Snowflake directly via JDBC/ODBC or native connectors. No data movement to BI layer required.</li>
  <li><strong>Native Apps:</strong> Partners can deploy applications that run inside the customer's Snowflake account. The app accesses customer data without the data leaving governance.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>What's your current data stack look like — what tools are you using for ingestion, transformation, and BI?</li>
  <li>Are there specific partner integrations that are must-haves for your team to adopt Snowflake?</li>
  <li>Are there any partners you're evaluating alternatives to — where a Snowflake-native capability might replace an external tool?</li>
</ul>`,

    'pillars': `
<h3>Talk Track</h3>
<p>Snowflake is built around three pillars that define the product philosophy: <strong>Easy</strong> — fully managed, nothing to tune or patch; <strong>Connected</strong> — one copy of data shared across clouds and engines without movement; <strong>Trusted</strong> — governance, security, and compliance built in, not bolted on.</p>
<p>These aren't marketing bullets — they're architectural commitments. Ask the customer which pillar they're most interested in, then use the rest of the deck to go deep on that theme.</p>

<h3>Key Points</h3>
<ul>
  <li><strong>Easy:</strong> Auto-suspend, auto-scale, zero maintenance. No index tuning, no partitioning strategy, no vacuum jobs.</li>
  <li><strong>Connected:</strong> A single data copy shared across clouds (Snowgrid), engines (Iceberg), and orgs (data sharing). No ETL between copies.</li>
  <li><strong>Trusted:</strong> Horizon governance — masking, row-level security, classification, lineage — applied uniformly across all data, all clouds, all engines.</li>
  <li>The pillars stack: connected data that's ungoverned is a liability; governed data that's hard to use isn't used.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>Which pillar aligns most with your current pain — is it operational overhead, data silos across teams, or governance gaps?</li>
  <li>Do you have data spread across multiple clouds or platforms today that your analysts can't easily join?</li>
  <li>What does your current compliance/audit process look like for data access?</li>
</ul>`,

    'snowflake-cowork': `
<h3>Talk Track</h3>
<p>Snowflake CoWork is the enterprise AI assistant built on top of Cortex Agents. Think of it as an internal ChatGPT, but instead of answering from training data, it answers from your Snowflake data — with governance enforced. An executive can ask "what were our top 3 revenue drivers last quarter?" and CoWork queries the actual data tables, applies their row-level access, and returns a cited answer. No SQL required. No data leaves the platform.</p>

<h3>Key Points</h3>
<ul>
  <li><strong>Governed AI assistant:</strong> Every answer is grounded in your actual data. Row-level security and masking apply — users only see answers derived from data they're permitted to access.</li>
  <li><strong>Multi-modal:</strong> Ask questions in natural language, upload documents for analysis, or request charts and visualizations. CoWork handles the orchestration.</li>
  <li><strong>Customizable context:</strong> Add your own knowledge bases (product documentation, policies, process guides) as Cortex Search services. CoWork uses them for RAG-grounded answers.</li>
  <li><strong>Built on Cortex Agents:</strong> Under the hood, CoWork is a Cortex Agent with pre-configured tools. You can extend it with custom MCP servers and tools.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>Are there business users who need data insights but don't have SQL skills — executives, sales managers, ops teams?</li>
  <li>Have you evaluated Microsoft Copilot for enterprise data access? CoWork is the Snowflake-native answer with tighter data governance.</li>
  <li>What would it mean for your business if every employee could query your data in plain English and get accurate, governed answers?</li>
</ul>`,

    'snowflake-cowork-internal': `
<h3>Talk Track</h3>
<p>This slide shows Snowflake's own deployment of CoWork — RAVEN, the AI Sales Agent built on CoWork for Snowflake's 6,000 GTM employees. It's a powerful proof point: Snowflake isn't just selling CoWork, they're running their entire sales intelligence operation on it. RAVEN is Snow-on-Snow at scale.</p>

<h3>Key Points</h3>
<ul>
  <li><strong>Snow-on-Snow:</strong> Snowflake's own sales team uses the same product they sell. RAVEN is CoWork deployed internally — not a prototype, it's in production for the global GTM org.</li>
  <li><strong>Scale:</strong> 6,000 sales, SE, and marketing employees get real-time account intelligence, meeting prep, and opportunity insights through RAVEN.</li>
  <li><strong>Data sources:</strong> RAVEN is grounded in Salesforce CRM, Gong call transcripts, Snowflake account usage data, external signals, and internal knowledge bases — all unified in Snowflake.</li>
  <li><strong>Use cases:</strong> Pre-call briefings, account health scoring, competitor intelligence, risk flags, renewal signals — all surfaced through natural language conversation.</li>
  <li><strong>Validation:</strong> The same governance, observability, and data quality features that Snowflake sells to customers power RAVEN internally. Snowflake is the reference customer.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>How does your sales or GTM team currently get account intelligence before a customer meeting?</li>
  <li>What data sources would you want a sales agent to have access to — CRM, call transcripts, usage data?</li>
  <li>Is a "Snow-on-Snow" deployment story compelling for your internal stakeholders?</li>
</ul>`,

    'snowflake-ml': `
<h3>Talk Track</h3>
<p>Snowflake ML is the full machine learning platform — from feature engineering through model training, registry, and deployment — all inside the Snowflake security boundary. The key pitch: your ML team doesn't have to leave Snowflake to train and deploy models. Features stay in Snowflake (no export to a feature store), models go into the Snowflake Model Registry, and inference runs via Snowpark or the REST API with RBAC applied.</p>

<h3>Key Points</h3>
<ul>
  <li><strong>Feature Store:</strong> Define feature views on Snowflake tables. Features are versioned, reusable, and point-in-time correct. No separate feature store infra to manage.</li>
  <li><strong>Model Registry:</strong> Version and manage models. Deploy for batch (Snowpark UDF), real-time (REST API endpoint), or in-SQL inference. One registry for all frameworks (sklearn, XGBoost, PyTorch).</li>
  <li><strong>ML Jobs:</strong> Run distributed training on Snowflake compute — CPU or GPU — without leaving the platform. Supports Ray, PyTorch distributed, and custom training loops.</li>
  <li><strong>Snowpark-Optimized Warehouses:</strong> Larger memory nodes for in-memory model training and vectorized UDF execution. GPU variants available for deep learning.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>Where does your ML team do feature engineering today — is it in Python notebooks pulling data out of Snowflake?</li>
  <li>How are you managing model versions and tracking which version is in production for each use case?</li>
  <li>Are you running SageMaker, Azure ML, or Vertex AI? What's driving the cost and complexity of that platform?</li>
</ul>`,

    'snowflake-notebooks': `
<h3>Talk Track</h3>
<p>Snowflake Notebooks combine SQL and Python cells in a single governed workspace that runs on Snowflake compute. There's no local Python environment to manage, no kernel to keep alive, and no data to copy to your laptop — your code runs server-side against full datasets. For data scientists and analysts who live in Jupyter, this is Jupyter but with your Snowflake data always available at full speed, and with built-in version control, sharing, and Cortex AI integration.</p>

<h3>Key Points</h3>
<ul>
  <li><strong>SQL + Python in one notebook:</strong> Alternate cell types freely. Reference SQL cell results in Python with <code>cell1.to_pandas()</code>. No context switching.</li>
  <li><strong>Runs on Snowflake compute:</strong> Uses your warehouse or a Snowpark-Optimized Warehouse. Data never leaves Snowflake. Full Python package ecosystem via Anaconda (1000+ packages).</li>
  <li><strong>Cortex AI built in:</strong> Call AI_COMPLETE, AI_CLASSIFY, Cortex Analyst, and Cortex Agents directly from notebook cells. AI on your data in the same workspace.</li>
  <li><strong>Git integration + sharing:</strong> Commit notebooks to Git repos. Share read-only or editable with any Snowflake user. No export or download needed.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>Are your data scientists using Jupyter or VS Code locally and pulling data from Snowflake to their laptops? How large are those datasets — are there memory limits?</li>
  <li>Do you have notebook-based analyses that need to be shared with stakeholders who don't have a Python environment?</li>
  <li>Are you using notebooks for EDA that feeds into production pipelines — could that work run in Snowflake directly instead of on a separate compute cluster?</li>
</ul>`,

    'snowgrid': `
<h3>Talk Track</h3>
<p>Snowgrid is Snowflake's answer to multi-cloud. Most enterprises are multi-cloud by accident — one business unit on AWS, another on Azure, a SaaS vendor on GCP. Snowgrid connects all of these into one logical platform where data flows automatically between regions and clouds. Your analysts in London query the same data your engineers in San Francisco are writing, with no ETL in between.</p>

<h3>Key Points</h3>
<ul>
  <li><strong>Cross-cloud replication:</strong> Tables, databases, and even entire accounts replicate continuously. Failover is automated — your application reconnects to the secondary and keeps running.</li>
  <li><strong>Global data sharing:</strong> Share live data across Snowflake accounts in different clouds or organizations. The consumer queries your data; you control access. No data copy.</li>
  <li><strong>Business Continuity:</strong> RPO/RTO is measured in seconds for most workloads. Client redirect handles connection rerouting transparently.</li>
  <li><strong>One governance layer:</strong> Policies set in the primary replicate to all secondaries. You don't manage governance separately per region.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>Are you on a single cloud today, or are different teams or business units on different clouds?</li>
  <li>What's your current disaster recovery plan for your data warehouse? What's the RTO target?</li>
  <li>Do you share data with partners, customers, or internal teams in different cloud regions today — how are you doing that?</li>
</ul>`,

    'snowpark': `
<h3>Talk Track</h3>
<p>Snowpark is the answer to the question "what if I could write Python but have it run at Snowflake speed?" Your Python (or Java or Scala) code is compiled to SQL and runs inside Snowflake's engine — no data movement, no driver overhead, full query optimization. This matters most for data engineers doing complex transformations and data scientists running feature engineering at scale.</p>

<h3>Key Points</h3>
<ul>
  <li><strong>Lazy evaluation:</strong> DataFrame operations build a query plan; nothing executes until <code>.collect()</code>. Snowflake compiles the entire chain into one optimized SQL query.</li>
  <li><strong>UDFs and Stored Procs:</strong> Register Python functions as SQL-callable UDFs. Write application logic (loops, branches, transactions) as Stored Procedures — no external application server needed.</li>
  <li><strong>Vectorized UDFs:</strong> Receive a <code>pd.Series</code> per batch instead of one row at a time. 10–100x faster for numeric transformations and ML feature engineering.</li>
  <li><strong>Same governance:</strong> Snowpark code runs under the caller's role. RBAC, masking, and row access policies apply to all data accessed through Snowpark.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>Are your data engineers writing Python Pandas transformations on data pulled out of Snowflake, then writing back? We can run that Python inside Snowflake on the full dataset.</li>
  <li>Do you have complex ETL logic in PySpark that you'd like to simplify or migrate to Snowflake?</li>
  <li>Are your data scientists doing feature engineering outside Snowflake because Python libraries aren't available in SQL?</li>
</ul>`,

    'sql-analytics': `
<h3>Talk Track</h3>
<p>Snowflake's SQL analytics story isn't just "we support SQL" — it's that you can query structured columns, JSON payloads, geospatial coordinates, and time-series data all in the same SELECT statement. Plus Snowflake-specific extensions like QUALIFY, ASOF JOIN, and H3 hexagonal indexing that don't exist in other platforms and immediately resonate with technical audiences.</p>

<h3>Key Points</h3>
<ul>
  <li><strong>Multi-modal:</strong> VARIANT (JSON), GEOGRAPHY, VECTOR, and structured types all queryable together.</li>
  <li><strong>SQL extensions:</strong> QUALIFY eliminates subqueries. ASOF JOIN does temporal alignment. TIMESERIES enables sliding windows without complex frame syntax.</li>
  <li><strong>Zero-copy analytics:</strong> All capabilities run on the same data — no export to a geo DB, no separate time-series store, no JSON ETL.</li>
  <li><strong>Streamlit-in-Snowflake:</strong> Build and deploy interactive dashboards directly on top of your Snowflake data, fully governed.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>Are you storing JSON or event data in Snowflake today? How are you querying the nested structures?</li>
  <li>Do you have location data — store locations, delivery addresses, sensor coordinates — that you want to analyze spatially?</li>
  <li>Are your analysts building complex time-series queries with lots of CTEs to handle gap-filling or temporal alignment?</li>
</ul>`,

    'sql-analytics-geospatial': `
<h3>Talk Track</h3>
<p>Snowflake has two geospatial types and 50+ spatial functions built natively into the SQL engine. GEOGRAPHY uses real-world WGS84 coordinates (lat/lon) and handles the curvature of the Earth — distances are accurate in meters. GEOMETRY is for flat-plane coordinate systems used in engineering and mapping. Both are fully indexed and queryable without any external GIS software. H3 hexagonal indexing is the biggest differentiator — it lets you aggregate millions of location points into hexagonal cells for density analysis at any resolution, in a single GROUP BY.</p>

<h3>Key Points</h3>
<ul>
  <li><strong>GEOGRAPHY vs GEOMETRY:</strong> GEOGRAPHY = real-world globe (lat/lon, spherical math). GEOMETRY = flat plane (engineering, local CRS).</li>
  <li><strong>ST_* functions:</strong> 50+ covering distance (ST_DISTANCE), containment (ST_WITHIN, ST_CONTAINS), intersection (ST_INTERSECTS), and aggregation (ST_UNION_AGG).</li>
  <li><strong>H3 indexing:</strong> Uber's open hexagonal grid. Aggregate millions of GPS points into density cells. Resolution 0 = planet, Resolution 15 = ~1m². No custom binning needed.</li>
  <li><strong>No separate GIS:</strong> Everything runs in Snowflake. Export to GeoJSON for Kepler.gl, Mapbox, or Tableau without external tools.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>Do you have location data in your tables — addresses, GPS coordinates, delivery zones, store locations?</li>
  <li>Are you using a separate GIS tool (PostGIS, BigQuery Geo) today for spatial queries? What's driving that decision?</li>
  <li>Do you have use cases around delivery route analysis, coverage mapping, proximity-based marketing, or territory management?</li>
</ul>`,

    'sql-analytics-semistructured': `
<h3>Talk Track</h3>
<p>Snowflake's VARIANT type lets you land raw JSON directly into Snowflake and query it immediately — no schema definition upfront. You read fields using colon path syntax and cast on access. This is a huge unlock for event data, API responses, and log files where the schema isn't known in advance. FLATTEN turns nested arrays into rows in a single expression, and INFER_SCHEMA auto-detects a schema from staged files so you can define a proper table when you're ready.</p>

<h3>Key Points</h3>
<ul>
  <li><strong>VARIANT type:</strong> Stores JSON, Avro, Parquet, ORC natively. No serialization overhead. Queryable with <code>:key</code> path syntax and cast on read.</li>
  <li><strong>Typed access:</strong> <code>payload:user:id::STRING</code> — access nested keys and cast the value. NULL-safe: missing keys return NULL, not an error.</li>
  <li><strong>FLATTEN:</strong> Turns a JSON array into rows. Use LATERAL FLATTEN to cross-join each array element to its parent row.</li>
  <li><strong>INFER_SCHEMA:</strong> Auto-detect schema from staged Parquet, JSON, or CSV files. Generates CREATE TABLE DDL you can review and use.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>Do you have event streams or API response data that you're currently storing as raw strings or in a separate NoSQL system?</li>
  <li>Are your data engineers spending time writing custom parsers for nested JSON before it can be queried in SQL?</li>
  <li>Do you have Parquet files in S3 you want to load into Snowflake — INFER_SCHEMA automates the table definition step?</li>
</ul>`,

    'sql-analytics-timeseries': `
<h3>Talk Track</h3>
<p>Time-series SQL is notoriously painful in most platforms — you end up with massive CTEs just to fill gaps in your data or align events to the nearest timestamp. Snowflake has purpose-built constructs that collapse these patterns into single expressions: DATE_SPINE generates complete time scaffolds, ASOF JOIN aligns on nearest prior timestamp without a range join, and the TIMESERIES clause enables sliding window aggregations with interval-based frames.</p>

<h3>Key Points</h3>
<ul>
  <li><strong>DATE_SPINE:</strong> Generate a complete, gapless date/time scaffold. LEFT JOIN to surface nulls for missing periods — no more complex recursive CTEs.</li>
  <li><strong>ASOF JOIN:</strong> Join two time series on nearest prior timestamp. Classic use case: attach the most recent price to every trade event.</li>
  <li><strong>TIMESERIES clause:</strong> Sliding window aggregations using interval-based frames (RANGE BETWEEN INTERVAL '1 hour' PRECEDING). Works on uneven data without resampling.</li>
  <li><strong>RANGE vs ROWS:</strong> ROWS-based frames count physical rows; RANGE-based frames use value distance. Critical distinction for time-series analysis.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>Are you building reports that need to show zero values for periods with no data — how are you generating those gap-filled rows today?</li>
  <li>Do you have use cases where you need to join events to the most recent state of another table — like attaching exchange rates or prices to transactions?</li>
  <li>Are your analysts writing complex CTEs just to do rolling averages or moving sums?</li>
</ul>`,

    'sql-analytics-windows': `
<h3>Talk Track</h3>
<p>Snowflake supports the complete ANSI window function spec plus several extensions that eliminate entire categories of subqueries. The most impactful for technical audiences is QUALIFY — it filters window function results inline, like HAVING does for GROUP BY, without requiring a wrapper CTE or subquery. Show an analyst who's been writing QUALIFY patterns in CTEs and they immediately want it. PIVOT/UNPIVOT, LEAD/LAG, and full ranking functions round out a toolkit that handles the most common analytical query patterns cleanly.</p>

<h3>Key Points</h3>
<ul>
  <li><strong>QUALIFY:</strong> Filter window function results in the same query. <code>QUALIFY ROW_NUMBER() OVER (...) = 1</code> — no CTE, no subquery.</li>
  <li><strong>Full ranking set:</strong> ROW_NUMBER, RANK, DENSE_RANK, NTILE, CUME_DIST, PERCENT_RANK — plus RATIO_TO_REPORT for proportional shares.</li>
  <li><strong>LEAD / LAG:</strong> Access values from other rows within a partition without self-joins. Period-over-period comparisons in a single SELECT.</li>
  <li><strong>PIVOT / UNPIVOT:</strong> Reshape rows to columns (pivot) and back (unpivot). PIVOT in Snowflake supports dynamic column values via subquery.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>Are your analysts writing complex nested CTEs just to filter on a window function result? QUALIFY eliminates that pattern entirely.</li>
  <li>Do you have period-over-period reporting needs — month-over-month, year-over-year — that currently require self-joins?</li>
  <li>Do you need to pivot survey results, product attributes, or metrics from rows to columns for reporting?</li>
</ul>`,

    'streamlit': `
<h3>Talk Track</h3>
<p>Streamlit in Snowflake lets teams build and deploy data apps, dashboards, and internal tools directly inside Snowflake — no separate hosting infrastructure, no data movement, no separate auth system. Apps run in Snowflake's compute, governed by Snowflake's RBAC, and deployed with a single command.</p>

<h3>Key Points</h3>
<ul>
  <li><strong>Zero infra:</strong> No Flask server, no EC2 instance, no Kubernetes deployment needed. The app runs in Snowflake's serverless compute and scales automatically.</li>
  <li><strong>Native data access:</strong> Streamlit apps access Snowflake tables directly through <code>st.connection('snowflake')</code> — no connection strings, no credentials to manage.</li>
  <li><strong>Governed by RBAC:</strong> Access to the Streamlit app is controlled by Snowflake roles. The app runs with the privileges of the viewer's role — no data over-sharing.</li>
  <li><strong>Sharing:</strong> Apps can be shared internally via Snowflake's role system, or published to the Snowflake Marketplace as a Native App with Streamlit UI.</li>
  <li><strong>Python ecosystem:</strong> Full access to pandas, Plotly, Altair, scikit-learn, and any other Python library in the app — plus Snowpark DataFrame API for large-scale computation.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>How do your analysts or data scientists currently share insights — dashboards, notebooks, ad hoc queries?</li>
  <li>Do you have internal tools built on Python or Flask that need access to Snowflake data?</li>
  <li>Is building and hosting BI tools for internal users a pain point today?</li>
</ul>`,

    'transactions': `
<h3>Talk Track</h3>
<p>Snowflake for Transactions ends the era of database sprawl. Instead of running separate systems for OLTP, analytics, and AI — each requiring ETL pipelines to move data between them — everything runs on one platform with one security model and one copy of the data.</p>

<h3>Two Products</h3>
<ul>
  <li><strong>Snowflake Postgres:</strong> The world\'s most popular database, running on Snowflake. Migrate existing Postgres apps with zero code changes. Same drivers, same SQL, same tooling. Enterprise SLA (99.95% uptime), high availability, and 10 days of free continuous backups. Transactional data is immediately available for analytics and AI — no pipelines required.</li>
  <li><strong>Unistore (Hybrid Tables):</strong> Row-store tables inside Snowflake, optimized for point lookups and high-concurrency writes. Join Hybrid Tables with regular Snowflake tables in a single SQL statement. Retire your OLTP database and the ETL jobs that fed your data warehouse.</li>
</ul>

<h3>Key Differentiators</h3>
<ul>
  <li><strong>No Pipeline Tax:</strong> Data doesn\'t need to move. One platform means no ETL, no sync jobs, no stale copies.</li>
  <li><strong>One Governance Model:</strong> RBAC, masking policies, and lineage apply equally to transactional and analytical data.</li>
  <li><strong>AI-Ready:</strong> Transactional data is immediately available to Cortex AI for real-time inference and agents.</li>
</ul>

<h3>When to Use Which</h3>
<ul>
  <li>Running a full Postgres app (app server, APIs, CRUD operations)? → <strong>Snowflake Postgres</strong></li>
  <li>Need OLTP-style fast lookups and high-concurrency writes inside Snowflake? → <strong>Unistore / Hybrid Tables</strong></li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>How many databases does your current architecture have — OLTP, data warehouse, reporting?</li>
  <li>How often is transactional data stale in your analytics environment?</li>
  <li>What does the ETL pipeline between your transaction database and Snowflake cost to maintain?</li>
</ul>`,

    'well-architected-framework': `
<h3>Talk Track</h3>
<p>The Snowflake Well-Architected Framework (WAF) is the prescriptive architectural standard for deploying Snowflake at enterprise scale. It defines five pillars and specialized industry lenses that translate proven best practices into a unified operating model — giving customers a clear rubric for assessing their deployment and prioritizing improvements.</p>

<h3>Five Pillars</h3>
<ul>
  <li><strong>Operational Excellence:</strong> Automation, observability, and incident response — running Snowflake like a production engineering team.</li>
  <li><strong>Security:</strong> Authentication, network policies, encryption, key management, and zero-trust patterns for enterprise deployments.</li>
  <li><strong>Reliability:</strong> BCDR, failover, replication, and multi-region architectures that meet enterprise SLA requirements.</li>
  <li><strong>Performance Efficiency:</strong> Warehouse sizing, caching, clustering, search optimization, and query tuning — getting the most out of Snowflake compute.</li>
  <li><strong>Cost Optimization:</strong> Resource monitors, budgets, storage tiering, and FinOps discipline for controlling spend at scale.</li>
</ul>

<h3>Key Points</h3>
<ul>
  <li>WAF reviews are a PS-led engagement, but the framework is freely available as a self-assessment tool.</li>
  <li>Each pillar has prescriptive checklists and Snowflake SQL diagnostic queries customers can run on their own accounts.</li>
  <li>Industry lenses (Financial Services, Healthcare, Retail) add sector-specific guidance on top of the five pillars.</li>
</ul>

<h3>Questions to Ask</h3>
<ul>
  <li>Have you done a formal review of your Snowflake architecture against best practices?</li>
  <li>Which pillar is your team most concerned about — security, cost, or performance?</li>
  <li>Do you have a clear picture of your current BCDR posture for Snowflake?</li>
</ul>`,

  },

});
