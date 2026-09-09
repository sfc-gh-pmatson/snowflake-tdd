// ─────────────────────────────────────────────────────────────────────────
// Spanish (es) — iceberg-v3
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
  slug: 'iceberg-v3',

  page: {
    // Iceberg v3 Advantages
    'nav-label': 'Ventajas de Iceberg v3',
    // Apache Iceberg™ v3 — What's New
    's6-header': 'Apache Iceberg™ v3 — Novedades',
    // The next-generation spec, co-authored by Snowflake, available in Snowflake today.
    's6-sub': 'La especificación de próxima generación, coescrita por Snowflake y ya disponible en Snowflake.',
    // Iceberg v3 is a major leap in the open table format spec — richer data types, faster de…
    'v3-intro-lead': 'Iceberg v3 es un gran salto en la especificación de formato de tabla abierto — tipos de datos más ricos, borrados más rápidos, mejor evolución de esquema y linaje de filas para trazas de auditoría. Snowflake coescribió la v3 y fue una de las primeras plataformas en ofrecer soporte completo.',
    // Spec Version
    'v3-intro-badge-label': 'Versión de la especificación',
    // Apache Iceberg™
    'v3-intro-badge-sub': 'Apache Iceberg™',
    // Variant Support
    'v3-card-title.1': 'Soporte de Variant',
    // Fast, flexible semi-structured data. Store semi-structured JSON natively in an Iceberg …
    'v3-card-body.1': 'Datos semiestructurados rápidos y flexibles. Permite almacenar JSON semiestructurado de forma nativa en una columna de Iceberg, alineado con el tipo VARIANT nativo de Snowflake para un uso compartido entre motores sin fricción.',
    // New Type
    'v3-card-tag.1': 'Nuevo tipo',
    // Geospatial
    'v3-card-title.2': 'Geoespacial',
    // Geometry and Geography types. Native geospatial type support in the Iceberg spec enable…
    'v3-card-body.2': 'Tipos Geometry y Geography. El soporte nativo de tipos geoespaciales en la especificación de Iceberg permite datos espaciales portables entre motores sin extensiones propietarias.',
    // New Type
    'v3-card-tag.2': 'Nuevo tipo',
    // Row Lineage
    'v3-card-title.3': 'Linaje de filas',
    // Efficient CDC and incremental processing. Every row carries a unique identifier and com…
    'v3-card-body.3': 'CDC y procesamiento incremental eficientes. Cada fila lleva un identificador único y un número de secuencia de commit para trazas de auditoría detalladas y captura de cambios sin pipelines separados.',
    // New Capability
    'v3-card-tag.3': 'Nueva capacidad',
    // Nanosecond Timestamp
    'v3-card-title.4': 'Timestamp de nanosegundos',
    // More precise timestamps. v3 extends timestamp precision to nanoseconds, enabling high-f…
    'v3-card-body.4': 'Timestamps más precisos. La v3 extiende la precisión de los timestamps a nanosegundos, lo que habilita datos de eventos de alta frecuencia y cargas de trabajo de series temporales que requieren resolución inferior al microsegundo.',
    // Precision
    'v3-card-tag.4': 'Precisión',
    // Deletion Vectors
    'v3-card-title.5': 'Vectores de borrado',
    // More efficient row-level deletes – read-only. Instead of rewriting data files on DELETE…
    'v3-card-body.5': 'Borrados a nivel de fila más eficientes – solo lectura. En lugar de reescribir archivos de datos en DELETE o UPDATE, la v3 escribe un pequeño mapa de bits complementario que marca las filas borradas, lo que reduce drásticamente la amplificación de escritura.',
    // Faster Writes
    'v3-card-tag.5': 'Escrituras más rápidas',
    // Default Values
    'v3-card-title.6': 'Valores predeterminados',
    // Column-level defaults. Schema evolution now supports default values for new columns — o…
    'v3-card-body.6': 'Valores predeterminados a nivel de columna. La evolución de esquema ya admite valores predeterminados para columnas nuevas — los archivos antiguos devuelven el valor correcto sin escaneos de relleno ni soluciones alternativas para manejar nulos.',
    // Schema Evolution
    'v3-card-tag.6': 'Evolución de esquema',
    // Snowflake co-authored Iceberg v3 and is a founding member of Apache Polaris&#x2122; (in…
    'v3-footer-bar-text': `<strong>Snowflake coescribió Iceberg v3</strong> y es miembro fundador de Apache Polaris&#x2122; (en incubación) — el catálogo REST de código abierto que implementa la especificación de catálogo de Iceberg e impulsa la interoperabilidad entre múltiples motores sin dependencia de un proveedor.`,
    // © 2026 Snowflake Inc. All Rights Reserved
    'span': '© 2026 Snowflake Inc. Todos los derechos reservados',
    // Create an Iceberg v3 table by setting ICEBERG_VERSION=3. The CATALOG parameter points t…
    'code-modal-explain': `Permite crear una tabla Iceberg v3 definiendo <code>ICEBERG_VERSION=3</code>. El parámetro <code>CATALOG</code> apunta a una integración de catálogo existente. La v3 habilita Variant, geoespacial, linaje de filas, vectores de borrado, timestamps de nanosegundos y valores predeterminados.`,
  },
});
