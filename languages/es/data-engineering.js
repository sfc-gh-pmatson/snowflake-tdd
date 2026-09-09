// ─────────────────────────────────────────────────────────────────────────
// Spanish (es) — data-engineering
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
  slug: 'data-engineering',

  page: {
    // Data Engineering
    'slide-tag': 'Ingeniería de datos',
    // Data Engineering
    'nav-label': 'Ingeniería de datos',
    // Data Engineering on Snowflake
    's6-header': 'Ingeniería de datos en Snowflake',
    // Ingest from any source, transform declaratively, orchestrate without external tools — o…
    's6-sub': 'Ingesta desde cualquier fuente, transforma de forma declarativa y orquesta sin herramientas externas — un motor, una plataforma, cero movimiento de datos.',
    // Ingestion
    'de-tab.1': 'Ingesta',
    // Transformation & Pipelines
    'de-tab.2': 'Transformación & pipelines',
    // Bulk-load files from internal or external stages into Snowflake tables. Supports CSV, J…
    'de-card-desc.1': 'Carga masiva de archivos desde stages internos o externos hacia tablas de Snowflake. Admite CSV, JSON, Parquet, Avro, ORC y XML. Transforma los datos en la carga, valida antes de confirmar y registra el historial de cargas para evitar duplicados.',
    // Bulk load
    'de-chip.1': 'Carga masiva',
    // Multi-format
    'de-chip.2': 'Multiformato',
    // Load history
    'de-chip.3': 'Historial de cargas',
    // Serverless, event-driven file ingestion from cloud storage. Create a pipe with AUTO_ING…
    'de-card-desc.2': 'Ingesta de archivos serverless y orientada a eventos desde el almacenamiento en la nube. Crea un pipe con AUTO_INGEST — los archivos llegan a S3, Azure Blob o GCS y se cargan automáticamente en el momento en que aparecen.',
    // Serverless
    'de-chip.6': 'Serverless',
    // Snowflake-native data integration built on Apache NiFi. 200+ pre-built connectors for d…
    'de-card-desc.3': 'Integración de datos nativa de Snowflake construida sobre Apache NiFi. Más de 200 conectores preconstruidos para bases de datos, SaaS, archivos y APIs — con soporte completo de CDC desde Oracle, MySQL, SQL Server y Postgres. Constructor de pipelines sin código, ejecutado en SPCS.',
    // 200+ connectors
    'de-chip.7': '200+ conectores',
    // No-code
    'de-chip.9': 'Sin código',
    // NiFi-based
    'de-chip.10': 'Basado en NiFi',
    // Snowpipe Streaming
    'de-card-title.4': 'Snowpipe Streaming',
    // Sub-second, row-level ingestion via SDK — no staging files required. Push rows directly…
    'de-card-desc.4': 'Ingesta a nivel de fila en menos de un segundo mediante SDK — sin archivos de staging. Envía filas directamente a canales de Snowflake y consúltalas milisegundos después del commit. Diseñado para cargas de trabajo de Kafka, CDC e IoT.',
    // Sub-second
    'de-chip.11': 'Menos de un segundo',
    // Channels
    'de-chip.12': 'Canales',
    // Kafka · CDC · IoT
    'de-chip.13': 'Kafka · CDC · IoT',
    // Dynamic Tables
    'de-card-title.5': 'Dynamic Tables',
    // The declarative pipeline primitive — write a SELECT query, set a TARGET_LAG, and Snowfl…
    'de-card-desc.5': 'La primitiva declarativa de pipelines — escribe una consulta SELECT, define un TARGET_LAG y Snowflake se encarga de la programación, el seguimiento de dependencias y la actualización incremental. Encadena tablas para construir pipelines de múltiples pasos en SQL puro.',
    // Declarative
    'de-chip.14': 'Declarativo',
    // Streams & Tasks
    'de-card-title.6': 'Streams & Tasks',
    // Streams capture row-level change data (inserts, updates, deletes) on any table. Tasks t…
    'de-card-desc.6': 'Los Streams capturan datos de cambio a nivel de fila (inserciones, actualizaciones, eliminaciones) en cualquier tabla. Las Tasks disparan la ejecución de SQL o Snowpark según un horario o cuando un stream tiene datos — encadena tasks con AFTER para construir DAGs sin un orquestador externo.',
    // DAGs
    'de-chip.18': 'DAGs',
    // Event-driven
    'de-chip.19': 'Orientado a eventos',
    // Serverless
    'de-chip.20': 'Serverless',
    // dbt in Snowflake
    'de-card-title.7': 'dbt en Snowflake',
    // Run dbt projects as native Snowflake objects — no external orchestration or dbt Cloud s…
    'de-card-desc.7': `Ejecuta proyectos dbt como objetos nativos de Snowflake — sin orquestación externa ni suscripción a dbt Cloud. Despliega con <code style="font-size:10px;background:rgba(41,181,232,.1);padding:1px 4px;border-radius:3px;color:var(--sf-blue);">snow dbt</code>, programa con Tasks y ejecuta con una sola sentencia SQL.`,
    // snow dbt deploy
    'de-chip.22': 'snow dbt deploy',
    // Task-scheduled
    'de-chip.23': 'Programado con Tasks',
    // Write DataFrame transformation pipelines in Python, Java, or Scala — running on Snowfla…
    'de-card-desc.8': 'Escribe pipelines de transformación con DataFrames en Python, Java o Scala — ejecutándose en el cómputo de Snowflake, sin que los datos salgan de la plataforma. Construye UDFs, UDTFs y procedimientos almacenados de forma nativa.',
    // Java / Scala
    'de-chip.25': 'Java / Scala',
    // No data movement
    'de-chip.26': 'Sin movimiento de datos',
    // Deep dive →
    'de-card-deepdive': 'Análisis a fondo →',
    // © 2026 Snowflake Inc. All Rights Reserved
    'span': '© 2026 Snowflake Inc. Todos los derechos reservados',
  },
});
