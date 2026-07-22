# Icon Library

This is the canonical icon library for repo-managed diagrams. Use these icons
inside D2 sources via the `icon: research/diagram_src/icons/<filename>` syntax.

Filename prefixes encode the icon family. Snowflake-native icons are the light
blue glyphs in the `sf_*` set and should be used as the default visual when a
node represents a first-class Snowflake capability.

## Naming Convention

- `aws_*` - AWS service icons (rasterised from the official AWS Excalidraw library)
- `bi_*` - Business intelligence and dashboarding tools
- `catalog_*` - Data catalogs
- `cloud_*` - Hyperscaler vendor logos
- `databricks_*` - Databricks product icons (rasterised from the official Databricks Excalidraw library)
- `db_*` - Operational databases / OLTP / lake compute engines
- `etl_*` - ELT and data movement vendors
- `fabric_*` - Microsoft Fabric capability icons (rasterised from the official Fabric Excalidraw library)
- `format_*` - Open table formats (e.g. Delta Lake)
- `gcp_*` - GCP service icons (rasterised from a community Excalidraw library)
- `governance_*` - Governance and policy tools
- `itsm_*` - IT service management vendors
- `llm_*` - Foundation model providers
- `ml_*` - ML / data science tools and libraries
- `modeling_*` - Data modeling tools
- `observability_*` - Observability and monitoring vendors
- `orchestration_*` - Workflow orchestration tools
- `scm_*` - Source control and collaboration platforms
- `search_*` - Search engines
- `sf_*` - Snowflake-native capability icons (light blue Snowflake set)
- `streaming_*` - Streaming and event platforms
- `transform_*` - Transformation tools
- `vendor_*` - Vendor logos used for direct callouts (e.g. Databricks)

### Sourced from Excalidraw Libraries

The `aws_*`, `databricks_*`, `fabric_*`, `gcp_*`, and the bulk of the
`sf_*` set were imported from public Excalidraw library files via
`scripts/import_excalidraw_icons.py`, which converts each Excalidraw
library item into a transparent 512x512 PNG. Re-run that script if a
source library is updated. The script enforces:

- Transparent backgrounds on every PNG.
- snake_case filenames with the family prefix shown above.
- Skipping any candidate that already exists in the repo (file-level dedup)
  or that maps to a Snowflake concept already represented by a curated
  repo icon (concept-level dedup, see `SF_REPRESENTED_BY_REPO` in the
  script). The full audit trail is written to
  `research/diagram_src/icons_import_log.json`.

