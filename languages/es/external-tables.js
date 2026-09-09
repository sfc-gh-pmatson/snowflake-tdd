// ─────────────────────────────────────────────────────────────────────────
// Spanish (es) — external-tables
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
  slug: 'external-tables',

  page: {
    // External Tables
    'nav-label': 'Tablas externas',
    // External Tables
    's6-header': 'Tablas externas',
    // Query Parquet, ORC, and CSV files in S3, Azure, or GCS directly with Snowflake SQL — no…
    's6-sub': 'Permite consultar archivos Parquet, ORC y CSV en S3, Azure o GCS directamente con SQL de Snowflake — sin ingesta y sin copiar los datos.',
    // What are External Tables?
    'et-card-label.1': '¿Qué son las tablas externas?',
    // A metadata layer over files in object storage. Snowflake queries the files directly — n…
    'et-card-desc.1': 'Una capa de metadatos sobre archivos en almacenamiento de objetos. Snowflake consulta los archivos directamente — sin COPY INTO y sin duplicar el almacenamiento.',
    // Create External Table
    'et-card-label.2': 'Crear una tabla externa',
    // Point at an external stage with LOCATION, define the schema (or use INFER_SCHEMA), and …
    'et-card-desc.2': 'Apunta a un stage externo con LOCATION, define el esquema (o usa INFER_SCHEMA) y establece las opciones de formato de archivo.',
    // Auto-detect column names and types from Parquet or ORC files. No manual DDL needed — le…
    'et-card-desc.3': 'Detecta automáticamente los nombres y tipos de columna desde archivos Parquet u ORC. No se necesita DDL manual — deja que Snowflake lea el esquema.',
    // Partition Columns
    'et-card-label.4': 'Columnas de partición',
    // Define partition columns based on directory structure. Enables partition pruning — only…
    'et-card-desc.4': 'Define columnas de partición según la estructura de directorios. Habilita el pruning de particiones — solo lee los archivos que coinciden con los predicados WHERE.',
    // Use cloud storage events to automatically update the external table metadata when new f…
    'et-card-desc.5': 'Usa eventos del almacenamiento en la nube para actualizar automáticamente los metadatos de la tabla externa cuando llegan archivos nuevos — sin REFRESH manual.',
    // External Tables vs Iceberg
    'et-card-label.6': 'Tablas externas frente a Iceberg',
    // External Tables: simpler, any format, read-only. Iceberg: richer metadata, ACID transac…
    'et-card-desc.6': 'Tablas externas: más simples, cualquier formato, solo lectura. Iceberg: metadatos más ricos, transacciones ACID, mejor rendimiento. Cuándo usar cada una.',
  },

  // HTML blocks this page builds in JS.
  blocks: {
    // Create External TableCreating an external table requires a stage (storage credentials) …
    'explain.create-external-table': `<h4>Crear una tabla externa</h4><p>Crear una tabla externa requiere un stage (credenciales de almacenamiento) y una definición de columnas que asigne los campos Parquet/JSON a columnas tipadas.</p><ul><li><strong>LOCATION:</strong> apunta al stage (que puede limitarse a un prefijo o carpeta dentro del bucket)</li><li><strong>Expresiones de columna:</strong> para Parquet y JSON, las columnas se definen como expresiones sobre la columna implícita <code>VALUE</code> usando la sintaxis de ruta con dos puntos. Para CSV, declara las columnas directamente.</li><li><strong>PARTITION BY:</strong> define una columna de partición virtual (normalmente derivada de la estructura de directorios de la ruta del archivo) para habilitar el pruning</li><li><strong>metadata$filename:</strong> una pseudocolumna disponible en las tablas externas que contiene la ruta del archivo — se usa para extraer valores de partición de los nombres de directorio</li></ul>`,
    // INFER_SCHEMAINFER_SCHEMA reads Parquet or ORC file metadata and returns the inferred co…
    'explain.infer-schema': `<h4>INFER_SCHEMA</h4><p><code>INFER_SCHEMA</code> lee los metadatos de archivos Parquet u ORC y devuelve los nombres de columna, los tipos y las expresiones de ruta de Snowflake inferidos — lo que evita escribir manualmente el DDL de columnas.</p><ul><li>Funciona con Parquet (lee el esquema incrustado), ORC (lee los metadatos de tipos) y CSV (muestrea filas para inferir los tipos)</li><li>Devuelve una fila por columna con: nombre, tipo detectado, nulabilidad y la expresión necesaria para la definición de la tabla externa</li><li>Ejecuta INFER_SCHEMA sobre una muestra representativa de archivos — no sobre todos los archivos de un conjunto de datos grande</li><li>Usa la salida para generar el DDL de <code>CREATE EXTERNAL TABLE</code> — copia las expresiones directamente en la lista de columnas</li></ul><p>También sirve para crear tablas normales de Snowflake a partir de archivos en un stage: <code>CREATE TABLE t USING TEMPLATE (SELECT ARRAY_AGG(OBJECT_CONSTRUCT(*)) FROM TABLE(INFER_SCHEMA(...)))</code></p>`,
    // Partition ColumnsPartition columns are virtual columns derived from the file path, enab…
    'explain.partition-columns': `<h4>Columnas de partición</h4><p>Las columnas de partición son columnas virtuales derivadas de la ruta del archivo, que permiten a Snowflake omitir directorios completos de archivos cuando un predicado WHERE coincide con un valor de partición.</p><ul><li>Snowflake usa las columnas de PARTITION BY presentes en la cláusula WHERE para determinar qué archivos leer — es la principal palanca de rendimiento en las tablas externas</li><li>Patrón habitual: directorios estilo Hive <code>year=YYYY/month=MM/day=DD</code>. Extrae los valores con <code>SPLIT_PART(metadata$filename, 'key=', 2)</code></li><li>Sin particionamiento, cada consulta escanea todos los archivos — aceptable para conjuntos de datos pequeños, muy lento a escala de TB</li><li>Las columnas de partición no necesitan estar en el contenido real del archivo — se derivan de la ruta</li></ul><p>Buena práctica: define siempre al menos una columna de partición basada en fecha para datos de series temporales.</p>`,
    // AUTO REFRESHAUTO REFRESH automatically updates the external table&#39;s file list when …
    'explain.auto-refresh': `<h4>AUTO REFRESH</h4><p>AUTO REFRESH actualiza automáticamente la lista de archivos de la tabla externa cuando llegan archivos nuevos al almacenamiento de objetos — usando notificaciones de eventos de la nube en lugar de sondeos programados.</p><ul><li><strong>AWS:</strong> configura notificaciones de eventos de S3 → cola SQS. Snowflake sondea la cola SQS y actualiza los metadatos cuando detecta eventos PUT/DELETE.</li><li><strong>Azure:</strong> configura Event Grid → Service Bus. El mismo patrón.</li><li><strong>GCP:</strong> configura notificaciones de GCS con Pub/Sub.</li></ul><p>Sin AUTO REFRESH, hay que ejecutar <code>ALTER EXTERNAL TABLE t REFRESH</code> manualmente o programarlo como una Task de Snowflake. Los archivos nuevos no se podrán consultar hasta que se ejecute una actualización.</p><p>AUTO REFRESH suele reflejar los archivos nuevos a los pocos segundos de su llegada — mucho más fresco que las actualizaciones programadas.</p>`,
    // External Tables vs IcebergBoth let Snowflake query data in object storage without loadi…
    'explain.external-tables-vs-iceberg': `<h4>Tablas externas frente a Iceberg</h4><p>Ambas permiten que Snowflake consulte datos en almacenamiento de objetos sin cargarlos — pero tienen capacidades y casos de uso distintos:</p><ul><li><strong>Tablas externas:</strong> más simples de configurar, admiten cualquier formato de archivo (CSV, JSON, Avro, etc.), solo lectura. Adecuadas para datos heredados o archivos generados por sistemas ajenos a Snowflake.</li><li><strong>Iceberg:</strong> catálogo de metadatos más rico, admite escrituras ACID (INSERT, UPDATE, DELETE), time travel y evolución automática del esquema. Mejor rendimiento de consulta porque Iceberg mantiene estadísticas de mín./máx. por archivo.</li></ul><p><strong>Cuándo elegir tablas externas:</strong> datos CSV/JSON existentes difíciles de migrar, requisitos normativos de mantener los archivos originales accesibles en su formato original, o consultas muy poco frecuentes.</p><p><strong>Cuándo elegir Iceberg:</strong> para cualquier nueva inversión en un lakehouse. Iceberg es la dirección en la que Snowflake está invirtiendo — las tablas externas no van a desaparecer, pero Iceberg las sustituye para las nuevas cargas de trabajo.</p>`,
  },
});
