// ─────────────────────────────────────────────────────────────────────────
// Spanish (es) — horizon-search
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
  slug: 'horizon-search',

  page: {
    // Governance
    'slide-tag': 'Gobernanza',
    // Search
    'nav-label': 'Búsqueda',
    // Search & Discovery
    's6-header': 'Búsqueda & descubrimiento',
    // Find any data asset in plain language — across Snowflake, Iceberg, and BI sources.
    's6-sub': 'Encuentra cualquier activo de datos en lenguaje natural — en Snowflake, Iceberg y fuentes de BI.',
    // Horizon Catalog · Search
    'hsp-eyebrow': 'Horizon Catalog · búsqueda',
    // Find anything,instantly
    'hsp-title': `Encuentra lo que sea,<br>al instante`,
    // Search tables, columns, tags, and documentation in plain language — across Snowflake an…
    'hsp-sub': 'Busca tablas, columnas, etiquetas y documentación en lenguaje natural — en Snowflake y en catálogos externos.',
    // Universal Search
    'hsp-feature-title.1': 'Búsqueda universal',
    // Search tables, views, columns, schemas, tags, and documentation. Results show popularit…
    'hsp-feature-body.1': 'Busca tablas, vistas, columnas, esquemas, etiquetas y documentación. Los resultados muestran popularidad, propietario, etiquetas y frescura — todo lo necesario para evaluar la confianza antes de usar los datos.',
    // Cross-Catalog
    'hsp-feature-title.2': 'Multicatálogo',
    // Search spans Snowflake-native objects AND external Iceberg catalogs, BI sources (Tablea…
    'hsp-feature-body.2': 'La búsqueda abarca objetos nativos de Snowflake Y catálogos Iceberg externos, fuentes de BI (Tableau, Power BI) y bases de datos conectadas. Una sola interfaz de búsqueda para todo el patrimonio de datos.',
    // AI-Powered Discovery
    'hsp-feature-title.3': 'Descubrimiento potenciado por IA',
    // Ask Snowflake CoCo in plain language. Horizon Catalog converts intent into asset discov…
    'hsp-feature-body.3': 'Pregunta a Snowflake CoCo en lenguaje natural. Horizon Catalog convierte la intención en descubrimiento de activos, revelando las tablas adecuadas y creando modelos semánticos a partir de un prompt sencillo.',
    // -- Search for a table using SQL (ACCOUNT_USAGE) SELECT table_name, table_schema, commen…
    'hsp-code': `<span class="code-comment">-- Buscar una tabla usando SQL (ACCOUNT_USAGE)</span><br> <span class="code-kw">SELECT</span> <span class="code-id">table_name</span><span class="code-punc">,</span> <span class="code-id">table_schema</span><span class="code-punc">,</span> <span class="code-id">comment</span><br> <span class="code-kw">FROM</span> <span class="code-id">SNOWFLAKE.ACCOUNT_USAGE.TABLES</span><br> <span class="code-kw">WHERE</span> <span class="code-fn">SEARCH</span><span class="code-punc">(</span><span class="code-id">comment</span><span class="code-punc">,</span> <span class="code-str">'customer revenue'</span><span class="code-punc">)</span><br> &nbsp;&nbsp;<span class="code-kw">AND</span> <span class="code-id">deleted</span> <span class="code-kw">IS NULL</span><span class="code-punc">;</span><br> <br> <span class="code-comment">-- Búsqueda programática en el catálogo mediante CORTEX</span><br> <span class="code-kw">SELECT</span> <span class="code-fn">SNOWFLAKE.CORTEX.SEARCH_CATALOG</span><span class="code-punc">(</span><br> &nbsp;&nbsp;<span class="code-str">'monthly revenue by region'</span><br> <span class="code-punc">)</span><span class="code-punc">;</span>`,
    // © 2026 Snowflake Inc. All Rights Reserved
    'span': '© 2026 Snowflake Inc. Todos los derechos reservados',
  },
});
