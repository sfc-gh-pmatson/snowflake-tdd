// ─────────────────────────────────────────────────────────────────────────
// Spanish (es) — iceberg-catalog-linked
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
  slug: 'iceberg-catalog-linked',

  page: {
    // Catalog-Linked Iceberg
    'nav-label': 'Iceberg con catálogo vinculado',
    // Catalog-Linked Iceberg Databases
    's6-header': 'Bases de datos Iceberg con catálogo vinculado',
    // Connect any Iceberg catalog to Snowflake. No ETL. No copies. One governance layer.
    's6-sub': 'Conecte cualquier catálogo Iceberg a Snowflake. Sin ETL. Sin copias. Una sola capa de gobernanza.',
    // Snowflake — Universal Query Layer
    'cl-eyebrow': 'Snowflake — Capa universal de consulta',
    // One GovernanceLayer, Any Catalog
    'cl-title': `Una capa de gobernanza,<br>cualquier catálogo`,
    // Keep external Iceberg tables in your own storage — Snowflake provides the query engine,…
    'cl-sub': 'Mantenga las tablas Iceberg externas en su propio almacenamiento — Snowflake aporta el motor de consulta, la gobernanza completa de Horizon y Cortex AI.',
    // Zero-Copy, In-Place Access
    'cl-feature-title.1': 'Acceso in situ y sin copias',
    // Mount Unity Catalog, AWS Glue, or Apache Polaris as a Snowflake database. Tables are au…
    'cl-feature-body.1': 'Monte Unity Catalog, AWS Glue o Apache Polaris como una base de datos de Snowflake. Las tablas se descubren y sincronizan automáticamente — los datos nunca salen de la ubicación de almacenamiento externa.',
    // Auto-Discover & Stay Fresh
    'cl-feature-title.2': 'Descubrimiento automático & siempre actualizado',
    // New tables added to the external catalog surface automatically in Snowflake. Metadata s…
    'cl-feature-body.2': 'Las tablas nuevas que se agregan al catálogo externo aparecen automáticamente en Snowflake. La sincronización de metadatos mantiene actualizadas las estadísticas de partición para que la planificación de consultas siga siendo óptima.',
    // Horizon Governance Applies
    'cl-feature-title.3': 'Se aplica la gobernanza de Horizon',
    // Masking policies, row access policies, and data classification from Snowflake Horizon e…
    'cl-feature-body.3': 'Las políticas de enmascaramiento, las políticas de acceso a filas y la clasificación de datos de Snowflake Horizon se extienden a todas las tablas con catálogo vinculado — gobernanza consistente sin importar dónde residan los datos.',
    // Full SQL on External Tables
    'cl-feature-title.4': 'SQL completo sobre tablas externas',
    // Run any Snowflake SQL — joins, aggregations, window functions, Cortex AI — directly aga…
    'cl-feature-body.4': 'Ejecute cualquier SQL de Snowflake — uniones, agregaciones, funciones de ventana, Cortex AI — directamente sobre las tablas Iceberg con catálogo vinculado, igual que con cualquier tabla nativa de Snowflake.',
    // External Iceberg Catalogs
    'cl-diagram-label.1': 'Catálogos Iceberg externos',
    // Unity Catalog
    'cl-catalog-card-name.1': 'Unity Catalog',
    // AWS Glue
    'cl-catalog-card-name.2': 'AWS Glue',
    // Amazon
    'cl-catalog-card-sub.2': 'Amazon',
    // Apache Polaris™
    'cl-catalog-card-name.3': 'Apache Polaris™',
    // Open Source
    'cl-catalog-card-sub.3': 'Código abierto',
    // Any REST
    'cl-catalog-card-name.4': 'Cualquier REST',
    // Iceberg Catalog
    'cl-catalog-card-sub.4': 'Catálogo Iceberg',
    // Catalog Integration
    'cl-connector-pill': 'Integración de catálogo',
    // Snowflake Catalog-Linked Database
    'cl-sf-box-title': 'Base de datos de Snowflake con catálogo vinculado',
    // Auto-synced schemas & tables — full SQL, Horizon governance, Cortex AI
    'cl-sf-box-sub': 'Esquemas & tablas sincronizados automáticamente — SQL completo, gobernanza de Horizon, Cortex AI',
    // Data Stays in Cloud Object Storage
    'cl-diagram-label.2': 'Los datos permanecen en el almacenamiento de objetos en la nube',
    // Amazon S3
    'cl-chip.1': 'Amazon S3',
    // Google GCS
    'cl-chip.3': 'Google GCS',
    // Parquet + Iceberg Metadata
    'cl-chip.4': 'Parquet + metadatos de Iceberg',
    // © 2026 Snowflake Inc. All Rights Reserved
    'span': '© 2026 Snowflake Inc. Todos los derechos reservados',
    // Catalog Integration
    'h4.1': 'Integración de catálogo',
    // A CATALOG INTEGRATION tells Snowflake how to authenticate and connect to an external Ic…
    'p.1': `Una <code>CATALOG INTEGRATION</code> indica a Snowflake cómo autenticarse y conectarse a un catálogo Iceberg externo que implementa la especificación de catálogo REST (por ejemplo, Unity Catalog, Polaris, AWS Glue).`,
    // Catalog-Linked Database
    'h4.2': 'Base de datos con catálogo vinculado',
    // CREATE DATABASE ... FROM CATALOG INTEGRATION mounts the external catalog as a native Sn…
    'p.2': `<code>CREATE DATABASE ... FROM CATALOG INTEGRATION</code> monta el catálogo externo como una base de datos nativa de Snowflake. Las tablas se descubren automáticamente — no se necesitan instrucciones <code>CREATE EXTERNAL TABLE</code> manuales.`,
    // Zero-Copy Querying
    'h4.3': 'Consultas sin copias',
    // Snowflake reads Parquet files directly from the original cloud object storage. Data nev…
    'p.3': 'Snowflake lee los archivos Parquet directamente desde el almacenamiento de objetos en la nube original. Los datos nunca se mueven. La gobernanza de Snowflake Horizon (enmascaramiento, acceso a filas, RBAC) se aplica a cada consulta.',
  },
});
