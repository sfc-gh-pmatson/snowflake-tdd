// ─────────────────────────────────────────────────────────────────────────
// Spanish (es) — horizon-dmf
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
  slug: 'horizon-dmf',

  page: {
    // Governance
    'slide-tag': 'Gobernanza',
    // Data Quality (DMFs)
    'nav-label': 'Calidad de datos (DMF)',
    // Data Metric Functions
    's6-header': 'Funciones de métricas de datos',
    // Measure, monitor, and alert on data quality — built in, scheduled, no external tools.
    's6-sub': 'Mida, monitoree y alerte sobre la calidad de los datos — integrado, programado, sin herramientas externas.',
    // Horizon Catalog · Monitor
    'hsp-eyebrow': 'Horizon Catalog · Monitoreo',
    // Measure quality,automatically
    'hsp-title': `Mida la calidad,<br>automáticamente`,
    // Attach freshness, null, uniqueness, and custom quality checks to any table — on a sched…
    'hsp-sub': 'Adjunte verificaciones de frescura, nulos, unicidad y calidad personalizadas a cualquier tabla — de forma programada, dentro de Snowflake.',
    // Built-in Metric Functions
    'hsp-feature-title.1': 'Funciones de métricas integradas',
    // Snowflake ships ready-to-use DMFs: FRESHNESS, NULL_COUNT, UNIQUE_COUNT, ROW_COUNT, DUPL…
    'hsp-feature-body.1': `Snowflake incluye DMF listas para usar: <code style="font-family:monospace;font-size:10px;">FRESHNESS</code>, <code style="font-family:monospace;font-size:10px;">NULL_COUNT</code>, <code style="font-family:monospace;font-size:10px;">UNIQUE_COUNT</code>, <code style="font-family:monospace;font-size:10px;">ROW_COUNT</code>, <code style="font-family:monospace;font-size:10px;">DUPLICATE_COUNT</code>. Adjúntelas a cualquier tabla &#8212; sin necesidad de código personalizado.`,
    // Custom DMFs
    'hsp-feature-title.2': 'DMF personalizadas',
    // Write your own CREATE DATA METRIC FUNCTION in SQL or Python to measure domain-specific …
    'hsp-feature-body.2': `Escriba su propia <code style="font-family:monospace;font-size:10px;">CREATE DATA METRIC FUNCTION</code> en SQL o Python para medir la calidad específica del dominio: integridad referencial, reglas de negocio, validación de formato.`,
    // Scheduled & Alertable
    'hsp-feature-title.3': 'Programables & con alertas',
    // Set a schedule per table. Results land in SNOWFLAKE.LOCAL.DATA_QUALITY_MONITORING_RESUL…
    'hsp-feature-body.3': `Defina una programación por tabla. Los resultados llegan a <code style="font-family:monospace;font-size:10px;">SNOWFLAKE.LOCAL.DATA_QUALITY_MONITORING_RESULTS</code>. Combínelo con Snowflake Alerts para notificar cuando se superen los umbrales.`,
    // -- Attach built-in DMFs to a table ALTER TABLE orders &nbsp;&nbsp;ADD DATA METRIC FUNCT…
    'hsp-code': `<span class="code-comment">-- Adjuntar DMF integradas a una tabla</span><br> <span class="code-kw">ALTER TABLE</span> <span class="code-id">orders</span><br> &nbsp;&nbsp;<span class="code-kw">ADD</span> <span class="code-fn">DATA METRIC FUNCTION</span><br> &nbsp;&nbsp;<span class="code-id">SNOWFLAKE.CORE.NULL_COUNT</span><br> &nbsp;&nbsp;<span class="code-kw">ON</span> <span class="code-punc">(</span><span class="code-id">customer_id</span><span class="code-punc">)</span><span class="code-punc">;</span><br> <br> <span class="code-comment">-- Definir una programación de verificación de calidad (15 min)</span><br> <span class="code-kw">ALTER TABLE</span> <span class="code-id">orders</span><br> &nbsp;&nbsp;<span class="code-kw">SET</span> <span class="code-fn">DATA_METRIC_SCHEDULE</span> <span class="code-punc">=</span> <span class="code-str">'15 MINUTE'</span><span class="code-punc">;</span><br> <br> <span class="code-comment">-- Consultar los resultados</span><br> <span class="code-kw">SELECT</span> <span class="code-id">table_name</span><span class="code-punc">,</span> <span class="code-id">metric_name</span><span class="code-punc">,</span><br> &nbsp;&nbsp;<span class="code-id">value</span><span class="code-punc">,</span> <span class="code-id">measurement_time</span><br> <span class="code-kw">FROM</span><br> &nbsp;&nbsp;<span class="code-id">SNOWFLAKE.LOCAL.DATA_QUALITY_MONITORING_RESULTS</span><br> <span class="code-kw">ORDER BY</span> <span class="code-id">measurement_time</span> <span class="code-kw">DESC</span><span class="code-punc">;</span>`,
    // © 2026 Snowflake Inc. All Rights Reserved
    'span': '© 2026 Snowflake Inc. Todos los derechos reservados',
  },
});
