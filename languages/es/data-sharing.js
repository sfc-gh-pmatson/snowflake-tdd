// ─────────────────────────────────────────────────────────────────────────
// Spanish (es) — data-sharing
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
  slug: 'data-sharing',

  page: {
    // Data Mesh & Sharing
    'slide-tag': 'Data Mesh & uso compartido',
    // Zero-ETL Data Sharing
    'nav-label': 'Uso compartido de datos Zero-ETL',
    // Zero-ETL Data Sharing
    's6-header': 'Uso compartido de datos Zero-ETL',
    // Share live data across accounts and clouds without pipelines, copies, or ETL. Consumers…
    's6-sub': 'Comparta datos en vivo entre cuentas y nubes sin pipelines, copias ni ETL. Los consumidores consultan sus datos reales — siempre frescos, siempre gobernados.',
    // Direct Share
    'ds-card-label.1': 'Share directo',
    // Share tables, views, and UDFs directly to another Snowflake account. Point-to-point, no…
    'ds-card-desc.1': 'Comparta tablas, vistas y UDF directamente con otra cuenta de Snowflake. Punto a punto, sin necesidad de una publicación en el Marketplace.',
    // Secure Views
    'ds-card-label.2': 'Vistas seguras',
    // Share derived, filtered, or joined views without exposing underlying tables. The view d…
    'ds-card-desc.2': 'Comparta vistas derivadas, filtradas o unidas sin exponer las tablas subyacentes. La definición de la vista queda oculta para los consumidores.',
    // Listings
    'ds-card-label.3': 'Listings',
    // Publish data products to Snowflake Marketplace (public) or Internal Marketplace (org-wi…
    'ds-card-desc.3': 'Publique productos de datos en el Snowflake Marketplace (público) o en el Internal Marketplace (para toda la organización) para su descubrimiento e instalación en autoservicio.',
    // Cross-Region Replication
    'ds-card-label.4': 'Replicación entre regiones',
    // Share data across clouds and regions automatically. Snowflake replicates; consumers que…
    'ds-card-desc.4': 'Comparta datos entre nubes y regiones automáticamente. Snowflake replica; los consumidores consultan una réplica regional con baja latencia.',
    // Internal Marketplace
    'ds-card-label.5': 'Internal Marketplace',
    // Publish data products for internal teams across your Snowflake organization — self-serv…
    'ds-card-desc.5': 'Publique productos de datos para los equipos internos de toda su organización de Snowflake — descubrimiento en autoservicio sin cuellos de botella de TI central.',
    // Governed Sharing
    'ds-card-label.6': 'Uso compartido gobernado',
    // Apply row-level security and dynamic masking policies to shared objects — consumers see…
    'ds-card-desc.6': 'Aplique seguridad a nivel de fila y políticas de enmascaramiento dinámico a los objetos compartidos — los consumidores ven un subconjunto gobernado de sus datos.',
    // -- Select a card above to explore Data Sharing concepts
    'ds-panel-code': '-- Seleccione una tarjeta arriba para explorar los conceptos de Data Sharing',
    // Zero-ETL Data Sharing
    'h4': 'Uso compartido de datos Zero-ETL',
    // Click any card above to see SQL examples and explanations for each aspect of Snowflake'…
    'p.1': 'Haga clic en cualquier tarjeta de arriba para ver ejemplos de SQL y explicaciones de cada aspecto del modelo de uso compartido de datos de Snowflake.',
    // Sharing in Snowflake is built on a single key insight: consumers mount a read-only view…
    'p.2': 'El uso compartido en Snowflake se basa en una única idea clave: los consumidores montan una vista de solo lectura de su almacenamiento real. Sin movimiento de datos, sin pipeline, siempre en vivo.',
  },
});
