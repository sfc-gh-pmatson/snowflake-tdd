// ─────────────────────────────────────────────────────────────────────────
// Spanish (es) — horizon-tagging
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
  slug: 'horizon-tagging',

  page: {
    // Governance
    'slide-tag': 'Gobernanza',
    // Tagging
    'nav-label': 'Etiquetado',
    // Tagging
    's6-header': 'Etiquetado',
    // Tag data assets once — policies propagate automatically to every tagged column, everywh…
    's6-sub': 'Etiqueta los activos de datos una vez — las políticas se propagan automáticamente a cada columna etiquetada, en todas partes.',
    // Horizon Catalog · Tagging
    'hsp-eyebrow': 'Horizon Catalog · Etiquetado',
    // System & Custom Tags
    'hsp-feature-title.1': 'Etiquetas del sistema & personalizadas',
    // Snowflake provides built-in system tags (e.g. SNOWFLAKE.CORE.SENSITIVITY) and lets you …
    'hsp-feature-body.1': `Snowflake incluye etiquetas de sistema integradas (por ejemplo <code style="font-size:10px;font-family:monospace;">SNOWFLAKE.CORE.SENSITIVITY</code>) y permite crear etiquetas personalizadas con <code style="font-size:10px;font-family:monospace;">CREATE TAG</code> para una taxonomía de clasificación propia.`,
    // Tag Propagation
    'hsp-feature-title.2': 'Propagación de etiquetas',
    // Tags set on a table inherit to all columns by default. Column tags propagate to query r…
    'hsp-feature-body.2': 'Las etiquetas aplicadas a una tabla se heredan a todas sus columnas de forma predeterminada. Las etiquetas de columna se propagan a los resultados de las consultas. Las etiquetas fluyen a través de vistas y uniones — la gobernanza sigue a los datos, no solo a los objetos.',
    // Policy Inheritance
    'hsp-feature-title.3': 'Herencia de políticas',
    // Masking and row-access policies can be bound to a tag rather than a column. Tag a colum…
    'hsp-feature-body.3': 'Las políticas de enmascaramiento y de acceso a filas se pueden vincular a una etiqueta en lugar de a una columna. Etiqueta una columna como “PII” y la política de enmascaramiento se aplica automáticamente — a cada columna con esa etiqueta, en todas partes.',
    // -- Create a custom sensitivity tag CREATE TAG governance.tags.pii &nbsp;&nbsp;ALLOWED_V…
    'hsp-code': `<span class="code-comment">-- Crear una etiqueta de sensibilidad personalizada</span><br> <span class="code-kw">CREATE</span> <span class="code-fn">TAG</span> <span class="code-id">governance.tags.pii</span><br> &nbsp;&nbsp;<span class="code-fn">ALLOWED_VALUES</span> <span class="code-str">'email'</span><span class="code-punc">,</span> <span class="code-str">'ssn'</span><span class="code-punc">,</span> <span class="code-str">'phone'</span><span class="code-punc">;</span><br> <br> <span class="code-comment">-- Aplicar la etiqueta a una columna</span><br> <span class="code-kw">ALTER</span> <span class="code-id">TABLE</span> <span class="code-id">customers</span><br> &nbsp;&nbsp;<span class="code-fn">MODIFY COLUMN</span> <span class="code-id">email</span><br> &nbsp;&nbsp;<span class="code-kw">SET TAG</span> <span class="code-id">governance.tags.pii</span> <span class="code-punc">=</span> <span class="code-str">'email'</span><span class="code-punc">;</span><br> <br> <span class="code-comment">-- Vincular la política de enmascaramiento con una etiqueta (política basada en etiquetas)</span><br> <span class="code-kw">ALTER</span> <span class="code-fn">MASKING POLICY</span> <span class="code-id">mask_pii</span><br> &nbsp;&nbsp;<span class="code-kw">SET TAG</span> <span class="code-id">governance.tags.pii</span><span class="code-punc">;</span>`,
    // © 2026 Snowflake Inc. All Rights Reserved
    'span': '© 2026 Snowflake Inc. Todos los derechos reservados',
  },
});
