// ─────────────────────────────────────────────────────────────────────────
// Spanish (es) — compute-specialized
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
  slug: 'compute-specialized',

  page: {
    // Compute
    'slide-tag': 'Cómputo',
    // Specialized Compute
    'nav-label': 'Cómputo especializado',
    // Specialized Compute
    's6-header': 'Cómputo especializado',
    // Purpose-built warehouse types for demanding workloads — no separate infrastructure requ…
    's6-sub': 'Tipos de warehouse diseñados específicamente para cargas de trabajo exigentes — sin necesidad de infraestructura aparte.',
    // Gen2 Default
    'csp-card-tag.1': 'Predeterminado en Gen2',
    // Adaptive Warehouses
    'csp-card-title.1': 'Adaptive Warehouses',
    // Auto-tunes for mixed workloads without manual resizing
    'csp-card-sub.1': 'Se ajusta automáticamente a cargas de trabajo mixtas sin redimensionamiento manual',
    // QUERY_THROUGHPUT_MULTIPLIER (1&#8211;3&#215;) boosts parallel query throughput within t…
    'csp-fact-text.1': `<span class="csp-code-chip">QUERY_THROUGHPUT_MULTIPLIER</span> (1&#8211;3&#215;) aumenta el throughput de consultas en paralelo dentro del mismo warehouse`,
    // MAX_QUERY_PERFORMANCE_LEVEL (1&#8211;10) caps resources allocated to a single query &#8…
    'csp-fact-text.2': `<span class="csp-code-chip">MAX_QUERY_PERFORMANCE_LEVEL</span> (1&#8211;10) limita los recursos asignados a una sola consulta &#8212; evita que una consulta prive de recursos a las demás`,
    // Automatically selected as the default warehouse type. No migration required for new war…
    'csp-fact-text.3': 'Se selecciona automáticamente como el tipo de warehouse predeterminado. No se requiere migración para los warehouses nuevos.',
    // Ideal for mixed BI + ad-hoc workloads where query complexity varies widely.
    'csp-fact-text.4': 'Ideal para cargas mixtas de BI + ad-hoc donde la complejidad de las consultas varía mucho.',
    // Upgrade from Gen1: check with SHOW WAREHOUSES — the type column shows generation. Recre…
    'csp-fact-text.5': `Actualización desde Gen1: verifica con <span class="csp-code-chip">SHOW WAREHOUSES</span> — la columna <code style="font-family:monospace;font-size:10px;">type</code> muestra la generación. Recrea los warehouses existentes para obtener Gen2. Todos los warehouses nuevos son Gen2 de forma predeterminada.`,
    // Serverless Offload
    'csp-card-tag.2': 'Descarga serverless',
    // Query Acceleration Service
    'csp-card-title.2': 'Query Acceleration Service',
    // Offloads large scan portions to serverless compute on demand
    'csp-card-sub.2': 'Descarga porciones grandes de escaneo a cómputo serverless bajo demanda',
    // Large scans offloaded to Snowflake-managed serverless compute — warehouse stays availab…
    'csp-fact-text.6': 'Los escaneos grandes se descargan a cómputo serverless administrado por Snowflake — el warehouse permanece disponible para otras consultas',
    // QUERY_ACCELERATION_MAX_SCALE_FACTOR caps how many serverless credits a query can consum…
    'csp-fact-text.7': `<span class="csp-code-chip">QUERY_ACCELERATION_MAX_SCALE_FACTOR</span> limita cuántos créditos serverless puede consumir una consulta (predeterminado: 8)`,
    // Eligible queries automatically detected — no per-query configuration. Billed per QAS cr…
    'csp-fact-text.8': 'Las consultas elegibles se detectan automáticamente — sin configuración por consulta. Se factura por crédito-segundo de QAS además de los créditos del warehouse.',
    // Best for: dashboards with unpredictable large scan queries, exploratory analytics, long…
    'csp-fact-text.9': 'Ideal para: paneles con consultas de escaneo grande impredecibles, analítica exploratoria y patrones de consulta de cola larga.',
    // Snowpark-Optimized
    'csp-card-title.3': 'Snowpark-Optimized',
    // 16× memory-to-compute ratio for memory-intensive workloads
    'csp-card-sub.3': 'Relación memoria-cómputo de 16× para cargas de trabajo intensivas en memoria',
    // Standard warehouses have a fixed compute-to-memory ratio. Snowpark-Optimized provides 1…
    'csp-fact-text.10': `Los warehouses Standard tienen una relación fija de cómputo a memoria. Snowpark-Optimized ofrece <strong>16&#215; más memoria por nodo</strong> &#8212; algo crítico para el entrenamiento de modelos de ML.`,
    // Created with WAREHOUSE_TYPE = SNOWPARK-OPTIMIZED
    'csp-fact-text.11': `Se crea con <span class="csp-code-chip">WAREHOUSE_TYPE = SNOWPARK-OPTIMIZED</span>`,
    // Required for: PyTorch / XGBoost training on large datasets, heavy Snowpark Python UDFs,…
    'csp-fact-text.12': 'Necesario para: entrenamiento con PyTorch / XGBoost sobre conjuntos de datos grandes, UDFs pesadas de Snowpark Python e ingeniería de características de ML con objetos grandes en memoria.',
    // Separate from standard warehouses — dedicate one warehouse to ML workloads, keep BI on …
    'csp-fact-text.13': 'Independiente de los warehouses estándar — dedica un warehouse a las cargas de ML y mantén el BI en los estándar.',
    // © 2026 Snowflake Inc. All Rights Reserved
    'span': '© 2026 Snowflake Inc. Todos los derechos reservados',
  },
});
