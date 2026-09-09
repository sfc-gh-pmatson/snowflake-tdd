// ─────────────────────────────────────────────────────────────────────────
// Spanish (es) — storage
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
  slug: 'storage',

  page: {
    // Storage & Tables
    'slide-tag': 'Almacenamiento & tablas',
    // Storage
    'nav-label': 'Almacenamiento',
    // Snowflake Storage
    's6-header': 'Almacenamiento de Snowflake',
    // One storage layer for all data types — structured tables, semi-structured JSON, and uns…
    's6-sub': 'Una sola capa de almacenamiento para todos los tipos de datos — tablas estructuradas, JSON semiestructurado y archivos no estructurados — con microparticionamiento automático, clustering y Time Travel integrados.',
    // Data Types
    'st-tab.1': 'Tipos de datos',
    // Storage Architecture
    'st-tab.2': 'Arquitectura de almacenamiento',
    // Unstructured Data
    'st-card-title.1': 'Datos no estructurados',
    // Store documents, images, video, audio, and binary files natively alongside structured d…
    'st-card-desc.1': 'Almacene documentos, imágenes, video, audio y archivos binarios de forma nativa junto a los datos estructurados. Consulte los metadatos de los archivos como una tabla, genere URL prefirmadas y ejecute extracción con IA — sin mover los datos a un sistema aparte.',
    // Presigned URLs
    'st-chip.4': 'URL prefirmadas',
    // Semi-Structured
    'st-card-title.2': 'Semiestructurado',
    // Native VARIANT type stores JSON, Avro, Parquet, ORC, and XML without a fixed schema. Qu…
    'st-card-desc.2': 'El tipo nativo VARIANT almacena JSON, Avro, Parquet, ORC y XML sin un esquema fijo. Consulte campos anidados con notación de punto, convierta arreglos en filas y detecte automáticamente la estructura de columnas — todo en SQL estándar.',
    // dot notation
    'st-chip.8': 'notación de punto',
    // Structured Data
    'st-card-title.3': 'Datos estructurados',
    // Full ANSI SQL typed columns with constraints, views, and Time Travel. Every table is au…
    'st-card-desc.3': 'Columnas tipadas con ANSI SQL completo, con restricciones, vistas y Time Travel. Cada tabla se microparticiona automáticamente y es columnar — sin necesidad de ajustes. Incluye vistas seguras, vistas materializadas y DML transaccional.',
    // Typed columns
    'st-chip.9': 'Columnas tipadas',
    // Constraints
    'st-chip.10': 'Restricciones',
    // Time Travel
    'st-chip.11': 'Time Travel',
    // Secure views
    'st-chip.12': 'Vistas seguras',
    // Micro-Partitioning
    'st-card-title.4': 'Microparticionamiento',
    // All Snowflake tables are automatically divided into immutable, compressed micro-partiti…
    'st-card-desc.4': 'Todas las tablas de Snowflake se dividen automáticamente en microparticiones inmutables y comprimidas de 50–500 MB. Snowflake almacena metadatos enriquecidos a nivel de columna (mín./máx., conteo de distintos, filtro de Bloom) para cada partición, lo que permite un pruning agresivo sin mantenimiento manual.',
    // Immutable
    'st-chip.13': 'Inmutables',
    // Columnar
    'st-chip.14': 'Columnar',
    // Partition pruning
    'st-chip.15': 'Pruning de particiones',
    // Zero maintenance
    'st-chip.16': 'Cero mantenimiento',
    // Deep dive →
    'div.1': 'Análisis a fondo →',
    // Clustering & Search Optimization
    'st-card-title.5': 'Clustering & Search Optimization',
    // Define cluster keys to co-locate frequently filtered columns in the same micro-partitio…
    'st-card-desc.5': 'Defina claves de clustering para ubicar juntas, en las mismas microparticiones, las columnas que se filtran con frecuencia. El Automatic Reclustering mantiene ordenadas las tablas grandes a medida que los datos envejecen. El Search Optimization Service acelera las búsquedas por igualdad y por rango sin cambiar las consultas.',
    // Auto-recluster
    'st-chip.18': 'Auto-recluster',
    // Search Optimization
    'st-chip.19': 'Search Optimization',
    // Deep dive →
    'div.2': 'Análisis a fondo →',
    // Internal Stages
    'st-card-title.6': 'Stages internos',
    // Snowflake-managed temporary and permanent file storage for data loading, transformation…
    'st-card-desc.6': 'Almacenamiento de archivos temporal y permanente gestionado por Snowflake para la carga de datos, las salidas de transformación y los intermedios de pipeline. Tres tipos: stage de usuario (personal), stage de tabla (ligado a una tabla) y stage con nombre (reutilizable y gobernado).',
    // @~ user
    'st-chip.20': '@~ usuario',
    // @%table
    'st-chip.21': '@%table',
    // Named stage
    'st-chip.22': 'Stage con nombre',
    // External Stages
    'st-card-title.7': 'Stages externos',
    // Reference data in S3, Azure Blob, or GCS without loading it into Snowflake. Use a Stora…
    'st-card-desc.7': 'Haga referencia a datos en S3, Azure Blob o GCS sin cargarlos en Snowflake. Use una Storage Integration para desacoplar las credenciales de las definiciones de stage. Consulte los archivos en su lugar con tablas externas o cárguelos a demanda con COPY INTO.',
    // Storage Integration
    'st-chip.25': 'Storage Integration',
    // External Tables
    'st-chip.26': 'Tablas externas',
    // © 2026 Snowflake Inc. All Rights Reserved
    'span': '© 2026 Snowflake Inc. Todos los derechos reservados',
  },
});
