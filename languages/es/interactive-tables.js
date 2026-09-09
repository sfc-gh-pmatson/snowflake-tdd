// ─────────────────────────────────────────────────────────────────────────
// Spanish (es) — interactive-tables
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
  slug: 'interactive-tables',

  page: {
    // Transactions & OLTP
    'slide-tag': 'Transacciones & OLTP',
    // Interactive Tables & Warehouses
    'nav-label': 'Interactive Tables & Warehouses',
    // Interactive Tables & Warehouses
    's6-header': 'Interactive Tables & Warehouses',
    // Expanding analytics with speed and concurrency — real-time ingestion, sub-second querie…
    's6-sub': 'Analítica ampliada con velocidad y concurrencia — ingesta en tiempo real, consultas en menos de un segundo.',
    // Expanding Analytics
    'it-eyebrow': 'Analítica ampliada',
    // Speed & Concurrency for Interactive Analytics
    'it-title': 'Velocidad & concurrencia para analítica interactiva',
    // Real-Time Decision Making
    'it-feature-title.1': 'Toma de decisiones en tiempo real',
    // Act on data the moment it lands — no waiting on batch cycles.
    'it-feature-body.1': 'Permite actuar sobre los datos en el momento en que llegan — sin esperar ciclos por lotes.',
    // Sub-Second Latency
    'it-feature-title.2': 'Latencia inferior a un segundo',
    // Always-on compute and pre-warmed caches serve queries in under a second.
    'it-feature-body.2': 'El cómputo siempre activo y las cachés precalentadas atienden consultas en menos de un segundo.',
    // High Concurrency at Scale
    'it-feature-title.3': 'Alta concurrencia a escala',
    // Serve many simultaneous users and applications without contention.
    'it-feature-body.3': 'Atiende a muchos usuarios y aplicaciones simultáneos sin contención.',
    // Price-for-Performance
    'it-feature-title.4': 'Relación precio-rendimiento',
    // Right-sized, always-on compute delivers low latency cost-efficiently.
    'it-feature-body.4': 'Un cómputo siempre activo y bien dimensionado ofrece baja latencia con eficiencia de costo.',
    // How It Works
    'it-right-label': 'Cómo funciona',
    // Interactive Table
    'it-def-title.1': 'Interactive Table',
    // A new table type optimized for real-time streaming ingestion and querying of data.
    'it-def-body.1': 'Un nuevo tipo de tabla optimizado para la ingesta streaming en tiempo real y la consulta de datos.',
    // Interactive Warehouse
    'it-def-title.2': 'Interactive Warehouse',
    // A new warehouse designed to be always on, serving low-latency queries with pre-warmed c…
    'it-def-body.2': 'Un nuevo warehouse diseñado para estar siempre activo, que atiende consultas de baja latencia con cachés precalentadas.',
    // Data Lakes
    'it-node-title.1': 'Data lakes',
    // Batch Ingestion
    'it-node-title.2': 'Ingesta por lotes',
    // Streaming Sources
    'it-node-title.3': 'Fuentes de streaming',
    // e.g. Kafka
    'it-node-sub.2': 'p. ej. Kafka',
    // Interactive Table
    'it-target-title.1': 'Interactive Table',
    // Interactive Warehouse
    'it-target-title.2': 'Interactive Warehouse',
    // Interactive Table
    'it-target-inner': 'Interactive Table',
    // © 2026 Snowflake Inc. All Rights Reserved
    'span': '© 2026 Snowflake Inc. Todos los derechos reservados',
    // Interactive Warehouse
    'h4.1': 'Interactive Warehouse',
    // An always-on warehouse with a pre-warmed cache. The minimum AUTO_SUSPEND is 24 hours — …
    'p.1': 'Un warehouse siempre activo con una caché precalentada. El valor mínimo de AUTO_SUSPEND es de 24 horas — se paga por el tiempo activo, pero las consultas en menos de un segundo están garantizadas desde la primera solicitud.',
    // Interactive Table
    'h4.2': 'Interactive Table',
    // A new table type that pairs with the Interactive Warehouse. The required CLUSTER BY cla…
    'p.2': `Un nuevo tipo de tabla que se combina con el Interactive Warehouse. La cláusula obligatoria <code>CLUSTER BY</code> indica a Snowflake qué columnas indexar para búsquedas de baja latencia — conviene elegir columnas que aparezcan en los filtros <code>WHERE</code> más críticos.`,
    // Ingestion
    'h4.3': 'Ingesta',
    // Load data via standard INSERT/COPY or stream rows in real time using the Snowpipe Strea…
    'p.3': `Permite cargar datos con <code>INSERT/COPY</code> estándar o enviar filas en tiempo real con el SDK de Snowpipe Streaming (<code>insertRows</code>). El Interactive Warehouse sirve los datos inmediatamente después de la ingesta.`,
  },
});
