// ─────────────────────────────────────────────────────────────────────────
// Spanish (es) — compute-serverless
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
  slug: 'compute-serverless',

  page: {
    // Compute
    'slide-tag': 'Cómputo',
    // Serverless Compute
    'nav-label': 'Cómputo serverless',
    // Serverless Compute
    's6-header': 'Cómputo serverless',
    // Snowflake-managed compute — no warehouse required, auto-scaling, billed per second.
    's6-sub': 'Cómputo gestionado por Snowflake — sin warehouse, con escalado automático y cobro por segundo.',
    // Serverless Tasks
    'csv-card-title.1': 'Tareas serverless',
    // SQL or Snowpark procedures run on a cron schedule or triggered by a stream with new data
    'csv-fact-text.1': 'Los procedimientos en SQL o Snowpark se ejecutan según una programación cron o se activan por un stream con datos nuevos',
    // Snowflake auto-scales compute for the task — no warehouse sizing or auto-suspend config
    'csv-fact-text.2': 'Snowflake escala el cómputo de la tarea automáticamente — sin dimensionar el warehouse ni configurar la suspensión automática',
    // Task graphs (DAGs) for multi-step pipelines with dependencies. Serverless finalizer tas…
    'csv-fact-text.3': 'Grafos de tareas (DAG) para pipelines de varios pasos con dependencias. Tareas finalizadoras serverless para la limpieza.',
    // Billed per credit-second of execution
    'csv-billing.1': 'Cobro por crédito-segundo de ejecución',
    // Snowpipe & Streaming
    'csv-card-title.2': 'Snowpipe & streaming',
    // Snowpipe: File-triggered micro-batch ingestion from cloud storage (S3, GCS, Azure Blob)…
    'csv-fact-text.4': `<strong>Snowpipe:</strong> ingesta por microlotes activada por archivos desde el almacenamiento en la nube (S3, GCS, Azure Blob). Ingesta automática mediante notificaciones de eventos de almacenamiento.`,
    // Snowpipe Streaming: SDK-based row-level ingestion with sub-second latency. Ideal for Io…
    'csv-fact-text.5': `<strong>Snowpipe Streaming:</strong> ingesta a nivel de fila basada en SDK con latencia inferior a un segundo. Ideal para IoT, CDC, clickstreams y eventos financieros.`,
    // Both are fully serverless — no warehouse dedicated to ingestion
    'csv-fact-text.6': 'Ambos son totalmente serverless — sin un warehouse dedicado a la ingesta',
    // Billed per file processed / per row ingested
    'csv-billing.2': 'Cobro por archivo procesado / por fila ingerida',
    // Cortex AI Compute
    'csv-card-title.3': 'Cómputo de Cortex AI',
    // LLM inference functions (COMPLETE, CLASSIFY, EXTRACT, SUMMARIZE, SENTIMENT, TRANSLATE) …
    'csv-fact-text.7': 'Las funciones de inferencia de LLM (COMPLETE, CLASSIFY, EXTRACT, SUMMARIZE, SENTIMENT, TRANSLATE) se ejecutan en modo serverless — sin necesidad de un warehouse con GPU',
    // Cortex Search indexing, Cortex Analyst query processing, and Document AI all use manage…
    'csv-fact-text.8': 'La indexación de Cortex Search, el procesamiento de consultas de Cortex Analyst y Document AI usan cómputo serverless gestionado',
    // Run directly in SQL: SELECT SNOWFLAKE.CORTEX.COMPLETE(...)
    'csv-fact-text.9': `Se ejecuta directamente en SQL: <code style="font-family:monospace;font-size:10px;">SELECT SNOWFLAKE.CORTEX.COMPLETE(...)</code>`,
    // Billed per token / per function call
    'csv-billing.3': 'Cobro por token / por llamada a la función',
    // Search Optimization Service
    'csv-card-title.4': 'Search Optimization Service',
    // Maintains equality, range, and substring search indexes on table columns. Eliminates fu…
    'csv-fact-text.10': 'Mantiene índices de búsqueda por igualdad, rango y subcadena en columnas de tablas. Elimina los escaneos completos de tabla en consultas de búsqueda puntual.',
    // Background serverless maintenance job keeps indexes current as data changes
    'csv-fact-text.11': 'Un trabajo de mantenimiento serverless en segundo plano mantiene los índices al día conforme cambian los datos',
    // Enabled per-table or per-column: ALTER TABLE t ADD SEARCH OPTIMIZATION
    'csv-fact-text.12': `Se habilita por tabla o por columna: <code style="font-family:monospace;font-size:10px;">ALTER TABLE t ADD SEARCH OPTIMIZATION</code>`,
    // Billed per compute-hour of maintenance
    'csv-billing.4': 'Cobro por hora de cómputo de mantenimiento',
    // © 2026 Snowflake Inc. All Rights Reserved
    'span': '© 2026 Snowflake Inc. Todos los derechos reservados',
  },
});
