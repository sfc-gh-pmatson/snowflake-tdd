// ─────────────────────────────────────────────────────────────────────────
// Spanish (es) — horizon-lineage
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
  slug: 'horizon-lineage',

  page: {
    // Governance
    'slide-tag': 'Gobernanza',
    // Lineage
    'nav-label': 'Linaje',
    // Data Lineage
    's6-header': 'Linaje de datos',
    // Track every transformation from source to destination — column-level, across Snowflake …
    's6-sub': 'Rastree cada transformación desde el origen hasta el destino — a nivel de columna, en Snowflake y en sistemas externos.',
    // Horizon Catalog · Monitor
    'hsp-eyebrow': 'Horizon Catalog · Monitoreo',
    // Trace data fromsource to answer
    'hsp-title': `Rastree los datos desde<br>el origen hasta la respuesta`,
    // Column-level lineage across Snowflake, dbt, Tableau, Power BI, and external databases —…
    'hsp-sub': 'Linaje a nivel de columna en Snowflake, dbt, Tableau, Power BI y bases de datos externas — automático, sin curación manual.',
    // Column-Level Lineage
    'hsp-feature-title.1': 'Linaje a nivel de columna',
    // Track every transformation from source to destination at the column level — across tabl…
    'hsp-feature-body.1': 'Rastree cada transformación desde el origen hasta el destino a nivel de columna — en tablas, vistas, tablas dinámicas, tareas y bases de datos externas como Tableau, Power BI y dbt.',
    // Popularity & Usage Signals
    'hsp-feature-title.2': 'Señales de popularidad & uso',
    // See query frequency, active users, and join patterns alongside lineage. Rank data asset…
    'hsp-feature-body.2': 'Vea la frecuencia de consultas, los usuarios activos y los patrones de unión junto con el linaje. Clasifique los activos de datos por popularidad para identificar qué tablas son las más confiables y las más usadas.',
    // AI Answer Traceability
    'hsp-feature-title.3': 'Trazabilidad de las respuestas de IA',
    // Every AI-generated answer can be traced back to the source data through lineage. Agents…
    'hsp-feature-body.3': 'Cada respuesta generada por IA se puede rastrear hasta los datos de origen mediante el linaje. Los agentes heredan el mismo grafo de linaje que las consultas SQL — sin necesidad de un seguimiento aparte.',
  },
});
