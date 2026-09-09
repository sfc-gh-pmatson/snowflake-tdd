// ─────────────────────────────────────────────────────────────────────────
// Spanish (es) — transactions
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
  slug: 'transactions',

  page: {
    // Transactions & OLTP
    'slide-tag': 'Transacciones & OLTP',
    // Snowflake Transactions
    'nav-label': 'Transacciones en Snowflake',
    // Snowflake for Transactions
    's6-header': 'Snowflake para transacciones',
    // Unify transactions, analytics, and AI on one platform — no ETL, no data movement, no pi…
    's6-sub': 'Unifica transacciones, analítica e IA en una sola plataforma — sin ETL, sin mover datos, sin impuesto de pipelines.',
    // Snowflake Postgres
    'txn-tab.1': 'Snowflake Postgres',
    // Unistore (Hybrid Tables)
    'txn-tab.2': 'Unistore (Hybrid Tables)',
    // Snowflake Postgres
    'txn-eyebrow.1': 'Snowflake Postgres',
    // The world&#8217;s most popular database,now on Snowflake
    'txn-title.1': `La base de datos más popular del mundo,<br>ahora en Snowflake`,
    // Zero code changes. Enterprise SLA. AI-ready from day one.
    'txn-sub.1': 'Cero cambios de código. SLA Enterprise. Lista para IA desde el primer día.',
    // Zero Migration Friction
    'txn-feature-title.1': 'Cero fricción de migración',
    // Migrate Postgres apps with zero code changes. Same drivers, same SQL dialect, same tool…
    'txn-feature-body.1': 'Migra aplicaciones Postgres sin cambios de código. Los mismos drivers, el mismo dialecto SQL, las mismas herramientas — solo hay que apuntar a Snowflake.',
    // Enterprise SLA
    'txn-feature-title.2': 'SLA Enterprise',
    // 99.95% uptime SLA, high availability, 10 days of free continuous backups. Self-managed …
    'txn-feature-body.2': 'SLA de 99.95% de disponibilidad, alta disponibilidad y 10 días de respaldos continuos sin costo. Incluye llaves autoadministradas y conectividad de red privada.',
    // AI-Ready Instantly
    'txn-feature-title.3': 'Lista para IA al instante',
    // Transactional data is immediately available for analytics and Cortex AI — no pipelines,…
    'txn-feature-body.3': 'Los datos transaccionales están disponibles de inmediato para analítica y Cortex AI — sin pipelines, sin copias, sin trabajos de sincronización.',
    // “Snowflake Postgres handles thousands of updates per minute, managing complex workflow …
    'txn-quote-text.1': '“Snowflake Postgres maneja miles de actualizaciones por minuto, gestiona estados de flujos de trabajo complejos y aplica bloqueo de granularidad fina — con facilidad.”',
    // Mike Willett · Head of Data Platform, SimCorp
    'txn-quote-attr.1': 'Mike Willett · Head of Data Platform, SimCorp',
    // 10× Faster disk operations vs prior Postgres solution
    'txn-quote-stat.1': '10× más rápido en operaciones de disco frente a la solución Postgres anterior',
    // Architecture
    'txn-arch-label.1': 'Arquitectura',
    // Postgres Apps
    'txn-arch-box-title.1': 'Aplicaciones Postgres',
    // Same drivers & SQL
    'txn-arch-box-sub.1': 'Mismos drivers & SQL',
    // API / App Layer
    'txn-arch-box-title.2': 'Capa de API / aplicación',
    // Zero code changes
    'txn-arch-box-sub.2': 'Cero cambios de código',
    // Snowflake Postgres
    'txn-arch-center-title': 'Snowflake Postgres',
    // Row-store · ACID · pg-compatible · 99.95% SLA
    'txn-arch-center-sub': 'Row-store · ACID · compatible con pg · SLA de 99.95%',
    // GA &nbsp;&#183;&nbsp; Generally Available
    'txn-arch-badge': `<span class="txn-arch-badge-dot"></span>GA &nbsp;&#183;&nbsp; Disponibilidad General`,
    // Analytics
    'txn-arch-box-title.3': 'Analítica',
    // Same data, no ETL
    'txn-arch-box-sub.3': 'Mismos datos, sin ETL',
    // Real-time inference
    'txn-arch-box-sub.4': 'Inferencia en tiempo real',
    // Snowflake CoCo
    'txn-arch-box-title.5': 'Snowflake CoCo',
    // Instant context
    'txn-arch-box-sub.5': 'Contexto instantáneo',
    // Unistore · Hybrid Tables
    'txn-eyebrow.2': 'Unistore · Hybrid Tables',
    // One SQL statement.Two data worlds.
    'txn-title.2': `Una sentencia SQL.<br>Dos mundos de datos.`,
    // Join transactional and analytical data inline — retire separate databases and the ETL j…
    'txn-sub.2': 'Combina datos transaccionales y analíticos en línea — retira las bases de datos separadas y los trabajos de ETL que las conectaban.',
    // One JOIN, No ETL
    'txn-feature-title.4': 'Un JOIN, sin ETL',
    // Hybrid Tables are row-store tables inside Snowflake, optimized for point lookups and hi…
    'txn-feature-body.4': 'Las Hybrid Tables son tablas de tipo row-store dentro de Snowflake, optimizadas para búsquedas puntuales y escrituras de alta concurrencia. Se combinan con tablas normales de Snowflake en SQL estándar — sin necesidad de un pipeline.',
    // No Pipeline Tax
    'txn-feature-title.5': 'Sin impuesto de pipelines',
    // Keep app and workflow state synced with analytics automatically. One governance model, …
    'txn-feature-body.5': 'Mantiene el estado de la aplicación y del flujo de trabajo sincronizado con la analítica de forma automática. Un modelo de gobernanza, una capa de seguridad, una sola fuente de verdad para los datos transaccionales y analíticos.',
    // Unified Governance
    'txn-feature-title.6': 'Gobernanza unificada',
    // Masking policies, row-level access, lineage, and RBAC apply equally to Hybrid Tables an…
    'txn-feature-body.6': 'Las políticas de enmascaramiento, el acceso a nivel de fila, el linaje y el RBAC se aplican por igual a las Hybrid Tables y a las tablas normales. Sin un modelo de seguridad aparte.',
    // “Hybrid Tables just made everything much simpler for us. We reduced our architectural f…
    'txn-quote-text.2': '“Las Hybrid Tables simplemente hicieron todo mucho más simple para nosotros. Reducimos nuestra huella arquitectónica, centralizamos nuestros datos en una sola plataforma y logramos trabajos que antes eran inalcanzables.”',
    // Ron Stiffler · Chief Architect, MarketWise
    'txn-quote-attr.2': 'Ron Stiffler · Chief Architect, MarketWise',
    // 50% Less infrastructure & development for data ingestion
    'txn-quote-stat.2': '50% menos de infraestructura & desarrollo para la ingesta de datos',
    // Hybrid Table Architecture
    'txn-arch-label.2': 'Arquitectura de Hybrid Tables',
    // Hybrid Table
    'txn-uni-table-tag.1': 'Hybrid Table',
    // orders
    'txn-uni-table-name.1': 'orders',
    // Row-store · OLTP-optimized
    'txn-uni-table-meta.1': 'Row-store · optimizada para OLTP',
    // Point lookups < 10ms
    'txn-uni-table-meta.2': `Búsquedas puntuales < 10ms`,
    // Snowflake Table
    'txn-uni-table-tag.2': 'Tabla de Snowflake',
    // Columnar · Analytics-optimized
    'txn-uni-table-meta.3': 'Columnar · optimizada para analítica',
    // Petabyte-scale
    'txn-uni-table-meta.4': 'Escala de petabytes',
    // SELECT o.order_id, h.lifetime_value FROM &nbsp;orders o JOIN &nbsp;order_history h &nbs…
    'txn-uni-join': `<span class="code-kw">SELECT</span> <span class="code-id">o.order_id</span><span class="code-punc">,</span> <span class="code-id">h.lifetime_value</span><br> <span class="code-kw">FROM</span> &nbsp;<span class="code-id">orders</span> <span class="code-id">o</span><br> <span class="code-kw">JOIN</span> &nbsp;<span class="code-id">order_history</span> <span class="code-id">h</span><br> &nbsp;&nbsp;<span class="code-kw">ON</span> <span class="code-id">o.customer_id</span> <span class="code-punc">=</span> <span class="code-id">h.customer_id</span><br> <span class="code-kw">WHERE</span> <span class="code-id">o.status</span> <span class="code-punc">=</span> <span class="code-str">'pending'</span><span class="code-punc">;</span>`,
    // Result
    'txn-uni-result-label': 'Resultado',
    // Real-time transactional + historical analytical data — one query, zero ETL
    'txn-uni-result-text': 'Datos transaccionales en tiempo real + datos analíticos históricos — una consulta, cero ETL',
    // © 2026 Snowflake Inc. All Rights Reserved
    'span': '© 2026 Snowflake Inc. Todos los derechos reservados',
  },
});
