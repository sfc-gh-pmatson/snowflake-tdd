// ─────────────────────────────────────────────────────────────────────────
// Spanish (es) — horizon-classification
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
  slug: 'horizon-classification',

  page: {
    // Governance
    'slide-tag': 'Gobernanza',
    // Classification
    'nav-label': 'Clasificación',
    // Data Classification
    's6-header': 'Clasificación de datos',
    // Automatically detect PII, PHI, and sensitive data using ML classifiers — no manual colu…
    's6-sub': 'Detecta automáticamente PII, PHI y datos sensibles con clasificadores de ML — sin revisión manual de columnas.',
    // Horizon Catalog · Classification
    'hsp-eyebrow': 'Horizon Catalog · Clasificación',
    // Auto-Classification
    'hsp-feature-title.1': 'Clasificación automática',
    // Snowflake ML classifiers analyze column names, data types, and sample values to detect …
    'hsp-feature-body.1': 'Los clasificadores de ML de Snowflake analizan nombres de columnas, tipos de datos y valores de muestra para detectar PII (correos, números de seguro social, teléfonos), PHI (números de historia clínica) y datos financieros. Las etiquetas del sistema se aplican automáticamente.',
    // Custom Classifiers
    'hsp-feature-title.2': 'Clasificadores personalizados',
    // Create domain-specific classifiers using CREATE PRIVACY CATEGORY and CREATE SEMANTIC CA…
    'hsp-feature-body.2': `Permite crear clasificadores específicos del dominio con <code style="font-size:10px;font-family:monospace;">CREATE PRIVACY CATEGORY</code> y <code style="font-size:10px;font-family:monospace;">CREATE SEMANTIC CATEGORY</code> para detectar patrones de datos sensibles propios del negocio.`,
    // On-Demand & Scheduled
    'hsp-feature-title.3': 'Bajo demanda & programada',
    // Run SYSTEM$CLASSIFY on any table or schema on-demand. Schedule classification to run au…
    'hsp-feature-body.3': `Permite ejecutar <code style="font-size:10px;font-family:monospace;">SYSTEM$CLASSIFY</code> bajo demanda en cualquier tabla o esquema. La clasificación se puede programar para ejecutarse automáticamente a medida que se agregan tablas y columnas.`,
    // -- Classify a single table on demand CALL SYSTEM$CLASSIFY( &nbsp;&nbsp;'MY_DB.SCHEMA.CU…
    'hsp-code': `<span class="code-comment">-- Clasificar una sola tabla bajo demanda</span><br> <span class="code-kw">CALL</span> <span class="code-fn">SYSTEM$CLASSIFY</span><span class="code-punc">(</span><br> &nbsp;&nbsp;<span class="code-str">'MY_DB.SCHEMA.CUSTOMERS'</span><span class="code-punc">,</span><br> &nbsp;&nbsp;<span class="code-punc">{</span><span class="code-str">'auto_tag'</span><span class="code-punc">:</span> <span class="code-kw">true</span><span class="code-punc">}</span><br> <span class="code-punc">)</span><span class="code-punc">;</span><br> <br> <span class="code-comment">-- Crear una categoría de privacidad personalizada</span><br> <span class="code-kw">CREATE PRIVACY CATEGORY</span> <span class="code-id">internal_id</span><br> &nbsp;&nbsp;<span class="code-kw">COMMENT</span> <span class="code-punc">=</span> <span class="code-str">'Internal employee IDs'</span><span class="code-punc">;</span><br> <br> <span class="code-comment">-- Ver los resultados de la clasificación</span><br> <span class="code-kw">SELECT</span> <span class="code-punc">*</span> <span class="code-kw">FROM</span><br> &nbsp;&nbsp;<span class="code-id">SNOWFLAKE.ACCOUNT_USAGE.DATA_CLASSIFICATION_LATEST</span><br> <span class="code-kw">WHERE</span> <span class="code-id">table_name</span> <span class="code-punc">=</span> <span class="code-str">'CUSTOMERS'</span><span class="code-punc">;</span>`,
    // © 2026 Snowflake Inc. All Rights Reserved
    'span': '© 2026 Snowflake Inc. Todos los derechos reservados',
  },
});
