// ─────────────────────────────────────────────────────────────────────────
// Spanish (es) — horizon-access
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
  slug: 'horizon-access',

  page: {
    // Governance
    'slide-tag': 'Gobernanza',
    // Access Control
    'nav-label': 'Control de acceso',
    // Access Control
    's6-header': 'Control de acceso',
    // One security model across all data — roles, network, identity, and encryption.
    's6-sub': 'Un único modelo de seguridad para todos los datos — roles, red, identidad y cifrado.',
    // Role-Based
    'hac-card-tag.1': 'Basado en roles',
    // Hierarchical privilege model for all Snowflake objects
    'hac-card-sub.1': 'Modelo jerárquico de privilegios para todos los objetos de Snowflake',
    // Every operation requires a privilege. Roles are granted to users and other roles. Colum…
    'hac-fact.1': 'Toda operación requiere un privilegio. Los roles se otorgan a usuarios y a otros roles. El acceso a nivel de columna, de fila y de objeto se controla con un único modelo.',
    // GRANT SELECT ON TABLE orders &nbsp;&nbsp;TO ROLE analyst_role;
    'hac-code.1': `<span class="code-kw">GRANT</span> <span class="code-fn">SELECT</span> <span class="code-kw">ON</span> <span class="code-id">TABLE</span> <span class="code-id">orders</span><br> &nbsp;&nbsp;<span class="code-kw">TO ROLE</span> <span class="code-id">analyst_role</span><span class="code-punc">;</span>`,
    // Network
    'hac-card-tag.2': 'Red',
    // Network Policies
    'hac-card-title.2': 'Políticas de red',
    // Restrict connections by IP address or CIDR range
    'hac-card-sub.2': 'Restringen las conexiones por dirección IP o rango CIDR',
    // Allowlist and denylist by IP range. Attach at account level or per-user. Blocks all con…
    'hac-fact.2': 'Listas de permitidos y denegados por rango de IP. Se adjuntan a nivel de cuenta o por usuario. Bloquean todas las conexiones de redes no autorizadas antes de la autenticación.',
    // CREATE NETWORK POLICY corp_only &nbsp;&nbsp;ALLOWED_IP_LIST = ('10.0.0.0/8');
    'hac-code.2': `<span class="code-kw">CREATE NETWORK POLICY</span> <span class="code-id">corp_only</span><br> &nbsp;&nbsp;<span class="code-fn">ALLOWED_IP_LIST</span> <span class="code-punc">=</span> <span class="code-punc">(</span><span class="code-str">'10.0.0.0/8'</span><span class="code-punc">)</span><span class="code-punc">;</span>`,
    // Identity
    'hac-card-tag.3': 'Identidad',
    // Enforce multi-factor authentication via policy
    'hac-card-sub.3': 'Exige autenticación multifactor mediante política',
    // Authentication Policies enforce MFA for all users, specific roles, or specific client t…
    'hac-fact.3': 'Las políticas de autenticación exigen MFA para todos los usuarios, para roles concretos o para tipos de cliente concretos. Basadas en TOTP. También controlan los métodos de autenticación permitidos (contraseña, par de claves, SSO, OAuth).',
    // CREATE AUTHENTICATION POLICY require_mfa &nbsp;&nbsp;MFA_ENROLLMENT = REQUIRED;
    'hac-code.3': `<span class="code-kw">CREATE AUTHENTICATION POLICY</span> <span class="code-id">require_mfa</span><br> &nbsp;&nbsp;<span class="code-fn">MFA_ENROLLMENT</span> <span class="code-punc">=</span> <span class="code-str">REQUIRED</span><span class="code-punc">;</span>`,
    // Identity
    'hac-card-tag.4': 'Identidad',
    // Federated identity via SAML 2.0 with any IdP
    'hac-card-sub.4': 'Identidad federada mediante SAML 2.0 con cualquier IdP',
    // Integrate with Okta, Azure AD, Ping Identity, OneLogin. JIT user provisioning. No passw…
    'hac-fact.4': 'Se integra con Okta, Azure AD, Ping Identity y OneLogin. Aprovisionamiento de usuarios JIT. Sin sincronización de contraseñas. Misma sesión que el IdP corporativo — al revocar en el IdP se corta el acceso de inmediato.',
    // CREATE SECURITY INTEGRATION okta_sso &nbsp;&nbsp;TYPE = SAML2 &nbsp;&nbsp;SAML2_ISSUER …
    'hac-code.4': `<span class="code-kw">CREATE SECURITY INTEGRATION</span> <span class="code-id">okta_sso</span><br> &nbsp;&nbsp;<span class="code-fn">TYPE</span> <span class="code-punc">=</span> <span class="code-str">SAML2</span><br> &nbsp;&nbsp;<span class="code-fn">SAML2_ISSUER</span> <span class="code-punc">=</span> <span class="code-str">'https://okta.com/...'</span><span class="code-punc">;</span>`,
    // Encryption
    'hac-card-tag.5': 'Cifrado',
    // Tri-Secret Secure
    'hac-card-title.5': 'Tri-Secret Secure',
    // Customer-managed encryption key via cloud KMS
    'hac-card-sub.5': 'Clave de cifrado gestionada por el cliente mediante el KMS de la nube',
    // Your KMS key + Snowflake key = both required to decrypt. Supports AWS KMS, Azure Key Va…
    'hac-fact.5': 'Su clave de KMS + la clave de Snowflake = ambas son necesarias para descifrar. Compatible con AWS KMS, Azure Key Vault y GCP KMS. Al revocar la clave, los datos quedan inaccesibles de inmediato — incluso para los empleados de Snowflake.',
    // -- Configured via account-level setting -- + KMS integration in your cloud console ALTE…
    'hac-code.5': `<span class="code-comment">-- Se configura con un parámetro a nivel de cuenta</span><br> <span class="code-comment">-- + integración de KMS en la consola de su nube</span><br> <span class="code-kw">ALTER ACCOUNT</span> <span class="code-kw">SET</span><br> &nbsp;&nbsp;<span class="code-fn">TRI_SECRET_SECURE</span> <span class="code-punc">=</span> <span class="code-kw">TRUE</span><span class="code-punc">;</span>`,
    // Identity
    'hac-card-tag.6': 'Identidad',
    // Delegated access for BI tools and custom apps
    'hac-card-sub.6': 'Acceso delegado para herramientas de BI y aplicaciones personalizadas',
    // OAuth 2.0 for Tableau, Power BI, Streamlit, and custom integrations. Users authenticate…
    'hac-fact.6': 'OAuth 2.0 para Tableau, Power BI, Streamlit e integraciones personalizadas. Los usuarios se autentican mediante su IdP; las herramientas reciben un token de acceso con alcance limitado. Sin credenciales incrustadas en las configuraciones de BI.',
    // CREATE SECURITY INTEGRATION tableau_oauth &nbsp;&nbsp;TYPE = OAUTH &nbsp;&nbsp;OAUTH_CL…
    'hac-code.6': `<span class="code-kw">CREATE SECURITY INTEGRATION</span> <span class="code-id">tableau_oauth</span><br> &nbsp;&nbsp;<span class="code-fn">TYPE</span> <span class="code-punc">=</span> <span class="code-str">OAUTH</span><br> &nbsp;&nbsp;<span class="code-fn">OAUTH_CLIENT</span> <span class="code-punc">=</span> <span class="code-str">TABLEAU_DESKTOP</span><span class="code-punc">;</span>`,
    // © 2026 Snowflake Inc. All Rights Reserved
    'span': '© 2026 Snowflake Inc. Todos los derechos reservados',
  },
});
