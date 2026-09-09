// ─────────────────────────────────────────────────────────────────────────
// Spanish (es) — org-listings
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
  slug: 'org-listings',

  page: {
    // Data Mesh & Sharing
    'slide-tag': 'Data Mesh & uso compartido',
    // Organizational Listings
    'nav-label': 'Listings organizacionales',
    // Organizational Listings
    's6-header': 'Listings organizacionales',
    // Package tables, views, apps, and AI models as versioned data products with metadata, ta…
    's6-sub': 'Empaqueta tablas, vistas, aplicaciones y modelos de IA como productos de datos versionados, con metadatos, segmentación y analítica de uso — compartibles en toda la organización de Snowflake.',
    // Listing vs Share
    'ol-card-label.1': 'Listing frente a share',
    // A share is the access mechanism. A listing is the product layer — title, description, d…
    'ol-card-desc.1': 'Un share es el mecanismo de acceso. Un listing es la capa de producto: título, descripción, descubrimiento, versionado y analítica.',
    // Create an Org Listing
    'ol-card-label.2': 'Crear un listing organizacional',
    // Wrap a share with a listing YAML — title, description, category, targets. One SQL comma…
    'ol-card-desc.2': 'Envuelve un share con un YAML de listing: título, descripción, categoría, destinos. Un solo comando SQL lo publica en la organización.',
    // Targeting Accounts
    'ol-card-label.3': 'Segmentación de cuentas',
    // Restrict visibility to specific accounts or business units, or open it to the entire Sn…
    'ol-card-desc.3': 'Restringe la visibilidad a cuentas o unidades de negocio específicas, o ábrela a toda la organización de Snowflake.',
    // Consumer Experience
    'ol-card-label.4': 'Experiencia del consumidor',
    // Consumers discover, install, and query listings via Snowsight — one click provisions li…
    'ol-card-desc.4': 'Los consumidores descubren, instalan y consultan listings desde Snowsight: un clic aprovisiona el acceso a datos en vivo.',
    // Listing Versioning
    'ol-card-label.5': 'Versionado de listings',
    // Publish v1 and v2 simultaneously. Consumers pin to a version and migrate when ready — n…
    'ol-card-desc.5': 'Publica v1 y v2 al mismo tiempo. Los consumidores se fijan a una versión y migran cuando estén listos, sin actualizaciones forzadas.',
    // Provider Analytics
    'ol-card-label.6': 'Analítica del proveedor',
    // Track installs, active consumers, and query volume via DATA_SHARING_USAGE views.
    'ol-card-desc.6': 'Da seguimiento a instalaciones, consumidores activos y volumen de consultas con las vistas DATA_SHARING_USAGE.',
  },

  // HTML blocks this page builds in JS.
  blocks: {
    // Create an Org ListingAn org listing is created with CREATE LISTING ... FOR SHARE ... AS…
    'explain.create-an-org-listing': `<h4>Crear un listing organizacional</h4><p>Un listing organizacional se crea con <code>CREATE LISTING ... FOR SHARE ... AS $$...$$</code>, donde el cuerpo son metadatos en YAML.</p><ul><li><strong>title &amp; subtitle:</strong> lo que los consumidores ven en los resultados de búsqueda</li><li><strong>description:</strong> descripción completa que se muestra cuando un consumidor abre el listing — incluye notas de calidad de datos, calendario de actualización e información de contacto</li><li><strong>categories:</strong> categorías definidas por Snowflake para filtrar (FINANCIAL_DATA, MARKETING_DATA, HR_DATA, etc.)</li><li><strong>tags:</strong> pares clave-valor personalizados — útiles para el propietario de los datos, la frecuencia de actualización y el estado de certificación</li><li><strong>targets.organization:</strong> el nombre de la organización de Snowflake. Todas las cuentas de la organización pueden ver e instalar el listing.</li></ul>`,
    // Targeting AccountsOrg listings can be targeted to specific accounts within your organiz…
    'explain.targeting-accounts': `<h4>Segmentación de cuentas</h4><p>Los listings organizacionales se pueden dirigir a cuentas específicas de la organización o hacerse visibles para todas las cuentas.</p><ul><li><strong>targets.organization:</strong> el listing aparece en el Marketplace de cada cuenta — la mayor visibilidad posible</li><li><strong>targets.accounts:</strong> restringe a una lista de localizadores de cuenta dentro de la organización. Solo esas cuentas ven el listing.</li><li>ALTER LISTING permite agregar o quitar cuentas de un listing segmentado en cualquier momento, sin necesidad de volver a crearlo</li></ul><p>Conviene usar la segmentación por cuenta para productos de datos sensibles (recursos humanos, finanzas, legal) donde se quiere controlar con exactitud quién puede descubrirlos y solicitar acceso.</p>`,
    // Consumer ExperienceConsumers interact with org listings entirely through the Snowsight …
    'explain.consumer-experience': `<h4>Experiencia del consumidor</h4><p>Los consumidores interactúan con los listings organizacionales por completo desde la interfaz de Snowsight: no se necesita SQL para descubrirlos ni instalarlos.</p><ul><li>La pestaña "Your Organization" muestra únicamente los listings publicados dentro de la misma organización de Snowflake</li><li>Al hacer clic en "Get" se solicita un nombre de base de datos y de inmediato se crea la base de datos a partir del share — datos en vivo accesibles en segundos</li><li>La base de datos instalada aparece en la pestaña Data como cualquier otra base de datos de Snowflake</li><li>Quienes prefieran SQL también pueden invocar <code>CREATE DATABASE FROM SHARE</code> directamente</li></ul>`,
    // Listing VersioningOrg listings support versioning — publish multiple versions simultane…
    'explain.listing-versioning': `<h4>Versionado de listings</h4><p>Los listings organizacionales admiten versionado: se pueden publicar varias versiones a la vez, de modo que los consumidores migren según su propio calendario en lugar de verse forzados a actualizar de inmediato.</p><ul><li>Crea un listing nuevo para la versión nueva apuntando al share nuevo. El listing nuevo aparece en el Marketplace junto al anterior.</li><li>Incluye notas de versión en la descripción para que los consumidores entiendan qué cambió y qué esperar al migrar</li><li>Marca las versiones antiguas como obsoletas con <code>PUBLISHED = FALSE</code> — se ocultan para instalaciones nuevas, pero los consumidores existentes conservan el acceso</li></ul><p>Este es el patrón recomendado para productos de datos con dependencias posteriores: los equipos pueden evolucionar sus productos sin romper a los consumidores que aún no han tenido tiempo de adaptarse.</p>`,
    // Provider AnalyticsEvery org listing comes with built-in usage analytics available via s…
    'explain.provider-analytics': `<h4>Analítica del proveedor</h4><p>Cada listing organizacional incluye analítica de uso integrada, disponible con SQL estándar en las vistas DATA_SHARING_USAGE.</p><ul><li><strong>LISTING_ACCESS_HISTORY:</strong> todas las cuentas de consumidor que instalaron el listing — cuándo, su estado actual y su organización</li><li><strong>LISTING_QUERY_ACTIVITY:</strong> conteo diario de consultas por consumidor — indica qué cuentas usan activamente el producto de datos</li></ul><p>Métricas habituales para dar seguimiento:</p><ul><li><strong>Instalaciones totales:</strong> amplitud del alcance en la organización</li><li><strong>Consumidores activos:</strong> cuántos consultan realmente — participación frente a solo instalar</li><li>El crecimiento de consultas semana a semana indica un valor creciente; una caída puede significar que los consumidores encontraron una alternativa o que los datos están desactualizados</li></ul>`,
  },
});
