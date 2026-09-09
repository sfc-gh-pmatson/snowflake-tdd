// ─────────────────────────────────────────────────────────────────────────
// Spanish (es) — snowflake-tables
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
  slug: 'snowflake-tables',

  page: {
    // Storage & Tables
    'slide-tag': 'Almacenamiento y tablas',
    // Snowflake Tables
    'nav-label': 'Tablas de Snowflake',
    // Snowflake Native Tables
    's6-header': 'Tablas nativas de Snowflake',
    // Columnar, micro-partitioned, always-compressed — with zero-copy cloning, Time Travel, M…
    's6-sub': 'Columnares, microparticionadas y siempre comprimidas — con clonación sin copia, Time Travel, MERGE y SQL ANSI completo incluidos. Sin índices, sin claves de particionamiento y sin necesidad de vacuum.',
    // Standard
    'nt-type-label.1': 'Standard',
    // Permanent
    'nt-type-title.1': 'Permanente',
    // Time Travel
    'nt-type-key.1': 'Time Travel',
    // 0–90 days
    'nt-type-val.1': '0–90 días',
    // Fail-Safe
    'nt-type-key.2': 'Fail-Safe',
    // 7 days
    'nt-type-val.2': '7 días',
    // Persist after session
    'nt-type-key.3': 'Persiste tras la sesión',
    // Yes
    'nt-type-val.3': 'Sí',
    // Storage billing
    'nt-type-key.4': 'Facturación de almacenamiento',
    // Full
    'nt-type-val.4': 'Completa',
    // Reduced overhead
    'nt-type-label.2': 'Menor sobrecarga',
    // Transient
    'nt-type-title.2': 'Transitoria',
    // Time Travel
    'nt-type-key.5': 'Time Travel',
    // 0–1 day
    'nt-type-val.5': '0–1 día',
    // Fail-Safe
    'nt-type-key.6': 'Fail-Safe',
    // None
    'nt-type-val.6': 'Ninguno',
    // Persist after session
    'nt-type-key.7': 'Persiste tras la sesión',
    // Yes
    'nt-type-val.7': 'Sí',
    // Storage billing
    'nt-type-key.8': 'Facturación de almacenamiento',
    // Reduced
    'nt-type-val.8': 'Reducida',
    // Session-scoped
    'nt-type-label.3': 'Limitada a la sesión',
    // Temporary
    'nt-type-title.3': 'Temporal',
    // Time Travel
    'nt-type-key.9': 'Time Travel',
    // 0–1 day
    'nt-type-val.9': '0–1 día',
    // Fail-Safe
    'nt-type-key.10': 'Fail-Safe',
    // None
    'nt-type-val.10': 'Ninguno',
    // Persist after session
    'nt-type-key.11': 'Persiste tras la sesión',
    // Storage billing
    'nt-type-key.12': 'Facturación de almacenamiento',
    // Minimal
    'nt-type-val.12': 'Mínima',
    // DDL & Data Types
    'nt-card-title.1': 'DDL y tipos de datos',
    // Full ANSI type system: numeric, string, date/time, semi-structured (VARIANT/OBJECT/ARRA…
    'nt-card-desc.1': 'Sistema de tipos ANSI completo: numéricos, cadenas, fecha/hora, semiestructurados (VARIANT/OBJECT/ARRAY), booleanos y binarios. CTAS para crear tablas al instante a partir de consultas, valores predeterminados de columna, expresiones y conversiones de tipo en línea.',
    // Table Properties
    'nt-card-title.2': 'Propiedades de la tabla',
    // Configure DATA_RETENTION_TIME_IN_DAYS per table for Time Travel. Enable CHANGE_TRACKING…
    'nt-card-desc.2': 'Configura DATA_RETENTION_TIME_IN_DAYS por tabla para Time Travel. Habilita CHANGE_TRACKING para CDC basado en streams. Agrega clasificación con TAG para la gobernanza de Horizon. Define COMMENT para documentar en el catálogo.',
    // Constraints
    'nt-card-title.3': 'Restricciones',
    // NOT NULL is enforced. UNIQUE, PRIMARY KEY, and FOREIGN KEY constraints are informationa…
    'nt-card-desc.3': 'NOT NULL se impone. Las restricciones UNIQUE, PRIMARY KEY y FOREIGN KEY son informativas (NOVALIDATE, RELY) — se usan como documentación y como sugerencias para el optimizador de consultas, no se imponen en tiempo de ejecución. Conviene definirlas para herramientas de linaje, herramientas de BI y modelos semánticos.',
    // Time Travel & Fail-Safe
    'nt-card-title.4': 'Time Travel y Fail-Safe',
    // Query any table as it existed at a past timestamp, offset, or query ID — without restor…
    'nt-card-desc.4': 'Consulta cualquier tabla tal como existía en una marca de tiempo, un desplazamiento o un ID de consulta anterior — sin restaurar un respaldo. UNDROP TABLE recupera una tabla eliminada dentro de la ventana de retención. Fail-Safe extiende 7 días más allá de Time Travel para la recuperación asistida por Snowflake.',
    // DML — Insert, Update, Delete
    'nt-card-title.5': 'DML — insertar, actualizar, eliminar',
    // Full ANSI DML with Snowflake extensions: INSERT OVERWRITE for full replace, multi-table…
    'nt-card-desc.5': 'DML ANSI completo con extensiones de Snowflake: INSERT OVERWRITE para reemplazo total, INSERT multitabla, UPDATE FROM sobre un conjunto de origen, DELETE con USING para eliminaciones basadas en joins y TRUNCATE para un reinicio instantáneo sin sobrecarga de registro.',
    // Zero-Copy Clone
    'nt-card-title.6': 'Clonación sin copia',
    // CREATE TABLE ... CLONE is a metadata-only operation — no data is copied at clone time. …
    'nt-card-desc.6': 'CREATE TABLE ... CLONE es una operación solo de metadatos — no se copia ningún dato al momento de clonar. Los clones comparten las microparticiones subyacentes con el origen. Las nuevas escrituras en cualquiera de los dos lados divergen de forma independiente. Clona bases de datos o esquemas completos en milisegundos.',
    // Instant
    'nt-chip.20': 'Instantáneo',
    // No data copy
    'nt-chip.21': 'Sin copia de datos',
    // MERGE — Upsert Patterns
    'nt-card-title.7': 'MERGE — patrones de upsert',
    // MERGE INTO handles upserts, SCD Type 1 and Type 2 patterns, and conditional logic in a …
    'nt-card-desc.7': 'MERGE INTO resuelve upserts, patrones SCD tipo 1 y tipo 2 y lógica condicional en una sola operación atómica. Admite varias cláusulas WHEN MATCHED con condiciones distintas y WHEN NOT MATCHED BY SOURCE para eliminar en el destino.',
    // SCD Type 1/2
    'nt-chip.25': 'SCD tipo 1/2',
    // Change Tracking
    'nt-card-title.8': 'Seguimiento de cambios',
    // Enable CHANGE_TRACKING on any table to capture row-level inserts, updates, and deletes.…
    'nt-card-desc.8': 'Habilita CHANGE_TRACKING en cualquier tabla para capturar inserciones, actualizaciones y eliminaciones a nivel de fila. Consulta los cambios directamente con CHANGES(INFORMATION => DEFAULT) o consúmelos mediante Streams para disparar pipelines posteriores.',
    // Streams CDC
    'nt-chip.28': 'CDC con Streams',
    // © 2026 Snowflake Inc. All Rights Reserved
    'span': '© 2026 Snowflake Inc. Todos los derechos reservados',
  },
});
