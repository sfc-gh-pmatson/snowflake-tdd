// ─────────────────────────────────────────────────────────────────────────
// Spanish (es) — sql-analytics
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
  slug: 'sql-analytics',

  page: {
    // Analytics
    'slide.tag': 'Análisis',
    // SQL Analytics
    'nav.label': 'Análisis SQL',
    // SQL Analytics on Snowflake
    'header': 'Análisis SQL en Snowflake',
    // Multi-modal SQL with extensions that don't exist anywhere else. One query for structure…
    'sub': 'SQL multimodal con extensiones que no existen en ningún otro lugar. Una sola consulta para datos estructurados, JSON, geoespaciales y de series temporales.',
    // Snowflake — Analytics Platform
    'eyebrow': 'Snowflake — Plataforma de Análisis',
    // One Platform.Every Data Shape.
    'title': `Una Plataforma.<br>Cada Forma de Datos.`,
    // Query structured, semi-structured, geospatial, and time-series data together — with SQL…
    'lead': 'Consulta datos estructurados, semiestructurados, geoespaciales y de series temporales en conjunto — con extensiones SQL que eliminan clases enteras de subconsultas.',
    // Multi-Modal SQL
    'feature.multimodal.title': 'SQL Multimodal',
    // Structured columns, JSON/VARIANT, GEOGRAPHY, VECTOR — all queryable in a single SELECT.…
    'feature.multimodal.body': 'Columnas estructuradas, JSON/VARIANT, GEOGRAPHY, VECTOR — todo consultable en un solo SELECT. Sin ETL hacia almacenes analíticos separados.',
    // SQL Extensions
    'feature.extensions.title': 'Extensiones SQL',
    // QUALIFY, ASOF JOIN, TIMESERIES clause, H3 hexagonal indexing — constructs that don't ex…
    'feature.extensions.body': 'QUALIFY, ASOF JOIN, la cláusula TIMESERIES, indexación hexagonal H3 — construcciones que no existen en SQL estándar y que resuelven patrones analíticos comunes de forma limpia.',
    // Performance by Default
    'feature.performance.title': 'Rendimiento por Defecto',
    // Result cache, partition pruning, automatic clustering, and search optimization work acr…
    'feature.performance.body': 'Caché de resultados, poda de particiones, clustering automático y optimización de búsqueda funcionan en todos los tipos de datos sin necesidad de hints en las consultas.',
    // Explore in Depth
    'sqa-right-label': 'Explorar en profundidad',
    // Time Series Analytics
    'card.timeseries.title': 'Análisis de Series Temporales',
    // DATE_SPINE, ASOF JOIN, TIMESERIES clause, sliding window aggregations.
    'card.timeseries.desc': 'DATE_SPINE, ASOF JOIN, cláusula TIMESERIES, agregaciones de ventana deslizante.',
    // Geospatial Analytics
    'card.geospatial.title': 'Análisis Geoespacial',
    // GEOGRAPHY, GEOMETRY, 50+ ST_* functions, H3 hexagonal indexing.
    'card.geospatial.desc': 'GEOGRAPHY, GEOMETRY, más de 50 funciones ST_*, indexación hexagonal H3.',
    // Semi-Structured / JSON
    'card.semistructured.title': 'Semiestructurado / JSON',
    // VARIANT type, JSON path syntax, FLATTEN, INFER_SCHEMA.
    'card.semistructured.desc': 'Tipo VARIANT, sintaxis de rutas JSON, FLATTEN, INFER_SCHEMA.',
    // Window Functions & Advanced SQL
    'card.window.title': 'Funciones de Ventana y SQL Avanzado',
    // QUALIFY, ranking, LEAD/LAG, running totals, PIVOT/UNPIVOT.
    'card.window.desc': 'QUALIFY, ranking, LEAD/LAG, totales acumulados, PIVOT/UNPIVOT.',
    // Streamlit in Snowflake
    'card.streamlit.title': 'Streamlit en Snowflake',
    // Build and deploy interactive dashboards directly on your governed data.
    'card.streamlit.desc': 'Crea y despliega paneles interactivos directamente sobre tus datos gobernados.',
    // Snowflake Notebooks
    'card.notebooks.title': 'Snowflake Notebooks',
    // SQL and Python in one governed workspace. Runs on Snowflake compute.
    'card.notebooks.desc': 'SQL y Python en un único espacio de trabajo gobernado. Se ejecuta sobre cómputo de Snowflake.',
  },

  // Translated talk-track notes. A selected personal notes
  // author still takes priority over this.
  notes: `
<h3>Guión de Presentación</h3>
<p>El discurso de análisis SQL de Snowflake no es simplemente "soportamos SQL" — es que puedes consultar columnas estructuradas, cargas JSON, coordenadas geoespaciales y datos de series temporales todo en la misma sentencia SELECT. Además de extensiones propias de Snowflake como QUALIFY, ASOF JOIN e indexación hexagonal H3, que no existen en otras plataformas y que conectan de inmediato con audiencias técnicas.</p>

<h3>Puntos Clave</h3>
<ul>
  <li><strong>Multimodal:</strong> VARIANT (JSON), GEOGRAPHY, VECTOR y tipos estructurados, todos consultables en conjunto.</li>
  <li><strong>Extensiones SQL:</strong> QUALIFY elimina subconsultas. ASOF JOIN realiza alineación temporal. TIMESERIES permite ventanas deslizantes sin sintaxis de marcos compleja.</li>
  <li><strong>Análisis sin copias:</strong> Todas las capacidades operan sobre los mismos datos — sin exportar a una base geoespacial, sin un almacén de series temporales aparte, sin ETL de JSON.</li>
  <li><strong>Streamlit en Snowflake:</strong> Crea y despliega paneles interactivos directamente sobre tus datos de Snowflake, totalmente gobernados.</li>
</ul>

<h3>Preguntas para Hacer</h3>
<ul>
  <li>¿Almacenan hoy datos JSON o de eventos en Snowflake? ¿Cómo consultan las estructuras anidadas?</li>
  <li>¿Tienen datos de ubicación — sedes, direcciones de entrega, coordenadas de sensores — que quieran analizar espacialmente?</li>
  <li>¿Sus analistas construyen consultas de series temporales complejas con muchos CTEs para rellenar huecos o alinear temporalmente?</li>
</ul>`,
});
