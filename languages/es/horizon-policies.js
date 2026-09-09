// ─────────────────────────────────────────────────────────────────────────
// Spanish (es) — horizon-policies
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
  slug: 'horizon-policies',

  page: {
    // Governance
    'slide-tag': 'Gobernanza',
    // Data Protection Policies
    'nav-label': 'Políticas de protección de datos',
    // Data Protection Policies
    's6-header': 'Políticas de protección de datos',
    // Apply masking, filtering, and access controls inline — enforced automatically on every …
    's6-sub': 'Aplica enmascaramiento, filtrado y controles de acceso en línea — se imponen automáticamente en cada consulta.',
    // Masking
    'hpp-tab.1': 'Enmascaramiento',
    // Row Access
    'hpp-tab.2': 'Acceso a filas',
    // Projection
    'hpp-tab.3': 'Proyección',
    // Aggregation
    'hpp-tab.4': 'Agregación',
    // Tokenization
    'hpp-tab.5': 'Tokenización',
    // Column-Level Policy
    'hpp-eyebrow.1': 'Política a nivel de columna',
    // Masking Policies
    'hpp-title.1': 'Políticas de enmascaramiento',
    // Replace sensitive column values with masked equivalents based on the querying role.
    'hpp-sub.1': 'Reemplaza los valores sensibles de una columna por equivalentes enmascarados según el rol que consulta.',
    // Role-Based Masking
    'hpp-feature-title.1': 'Enmascaramiento basado en roles',
    // Define masking logic in SQL: full mask (return null/stars), partial mask (show last 4 d…
    'hpp-feature-body.1': 'Define la lógica de enmascaramiento en SQL: máscara total (devuelve null o asteriscos), máscara parcial (muestra los últimos 4 dígitos) o hash. Distintos roles ven distintas representaciones de la misma columna.',
    // Tag-Based Inheritance
    'hpp-feature-title.2': 'Herencia basada en etiquetas',
    // Bind a masking policy to a tag. Every column tagged with that tag automatically gets ma…
    'hpp-feature-body.2': 'Vincula una política de enmascaramiento a una etiqueta. Cada columna marcada con esa etiqueta queda enmascarada automáticamente — sin asignación columna por columna.',
    // -- Create a masking policy CREATE MASKING POLICY mask_email &nbsp;&nbsp;AS (val STRING)…
    'hpp-code.1': `<span class="code-comment">-- Crear una politica de enmascaramiento</span><br> <span class="code-kw">CREATE MASKING POLICY</span> <span class="code-id">mask_email</span><br> &nbsp;&nbsp;<span class="code-kw">AS</span> <span class="code-punc">(</span><span class="code-id">val</span> <span class="code-fn">STRING</span><span class="code-punc">)</span> <span class="code-kw">RETURNS</span> <span class="code-fn">STRING</span><br> &nbsp;&nbsp;<span class="code-punc">-></span> <span class="code-kw">CASE</span><br> &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-kw">WHEN</span> <span class="code-fn">CURRENT_ROLE</span><span class="code-punc">()</span> <span class="code-kw">IN</span> <span class="code-punc">(</span><span class="code-str">'ADMIN'</span><span class="code-punc">)</span> <span class="code-kw">THEN</span> <span class="code-id">val</span><br> &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-kw">WHEN</span> <span class="code-fn">CURRENT_ROLE</span><span class="code-punc">()</span> <span class="code-kw">IN</span> <span class="code-punc">(</span><span class="code-str">'ANALYST'</span><span class="code-punc">)</span><br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-kw">THEN</span> <span class="code-str">'***@'</span> <span class="code-punc">||</span> <span class="code-fn">SPLIT_PART</span><span class="code-punc">(</span><span class="code-id">val</span><span class="code-punc">,</span><span class="code-str">'@'</span><span class="code-punc">,</span><span class="code-num">2</span><span class="code-punc">)</span><br> &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-kw">ELSE</span> <span class="code-str">'*****'</span><br> &nbsp;&nbsp;<span class="code-kw">END</span><span class="code-punc">;</span><br> <br> <span class="code-comment">-- Aplicar a una columna</span><br> <span class="code-kw">ALTER TABLE</span> <span class="code-id">customers</span><br> &nbsp;&nbsp;<span class="code-fn">MODIFY COLUMN</span> <span class="code-id">email</span><br> &nbsp;&nbsp;<span class="code-kw">SET MASKING POLICY</span> <span class="code-id">mask_email</span><span class="code-punc">;</span>`,
    // Row-Level Policy
    'hpp-eyebrow.2': 'Política a nivel de fila',
    // Row Access Policies
    'hpp-title.2': 'Políticas de acceso a filas',
    // Filter which rows a role can see — based on a policy mapping table, with no query chang…
    'hpp-sub.2': 'Filtra qué filas puede ver un rol — con base en una tabla de mapeo de la política y sin cambiar las consultas.',
    // Policy Mapping Table
    'hpp-feature-title.3': 'Tabla de mapeo de la política',
    // A separate table maps roles (or users) to the allowed values of a filter column (region…
    'hpp-feature-body.3': 'Una tabla aparte asocia roles (o usuarios) con los valores permitidos de una columna de filtro (región, departamento, centro de costo). La política une esa tabla al momento de la consulta.',
    // Transparent to Users
    'hpp-feature-title.4': 'Transparente para los usuarios',
    // Users run SELECT * FROM sales and only see rows they\'re allowed to see. The policy is …
    'hpp-feature-body.4': `Los usuarios ejecutan <code style="font-family:monospace;font-size:10px;">SELECT * FROM sales</code> y solo ven las filas que tienen permitidas. La política es invisible y no se puede eludir.`,
    // -- Create row access policy CREATE ROW ACCESS POLICY region_filter &nbsp;&nbsp;AS (regi…
    'hpp-code.2': `<span class="code-comment">-- Crear politica de acceso a filas</span><br> <span class="code-kw">CREATE ROW ACCESS POLICY</span> <span class="code-id">region_filter</span><br> &nbsp;&nbsp;<span class="code-kw">AS</span> <span class="code-punc">(</span><span class="code-id">region</span> <span class="code-fn">STRING</span><span class="code-punc">)</span><br> &nbsp;&nbsp;<span class="code-kw">RETURNS BOOLEAN</span><br> &nbsp;&nbsp;<span class="code-punc">-></span> <span class="code-id">region</span> <span class="code-kw">IN</span> <span class="code-punc">(</span><br> &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-kw">SELECT</span> <span class="code-id">allowed_region</span><br> &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-kw">FROM</span> <span class="code-id">access_map</span><br> &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-kw">WHERE</span> <span class="code-id">role_name</span> <span class="code-punc">=</span> <span class="code-fn">CURRENT_ROLE</span><span class="code-punc">()</span><br> &nbsp;&nbsp;<span class="code-punc">)</span><span class="code-punc">;</span><br> <br> <span class="code-comment">-- Aplicar a la tabla</span><br> <span class="code-kw">ALTER TABLE</span> <span class="code-id">sales</span><br> &nbsp;&nbsp;<span class="code-kw">ADD ROW ACCESS POLICY</span> <span class="code-id">region_filter</span><br> &nbsp;&nbsp;<span class="code-kw">ON</span> <span class="code-punc">(</span><span class="code-id">region</span><span class="code-punc">)</span><span class="code-punc">;</span>`,
    // Column-Level Policy
    'hpp-eyebrow.3': 'Política a nivel de columna',
    // Projection Policies
    'hpp-title.3': 'Políticas de proyección',
    // Prevent a column from being SELECTed directly — filter on it, but never export its valu…
    'hpp-sub.3': 'Impide que una columna se consulte con SELECT de forma directa — se puede filtrar por ella, pero nunca exportar sus valores.',
    // Visible but Unexportable
    'hpp-feature-title.5': 'Visible pero no exportable',
    // Column appears in schema and can be used in WHERE clauses. But it cannot appear in SELE…
    'hpp-feature-body.5': 'La columna aparece en el esquema y se puede usar en cláusulas WHERE, pero no puede aparecer en los resultados de un SELECT. Ideal para: “los analistas pueden filtrar por número de seguro social, pero nunca ven el valor real”.',
    // Complements Masking
    'hpp-feature-title.6': 'Complementa el enmascaramiento',
    // Use projection policies when full masking isn\'t enough — you want to prevent a column …
    'hpp-feature-body.6': 'Usa políticas de proyección cuando el enmascaramiento total no basta — cuando se busca evitar que una columna aparezca en cualquier conjunto de resultados, no solo enmascarar su valor.',
    // -- Create projection policy CREATE PROJECTION POLICY no_ssn_export &nbsp;&nbsp;AS () RE…
    'hpp-code.3': `<span class="code-comment">-- Crear politica de proyeccion</span><br> <span class="code-kw">CREATE PROJECTION POLICY</span> <span class="code-id">no_ssn_export</span><br> &nbsp;&nbsp;<span class="code-kw">AS</span> <span class="code-punc">()</span> <span class="code-kw">RETURNS</span> <span class="code-fn">PROJECTION_CONSTRAINT</span><br> &nbsp;&nbsp;<span class="code-punc">-></span> <span class="code-kw">CASE</span><br> &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-kw">WHEN</span> <span class="code-fn">CURRENT_ROLE</span><span class="code-punc">()</span> <span class="code-punc">=</span> <span class="code-str">'ADMIN'</span><br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-kw">THEN</span> <span class="code-fn">PROJECTION_CONSTRAINT</span><span class="code-punc">(</span><span class="code-fn">ALLOW</span> <span class="code-punc">=></span> <span class="code-kw">true</span><span class="code-punc">)</span><br> &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-kw">ELSE</span> <span class="code-fn">PROJECTION_CONSTRAINT</span><span class="code-punc">(</span><span class="code-fn">ALLOW</span> <span class="code-punc">=></span> <span class="code-kw">false</span><span class="code-punc">)</span><br> &nbsp;&nbsp;<span class="code-kw">END</span><span class="code-punc">;</span><br> <br> <span class="code-kw">ALTER TABLE</span> <span class="code-id">customers</span><br> &nbsp;&nbsp;<span class="code-fn">MODIFY COLUMN</span> <span class="code-id">ssn</span><br> &nbsp;&nbsp;<span class="code-kw">SET PROJECTION POLICY</span> <span class="code-id">no_ssn_export</span><span class="code-punc">;</span>`,
    // Column-Level Policy
    'hpp-eyebrow.4': 'Política a nivel de columna',
    // Aggregation Policies
    'hpp-title.4': 'Políticas de agregación',
    // Require aggregation on sensitive columns — prevent row-level exposure by enforcing mini…
    'hpp-sub.4': 'Exige agregación en columnas sensibles — evita la exposición a nivel de fila imponiendo tamaños mínimos de grupo.',
    // Enforce Minimum Group Size
    'hpp-feature-title.7': 'Impone un tamaño mínimo de grupo',
    // Queries on a protected column must aggregate results. MIN_GROUP_SIZE prevents re-identi…
    'hpp-feature-body.7': 'Las consultas sobre una columna protegida deben agregar los resultados. MIN_GROUP_SIZE evita la reidentificación — si un grupo tiene menos filas que el mínimo, la consulta se bloquea.',
    // Statistical Privacy
    'hpp-feature-title.8': 'Privacidad estadística',
    // Used in healthcare, finance, and research settings where individual row values must nev…
    'hpp-feature-body.8': 'Se usa en salud, finanzas e investigación, donde los valores de una fila individual nunca deben quedar expuestos, ni siquiera mediante ataques de reidentificación basados en agregaciones.',
    // -- Create aggregation policy CREATE AGGREGATION POLICY min_group_5 &nbsp;&nbsp;AS () RE…
    'hpp-code.4': `<span class="code-comment">-- Crear politica de agregacion</span><br> <span class="code-kw">CREATE AGGREGATION POLICY</span> <span class="code-id">min_group_5</span><br> &nbsp;&nbsp;<span class="code-kw">AS</span> <span class="code-punc">()</span> <span class="code-kw">RETURNS</span> <span class="code-fn">AGGREGATION_CONSTRAINT</span><br> &nbsp;&nbsp;<span class="code-punc">-></span> <span class="code-kw">CASE</span><br> &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-kw">WHEN</span> <span class="code-fn">CURRENT_ROLE</span><span class="code-punc">()</span> <span class="code-punc">=</span> <span class="code-str">'ANALYST'</span><br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-kw">THEN</span> <span class="code-fn">AGGREGATION_CONSTRAINT</span><span class="code-punc">(</span><br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-fn">MIN_GROUP_SIZE</span> <span class="code-punc">=></span> <span class="code-num">5</span><span class="code-punc">)</span><br> &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-kw">ELSE</span> <span class="code-fn">NO_AGGREGATION_CONSTRAINT</span><span class="code-punc">()</span><br> &nbsp;&nbsp;<span class="code-kw">END</span><span class="code-punc">;</span><br> <br> <span class="code-kw">ALTER TABLE</span> <span class="code-id">health_records</span><br> &nbsp;&nbsp;<span class="code-kw">SET AGGREGATION POLICY</span> <span class="code-id">min_group_5</span><span class="code-punc">;</span>`,
    // Column-Level Policy
    'hpp-eyebrow.5': 'Política a nivel de columna',
    // Tokenization
    'hpp-title.5': 'Tokenización',
    // Replace sensitive values with tokens via an external vault — data stays usable but orig…
    'hpp-sub.5': 'Reemplaza valores sensibles por tokens mediante una bóveda externa — los datos siguen siendo utilizables y los valores originales quedan protegidos.',
    // External Vault Integration
    'hpp-feature-title.9': 'Integración con bóveda externa',
    // Tokenization uses an external tokenization vault (e.g., Protegrity, Voltage) via a Snow…
    'hpp-feature-body.9': 'La tokenización usa una bóveda de tokenización externa (por ejemplo, Protegrity o Voltage) a través de una External Function de Snowflake. La bóveda asocia el token ↔ el valor original. Snowflake almacena únicamente el token.',
    // Reversible with Authorization
    'hpp-feature-title.10': 'Reversible con autorización',
    // Authorized roles can de-tokenize by calling the vault. Unauthorized roles always see th…
    'hpp-feature-body.10': 'Los roles autorizados pueden destokenizar llamando a la bóveda. Los roles no autorizados siempre ven el token — el valor original nunca sale de la bóveda sin permiso explícito.',
    // -- Tokenization via masking policy + external fn CREATE MASKING POLICY tokenize_cc &nbs…
    'hpp-code.5': `<span class="code-comment">-- Tokenizacion via politica de enmascaramiento + fn externa</span><br> <span class="code-kw">CREATE MASKING POLICY</span> <span class="code-id">tokenize_cc</span><br> &nbsp;&nbsp;<span class="code-kw">AS</span> <span class="code-punc">(</span><span class="code-id">val</span> <span class="code-fn">STRING</span><span class="code-punc">)</span> <span class="code-kw">RETURNS</span> <span class="code-fn">STRING</span><br> &nbsp;&nbsp;<span class="code-punc">-></span> <span class="code-kw">CASE</span><br> &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-kw">WHEN</span> <span class="code-fn">CURRENT_ROLE</span><span class="code-punc">()</span> <span class="code-punc">=</span> <span class="code-str">'PAYMENT_ADMIN'</span><br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-kw">THEN</span> <span class="code-id">val</span><br> &nbsp;&nbsp;&nbsp;&nbsp;<span class="code-kw">ELSE</span><br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-fn">my_tokenize_udf</span><span class="code-punc">(</span><span class="code-id">val</span><span class="code-punc">)</span><br> &nbsp;&nbsp;<span class="code-kw">END</span><span class="code-punc">;</span><br> <br> <span class="code-kw">ALTER TABLE</span> <span class="code-id">payments</span><br> &nbsp;&nbsp;<span class="code-fn">MODIFY COLUMN</span> <span class="code-id">card_number</span><br> &nbsp;&nbsp;<span class="code-kw">SET MASKING POLICY</span> <span class="code-id">tokenize_cc</span><span class="code-punc">;</span>`,
    // © 2026 Snowflake Inc. All Rights Reserved
    'span': '© 2026 Snowflake Inc. Todos los derechos reservados',
  },
});
