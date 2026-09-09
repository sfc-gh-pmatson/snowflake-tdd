// ─────────────────────────────────────────────────────────────────────────
// Spanish (es) — postgres-mirroring
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
  slug: 'postgres-mirroring',

  page: {
    // Transactions & OLTP
    'slide-tag': 'Transacciones & OLTP',
    // Postgres Data Mirroring
    'nav-label': 'Replicación de datos de Postgres',
    // Snowflake Postgres
    'pm-eyebrow': 'Snowflake Postgres',
    // Data Mirroring
    'pm-title': 'Replicación de datos',
    // Always-on, automatic replication from Postgres to Snowflake. Set it up once — tables st…
    'pm-sub': 'Replicación automática y siempre activa desde Postgres hacia Snowflake. Se configura una sola vez — las tablas se mantienen sincronizadas, incluidos los cambios de esquema, para siempre.',
    // Push-Based CDC — Not Pull
    'pm-feature-title.1': 'CDC basado en push — no en pull',
    // A snowflake_cdc Postgres extension continuously pushes change batches into Iceberg chan…
    'pm-feature-body.1': `Una extensión de Postgres llamada <code style="font-size:10px;background:rgba(41,181,232,.12);padding:1px 4px;border-radius:3px;color:var(--sf-blue);">snowflake_cdc</code> envía continuamente lotes de cambios a registros de cambios en formato Iceberg sobre almacenamiento de objetos. Sin conectores externos que administrar y sin snapshots que puedan entrar en conflicto con los cambios.`,
    // Simple Setup with CREATE MIRROR
    'pm-feature-title.2': 'Configuración simple con CREATE MIRROR',
    // One SQL command replicates an entire Postgres database — or specific schemas. Schema ch…
    'pm-feature-body.2': 'Un solo comando SQL replica una base de datos completa de Postgres — o esquemas específicos. Los cambios de esquema (ADD COLUMN, DROP TABLE) se replican automáticamente y sin intervención manual.',
    // Live Views — Sub-Minute Lag
    'pm-feature-title.3': 'Vistas en vivo — latencia menor a un minuto',
    // Live views merge unapplied change batches with the base table on-the-fly. Queries see d…
    'pm-feature-body.3': 'Las vistas en vivo combinan al momento los lotes de cambios aún no aplicados con la tabla base. Las consultas ven los datos a segundos del commit — incluso si los lotes todavía no se han aplicado. El pushdown de filtros y agregaciones mantiene rápidas las consultas sobre vistas en vivo.',
    // Transactional Consistency
    'pm-feature-title.4': 'Consistencia transaccional',
    // Snowflake applies all tables forward in one transaction — exactly to a Postgres transac…
    'pm-feature-body.4': 'Snowflake avanza todas las tablas en una sola transacción — exactamente hasta un límite de transacción de Postgres. Se preservan las claves foráneas y la corrección de los joins. Las cargas de trabajo con muchas inserciones son rápidas porque las inserciones se agregan al final, nunca se hacen con upsert.',
    // © 2026 Snowflake Inc. All Rights Reserved
    'span': '© 2026 Snowflake Inc. Todos los derechos reservados',
  },
});
