// ─────────────────────────────────────────────────────────────────────────
// Spanish (es) — native-apps
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
  slug: 'native-apps',

  page: {
    // Data Mesh & Sharing
    'slide-tag': 'Data Mesh y uso compartido',
    // Snowflake Native Apps
    'nav-label': 'Snowflake Native Apps',
    // Snowflake Native Apps
    's6-header': 'Snowflake Native Apps',
    // Ship code directly into consumer accounts. Your logic runs next to their data — no data…
    's6-sub': 'Envía código directamente a las cuentas de los consumidores. Tu lógica se ejecuta junto a sus datos — sin mover datos y con gobernanza completa.',
    // App Package
    'na-card-label.1': 'Paquete de aplicación',
    // Provider-side container that bundles versions, code, and distribution logic for your ap…
    'na-card-desc.1': 'Contenedor del lado del proveedor que agrupa las versiones, el código y la lógica de distribución de la aplicación.',
    // Setup Script
    'na-card-label.2': 'Script de instalación',
    // SQL script that runs at install time to create objects in the consumer's account — proc…
    'na-card-desc.2': 'Script SQL que se ejecuta durante la instalación para crear objetos en la cuenta del consumidor: procedimientos, vistas y roles.',
    // Application Roles
    'na-card-label.3': 'Roles de aplicación',
    // Fine-grained access control defined by the provider. Consumers grant app roles to their…
    'na-card-desc.3': 'Control de acceso granular definido por el proveedor. Los consumidores otorgan roles de la aplicación a sus usuarios — no privilegios nativos de Snowflake.',
    // Versioning & Patches
    'na-card-label.4': 'Versionado y parches',
    // Release channels let you push updates incrementally. Consumers on auto-upgrade receive …
    'na-card-desc.4': 'Los canales de publicación permiten enviar actualizaciones de forma incremental. Los consumidores con actualización automática reciben los parches de manera transparente.',
    // Streamlit Frontend
    'na-card-label.5': 'Frontend con Streamlit',
    // Embed a Streamlit app inside your Native App — consumers get a full UI running in their…
    'na-card-desc.5': 'Integra una aplicación de Streamlit dentro de la Native App — los consumidores obtienen una interfaz completa que corre en su cuenta, sin necesidad de hosting.',
    // SPCS Container Apps
    'na-card-label.6': 'Aplicaciones en contenedores con SPCS',
    // Include containerized microservices (APIs, ML inference) that run in consumer's Snowpar…
    'na-card-desc.6': 'Incluye microservicios en contenedores (APIs, inferencia de ML) que se ejecutan en el entorno de Snowpark Container Services del consumidor.',
    // -- Select a card above to explore Native App concepts
    'na-panel-code': '-- Selecciona una tarjeta arriba para explorar los conceptos de Native Apps',
    // Native Apps Framework
    'h4': 'Framework de Native Apps',
    // Click any card above to see SQL examples and explanations for each aspect of the Native…
    'p.1': 'Haz clic en cualquier tarjeta de arriba para ver ejemplos de SQL y explicaciones de cada aspecto del Native App Framework.',
    // Native Apps let you deploy your application logic directly into consumer Snowflake acco…
    'p.2': 'Las Native Apps permiten desplegar la lógica de la aplicación directamente en las cuentas de Snowflake de los consumidores, donde puede acceder a sus datos con los permisos que ellos otorguen — sin sacar nunca los datos.',
  },
});
