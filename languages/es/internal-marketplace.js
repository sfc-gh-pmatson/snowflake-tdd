// ─────────────────────────────────────────────────────────────────────────
// Spanish (es) — internal-marketplace
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
  slug: 'internal-marketplace',

  page: {
    // Data Mesh & Sharing
    'slide-tag': 'Data Mesh & uso compartido de datos',
    // Internal Marketplace
    'nav-label': 'Internal Marketplace',
    // Internal Marketplace
    's6-header': 'Internal Marketplace',
    // Self-service data product discovery across your Snowflake organization. Publish once; d…
    's6-sub': 'Descubrimiento de productos de datos en autoservicio en toda la organización de Snowflake. Se publica una vez; se descubre e instala sin tickets ni pipelines de ETL.',
    // What is Internal Marketplace?
    'im-card-label.1': '¿Qué es Internal Marketplace?',
    // An intra-org data product store visible to all accounts in your organization. Providers…
    'im-card-desc.1': 'Una tienda de productos de datos interna, visible para todas las cuentas de la organización. Los proveedores publican una vez; los consumidores se sirven a sí mismos.',
    // Publishing a Listing
    'im-card-label.2': 'Publicar un listing',
    // Create a listing over a share targeting your org. It appears in every account Marketpla…
    'im-card-desc.2': 'Se crea un listing sobre un share dirigido a la organización. Aparece en el Marketplace de cada cuenta bajo "Your Organization".',
    // Consumer Discovery
    'im-card-label.3': 'Descubrimiento del consumidor',
    // Browse, search by keyword or tag, and install data products in one click — no tickets, …
    'im-card-desc.3': 'Explorar, buscar por palabra clave o etiqueta e instalar productos de datos con un clic — sin tickets, sin esperas, sin TI.',
    // Access Request Workflow
    'im-card-label.4': 'Flujo de solicitud de acceso',
    // Optionally require consumers to submit justification. Providers review and approve — al…
    'im-card-desc.4': 'Opcionalmente se puede exigir a los consumidores que envíen una justificación. Los proveedores revisan y aprueban — todo dentro de Snowflake.',
    // Usage Analytics
    'im-card-label.5': 'Analítica de uso',
    // Track who installed your listing, active accounts, and query volume via DATA_SHARING_US…
    'im-card-desc.5': 'Permite ver quién instaló el listing, las cuentas activas y el volumen de consultas mediante las vistas DATA_SHARING_USAGE.',
    // Governance Controls
    'im-card-label.6': 'Controles de gobernanza',
    // Masking and row access policies applied by provider are enforced for all consumers. Rev…
    'im-card-desc.6': 'Las políticas de enmascaramiento y de acceso a filas aplicadas por el proveedor se aplican a todos los consumidores. Se puede revocar en cualquier momento.',
  },

  // HTML blocks this page builds in JS.
  blocks: {
    // Publishing a ListingPublishing to Internal Marketplace takes two steps: create a share …
    'explain.publishing-a-listing': `<h4>Publicar un listing</h4><p>Publicar en Internal Marketplace requiere dos pasos: crear un share con los objetos que se van a exponer y luego crear un listing de organización que envuelve el share con metadatos y lo dirige a la organización.</p><ul><li><strong>Share:</strong> define a qué objetos pueden acceder los consumidores. Conviene usar vistas seguras para exponer datos agregados o filtrados sin dar acceso a la tabla en bruto.</li><li><strong>Metadatos del listing:</strong> título, descripción, subtítulo. Es lo que ven los consumidores al explorar — conviene que sea descriptivo y fácil de buscar.</li><li><strong>targets.organization:</strong> se define con el nombre de la organización de Snowflake para que el listing sea visible en toda la organización.</li></ul><p>Una vez publicado, el listing aparece de inmediato en la interfaz de Marketplace de cada cuenta. Los consumidores lo instalan con un clic — sin necesidad de SQL de su lado.</p>`,
    // Consumer DiscoveryConsumers discover Internal Marketplace listings through the Snowsigh…
    'explain.consumer-discovery': `<h4>Descubrimiento del consumidor</h4><p>Los consumidores descubren los listings de Internal Marketplace a través de la interfaz de Snowsight — se pueden explorar por título, descripción, palabra clave y etiqueta de categoría.</p><ul><li>La pestaña "Your Organization" solo muestra listings de la misma organización de Snowflake</li><li>Al hacer clic en "Get" se le pide al consumidor un nombre para la base de datos que se creará y luego se monta de inmediato</li><li>La base de datos instalada contiene los objetos que compartió el proveedor — los consumidores la consultan como cualquier otra base de datos</li><li>El descubrimiento programático mediante <code>MARKETPLACE_AVAILABLE_LISTINGS</code> permite que los catálogos de datos y los portales obtengan los metadatos del listing con SQL</li></ul>`,
    // Access Request WorkflowProviders can optionally require consumers to submit a justifica…
    'explain.access-request-workflow': `<h4>Flujo de solicitud de acceso</h4><p>Los proveedores pueden exigir opcionalmente que los consumidores envíen una justificación antes de instalar un listing — algo apropiado para productos de datos sensibles (RR. HH., finanzas, PII) donde el proveedor quiere registrar quién accede a los datos y por qué.</p><ul><li>Se define <code>access_request_policy.type = MANUAL</code> en el YAML del listing para exigir aprobación</li><li><code>justification_required: true</code> obliga a los consumidores a explicar por qué necesitan el acceso</li><li>Los aprobadores reciben una notificación por correo; aprueban o rechazan en Snowsight</li><li>Todas las solicitudes quedan registradas en <code>LISTING_ACCESS_REQUESTS</code> — traza de auditoría completa</li></ul>`,
    // Usage AnalyticsProviders have full visibility into who installed their listing and how …
    'explain.usage-analytics': `<h4>Analítica de uso</h4><p>Los proveedores tienen visibilidad completa de quién instaló su listing y con qué frecuencia se consulta — todo con SQL estándar sobre las vistas <code>DATA_SHARING_USAGE</code>.</p><ul><li><strong>LISTING_ACCESS_HISTORY:</strong> una fila por instalación de cuenta de consumidor — quién, cuándo y el estado actual</li><li><strong>LISTING_QUERY_ACTIVITY:</strong> recuento diario de consultas por cuenta de consumidor — consumidores activos frente a inactivos</li></ul><p>Casos de uso: identificar consumidores de alto valor, encontrar instalaciones inactivas para revocarlas y demostrar el ROI del producto de datos (N cuentas, M consultas/mes).</p>`,
    // Governance ControlsInternal Marketplace listings inherit all of Snowflake&#39;s governa…
    'explain.governance-controls': `<h4>Controles de gobernanza</h4><p>Los listings de Internal Marketplace heredan todas las capacidades de gobernanza de Snowflake — enmascaramiento, acceso a filas y RBAC — con las políticas del proveedor aplicadas a cada consumidor.</p><ul><li><strong>Políticas de enmascaramiento:</strong> se aplican a los objetos del share. Los consumidores no pueden evadirlas — el enmascaramiento se ejecuta en la cuenta del proveedor.</li><li><strong>Políticas de acceso a filas:</strong> filtran qué filas ve cada consumidor. Un mismo listing puede atender a varios consumidores con distinta visibilidad de filas.</li><li><strong>Revocar el acceso:</strong> elimina al instante a un consumidor específico. Su base de datos instalada queda inaccesible de inmediato.</li><li><strong>Despublicar:</strong> oculta el listing para nuevas instalaciones. No revoca automáticamente las instalaciones existentes.</li></ul>`,
  },
});
