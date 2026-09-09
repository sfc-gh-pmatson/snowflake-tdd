// ─────────────────────────────────────────────────────────────────────────
// Spanish (es) — compute-scaling
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
  slug: 'compute-scaling',

  page: {
    // Compute
    'slide-tag': 'Cómputo',
    // Warehouse Scaling
    'nav-label': 'Escalado de warehouses',
    // Warehouse Scaling
    's6-header': 'Escalado de warehouses',
    // Three levers to match compute to any workload.
    's6-sub': 'Tres palancas para ajustar el cómputo a cualquier carga de trabajo.',
    // Scale Across
    'csc-tab.1': 'Escalado transversal',
    // Scale Up
    'csc-tab.2': 'Escalado vertical',
    // Scale Out
    'csc-tab.3': 'Escalado horizontal',
    // Scale Across
    'csc-eyebrow.1': 'Escalado transversal',
    // Separate warehouses,isolated workloads
    'csc-title.1': `Warehouses separados,<br>cargas de trabajo aisladas`,
    // Run different workloads on dedicated warehouses — independent sizing, cost tracking, an…
    'csc-sub.1': 'Ejecute distintas cargas de trabajo en warehouses dedicados — dimensionamiento, seguimiento de costos y suspensión independientes por equipo.',
    // No Resource Contention
    'csc-feature-title.1': 'Sin contención de recursos',
    // BI queries never compete with ETL loads or ML training. Each warehouse is a fully isola…
    'csc-feature-body.1': 'Las consultas de BI nunca compiten con las cargas de ETL ni con el entrenamiento de ML. Cada warehouse es un clúster de cómputo totalmente aislado sobre el mismo almacenamiento compartido.',
    // Independent Controls
    'csc-feature-title.2': 'Controles independientes',
    // Each warehouse has its own size, auto-suspend config, resource monitor, and RBAC. Suspe…
    'csc-feature-body.2': 'Cada warehouse tiene su propio tamaño, configuración de auto-suspend, monitor de recursos y RBAC. Suspenda el ETL durante la noche sin afectar BI.',
    // Chargeback Ready
    'csc-feature-title.3': 'Listo para chargeback',
    // Attribute credits to teams by querying QUERY_HISTORY per warehouse. Pair with resource …
    'csc-feature-body.3': 'Atribuya créditos a los equipos consultando QUERY_HISTORY por warehouse. Combínelo con monitores de recursos para fijar límites de presupuesto por equipo.',
    // -- Dedicated warehouse per workload CREATE WAREHOUSE bi_wh &nbsp;&nbsp;WAREHOUSE_SIZE =…
    'div.1': `<span class="code-comment">-- Warehouse dedicado por carga de trabajo</span><br> <span class="code-kw">CREATE WAREHOUSE</span> <span class="code-id">bi_wh</span><br> &nbsp;&nbsp;<span class="code-fn">WAREHOUSE_SIZE</span> <span class="code-punc">=</span> <span class="code-str">'MEDIUM'</span><br> &nbsp;&nbsp;<span class="code-fn">AUTO_SUSPEND</span> <span class="code-punc">=</span> <span class="code-num">300</span><span class="code-punc">;</span><br> <br> <span class="code-kw">CREATE WAREHOUSE</span> <span class="code-id">etl_wh</span><br> &nbsp;&nbsp;<span class="code-fn">WAREHOUSE_SIZE</span> <span class="code-punc">=</span> <span class="code-str">'XLARGE'</span><br> &nbsp;&nbsp;<span class="code-fn">AUTO_SUSPEND</span> <span class="code-punc">=</span> <span class="code-num">60</span><span class="code-punc">;</span>`,
    // Scale Up
    'csc-eyebrow.2': 'Escalado vertical',
    // Bigger T-shirt,faster queries
    'csc-title.2': `Talla más grande,<br>consultas más rápidas`,
    // Match warehouse size to query complexity — not to user count.
    'csc-sub.2': 'Ajuste el tamaño del warehouse a la complejidad de la consulta — no al número de usuarios.',
    // Same Cost. 8× Faster.
    'csc-feature-title.4': 'El mismo costo. 8× más rápido.',
    // Doubling the servers halves the runtime &#8212; and you pay per server, per second. Go …
    'csc-feature-body.4': `Duplicar los servidores reduce a la mitad el tiempo de ejecución &#8212; y se paga <em>por servidor, por segundo</em>. Pase de XS a L (8&#215; servidores) y la consulta se ejecuta 8&#215; más rápido con <strong>exactamente el mismo costo en créditos</strong>.`,
    // Scale Up & Down Instantly
    'csc-feature-title.5': 'Escale hacia arriba & hacia abajo al instante',
    // Resize a running warehouse with a single SQL statement — no downtime, no migration. Sca…
    'csc-feature-body.5': 'Redimensione un warehouse en ejecución con una sola instrucción SQL — sin tiempo de inactividad, sin migración. Escale hacia arriba para un trabajo por lotes pesado y vuelva a reducirlo inmediatamente después.',
    // -- Resize takes effect on next query ALTER WAREHOUSE my_wh SET &nbsp;&nbsp;WAREHOUSE_SI…
    'div.2': `<span class="code-comment">-- El cambio de tamaño aplica en la siguiente consulta</span><br> <span class="code-kw">ALTER WAREHOUSE</span> <span class="code-id">my_wh</span> <span class="code-kw">SET</span><br> &nbsp;&nbsp;<span class="code-fn">WAREHOUSE_SIZE</span> <span class="code-punc">=</span> <span class="code-str">'LARGE'</span><span class="code-punc">;</span><br> <br> <span class="code-comment">-- Reducir de nuevo al terminar</span><br> <span class="code-kw">ALTER WAREHOUSE</span> <span class="code-id">my_wh</span> <span class="code-kw">SET</span><br> &nbsp;&nbsp;<span class="code-fn">WAREHOUSE_SIZE</span> <span class="code-punc">=</span> <span class="code-str">'SMALL'</span><span class="code-punc">;</span>`,
    // Scale Out
    'csc-eyebrow.3': 'Escalado horizontal',
    // More clusters,no queue
    'csc-title.3': `Más clústeres,<br>sin cola`,
    // Add capacity for concurrency — through multi-cluster warehouses or adaptive throughput …
    'csc-sub.3': 'Agregue capacidad para la concurrencia — con warehouses multiclúster o escalado adaptativo de throughput.',
    // Multi-Cluster Warehouses
    'csc-feature-title.6': 'Warehouses multiclúster',
    // When users queue, MCW spins up identical clusters automatically. Each cluster handles i…
    'csc-feature-body.6': 'Cuando los usuarios hacen cola, MCW inicia clústeres idénticos automáticamente. Cada clúster atiende su propia cola de consultas. El modo AUTO escala de 1–10 clústeres y suspende los excedentes cuando están inactivos.',
    // Adaptive Warehouses
    'csc-feature-title.7': 'Warehouses adaptativos',
    // Gen2 warehouses auto-tune throughput for mixed workloads using QUERY_THROUGHPUT_MULTIPL…
    'csc-feature-body.7': `Los warehouses Gen2 ajustan automáticamente el throughput para cargas de trabajo mixtas usando <code style="font-size:10px;font-family:monospace;">QUERY_THROUGHPUT_MULTIPLIER</code> (1&#8211;3&#215;) &#8212; sin agregar clústeres ni redimensionar.`,
    // See Specialized Compute →
    'csc-adaptive-tag': 'Ver Cómputo especializado →',
    // Credits
    'csc-feature-title.8': 'Créditos',
    // Each active MCW cluster bills at the warehouse T-shirt rate. Adaptive scaling adds no e…
    'csc-feature-body.8': 'Cada clúster MCW activo se factura a la tarifa de la talla del warehouse. El escalado adaptativo no agrega costo adicional en créditos — está integrado en Gen2.',
    // -- Create a multi-cluster warehouse CREATE OR REPLACE WAREHOUSE analytics_wh &nbsp;&nbs…
    'div.3': `<span class="code-comment">-- Crear un warehouse multiclúster</span><br> <span class="code-kw">CREATE OR REPLACE WAREHOUSE</span> <span class="code-id">analytics_wh</span><br> &nbsp;&nbsp;<span class="code-fn">WAREHOUSE_SIZE</span> <span class="code-punc">=</span> <span class="code-str">'MEDIUM'</span><br> &nbsp;&nbsp;<span class="code-fn">MIN_CLUSTER_COUNT</span> <span class="code-punc">=</span> <span class="code-num">1</span><br> &nbsp;&nbsp;<span class="code-fn">MAX_CLUSTER_COUNT</span> <span class="code-punc">=</span> <span class="code-num">3</span><br> &nbsp;&nbsp;<span class="code-fn">AUTO_SUSPEND</span> <span class="code-punc">=</span> <span class="code-num">60</span><br> &nbsp;&nbsp;<span class="code-fn">SCALING_POLICY</span> <span class="code-punc">=</span> <span class="code-str">'ECONOMY'</span><span class="code-punc">;</span>`,
    // Workload Isolation — One Storage, Many Warehouses
    'div.4': 'Aislamiento de cargas de trabajo — Un almacenamiento, muchos warehouses',
    // BI & Reporting
    'csc-iso-wh-tag.1': 'BI & Reportes',
    // Size: M · MCW 1–3
    'csc-iso-wh-meta.1': 'Tamaño: M  ·  MCW 1–3',
    // Data Engineering
    'csc-iso-wh-tag.2': 'Ingeniería de datos',
    // Size: XL · Batch
    'csc-iso-wh-meta.2': 'Tamaño: XL  ·  Por lotes',
    // Snowflake Storage
    'csc-mcw-storage-title': 'Almacenamiento de Snowflake',
    // Same tables — all warehouses share the same data
    'csc-mcw-storage-sub': 'Las mismas tablas — todos los warehouses comparten los mismos datos',
    // Type: Snowpark-Opt · Size: L
    'csc-iso-wh-meta.3': 'Tipo: Snowpark-Opt  ·  Tamaño: L',
    // Ad-hoc
    'csc-iso-wh-tag.4': 'Ad-hoc',
    // Size: S · Budget capped
    'csc-iso-wh-meta.4': 'Tamaño: S  ·  Presupuesto limitado',
    // © 2026 Snowflake Inc. All Rights Reserved
    'span': '© 2026 Snowflake Inc. Todos los derechos reservados',
  },
});
