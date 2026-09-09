// ─────────────────────────────────────────────────────────────────────────
// Spanish (es) — delta-direct
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
  slug: 'delta-direct',

  page: {
    // Delta Direct
    'nav-label': 'Delta Direct',
    // Delta Direct
    's6-header': 'Delta Direct',
    // Query Databricks Delta tables natively in Snowflake. No conversion, no ETL, no data cop…
    's6-sub': 'Permite consultar tablas Delta de Databricks de forma nativa en Snowflake. Sin conversión, sin ETL, sin copiar datos — lee directamente el log de transacciones de Delta.',
    // How Delta Direct Works
    'dd-card-label.1': 'Cómo funciona Delta Direct',
    // Snowflake reads the Delta transaction log and Parquet files directly from your object s…
    'dd-card-desc.1': 'Snowflake lee el log de transacciones de Delta y los archivos Parquet directamente desde el almacenamiento de objetos — sin necesidad de mover datos.',
    // Setup & Catalog Integration
    'dd-card-label.2': 'Configuración e integración de catálogo',
    // Create an EXTERNAL VOLUME for storage access and a CATALOG INTEGRATION pointing at Unit…
    'dd-card-desc.2': 'Crea un EXTERNAL VOLUME para el acceso al almacenamiento y una CATALOG INTEGRATION que apunte a Unity Catalog, Glue o un catálogo Delta personalizado.',
    // Querying Delta Tables
    'dd-card-label.3': 'Consultar tablas Delta',
    // After setup, Delta tables appear as native Snowflake tables. Query with full SQL — join…
    'dd-card-desc.3': 'Tras la configuración, las tablas Delta aparecen como tablas nativas de Snowflake. Se consultan con SQL completo — joins, agregaciones, funciones de ventana, Cortex AI.',
    // Schema Evolution
    'dd-card-label.4': 'Evolución de esquema',
    // Delta schema changes propagate automatically to Snowflake. Add a column in Databricks; …
    'dd-card-desc.4': 'Los cambios de esquema de Delta se propagan automáticamente a Snowflake. Agrega una columna en Databricks; Snowflake la detecta en la siguiente consulta.',
    // Time Travel on Delta
    'dd-card-label.5': 'Time Travel sobre Delta',
    // Query historical snapshots of Delta tables using Snowflake AT/BEFORE syntax against Del…
    'dd-card-desc.5': 'Permite consultar snapshots históricos de tablas Delta con la sintaxis AT/BEFORE de Snowflake sobre las versiones del log de transacciones de Delta.',
    // Governance & Performance
    'dd-card-label.6': 'Gobernanza y rendimiento',
    // Snowflake RBAC, masking, and row access policies apply to Delta tables. Predicate pushd…
    'dd-card-desc.6': 'El RBAC, el enmascaramiento y las políticas de acceso a filas de Snowflake se aplican a las tablas Delta. El predicate pushdown y el descarte de particiones ofrecen rendimiento nativo.',
  },

  // HTML blocks this page builds in JS.
  blocks: {
    // Setup & Catalog IntegrationDelta Direct setup requires two Snowflake objects plus a cre…
    'explain.setup-and-catalog-integration': `<h4>Configuración e integración de catálogo</h4><p>La configuración de Delta Direct requiere dos objetos de Snowflake más una credencial en el proveedor de nube:</p><ul><li><strong>External Volume:</strong> otorga a Snowflake acceso de lectura al bucket de S3/ADLS/GCS donde residen los archivos Delta. Usa un rol IAM (AWS), un service principal (Azure) o una cuenta de servicio (GCP).</li><li><strong>Catalog Integration:</strong> apunta Snowflake al Unity Catalog (Databricks), a Glue o a un endpoint de catálogo REST. Establece <code>TABLE_FORMAT = DELTA</code> para habilitar Delta Direct específicamente.</li><li><strong>Base de datos vinculada al catálogo:</strong> <code>CREATE DATABASE FROM CATALOG INTEGRATION</code> descubre automáticamente todas las tablas Delta del namespace del catálogo y las expone como esquemas y tablas de Snowflake.</li></ul><p>Una vez configuradas, las tablas aparecen en la pestaña Data de Snowsight y se pueden consultar desde cualquier warehouse de Snowflake. No requiere mantenimiento continuo — las nuevas tablas Delta agregadas en Databricks aparecen automáticamente.</p>`,
    // Querying Delta TablesDelta tables accessed via Delta Direct behave exactly like native …
    'explain.querying-delta-tables': `<h4>Consultar tablas Delta</h4><p>Las tablas Delta accedidas mediante Delta Direct se comportan exactamente como tablas nativas de Snowflake desde el punto de vista de la consulta:</p><ul><li>Soporte completo de SQL: JOINs, funciones de ventana, subconsultas, CTEs, QUALIFY</li><li>Joins entre tablas Delta y tablas nativas de Snowflake en la misma consulta — Snowflake optimiza el join a través de ambas fuentes</li><li>Las funciones de Cortex AI operan sobre datos Delta — clasificar, resumir, extraer o ejecutar análisis de sentimiento directamente</li><li>Los resultados se devuelven a través del warehouse de Snowflake — sin involucrar cómputo de Databricks</li></ul><p>La experiencia para los analistas es transparente: no necesitan saber que los datos están en formato Delta. Se ve y se comporta como una tabla de Snowflake.</p>`,
    // Schema EvolutionDelta Direct automatically reflects Delta schema changes in Snowflake —…
    'explain.schema-evolution': `<h4>Evolución de esquema</h4><p>Delta Direct refleja automáticamente los cambios de esquema de Delta en Snowflake — sin DDL manual.</p><ul><li>Cuando un ingeniero de Databricks agrega o elimina una columna, ese cambio es visible en Snowflake después de que el catálogo se actualiza</li><li><code>ALTER DATABASE db REFRESH</code> dispara manualmente una sincronización de metadatos. Con Unity Catalog, los cambios aparecen automáticamente en segundos.</li><li>Snowflake lee el esquema desde el log de transacciones de Delta, que registra cada cambio de DDL — la misma fuente de verdad que usa Databricks</li><li>Los cambios de tipo siguen las reglas de evolución de Delta: las conversiones que amplían (INT → BIGINT, FLOAT → DOUBLE) se propagan de forma segura; las que reducen requieren tratamiento explícito</li></ul>`,
    // Time Travel on DeltaSnowflake exposes Delta&#39;s native time travel through standard S…
    'explain.time-travel-on-delta': `<h4>Time Travel sobre Delta</h4><p>Snowflake expone el time travel nativo de Delta mediante la sintaxis estándar AT/BEFORE de Snowflake, usando el log de transacciones de Delta como historial de versiones.</p><ul><li><strong>Por número de versión:</strong> Delta mantiene números de versión incrementales para cada commit. Consulta <code>AT (VERSION =&gt; N)</code> para leer cualquier snapshot histórico.</li><li><strong>Por marca de tiempo:</strong> cada commit de Delta tiene una marca de tiempo. Usa <code>AT (TIMESTAMP =&gt; '...')</code> para consultar un momento específico.</li><li><strong>DELTA_LOG_HISTORY:</strong> función de tabla que expone el log de transacciones de Delta completo — lista cada versión, marca de tiempo y operación (INSERT, UPDATE, DELETE, SCHEMA CHANGE, OPTIMIZE).</li></ul><p>La retención de versiones históricas depende de la configuración <code>delta.deletedFileRetentionDuration</code> de Delta — típicamente 7 días por omisión en Databricks.</p>`,
    // Governance &amp; PerformanceDelta Direct tables are governed by Snowflake&#39;s full se…
    'explain.governance-and-performance': `<h4>Gobernanza &amp; rendimiento</h4><p>Las tablas de Delta Direct están gobernadas por el stack de seguridad completo de Snowflake — las mismas políticas que se aplican a las tablas nativas se aplican aquí:</p><ul><li><strong>RBAC:</strong> GRANT/REVOKE sobre tablas, esquemas y bases de datos Delta funciona igual que en los objetos nativos de Snowflake</li><li><strong>Enmascaramiento dinámico:</strong> asocia políticas de enmascaramiento a columnas de tablas Delta — enmascaradas para roles de analista, sin enmascarar para ingenieros de datos</li><li><strong>Políticas de acceso a filas:</strong> filtran filas según el contexto del rol que consulta — el mismo marco de políticas que en las tablas nativas</li></ul><p><strong>Rendimiento:</strong></p><ul><li>Descarte de particiones de Delta — Snowflake lee los metadatos de partición del log de Delta y solo obtiene los archivos Parquet relevantes</li><li>Descarte de columnas — solo se leen de Parquet las columnas referenciadas en el SELECT</li><li>Predicate pushdown — los filtros WHERE se aplican al leer los archivos, no después de traerlo todo</li></ul>`,
  },
});
