// ─────────────────────────────────────────────────────────────────────────
// Spanish (es) — cpu-gpu
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
  slug: 'cpu-gpu',

  page: {
    // CPU & GPU Compute
    'nav-label': 'Cómputo CPU & GPU',
    // Compute
    'slide-tag.1': 'Cómputo',
    // Virtual Warehouses & Compute Pools
    'slide-tag.2': 'Virtual warehouses & compute pools',
    // CPU & GPU Compute
    's6-header': 'Cómputo CPU & GPU',
    // Virtual Warehouses for SQL workloads. GPU Compute Pools for ML training, inference, and…
    's6-sub': 'Virtual warehouses para cargas de trabajo SQL. Compute pools de GPU para entrenamiento de ML, inferencia y servicios en contenedores.',
    // CPU — Virtual Warehouses
    'cg-section-label.1': 'CPU — virtual warehouses',
    // Warehouse Sizing
    'cg-card-label.1': 'Dimensionamiento de warehouses',
    // XS to 6XL — each size doubles credits/hr and compute. Multi-cluster scales for concurre…
    'cg-card-desc.1': 'De XS a 6XL — cada tamaño duplica los créditos/hora y el cómputo. El multi-cluster escala para la concurrencia, no para el tamaño de la consulta.',
    // Multi-Cluster (MCW)
    'cg-card-label.2': 'Multi-cluster (MCW)',
    // Horizontally scale for high concurrency. Snowflake spins up additional clusters when qu…
    'cg-card-desc.2': 'Escala horizontalmente para alta concurrencia. Snowflake activa clústeres adicionales cuando la profundidad de la cola supera el umbral.',
    // Serverless Compute
    'cg-card-label.3': 'Cómputo serverless',
    // Snowflake auto-sizes for tasks, pipelines, and maintenance operations — no warehouse to…
    'cg-card-desc.3': 'Snowflake dimensiona automáticamente para tasks, pipelines y operaciones de mantenimiento — sin warehouse que administrar o aprovisionar por adelantado.',
    // GPU — Snowpark Container Services
    'cg-section-label.2': 'GPU — Snowpark Container Services',
    // GPU Compute Pools
    'cg-card-label.4': 'Compute pools de GPU',
    // NVIDIA A10G cards (GPU_NV_XS/S/M/L) for ML inference and training. Persistent container…
    'cg-card-desc.4': 'Tarjetas NVIDIA A10G (GPU_NV_XS/S/M/L) para inferencia y entrenamiento de ML. Servicios en contenedores persistentes con runtimes personalizados.',
    // ML Model Serving
    'cg-card-label.5': 'Servicio de modelos de ML',
    // Deploy custom models as low-latency service endpoints inside Snowflake. Call from SQL v…
    'cg-card-desc.5': 'Despliega modelos personalizados como endpoints de servicio de baja latencia dentro de Snowflake. Se invocan desde SQL mediante funciones de servicio.',
    // Snowpark-Optimized
    'cg-card-label.6': 'Snowpark-Optimized',
    // 16× more memory per node vs standard warehouses. Required for ML training, heavy Python…
    'cg-card-desc.6': '16× más memoria por nodo frente a los warehouses estándar. Requerido para entrenamiento de ML, UDFs de Python intensivas y cargas de trabajo grandes en memoria.',
    // -- Select a card above to explore CPU and GPU compute options
    'cg-panel-code': '-- Selecciona una tarjeta arriba para explorar las opciones de cómputo CPU y GPU',
    // CPU & GPU Compute
    'h4': 'Cómputo CPU & GPU',
    // Click any card above to see SQL examples and explanations for Snowflake compute options.
    'p.1': 'Haz clic en cualquier tarjeta de arriba para ver ejemplos de SQL y explicaciones de las opciones de cómputo de Snowflake.',
    // CPU (Virtual Warehouses) handle all SQL queries and transformations. GPU (SPCS Compute …
    'p.2': `<strong>CPU (virtual warehouses)</strong> atiende todas las consultas y transformaciones SQL. <strong>GPU (compute pools de SPCS)</strong> ejecuta cargas de trabajo en contenedores — entrenamiento de ML, APIs de inferencia y runtimes personalizados.`,
  },
});
