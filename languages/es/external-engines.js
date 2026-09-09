// ─────────────────────────────────────────────────────────────────────────
// Spanish (es) — external-engines
//
// ⚠️  FIRST-PASS AI TRANSLATION — not yet reviewed by a native speaker.
//
// Edit only the text inside the quotes. The English original is in the
// comment above each entry. Never change a key. Never translate product
// names, SQL keywords, or metrics. See languages/GLOSSARY.md.
//
// Entries marked "// TODO" are untranslated: the page shows English. To
// translate one, delete the "// TODO " prefix and replace the English.
//
// When finished run:  python3 tools/i18n-check.py
// ─────────────────────────────────────────────────────────────────────────

window.TDD_LANG_PAGE({
  code: 'es',
  slug: 'external-engines',

  page: {
    // External Engines
    'nav-label': 'Motores externos',
    // External Engines
    's6-header': 'Motores externos',
    // Spark, Flink, Kafka, Trino, Dremio, Databricks — native connectors and open standards l…
    's6-sub': 'Spark, Flink, Kafka, Trino, Dremio, Databricks — los conectores nativos y los estándares abiertos permiten que cualquier motor lea y escriba en Snowflake.',
    // Apache Spark™
    'ee-card-label.1': 'Apache Spark™',
    // Snowpark for Spark: run PySpark on Snowflake compute. Or connect an external cluster vi…
    'ee-card-desc.1': 'Snowpark for Spark: ejecuta PySpark sobre el cómputo de Snowflake. O conecta un clúster externo mediante el Spark Connector.',
    // Trino
    'ee-card-label.2': 'Trino',
    // Federated SQL across Snowflake + S3/Hive in one query. Snowflake as a Trino catalog via…
    'ee-card-desc.2': 'SQL federado entre Snowflake y S3/Hive en una sola consulta. Snowflake como catálogo de Trino vía JDBC.',
    // Apache Flink
    'ee-card-label.3': 'Apache Flink',
    // Stream Flink output into Snowflake via Kafka Connector or Snowpipe Streaming for sub-se…
    'ee-card-desc.3': 'Envía la salida de Flink a Snowflake mediante el Kafka Connector o Snowpipe Streaming, con latencia inferior al segundo.',
    // Iceberg and Delta Sharing let both platforms share live data bidirectionally — no copie…
    'ee-card-desc.4': 'Iceberg y Delta Sharing permiten que ambas plataformas compartan datos en vivo de forma bidireccional — sin copias y sin ETL.',
    // AWS Glue
    'ee-card-label.5': 'AWS Glue',
    // Glue Data Catalog as Iceberg source for Snowflake. Glue ETL jobs read/write Snowflake v…
    'ee-card-desc.5': 'El Glue Data Catalog como origen Iceberg para Snowflake. Los trabajos de Glue ETL leen y escriben en Snowflake mediante el Spark Connector.',
    // Microsoft Fabric
    'ee-card-label.6': 'Microsoft Fabric',
    // OneLake Iceberg and Delta Sharing enable Snowflake ↔ Fabric bidirectional access over s…
    'ee-card-desc.6': 'OneLake Iceberg y Delta Sharing habilitan el acceso bidireccional entre Snowflake ↔ Fabric sobre almacenamiento compartido.',
    // SQL transformation framework with first-class Snowflake support — incremental models, m…
    'ee-card-desc.7': 'Framework de transformación en SQL con soporte de primer nivel para Snowflake — modelos incrementales, estrategias de merge y tablas dinámicas.',
    // Apache Airflow
    'ee-card-label.8': 'Apache Airflow',
    // Orchestrate Snowflake workflows via the Snowflake provider — SQL operators, sensors, an…
    'ee-card-desc.8': 'Orquesta flujos de trabajo de Snowflake con el proveedor de Snowflake — operadores SQL, sensores y grafos de dependencias entre tareas.',
    // -- Select an engine above to see its Snowflake integration pattern
    'ee-panel-code': '-- Selecciona un motor arriba para ver su patron de integracion con Snowflake',
    // External Engines
    'h4': 'Motores externos',
    // Click any engine card to see its connection pattern, key SQL, and integration architect…
    'p.1': 'Haz clic en la tarjeta de cualquier motor para ver su patrón de conexión, el SQL clave y la arquitectura de integración.',
    // Snowflake supports external engines through native connectors, JDBC/ODBC, and open stan…
    'p.2': 'Snowflake admite motores externos mediante conectores nativos, JDBC/ODBC y estándares abiertos (Iceberg, Delta Sharing) — de modo que se conservan las herramientas existentes y se unifican la gobernanza y el acceso a los datos.',
  },
});
