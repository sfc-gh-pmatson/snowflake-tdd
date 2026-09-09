// ─────────────────────────────────────────────────────────────────────────
// Spanish (es) — bcdr
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
  slug: 'bcdr',

  page: {
    // Platform
    'slide-tag': 'Plataforma',
    // Business Continuity & Disaster Recovery
    'nav-label': 'Continuidad del negocio & recuperación ante desastres',
    // Trusted — Snowflake Platform
    'bcdr-eyebrow': 'Confiable — Plataforma de Snowflake',
    // Business Continuity &amp;Disaster Recovery
    'bcdr-title': `Continuidad del negocio &amp;<br>recuperación ante desastres`,
    // Fast-track your business resilience with Snowflake
    'bcdr-sub': 'Acelere la resiliencia de su negocio con Snowflake',
    // Get going in a few clicks
    'bcdr-feature-title.1': 'Comience en unos pocos clics',
    // Eliminate setup complexity and manage your operations with an easy-to-use interface.
    'bcdr-feature-body.1': 'Elimine la complejidad de la configuración y administre sus operaciones con una interfaz fácil de usar.',
    // Achieve near-zero downtime
    'bcdr-feature-title.2': 'Logre un tiempo de inactividad casi nulo',
    // Trim Recovery Time Objectives (RTO) to less than a minute and automate key recovery pro…
    'bcdr-feature-body.2': 'Reduzca los Objetivos de Tiempo de Recuperación (RTO) a menos de un minuto y automatice los procesos clave de recuperación.',
    // Safeguard your entire data estate
    'bcdr-feature-title.3': 'Proteja todo su patrimonio de datos',
    // Protect Snowflake data, metadata, and account information with one comprehensive platfo…
    'bcdr-feature-body.3': 'Proteja los datos, los metadatos y la información de la cuenta de Snowflake con una sola plataforma integral.',
    // Oregon
    'bcdr-pin-region.1': 'Oregon',
    // Iowa
    'bcdr-pin-region.2': 'Iowa',
    // Virginia
    'bcdr-pin-region.3': 'Virginia',
    // Client Applications
    'bcdr-client-label': 'Aplicaciones cliente',
    // Client redirect redirects apps to the cloud region of your choice.
    'bcdr-client-caption': `<strong>La redirección de clientes</strong> redirige las aplicaciones a la región de nube de su elección.`,
    // © 2026 Snowflake Inc. All Rights Reserved
    'span': '© 2026 Snowflake Inc. Todos los derechos reservados',
    // What to replicate
    'h4.1': 'Qué replicar',
    // OBJECT_TYPES = ALL replicates users, roles, warehouses, resource monitors, databases, n…
    'p.1': `<code>OBJECT_TYPES = ALL</code> replica usuarios, roles, warehouses, monitores de recursos, bases de datos, políticas de red, integraciones y shares. Puede limitarlo a tipos de objeto específicos si es necesario.`,
    // Where to replicate it
    'h4.2': 'Dónde replicarlo',
    // ALLOWED_ACCOUNTS specifies the target account or list of target accounts to which repli…
    'p.2': `<code>ALLOWED_ACCOUNTS</code> especifica la cuenta objetivo o la lista de cuentas objetivo hacia las que se habilita la replicación y la conmutación por error de los objetos especificados desde la cuenta de origen.`,
    // When to replicate
    'h4.3': 'Cuándo replicar',
    // REPLICATION_SCHEDULE = '10 MIN' keeps the secondary in sync every 10 minutes, giving yo…
    'p.3': `<code>REPLICATION_SCHEDULE = '10 MIN'</code> mantiene el secundario sincronizado cada 10 minutos, lo que da un Objetivo de Punto de Recuperación (RPO) de &lt;10 minutos con un RTO casi nulo en la conmutación por error. También se puede usar CRON.`,
  },
});
