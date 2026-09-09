// ─────────────────────────────────────────────────────────────────────────
// Spanish (es) — iceberg-snowflake
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
  slug: 'iceberg-snowflake',

  page: {
    // Iceberg on Snowflake
    'nav-label': 'Iceberg en Snowflake',
    // Iceberg on Snowflake
    's6-header': 'Iceberg en Snowflake',
    // Open format. Snowflake performance. Any engine reads and writes. No ETL.
    's6-sub': 'Formato abierto. Rendimiento de Snowflake. Cualquier motor lee y escribe. Sin ETL.',
    // Snowflake — Managed Iceberg
    'isf-eyebrow': 'Snowflake — Iceberg administrado',
    // Open Format,Full Performance
    'isf-title': `Formato abierto,<br>rendimiento completo`,
    // Snowflake manages the metadata, compaction, and catalog endpoint so every query runs at…
    'isf-sub': 'Snowflake administra los metadatos, la compactación y el endpoint del catálogo para que cada consulta corra a máxima velocidad sobre el almacenamiento propio.',
    // Full Snowflake Query Performance
    'isf-feature-title.1': 'Rendimiento completo de consultas de Snowflake',
    // Automatic clustering, result caching, partition pruning, and query compilation work at …
    'isf-feature-body.1': 'El clustering automático, el caché de resultados, la poda de particiones y la compilación de consultas funcionan a máxima velocidad en tablas Iceberg — sin configuración especial.',
    // Write from Any Engine
    'isf-feature-title.2': 'Escritura desde cualquier motor',
    // Spark, Flink, Trino, and Dremio can write directly via the Snowflake Iceberg REST catal…
    'isf-feature-body.2': 'Spark, Flink, Trino y Dremio pueden escribir directamente a través del catálogo REST de Iceberg de Snowflake — la misma tabla, varios motores, y Snowflake administra los metadatos y la compactación.',
    // Enterprise Security & Governance
    'isf-feature-title.3': 'Seguridad y gobernanza de nivel Enterprise',
    // Dynamic data masking, row-level security, Time Travel, Fail-safe, and Snowflake Horizon…
    'isf-feature-body.3': 'El enmascaramiento dinámico de datos, la seguridad a nivel de fila, Time Travel, Fail-safe y la clasificación de Snowflake Horizon se aplican a las tablas Iceberg — igual que a cualquier tabla nativa de Snowflake.',
    // No ETL — One Copy of Data
    'isf-feature-title.4': 'Sin ETL — una sola copia de los datos',
    // Your data lives in a single Iceberg-format file set in cloud object storage. Snowflake …
    'isf-feature-body.4': 'Los datos viven en un único conjunto de archivos en formato Iceberg dentro del almacenamiento de objetos en la nube. Snowflake los lee de forma nativa — sin duplicación, sin pipelines y sin sobrecarga de sincronización.',
    // External Write Engines
    'isf-diagram-label': 'Motores de escritura externos',
    // Apache Spark™
    'isf-engine-name.1': 'Apache Spark™',
    // Apache Flink™
    'isf-engine-name.2': 'Apache Flink™',
    // Trino
    'isf-engine-name.3': 'Trino',
    // Dremio
    'isf-engine-name.4': 'Dremio',
    // Iceberg REST Catalog
    'isf-connector-pill': 'Catálogo REST de Iceberg',
    // Snowflake-Managed Iceberg Table
    'isf-sf-box-title': 'Tabla Iceberg administrada por Snowflake',
    // Snowflake manages metadata, compaction, and the REST catalog endpoint
    'isf-sf-box-sub': 'Snowflake administra los metadatos, la compactación y el endpoint del catálogo REST',
    // Auto-clustering
    'isf-benefit-chip.1': 'Clustering automático',
    // Result cache
    'isf-benefit-chip.2': 'Caché de resultados',
    // Time Travel
    'isf-benefit-chip.3': 'Time Travel',
    // Masking policies
    'isf-benefit-chip.4': 'Políticas de enmascaramiento',
    // Row access
    'isf-benefit-chip.5': 'Acceso a filas',
    // Cloud Object Storage (Customer-Owned)
    'cl-diagram-label': 'Almacenamiento de objetos en la nube (propiedad del cliente)',
    // Amazon S3
    'cl-chip.1': 'Amazon S3',
    // Google GCS
    'cl-chip.3': 'Google GCS',
    // Parquet + Iceberg Metadata
    'cl-chip.4': 'Parquet + metadatos de Iceberg',
    // © 2026 Snowflake Inc. All Rights Reserved
    'span': '© 2026 Snowflake Inc. Todos los derechos reservados',
    // External Volume
    'h4.1': 'Volumen externo',
    // An EXTERNAL VOLUME tells Snowflake where in cloud object storage to write Iceberg data …
    'p.1': `Un <code>EXTERNAL VOLUME</code> le indica a Snowflake en qué punto del almacenamiento de objetos en la nube debe escribir los archivos de datos de Iceberg. Snowflake asume un rol de IAM (AWS), un principal de servicio (Azure) o una cuenta de servicio (GCP) para acceder a esa ubicación.`,
    // Snowflake-Managed Iceberg Table
    'h4.2': 'Tabla Iceberg administrada por Snowflake',
    // Setting CATALOG = 'SNOWFLAKE' means Snowflake owns and manages the Iceberg metadata. Th…
    'p.2': `Definir <code>CATALOG = 'SNOWFLAKE'</code> significa que Snowflake posee y administra los metadatos de Iceberg. Esto habilita Time Travel, Fail-safe, la compactación automática y la optimización completa de consultas.`,
    // External Engine Access
    'h4.3': 'Acceso desde motores externos',
    // Configure Spark (or another engine) to use Snowflake's Polaris-compatible REST catalog …
    'p.3': 'Configura Spark (u otro motor) para usar el endpoint del catálogo REST de Snowflake compatible con Polaris. Los motores externos leen y escriben los mismos archivos Parquet/Iceberg — Snowflake coordina el acceso concurrente.',
  },
});
