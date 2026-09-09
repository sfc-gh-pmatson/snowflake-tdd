// ─────────────────────────────────────────────────────────────────────────
// Spanish (es) — compute-warehouses
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
  slug: 'compute-warehouses',

  page: {
    // Compute
    'slide-tag': 'Cómputo',
    // Virtual Warehouse Fundamentals
    'nav-label': 'Fundamentos del warehouse virtual',
    // Virtual Warehouses
    's6-header': 'Warehouses virtuales',
    // Compute decoupled from storage — pay only for what you run.
    's6-sub': 'Cómputo desacoplado del almacenamiento — se paga solo por lo que se ejecuta.',
    // Foundation
    'cwh-section-label.1': 'Fundamentos',
    // Isolation Model
    'cwh-card-title.1': 'Modelo de aislamiento',
    // Compute is fully decoupled from storage. Multiple warehouses can query the same data si…
    'cwh-card-text.1': 'El cómputo está totalmente desacoplado del almacenamiento. Varios warehouses pueden consultar los mismos datos al mismo tiempo sin ninguna contención de recursos — las cargas de trabajo de BI, ETL e IA nunca compiten entre sí.',
    // Auto-Suspend & Resume
    'cwh-card-title.2': 'Suspensión y reanudación automáticas',
    // Warehouses suspend after idle timeout (min 1 min) and resume in ~2 seconds. Credits con…
    'cwh-card-text.2': 'Los warehouses se suspenden tras un tiempo de inactividad (mínimo 1 min) y se reanudan en ~2 segundos. Los créditos se consumen solo mientras se ejecutan — cero costo en inactividad. Es la base del modelo de pago por uso de Snowflake’s.',
    // Credit Rates
    'cwh-card-title.3': 'Tarifas de créditos',
    // Credits per hour by size:
    'cwh-card-text.3': 'Créditos por hora según el tamaño:',
    // Caching Tiers
    'cwh-section-label.2': 'Niveles de caché',
    // Result Cache
    'cwh-cache-title.1': 'Caché de resultados',
    // 24 hrs
    'cwh-cache-stat.1': '24 h',
    // Identical queries returned instantly with zero credits. Shared across all users. Automa…
    'cwh-cache-text.1': `Las consultas idénticas se devuelven al instante con <strong>cero créditos</strong>. Se comparte entre todos los usuarios. Es automática &#8212; sin configuración.`,
    // Data Cache
    'cwh-cache-title.2': 'Caché de datos',
    // Local SSD
    'cwh-cache-stat.2': 'SSD local',
    // Frequently accessed micro-partitions cached on warehouse nodes. Reduces remote storage …
    'cwh-cache-text.2': 'Las microparticiones de acceso frecuente se almacenan en caché en los nodos del warehouse. Reduce la E/S al almacenamiento remoto. Se mantiene caliente mientras el warehouse está en ejecución.',
    // Metadata Cache
    'cwh-cache-title.3': 'Caché de metadatos',
    // 0 Credits
    'cwh-cache-stat.3': '0 créditos',
    // Row counts, MIN/MAX values, NULL counts answered from metadata — no data scan required.…
    'cwh-cache-text.3': 'Conteos de filas, valores MIN/MAX y conteos de NULL se responden desde los metadatos — sin escanear datos. Habilita una poda de particiones agresiva.',
    // © 2026 Snowflake Inc. All Rights Reserved
    'span': '© 2026 Snowflake Inc. Todos los derechos reservados',
  },
});
