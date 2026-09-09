// ─────────────────────────────────────────────────────────────────────────
// Spanish (es) — gpu
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
  slug: 'gpu',

  page: {
    // Compute
    'slide-tag': 'Cómputo',
    // GPU Compute
    'nav-label': 'Cómputo con GPU',
    // GPU Compute
    's6-header': 'Cómputo con GPU',
    // ML training, inference, fine-tuning, and GPU notebooks — inside the Snowflake security …
    's6-sub': 'Entrenamiento de ML, inferencia, ajuste fino y notebooks con GPU — dentro del perímetro de seguridad de Snowflake. Sin necesidad de mover datos.',
    // GPU Compute Pools
    'gpu-card-label.1': 'Pools de cómputo con GPU',
    // NVIDIA A10G nodes (XS → L) for containerized ML workloads. Your model, your runtime, in…
    'gpu-card-desc.1': 'Nodos NVIDIA A10G (XS → L) para cargas de ML en contenedores. Tu modelo, tu runtime, dentro de Snowflake.',
    // ML Model Serving
    'gpu-card-label.2': 'Servicio de modelos de ML',
    // Deploy custom models as persistent SPCS service endpoints. Call from SQL via service fu…
    'gpu-card-desc.2': 'Despliega modelos personalizados como endpoints persistentes de servicio SPCS. Se invocan desde SQL mediante funciones de servicio — sin claves de API y sin egreso.',
    // Cortex Fine-Tuning
    'gpu-card-label.3': 'Ajuste fino con Cortex',
    // Fully managed LLM fine-tuning on your own data. Provide a training table, pick a base m…
    'gpu-card-desc.3': 'Ajuste fino de LLM totalmente administrado sobre datos propios. Proporciona una tabla de entrenamiento, elige un modelo base y llama a FINETUNE() — sin operar GPU.',
    // Notebook Container Runtime
    'gpu-card-label.4': 'Runtime de contenedores para notebooks',
    // Attach GPU compute pools to Snowflake Notebooks. Interactive ML development with direct…
    'gpu-card-desc.4': 'Conecta pools de cómputo con GPU a Snowflake Notebooks. Desarrollo interactivo de ML con acceso directo a las tablas de Snowflake — sin exportar datos.',
    // Distributed Training
    'gpu-card-label.5': 'Entrenamiento distribuido',
    // Multi-node GPU training via Snowpark ML MLJob. Scale PyTorch and XGBoost training acros…
    'gpu-card-desc.5': 'Entrenamiento con GPU en múltiples nodos mediante MLJob de Snowpark ML. Escala el entrenamiento de PyTorch y XGBoost en varios nodos con GPU sin administrar infraestructura.',
    // Snowpark-Optimized * CPU
    'gpu-card-label.6': `Snowpark-Optimized <span style="font-size:0.7em;color:rgba(255,255,255,.4);font-weight:400;">* CPU</span>`,
    // 16× more memory per node vs standard warehouses. Heavy Python UDFs, large in-memory ML …
    'gpu-card-desc.6': '16× más memoria por nodo que los warehouses estándar. UDFs pesadas de Python, ML de gran tamaño en memoria — basado en CPU, pero es el puente previo a SPCS con GPU completa.',
    // -- Select a card above to explore GPU compute options
    'gpu-panel-code': '-- Selecciona una tarjeta arriba para explorar las opciones de cómputo con GPU',
    // GPU Compute on Snowflake
    'h4': 'Cómputo con GPU en Snowflake',
    // Click any card above to see SQL examples and explanations.
    'p.1': 'Haz clic en cualquier tarjeta de arriba para ver ejemplos de SQL y explicaciones.',
    // Snowflake offers two GPU surfaces: fully managed (Cortex Fine-Tuning, Notebook Containe…
    'p.2': `Snowflake ofrece dos superficies de GPU: <strong>totalmente administrada</strong> (ajuste fino con Cortex, runtime de contenedores para notebooks), donde Snowflake se encarga de la GPU, y <strong>autoadministrada</strong> (pools de GPU en SPCS), donde el modelo propio se empaqueta en contenedores y se despliega.`,
  },
});