The GCP Excalidraw library (`gcp-icons.excalidrawlib`) has no `name` field
on its library items, so deterministic conceptual dedup is impossible.
The icons were imported with sequential names and then renamed to
product-specific names (`gcp_bigquery.png`, `gcp_dataflow.png`, etc.).
See the [GCP inventory](#gcp-inventory) appendix for the full list.

## When To Use What

### Snowflake-Native Icons (`sf_*`)

Use these whenever a node represents a Snowflake capability or the Snowflake
side of an architecture. Light blue is the visual signal that something is
first-class on Snowflake.

| Icon | Use For |
|------|---------|
| `sf_personas.png` | Generic persona/user nodes on Snowflake-side workflows |
| `sf_external_stage.png` | External stages, external file references |
| `sf_iceberg_tables.png` | Snowflake-managed Iceberg tables |
| `sf_iceberg_lake.png` | Iceberg-backed lake context (350 PB lake style nodes) |
| `sf_streaming.png` | Streaming ingest concept (Snowpipe Streaming, Streams) |
| `sf_streams_tasks.png` | Streams + Tasks pipeline nodes |
| `sf_snowpipe.png` | Snowpipe specifically as the ingest pipe |
| `sf_data_flow.png` | Generic data flow/connector nodes on Snowflake |
| `sf_sql_database.png` | Snowflake SQL surface or database object |
| `sf_dynamic_tables.png` | Dynamic Tables nodes |
| `sf_warehouses.png` | Virtual warehouses / multi-cluster compute |
| `sf_storage.png` | Snowflake-managed storage / Hybrid Tables |
| `sf_spcs_containers.png` | Snowpark Container Services workloads |
| `sf_spcs_tools.png` | Custom services / containerized tooling on SPCS |
| `sf_cortex_ai.png` | Cortex AI, agents, or Cortex-driven analytics |
| `sf_data_products.png` | Reusable data products / Gold layer assets |
| `sf_analytics_chart.png` | Analytics output, dashboards on Snowflake |
| `sf_data_sharing_global.png` | Cross-region or global data sharing |
| `sf_secure_sharing.png` | Secure sharing / governed access |
| `sf_geospatial.png` | Geospatial datasets / location-aware nodes |
| `sf_document.png` | Generic governed document asset |
| `sf_file_text.png` | Text file asset |
| `sf_file_image.png` | Image file asset |
| `sf_file_audio.png` | Audio file asset |
| `sf_file_video.png` | Video file asset |

#### Snowflake catalog objects (`sf_*`, imported)

These are the additional `sf_*` icons rasterised from the official Snowflake
iconography Excalidraw library. Use them when a diagram needs to depict a
specific Snowflake catalog object beyond the curated visual nodes above.
The repo's curated `sf_*` icons remain the default for high-level
architecture work; reach for these when the diagram is at the catalog /
object level.

| Icon | Use For |
|------|---------|
| `sf_snowflake.png` | Plain Snowflake mark (use sparingly) |

### Streaming and Event Platforms (`streaming_*`)

Use when a source or pipe represents an external streaming system feeding
Snowflake. Pair with `sf_snowpipe.png` or `sf_streaming.png` on the Snowflake
side of the boundary.

| Icon | Use For |
|------|---------|
| `streaming_kafka.png` | Apache Kafka topic/cluster source |
| `streaming_event_hubs.png` | Azure Event Hubs source |
| `streaming_kinesis_firehose.png` | AWS Kinesis Data Firehose source |
| `streaming_cloud_dataflow.png` | GCP Cloud Dataflow pipeline |

### Cloud Platforms (`cloud_*`)

Use to mark hyperscaler context. Use sparingly. Prefer `sf_*` icons for the
Snowflake portion and `cloud_*` only to indicate the underlying cloud account
or region context.

| Icon | Use For |
|------|---------|
| `cloud_aws.png` | AWS account, S3, AWS-only context |
| `cloud_azure.png` | Azure account, ADLS, Azure-only context |
| `cloud_gcp.png` | GCP account, GCS, GCP-only context |

### Operational Databases (`db_*`)

Use for non-Snowflake source systems and legacy compute engines.

| Icon | Use For |
|------|---------|
| `db_postgresql.png` | PostgreSQL source / OLTP |
| `db_mysql.png` | MySQL source / OLTP |
| `db_oracle.png` | Oracle source / OLTP |
| `db_mongodb.png` | MongoDB document store |
| `db_hadoop.png` | Legacy Hadoop platform |

### Open Table Formats (`format_*`)

Use to call out the underlying file format on a lake, especially during
migrations.

| Icon | Use For |
|------|---------|
| `format_delta_lake.png` | Delta Lake format on the bank's lake |

### ELT / Data Movement (`etl_*`)

Use on ingestion or replication nodes. Pair with `sf_*` ingest icons on the
Snowflake side.

| Icon | Use For |
|------|---------|
| `etl_fivetran.png` | Fivetran connectors |
| `etl_matillion.png` | Matillion ELT |
| `etl_informatica.png` | Informatica IICS |
| `etl_talend.png` | Talend |
| `etl_striim.png` | Striim CDC |
| `etl_hvr.png` | HVR CDC |

### Transform / Orchestration (`transform_*`, `orchestration_*`)

Use on transform layer nodes when the bank uses these tools.

| Icon | Use For |
|------|---------|
| `transform_dbt.png` | dbt Core / Cloud transformations |
| `orchestration_airflow.png` | Apache Airflow DAGs |

### Catalogs and Governance (`catalog_*`, `governance_*`)

Use on the governance plane and catalog nodes when third-party tools are part
of the picture.

| Icon | Use For |
|------|---------|
| `catalog_alation.png` | Alation data catalog |
| `catalog_atlan.png` | Atlan data catalog |
| `governance_collibra.png` | Collibra governance |

### Modeling (`modeling_*`)

Use when calling out modeling tools used to design Snowflake schemas.

| Icon | Use For |
|------|---------|
| `modeling_sqldbm.png` | SqlDBM data model |
| `modeling_coalesce.png` | Coalesce transformation modeling |

### BI and Analytics (`bi_*`)

Use on BI consumers downstream of Snowflake.

| Icon | Use For |
|------|---------|
| `bi_tableau.png` | Tableau dashboards |
| `bi_powerbi.png` | Power BI |
| `bi_looker.png` | Looker |
| `bi_thoughtspot.png` | ThoughtSpot |
| `bi_microstrategy.png` | MicroStrategy |
| `bi_qlik.png` | Qlik |
| `bi_grafana.png` | Grafana |
| `bi_google_analytics.png` | Google Analytics |

### ML and Data Science (`ml_*`)

Use on data science workflows or notebook surfaces.

| Icon | Use For |
|------|---------|
| `ml_jupyter.png` | Jupyter notebooks |
| `ml_pandas.png` | pandas data manipulation |
| `ml_r.png` | R analytics environment |
| `ml_h2o.png` | H2O.ai ML platform |
| `ml_dataiku.png` | Dataiku DSS |

### LLMs (`llm_*`)

Use to indicate which foundation models a Snowflake Cortex workflow can call.

| Icon | Use For |
|------|---------|
| `llm_anthropic.png` | Claude / Anthropic model |
| `llm_meta_llama.png` | Meta Llama family |
| `llm_mistral.png` | Mistral models |
| `llm_deepseek.png` | DeepSeek models |
| `llm_reka.png` | Reka models |

### Source Control (`scm_*`)

Use to call out the bank's code repository platform on engineering diagrams.

| Icon | Use For |
|------|---------|
| `scm_github.png` | GitHub |
| `scm_gitlab.png` | GitLab |
| `scm_bitbucket.png` | Bitbucket |
| `scm_atlassian.png` | Atlassian (Jira/Confluence ecosystem) |

### Observability and ITSM

| Icon | Use For |
|------|---------|
| `observability_datadog.png` | Datadog observability |
| `itsm_servicenow.png` | ServiceNow ticketing or workflow |

### Search

| Icon | Use For |
|------|---------|
| `search_elasticsearch.png` | Elasticsearch search workloads |

### Vendors

Use for direct competitive or partner callouts only.

| Icon | Use For |
|------|---------|
| `vendor_databricks.png` | Databricks classic / Mosaic AI / DBSQL callouts |

### Databricks Product Icons (`databricks_*`)

Use these for fine-grained Databricks product callouts when `vendor_databricks.png`
is too generic. Imported from the official Databricks Excalidraw library.
Pair with `sf_*` icons on the Snowflake side of any boundary diagram.

| Icon | Use For |
|------|---------|
| `databricks_databricks.png` | Generic Databricks platform |
| `databricks_databricks_one.png` | Databricks One unified UX |
| `databricks_databricks_sql.png` | Databricks SQL warehouse |
| `databricks_lakehouse.png` | Databricks lakehouse architecture |
| `databricks_lakebase.png` | Lakebase OLTP layer |
| `databricks_lakebridge.png` | Lakebridge migrations |
| `databricks_unity_catalog.png` | Unity Catalog governance plane |
| `databricks_lakeflow.png` | Lakeflow umbrella |
| `databricks_lakeflow_connect.png` | Lakeflow Connect ingest |
| `databricks_lakeflow_jobs.png` | Lakeflow Jobs scheduler |
| `databricks_lakeflow_designer.png` | Lakeflow Designer |
| `databricks_lakeflow_declarative_pipelines.png` | Declarative pipelines (DLT successor) |
| `databricks_streaming.png` | Databricks streaming workloads |
| `databricks_delta_sharing.png` | Delta Sharing |
| `databricks_marketplace.png` | Databricks Marketplace |
| `databricks_clean_rooms.png` | Databricks Clean Rooms |
| `databricks_apps.png` | Databricks Apps |
| `databricks_dashboards.png` | AI/BI Dashboards |
| `databricks_ai_and_bi.png` | AI/BI surface |
| `databricks_genie.png` | Genie conversational analytics |
| `databricks_mosaic_ai.png` | Mosaic AI |
| `databricks_agent_bricks.png` | Agent Bricks |
| `databricks_notebooks.png` | Databricks notebooks |
| `databricks_photon.png` | Photon engine |

When the diagram intent is "Snowflake versus Databricks", use a single
`vendor_databricks.png` callout rather than the full product set.

### Microsoft Fabric Icons (`fabric_*`)

Use these for Fabric/OneLake architecture callouts. Imported from the
official Fabric Excalidraw library (135 items). Reach for these when the
diagram contrasts Fabric primitives with Snowflake equivalents or models a
Fabric workspace handing data to Snowflake. The full inventory is listed in
the [Fabric inventory](#fabric-inventory) appendix.

Common picks:

| Icon | Use For |
|------|---------|
| `fabric_fabric.png` | Fabric umbrella / generic Fabric callout |
| `fabric_onelake.png` | OneLake foundation |
| `fabric_lakehouse.png` | Fabric Lakehouse |
| `fabric_warehouse.png` | Fabric Warehouse |
| `fabric_data_warehouse.png` | Data Warehouse experience |
| `fabric_data_factory.png` | Data Factory pipelines |
| `fabric_data_engineering.png` | Data Engineering experience |
| `fabric_data_science.png` | Data Science experience |
| `fabric_real_time_intelligence.png` | Real-Time Intelligence experience |
| `fabric_real_time_dashboard.png` | Real-Time Dashboard |
| `fabric_power_bi.png` | Power BI inside Fabric (prefer over `bi_powerbi.png` when the diagram is Fabric-scoped) |
| `fabric_eventhouse.png` | Eventhouse |
| `fabric_eventstream.png` | Eventstream |
| `fabric_kql_database.png` | KQL Database |
| `fabric_sql_database.png` | Fabric SQL Database |
| `fabric_mirrored_snowflake.png` | Mirrored Snowflake (boundary node) |
| `fabric_mirrored_sql_database.png` | Mirrored SQL Database |
| `fabric_mirrored_azure_databricks_catalog.png` | Mirrored Databricks Unity Catalog |
| `fabric_copilot.png` | Fabric Copilot |
| `fabric_data_agent.png` | Fabric Data Agent |
| `fabric_pipeline.png` | Fabric pipeline orchestration |
| `fabric_notebook.png` | Fabric notebook |
| `fabric_workspace.png` | Workspace container |
| `fabric_capacity.png` | Capacity unit |
| `fabric_gateway.png` | On-prem gateway |
| `fabric_domain.png` | Domain |

### AWS Service Icons (`aws_*`)

Use for AWS-specific source, sink, or boundary nodes. Imported from the
official AWS Excalidraw library (248 items). Prefer the curated `cloud_aws.png`
for generic "this lives on AWS" context, and reach for `aws_*` only when the
specific service matters. The full inventory is in the
[AWS inventory](#aws-inventory) appendix.

Common picks for data-platform diagrams:

| Icon | Use For |
|------|---------|
| `aws_s3.png` | S3 buckets / object storage |
| `aws_glue.png` | AWS Glue ETL |
| `aws_glue_databrew.png` | Glue DataBrew |
| `aws_lake_formation.png` | Lake Formation |
| `aws_data_lake.png` | Generic AWS data lake |
| `aws_athena.png` | Athena |
| `aws_redshift.png` | Redshift |
| `aws_emr.png` | EMR |
| `aws_kinesis.png` | Kinesis (umbrella) |
| `aws_kinesis_data_streams.png` | Kinesis Data Streams |
| `aws_kinesis_data_firehose.png` | Kinesis Data Firehose |
| `aws_kinesis_data_analytics.png` | Kinesis Data Analytics |
| `aws_managed_service_for_apache_flink.png` | MSK Flink |
| `aws_managed_streaming_for_apache_kafka.png` | MSK Kafka |
| `aws_data_exchange.png` | AWS Data Exchange |
| `aws_datazone.png` | Amazon DataZone |
| `aws_quicksight.png` | QuickSight |
| `aws_sagemaker.png` | SageMaker (umbrella) |
| `aws_amazon_bedrock.png` | Bedrock |
| `aws_amazon_q.png` | Amazon Q |
| `aws_aurora.png` | Aurora source |
| `aws_dynamodb.png` | DynamoDB source |
| `aws_documentdb.png` | DocumentDB source |
| `aws_keyspaces.png` | Keyspaces source |
| `aws_step_functions.png` / `aws_aws_step_functions_workflow.png` | Step Functions orchestration |
| `aws_iam.png` | IAM identity boundary |
| `aws_kms.png` | KMS keys |
| `aws_secrets_manager.png` | Secrets Manager |
| `aws_eventbridge.png` | EventBridge |
| `aws_lambda.png` | Lambda function |
| `aws_api_gateway.png` | API Gateway |

### GCP Service Icons (`gcp_*`)

GCP service icons rasterised from a community Excalidraw library; use them
for fine-grained GCP product callouts and prefer `cloud_gcp.png` for generic
GCP context.

| Icon | Use For |
|------|---------|
| `gcp_cloud.png` | Google Cloud Platform umbrella logo |
| `gcp_compute_engine.png` | Compute Engine VM instances |
| `gcp_app_engine.png` | App Engine PaaS |
| `gcp_cloud_functions.png` | Cloud Functions serverless |
| `gcp_cloud_run.png` | Cloud Run containerised workloads |
| `gcp_gke.png` | Google Kubernetes Engine clusters |
| `gcp_cloud_storage.png` | Cloud Storage (GCS) buckets |
| `gcp_persistent_disk.png` | Persistent Disk block storage |
| `gcp_filestore.png` | Filestore managed NFS |
| `gcp_iam.png` | Identity and Access Management |
| `gcp_cloud_sql.png` | Cloud SQL managed relational DB |
| `gcp_cloud_spanner.png` | Cloud Spanner globally distributed DB |
| `gcp_bigtable.png` | Cloud Bigtable wide-column store |
| `gcp_firestore.png` | Firestore document database |
| `gcp_memorystore.png` | Memorystore (Redis / Memcached) |
| `gcp_datastore.png` | Datastore NoSQL |
| `gcp_bigquery.png` | BigQuery analytics data warehouse |
| `gcp_dataflow.png` | Dataflow stream and batch processing |
| `gcp_dataproc.png` | Dataproc managed Spark / Hadoop |
| `gcp_pubsub.png` | Pub/Sub messaging and event ingestion |
| `gcp_data_fusion.png` | Cloud Data Fusion ETL |
| `gcp_composer.png` | Cloud Composer (managed Airflow) |
| `gcp_data_catalog.png` | Data Catalog metadata management |
| `gcp_dataplex.png` | Dataplex data management |
| `gcp_looker.png` | Looker BI platform |
| `gcp_looker_studio.png` | Looker Studio (Data Studio) dashboards |
| `gcp_vertex_ai.png` | Vertex AI ML platform |
| `gcp_automl.png` | AutoML automated model training |
| `gcp_ai_platform.png` | AI Platform notebooks and training |
| `gcp_natural_language.png` | Natural Language API |
| `gcp_vision_ai.png` | Vision AI image analysis |
| `gcp_speech_to_text.png` | Speech-to-Text transcription |
| `gcp_text_to_speech.png` | Text-to-Speech synthesis |
| `gcp_translation.png` | Cloud Translation API |
| `gcp_document_ai.png` | Document AI extraction |
| `gcp_recommendations_ai.png` | Recommendations AI personalisation |
| `gcp_dialogflow.png` | Dialogflow conversational AI |
| `gcp_video_intelligence.png` | Video Intelligence API |
| `gcp_healthcare_api.png` | Healthcare API / FHIR |
| `gcp_cloud_logging.png` | Cloud Logging (Stackdriver) |
| `gcp_cloud_monitoring.png` | Cloud Monitoring metrics and alerts |
| `gcp_cloud_trace.png` | Cloud Trace distributed tracing |
| `gcp_cloud_profiler.png` | Cloud Profiler performance analysis |
| `gcp_error_reporting.png` | Error Reporting |
| `gcp_cloud_debugger.png` | Cloud Debugger live debugging |
| `gcp_vpc.png` | Virtual Private Cloud networking |
| `gcp_cloud_load_balancing.png` | Cloud Load Balancing |
| `gcp_cloud_dns.png` | Cloud DNS |
| `gcp_cloud_armor.png` | Cloud Armor WAF / DDoS protection |
| `gcp_cloud_cdn.png` | Cloud CDN content delivery |
| `gcp_cloud_nat.png` | Cloud NAT outbound gateway |
| `gcp_cloud_interconnect.png` | Cloud Interconnect dedicated links |
| `gcp_cloud_vpn.png` | Cloud VPN site-to-site tunnels |
| `gcp_network_intelligence_center.png` | Network Intelligence Center diagnostics |
| `gcp_traffic_director.png` | Traffic Director service mesh |
| `gcp_cloud_build.png` | Cloud Build CI/CD |
| `gcp_artifact_registry.png` | Artifact Registry package management |
| `gcp_source_repositories.png` | Cloud Source Repositories |
| `gcp_container_registry.png` | Container Registry images |
| `gcp_cloud_deploy.png` | Cloud Deploy continuous delivery |
| `gcp_kms.png` | Cloud KMS key management |
| `gcp_secret_manager.png` | Secret Manager credentials store |
| `gcp_security_command_center.png` | Security Command Center posture |
| `gcp_binary_authorization.png` | Binary Authorization deploy policy |
| `gcp_certificate_authority.png` | Certificate Authority Service |
| `gcp_cloud_scheduler.png` | Cloud Scheduler cron jobs |
| `gcp_cloud_tasks.png` | Cloud Tasks async execution |
| `gcp_workflows.png` | Workflows serverless orchestration |
| `gcp_cloud_endpoints.png` | Cloud Endpoints API management |
| `gcp_api_gateway.png` | API Gateway |
| `gcp_apigee.png` | Apigee API management platform |
| `gcp_anthos.png` | Anthos multi-cloud management |
| `gcp_transfer_appliance.png` | Transfer Appliance offline migration |
| `gcp_storage_transfer.png` | Storage Transfer Service |
| `gcp_migrate_for_compute.png` | Migrate for Compute Engine |
| `gcp_database_migration.png` | Database Migration Service |
| `gcp_bare_metal.png` | Bare Metal Solution |
| `gcp_vmware_engine.png` | VMware Engine |
| `gcp_cloud_tpu.png` | Cloud TPU tensor accelerators |
| `gcp_cloud_gpu.png` | Cloud GPU accelerators |
| `gcp_media_cdn.png` | Media CDN streaming delivery |
| `gcp_contact_center_ai.png` | Contact Center AI |
| `gcp_retail_ai.png` | Retail AI search and recommendations |

## Architecture Patterns

### Lambda / Lakehouse Architecture

- Sources: pick from `streaming_*`, `db_*`, or `etl_*` depending on the bank's
  stack.
- Ingest: `sf_snowpipe.png` for streaming, `sf_data_flow.png` for batch.
- Master dataset: `sf_iceberg_lake.png` plus `format_delta_lake.png` to depict
  the in-progress migration.
- Speed layer: `sf_dynamic_tables.png`, `sf_streams_tasks.png`,
  `sf_spcs_containers.png` for custom services.
- Batch layer: `sf_warehouses.png`, plus `vendor_databricks.png` for the
  classic Spark side.
- ML / AI plane: `sf_cortex_ai.png` plus relevant `llm_*` icons.
- Serving: `sf_data_products.png`, `sf_analytics_chart.png`, `bi_*` icons for
  downstream consumers.

### Iceberg Catalog Story

- Center: `sf_iceberg_tables.png` for the Snowflake-managed catalog.
- Snowflake side: `sf_warehouses.png`, `sf_cortex_ai.png`,
  `sf_data_products.png`.
- External engines: `vendor_databricks.png`, plus open-source compute icons
  if relevant.
- Storage: `cloud_aws.png` / `cloud_azure.png` / `cloud_gcp.png`.
- Migration callout: `format_delta_lake.png` paired with `sf_iceberg_lake.png`.
- Governance: `governance_collibra.png` or `catalog_*` icons if the bank uses
  third-party tooling, otherwise rely on `sf_*` styling alone.

### Persona Workflows

- Use `sf_personas.png` for the generic builder/operator persona role.
- Decorate per persona based on what they actually use:
  - Analyst: `bi_*` plus `sf_analytics_chart.png`.
  - Data Engineer: `transform_dbt.png`, `orchestration_airflow.png`,
    `sf_dynamic_tables.png`.
  - Data Scientist: `ml_jupyter.png`, `sf_cortex_ai.png`, `llm_*`.
  - Analytics Engineer: `sf_data_products.png`, `transform_dbt.png`.
  - Governance: `governance_collibra.png` or `catalog_*` plus
    `sf_secure_sharing.png`.
  - App Engineer: `sf_data_products.png`, `sf_cortex_ai.png`,
    `sf_data_sharing_global.png`.

### Handoff Diagrams

- Keep one consistent icon per role across the chain.
- Make the destination card the only node using a darker fill so the icon and
  the visual emphasis align.

## Rules

- Snowflake-native nodes use `sf_*` icons. Do not substitute vendor logos for
  capabilities that exist natively in Snowflake.
- Vendor logos belong on competitive or boundary nodes, not on the Snowflake
  capability itself.
- Pair every external system icon with the matching Snowflake-side icon when
  showing crossings into the platform.
- Keep icon density low; one icon per node is usually enough.
- Always reference icons via repo-relative paths so the render script and any
  CI flow can resolve them deterministically.

## Appendix: Imported Icon Inventories

The full lists below are auto-generated from the Excalidraw library imports.
Re-run `python3 scripts/import_excalidraw_icons.py` if a source library changes
and refresh these tables from `research/diagram_src/icons_import_log.json`.

### Fabric inventory

| Filename | Source name |
|----------|-------------|
| `fabric_activator.png` | Activator |
| `fabric_adls_gen2.png` | ADLS Gen2 |
| `fabric_airflow_job.png` | Airflow Job |
| `fabric_alm_toolkit.png` | ALM Toolkit |
| `fabric_app.png` | App |
| `fabric_artifact_feed.png` | Artifact Feed |
| `fabric_avro_file.png` | Avro File |
| `fabric_aws_s3.png` | AWS S3 |
| `fabric_bigquery.png` | BigQuery |
| `fabric_branch.png` | Branch |
| `fabric_bronze_delta_table.png` | Bronze Delta Table |
| `fabric_capacity.png` | Capacity |
| `fabric_connection.png` | Connection |
| `fabric_copilot.png` | Copilot |
| `fabric_copy_job.png` | Copy Job |
| `fabric_csv_file.png` | CSV File |
| `fabric_dashboard.png` | Dashboard |
| `fabric_data_agent.png` | Data Agent |
| `fabric_data_engineering.png` | Data Engineering |
| `fabric_data_factory.png` | Data Factory |
| `fabric_data_science.png` | Data Science |
| `fabric_data_warehouse.png` | Data Warehouse |
| `fabric_databases.png` | Databases |
| `fabric_databricks.png` | Databricks |
| `fabric_dataflow_gen1.png` | Dataflow Gen1 |
| `fabric_dataflows_gen2.png` | Dataflows Gen2 |
| `fabric_datamart.png` | Datamart |
| `fabric_dax_optimizer.png` | DAX Optimizer |
| `fabric_dax_studio.png` | DAX Studio |
| `fabric_delta_lake.png` | Delta Lake |
| `fabric_delta_rs.png` | Delta-rs |
| `fabric_delta_table.png` | Delta Table |
| `fabric_delta_table_shortcut.png` | Delta Table Shortcut |
| `fabric_developer.png` | Developer |
| `fabric_devops.png` | DevOps |
| `fabric_devops_pipeline.png` | DevOps Pipeline |
| `fabric_domain.png` | Domain |
| `fabric_duckdb.png` | DuckDB |
| `fabric_dynamics.png` | Dynamics |
| `fabric_entra.png` | Entra |
| `fabric_environment.png` | Environment |
| `fabric_event_grid.png` | Event Grid |
| `fabric_event_hub.png` | Event Hub |
| `fabric_eventhouse.png` | Eventhouse |
| `fabric_eventstream.png` | Eventstream |
| `fabric_excel_file.png` | Excel File |
| `fabric_experiment.png` | Experiment |
| `fabric_express_route.png` | Express Route |
| `fabric_fabric.png` | Fabric |
| `fabric_folder.png` | Folder |
| `fabric_folder_shortcut.png` | Folder Shortcut |
| `fabric_function_set.png` | Function Set |
| `fabric_gateway.png` | Gateway |
| `fabric_generic_database_1.png` | Generic Database 1 |
| `fabric_generic_database_2.png` | Generic Database 2 |
| `fabric_generic_mirrored_database.png` | Generic Mirrored Database |
| `fabric_generic_table.png` | Generic Table |
| `fabric_generic_table_shortcut.png` | Generic Table Shortcut |
| `fabric_git.png` | GIT |
| `fabric_github.png` | Github |
| `fabric_gold_delta_table.png` | Gold Delta Table |
| `fabric_google_cloud_storage.png` | Google Cloud Storage |
| `fabric_graphql.png` | GraphQL |
| `fabric_iceberg.png` | Iceberg |
| `fabric_iceberg_table_shortcut.png` | Iceberg Table Shortcut |
| `fabric_icerberg_table.png` | Icerberg Table |
| `fabric_image_file.png` | Image File |
| `fabric_industry_solutions.png` | Industry Solutions |
| `fabric_json_file.png` | JSON File |
| `fabric_key_vault.png` | Key Vault |
| `fabric_kql_database.png` | KQL Database |
| `fabric_kql_queryset.png` | KQL QuerySet |
| `fabric_kql_script.png` | KQL Script |
| `fabric_lakehouse.png` | Lakehouse |
| `fabric_local_network_gateway.png` | Local Network Gateway |
| `fabric_mirrored_azure_databricks_catalog.png` | Mirrored Azure Databricks Catalog |
| `fabric_mirrored_cosmosdb.png` | Mirrored CosmosDB |
| `fabric_mirrored_postgres.png` | Mirrored Postgres |
| `fabric_mirrored_snowflake.png` | Mirrored Snowflake |
| `fabric_mirrored_sql_database.png` | Mirrored SQL Database |
| `fabric_ml_model.png` | ML Model |
| `fabric_mysql_database.png` | MySQL Database |
| `fabric_nat_gateway.png` | NAT Gateway |
| `fabric_network_interface.png` | Network Interface |
| `fabric_network_security_group.png` | Network Security Group |
| `fabric_notebook.png` | Notebook |
| `fabric_on_premise.png` | On-Premise |
| `fabric_onelake.png` | OneLake |
| `fabric_oracle_database.png` | Oracle Database |
| `fabric_orc_file.png` | Orc File |
| `fabric_paginated_report.png` | Paginated Report |
| `fabric_parquet_file.png` | Parquet File |
| `fabric_parquet_table.png` | Parquet Table |
| `fabric_pdf_file.png` | PDF File |
| `fabric_pipeline.png` | Pipeline |
| `fabric_polars.png` | Polars |
| `fabric_postgres_database.png` | Postgres Database |
| `fabric_power_bi.png` | Power BI |
| `fabric_private_link.png` | Private Link |
| `fabric_private_link_service.png` | Private Link Service |
| `fabric_prviate_endpoint.png` | Prviate Endpoint |
| `fabric_purview.png` | Purview |
| `fabric_python.png` | Python |
| `fabric_real_time_dashboard.png` | Real-Time Dashboard |
| `fabric_real_time_intelligence.png` | Real-Time Intelligence |
| `fabric_repo.png` | Repo |
| `fabric_report.png` | Report |
| `fabric_resource_group.png` | Resource Group |
| `fabric_salesforce.png` | Salesforce |
| `fabric_scorecard.png` | Scorecard |
| `fabric_semantic_model.png` | Semantic Model |
| `fabric_service_bus.png` | Service Bus |
| `fabric_shared_semantic_model.png` | Shared Semantic Model |
| `fabric_silver_delta_table.png` | Silver Delta Table |
| `fabric_snowflake.png` | Snowflake |
| `fabric_spark.png` | Spark |
| `fabric_spark_job_definition.png` | Spark Job Definition |
| `fabric_sql_database.png` | SQL Database |
| `fabric_sql_script.png` | SQL Script |
| `fabric_ssms.png` | SSMS |
| `fabric_subnet.png` | Subnet |
| `fabric_subscription.png` | Subscription |
| `fabric_tabular_editor.png` | Tabular Editor |
| `fabric_txt_file.png` | TXT File |
| `fabric_user_data_function.png` | User Data Function |
| `fabric_users.png` | Users |
| `fabric_variable_library.png` | Variable Library |
| `fabric_virtual_network.png` | Virtual Network |
| `fabric_visual_studio.png` | Visual Studio |
| `fabric_vs_code.png` | VS Code |
| `fabric_warehouse.png` | Warehouse |
| `fabric_workspace.png` | Workspace |
| `fabric_xml_file.png` | XML File |
| `fabric_zip_file.png` | ZIP File |

### AWS inventory

| Filename | Source name |
|----------|-------------|
| `aws_agent.png` | Agent |
| `aws_agentless_collector.png` | Agentless Collector |
| `aws_alarm.png` | Alarm |
| `aws_alb.png` | ALB |
| `aws_alexa_for_business.png` | Alexa for Business |
| `aws_amazon_bedrock.png` | Amazon Bedrock |
| `aws_amazon_mq.png` | Amazon MQ |
| `aws_amazon_q.png` | Amazon Q |
| `aws_ami.png` | AMI |
| `aws_amplify.png` | Amplify |
| `aws_api_gateway.png` | API Gateway |
| `aws_app_runner.png` | App Runner |
| `aws_appconfig.png` | AppConfig |
| `aws_appflow.png` | AppFlow |
| `aws_application_auto_scaling.png` | Application Auto Scaling |
| `aws_application_composer.png` | Application Composer |
| `aws_application_discovery_service.png` | Application Discovery Service |
| `aws_application_migration_service.png` | Application Migration Service |
| `aws_appsync.png` | AppSync |
| `aws_artifact.png` | Artifact |
| `aws_athena.png` | Athena |
| `aws_attachment.png` | Attachment |
| `aws_audit_manager.png` | Audit Manager |
| `aws_augmented_ai.png` | Augmented AI |
| `aws_aurora.png` | Aurora |
| `aws_aurora_instance.png` | Aurora instance |
| `aws_auto_scaling.png` | Auto scaling |
| `aws_auto_scaling_group.png` | Auto Scaling group |
| `aws_automation.png` | Automation |
| `aws_aws_account.png` | AWS account |
| `aws_aws_cli.png` | AWS CLI |
| `aws_aws_cloud.png` | AWS Cloud |
| `aws_aws_step_functions_workflow.png` | AWS Step Functions Workflow |
| `aws_aws_sts.png` | AWS STS |
| `aws_backint_agent.png` | Backint Agent |
| `aws_backup.png` | Backup |
| `aws_batch.png` | Batch |
| `aws_budgets.png` | Budgets |
| `aws_business_data_catalog.png` | Business data catalog |
| `aws_canvas.png` | Canvas |
| `aws_certificate_manager.png` | Certificate Manager |
| `aws_chatbot.png` | Chatbot |
| `aws_chime.png` | Chime |
| `aws_client_vpn.png` | Client VPN |
| `aws_cloud9.png` | Cloud9 |
| `aws_cloudformation.png` | CloudFormation |
| `aws_cloudfront.png` | CloudFront |
| `aws_cloudhsm.png` | CloudHSM |
| `aws_cloudsearch.png` | CloudSearch |
| `aws_cloudshell.png` | CloudShell |
| `aws_cloudtrail.png` | CloudTrail |
| `aws_cloudwatch.png` | CloudWatch |
| `aws_codeartifact.png` | CodeArtifact |
| `aws_codebuild.png` | CodeBuild |
| `aws_codecommit.png` | CodeCommit |
| `aws_codedeploy.png` | CodeDeploy |
| `aws_codeguru.png` | CodeGuru |
| `aws_codepipeline.png` | CodePipeline |
| `aws_codewhisperer.png` | CodeWhisperer |
| `aws_cognito.png` | Cognito |
| `aws_comprehend.png` | Comprehend |
| `aws_config.png` | Config |
| `aws_connect.png` | Connect |
| `aws_container.png` | Container |
| `aws_container2.png` | Container2 |
| `aws_control_tower.png` | Control Tower |
| `aws_cost_and_usage_report.png` | Cost & Usage Report |
| `aws_cost_explorer.png` | Cost Explorer |
| `aws_crawler.png` | Crawler |
| `aws_dashboard.png` | Dashboard |
| `aws_data_center.png` | Data center |
| `aws_data_exchange.png` | Data Exchange |
| `aws_data_lake.png` | Data Lake |
| `aws_data_pipeline.png` | Data Pipeline |
| `aws_datacatalog.png` | DataCatalog |
| `aws_datasync.png` | DataSync |
| `aws_datazone.png` | DataZone |
| `aws_dax.png` | DAX |
| `aws_db_instance.png` | DB Instance |
| `aws_deepcomposer.png` | DeepComposer |
| `aws_detective.png` | Detective |
| `aws_device_farm.png` | Device Farm |
| `aws_devops_guru.png` | DevOps Guru |
| `aws_direct_connect.png` | Direct Connect |
| `aws_directory_service.png` | Directory Service |
| `aws_discovery.png` | Discovery |
| `aws_discovery_agent.png` | Discovery Agent |
| `aws_distro_for_open_telemetry.png` | Distro for Open Telemetry |
| `aws_dms.png` | DMS |
| `aws_documentdb.png` | DocumentDB |
| `aws_documents.png` | Documents |
| `aws_dynamodb.png` | DynamoDB |
| `aws_dynamodb_table.png` | DynamoDB Table |
| `aws_ebs.png` | EBS |
| `aws_ec2.png` | EC2 |
| `aws_ec2_auto_scaling.png` | EC2 Auto Scaling |
| `aws_ec2_contents.png` | EC2 contents |
| `aws_ec2_image_builder.png` | EC2 Image Builder |
| `aws_ecr.png` | ECR |
| `aws_ecs.png` | ECS |
| `aws_edge_location.png` | Edge location |
| `aws_efs.png` | EFS |
| `aws_eks.png` | EKS |
| `aws_eks_anywhere.png` | EKS Anywhere |
| `aws_elastic_beanstalk.png` | Elastic Beanstalk |
| `aws_elastic_fabric_adapter.png` | Elastic Fabric Adapter |
| `aws_elastic_inference.png` | Elastic Inference |
| `aws_elastic_views.png` | Elastic Views |
| `aws_elasticache.png` | ElastiCache |
| `aws_elb.png` | ELB |
| `aws_emr.png` | EMR |
| `aws_endpoint.png` | Endpoint |
| `aws_eni.png` | ENI |
| `aws_event.png` | Event |
| `aws_event_bus.png` | Event bus |
| `aws_eventbridge.png` | EventBridge |
| `aws_fargate.png` | Fargate |
| `aws_fault_injection_simulator.png` | Fault Injection Simulator |
| `aws_firewall_manager.png` | Firewall Manager |
| `aws_flow_logs.png` | Flow logs |
| `aws_forecast.png` | Forecast |
| `aws_fraud_detector.png` | Fraud Detector |
| `aws_fsx.png` | FSx |
| `aws_geospatial_ml.png` | Geospatial ML |
| `aws_glacier.png` | Glacier |
| `aws_glb.png` | GLB |
| `aws_global_accelerator.png` | Global Accelerator |
| `aws_glue.png` | Glue |
| `aws_glue_databrew.png` | Glue DataBrew |
| `aws_ground_truth.png` | Ground Truth |
| `aws_guardduty.png` | GuardDuty |
| `aws_iam.png` | IAM |
| `aws_iam_identity_center.png` | IAM Identity Center |
| `aws_image.png` | Image |
| `aws_incident_manager.png` | Incident Manager |
| `aws_inspector.png` | Inspector |
| `aws_instance.png` | Instance |
| `aws_instance_with_cloudwatch.png` | Instance with CloudWatch |
| `aws_instances.png` | Instances |
| `aws_interface_endpoint.png` | Interface Endpoint |
| `aws_internet_gateway.png` | Internet gateway |
| `aws_iot_analytics.png` | IoT Analytics |
| `aws_iot_core.png` | IoT Core |
| `aws_iot_expresslink.png` | IoT ExpressLink |
| `aws_iot_greengrass.png` | Iot Greengrass |
| `aws_iot_roborunner.png` | IoT RoboRunner |
| `aws_iot_sensor.png` | IoT sensor |
| `aws_iot_sitewise.png` | IoT SiteWise |
| `aws_iot_topic.png` | IoT topic |
| `aws_kendra.png` | Kendra |
| `aws_keyspaces.png` | Keyspaces |
| `aws_kinesis.png` | Kinesis |
| `aws_kinesis_data_analytics.png` | Kinesis Data Analytics |
| `aws_kinesis_data_firehose.png` | Kinesis Data Firehose |
| `aws_kinesis_data_streams.png` | Kinesis Data Streams |
| `aws_kinesis_video_streams.png` | Kinesis Video Streams |
| `aws_kms.png` | KMS |
| `aws_lake_formation.png` | Lake Formation |
| `aws_lambda.png` | Lambda |
| `aws_lex.png` | Lex |
| `aws_license_manager.png` | License Manager |
| `aws_location_service.png` | Location Service |
| `aws_logs.png` | Logs |
| `aws_macie.png` | Macie |
| `aws_managed_blockchain.png` | Managed Blockchain |
| `aws_managed_service_for_apache_flink.png` | Managed Service for Apache Flink |
| `aws_managed_service_for_grafana.png` | Managed Service for Grafana |
| `aws_managed_service_for_prometheus.png` | Managed Service for Prometheus |
| `aws_managed_streaming_for_apache_kafka.png` | Managed Streaming for Apache Kafka |
| `aws_managed_workflows_for_apache_airflow.png` | Managed Workflows for Apache Airflow |
| `aws_memorydb_for_redis.png` | MemoryDB for Redis |
| `aws_migration_evaluator.png` | Migration Evaluator |
| `aws_migration_hub.png` | Migration Hub |
| `aws_model.png` | Model |
| `aws_multi_az_db_cluster.png` | Multi-AZ DB cluster |
| `aws_nacl.png` | NACL |
| `aws_nat_gateway.png` | NAT gateway |
| `aws_neptune.png` | Neptune |
| `aws_network_firewall.png` | Network Firewall |
| `aws_nlb.png` | NLB |
| `aws_notebook.png` | Notebook |
| `aws_opensearch_service.png` | OpenSearch Service |
| `aws_opsworks.png` | OpsWorks |
| `aws_organizations.png` | Organizations |
| `aws_outposts.png` | Outposts |
| `aws_panorama.png` | Panorama |
| `aws_parameter_store.png` | Parameter Store |
| `aws_peering_connection.png` | Peering connection |
| `aws_permissions.png` | Permissions |
| `aws_personal_health_dashboard.png` | Personal Health Dashboard |
| `aws_personalize.png` | Personalize |
| `aws_polly.png` | Polly |
| `aws_private_certificate_authority.png` | Private Certificate Authority |
| `aws_privatelink.png` | PrivateLink |
| `aws_quantum_ledger_database.png` | Quantum Ledger Database |
| `aws_quicksight.png` | QuickSight |
| `aws_rds.png` | RDS |
| `aws_rds_instance.png` | RDS instance |
| `aws_redshift.png` | Redshift |
| `aws_region.png` | Region |
| `aws_registry.png` | Registry |
| `aws_rekognition.png` | Rekognition |
| `aws_resilience_hub.png` | Resilience Hub |
| `aws_resolver.png` | Resolver |
| `aws_resource_access_manager.png` | Resource Access Manager |
| `aws_role.png` | Role |
| `aws_route_53.png` | Route 53 |
| `aws_route_table.png` | Route table |
| `aws_rule.png` | Rule |
| `aws_s3.png` | S3 |
| `aws_sagemaker.png` | SageMaker |
| `aws_sagemaker_studio_lab.png` | SageMaker Studio Lab |
| `aws_saving_plans.png` | Saving Plans |
| `aws_scheduler.png` | Scheduler |
| `aws_secrets_manager.png` | Secrets Manager |
| `aws_security_hub.png` | Security Hub |
| `aws_server_migration_service.png` | Server Migration Service |
| `aws_service.png` | Service |
| `aws_service_catalog.png` | Service Catalog |
| `aws_ses.png` | SES |
| `aws_session_manager.png` | Session Manager |
| `aws_shield.png` | Shield |
| `aws_site_to_site_vpn.png` | Site-to-Site VPN |
| `aws_snowball.png` | Snowball |
| `aws_sns.png` | SNS |
| `aws_spot_fleet.png` | Spot Fleet |
| `aws_spot_instance.png` | Spot instance |
| `aws_sqs.png` | SQS |
| `aws_step_functions.png` | Step Functions |
| `aws_storage_gateway.png` | Storage Gateway |
| `aws_stream.png` | Stream |
| `aws_support.png` | Support |
| `aws_system_manager.png` | System Manager |
| `aws_task.png` | Task |
| `aws_textract.png` | Textract |
| `aws_timestream.png` | Timestream |
| `aws_tools_and_sdks.png` | Tools and SDKs |
| `aws_train.png` | Train |
| `aws_transcribe.png` | Transcribe |
| `aws_transfer_family.png` | Transfer Family |
| `aws_transit_gateway.png` | Transit Gateway |
| `aws_vpc.png` | VPC |
| `aws_vpn_connection.png` | VPN Connection |
| `aws_vpn_gateway.png` | VPN gateway |
| `aws_waf.png` | WAF |
| `aws_well_arhitected_tool.png` | Well-Arhitected Tool |
| `aws_x_ray.png` | X-Ray |

### Databricks inventory (full)

| Filename | Source name |
|----------|-------------|
| `databricks_agent_bricks.png` | Agent Bricks |
| `databricks_ai_and_bi.png` | AI/BI |
| `databricks_apps.png` | Apps |
| `databricks_clean_rooms.png` | Clean Rooms |
| `databricks_dashboards.png` | Dashboards |
| `databricks_databricks.png` | Databricks |
| `databricks_databricks_one.png` | Databricks One |
| `databricks_databricks_sql.png` | Databricks SQL |
| `databricks_delta_sharing.png` | Delta Sharing |
| `databricks_genie.png` | Genie |
| `databricks_lakebase.png` | Lakebase |
| `databricks_lakebridge.png` | Lakebridge |
| `databricks_lakeflow.png` | Lakeflow |
| `databricks_lakeflow_connect.png` | Lakeflow Connect |
| `databricks_lakeflow_declarative_pipelines.png` | Lakeflow Declarative Pipelines |
| `databricks_lakeflow_designer.png` | Lakeflow Designer |
| `databricks_lakeflow_jobs.png` | Lakeflow Jobs |
| `databricks_lakehouse.png` | Lakehouse |
| `databricks_marketplace.png` | Marketplace |
| `databricks_mosaic_ai.png` | Mosaic AI |
| `databricks_notebooks.png` | Notebooks |
| `databricks_photon.png` | Photon |
| `databricks_streaming.png` | Streaming |
| `databricks_unity_catalog.png` | Unity Catalog |

### Snowflake catalog object inventory (imported)

| Filename | Source name |
|----------|-------------|
| `sf_snowflake.png` | snowflake |

### GCP inventory

| Filename | Product |
|----------|---------|
| `gcp_cloud.png` | Google Cloud Platform |
| `gcp_compute_engine.png` | Compute Engine |
| `gcp_app_engine.png` | App Engine |
| `gcp_cloud_functions.png` | Cloud Functions |
| `gcp_cloud_run.png` | Cloud Run |
| `gcp_gke.png` | Google Kubernetes Engine |
| `gcp_cloud_storage.png` | Cloud Storage |
| `gcp_persistent_disk.png` | Persistent Disk |
| `gcp_filestore.png` | Filestore |
| `gcp_iam.png` | Identity and Access Management |
| `gcp_cloud_sql.png` | Cloud SQL |
| `gcp_cloud_spanner.png` | Cloud Spanner |
| `gcp_bigtable.png` | Cloud Bigtable |
| `gcp_firestore.png` | Firestore |
| `gcp_memorystore.png` | Memorystore |
| `gcp_datastore.png` | Datastore |
| `gcp_bigquery.png` | BigQuery |
| `gcp_dataflow.png` | Dataflow |
| `gcp_dataproc.png` | Dataproc |
| `gcp_pubsub.png` | Pub/Sub |
| `gcp_data_fusion.png` | Cloud Data Fusion |
| `gcp_composer.png` | Cloud Composer |
| `gcp_data_catalog.png` | Data Catalog |
| `gcp_dataplex.png` | Dataplex |
| `gcp_looker.png` | Looker |
| `gcp_looker_studio.png` | Looker Studio |
| `gcp_vertex_ai.png` | Vertex AI |
| `gcp_automl.png` | AutoML |
| `gcp_ai_platform.png` | AI Platform |
| `gcp_natural_language.png` | Natural Language API |
| `gcp_vision_ai.png` | Vision AI |
| `gcp_speech_to_text.png` | Speech-to-Text |
| `gcp_text_to_speech.png` | Text-to-Speech |
| `gcp_translation.png` | Cloud Translation |
| `gcp_document_ai.png` | Document AI |
| `gcp_recommendations_ai.png` | Recommendations AI |
| `gcp_dialogflow.png` | Dialogflow |
| `gcp_video_intelligence.png` | Video Intelligence |
| `gcp_healthcare_api.png` | Healthcare API |
| `gcp_cloud_logging.png` | Cloud Logging |
| `gcp_cloud_monitoring.png` | Cloud Monitoring |
| `gcp_cloud_trace.png` | Cloud Trace |
| `gcp_cloud_profiler.png` | Cloud Profiler |
| `gcp_error_reporting.png` | Error Reporting |
| `gcp_cloud_debugger.png` | Cloud Debugger |
| `gcp_vpc.png` | Virtual Private Cloud |
| `gcp_cloud_load_balancing.png` | Cloud Load Balancing |
| `gcp_cloud_dns.png` | Cloud DNS |
| `gcp_cloud_armor.png` | Cloud Armor |
| `gcp_cloud_cdn.png` | Cloud CDN |
| `gcp_cloud_nat.png` | Cloud NAT |
| `gcp_cloud_interconnect.png` | Cloud Interconnect |
| `gcp_cloud_vpn.png` | Cloud VPN |
| `gcp_network_intelligence_center.png` | Network Intelligence Center |
| `gcp_traffic_director.png` | Traffic Director |
| `gcp_cloud_build.png` | Cloud Build |
| `gcp_artifact_registry.png` | Artifact Registry |
| `gcp_source_repositories.png` | Cloud Source Repositories |
| `gcp_container_registry.png` | Container Registry |
| `gcp_cloud_deploy.png` | Cloud Deploy |
| `gcp_kms.png` | Cloud KMS |
| `gcp_secret_manager.png` | Secret Manager |
| `gcp_security_command_center.png` | Security Command Center |
| `gcp_binary_authorization.png` | Binary Authorization |
| `gcp_certificate_authority.png` | Certificate Authority Service |
| `gcp_cloud_scheduler.png` | Cloud Scheduler |
| `gcp_cloud_tasks.png` | Cloud Tasks |
| `gcp_workflows.png` | Workflows |
| `gcp_cloud_endpoints.png` | Cloud Endpoints |
| `gcp_api_gateway.png` | API Gateway |
| `gcp_apigee.png` | Apigee |
| `gcp_anthos.png` | Anthos |
| `gcp_transfer_appliance.png` | Transfer Appliance |
| `gcp_storage_transfer.png` | Storage Transfer Service |
| `gcp_migrate_for_compute.png` | Migrate for Compute Engine |
| `gcp_database_migration.png` | Database Migration Service |
| `gcp_bare_metal.png` | Bare Metal Solution |
| `gcp_vmware_engine.png` | VMware Engine |
| `gcp_cloud_tpu.png` | Cloud TPU |
| `gcp_cloud_gpu.png` | Cloud GPU |
| `gcp_media_cdn.png` | Media CDN |
| `gcp_contact_center_ai.png` | Contact Center AI |
| `gcp_retail_ai.png` | Retail AI |
