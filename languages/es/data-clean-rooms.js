// ─────────────────────────────────────────────────────────────────────────
// Spanish (es) — data-clean-rooms
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
  slug: 'data-clean-rooms',

  page: {
    // Data Mesh & Sharing
    'slide-tag': 'Data mesh & uso compartido de datos',
    // Data Clean Rooms
    'nav-label': 'Data Clean Rooms',
    // Data Clean Rooms
    's6-header': 'Data Clean Rooms',
    // Collaborate on sensitive data without exposing raw records. Privacy-preserving joint an…
    's6-sub': 'Permite colaborar con datos sensibles sin exponer los registros en bruto. Analítica conjunta que preserva la privacidad más allá de los límites organizacionales.',
    // DCR Architecture
    'dcr-card-label.1': 'Arquitectura de las DCR',
    // Built on Snowflake Native Apps. Analysis logic runs in both parties' accounts — raw dat…
    'dcr-card-desc.1': 'Basadas en Snowflake Native Apps. La lógica de análisis se ejecuta en las cuentas de ambas partes — los datos en bruto nunca cruzan el límite.',
    // Audience Overlap
    'dcr-card-label.2': 'Solapamiento de audiencias',
    // Compute audience overlap between two organizations' customer sets without either party …
    'dcr-card-desc.2': 'Calcula el solapamiento de audiencias entre los conjuntos de clientes de dos organizaciones sin que ninguna de las partes exponga sus registros en bruto.',
    // Attribution Analysis
    'dcr-card-label.3': 'Análisis de atribución',
    // Measure ad campaign attribution by joining impression data with purchase data — governe…
    'dcr-card-desc.3': 'Mide la atribución de campañas publicitarias uniendo datos de impresiones con datos de compras — resultados gobernados y solo agregados.',
    // Templates
    'dcr-card-label.4': 'Plantillas',
    // Pre-approved Jinja query templates define exactly what analyses can run. No arbitrary S…
    'dcr-card-desc.4': 'Plantillas de consulta Jinja preaprobadas definen exactamente qué análisis se pueden ejecutar. Nada de SQL arbitrario sobre los datos del socio.',
    // Privacy Controls
    'dcr-card-label.5': 'Controles de privacidad',
    // Minimum aggregation thresholds and differential privacy noise prevent re-identification…
    'dcr-card-desc.5': 'Los umbrales mínimos de agregación y el ruido de privacidad diferencial evitan la reidentificación a partir de los resultados agregados.',
    // Activation
    'dcr-card-label.6': 'Activación',
    // Export matched audience segments for ad targeting or activation — without exposing the …
    'dcr-card-desc.6': 'Exporta los segmentos de audiencia coincidentes para segmentación publicitaria o activación — sin exponer la lista de coincidencias subyacente.',
    // -- Select a card above to explore Data Clean Room concepts
    'dcr-panel-code': '-- Selecciona una tarjeta arriba para explorar los conceptos de Data Clean Room',
    // Data Clean Rooms
    'h4': 'Data Clean Rooms',
    // Click any card above to see explanations and SQL examples for each aspect of Snowflake …
    'p.1': 'Haz clic en cualquier tarjeta de arriba para ver explicaciones y ejemplos de SQL de cada aspecto de Snowflake Data Clean Rooms.',
    // Clean Rooms enable two parties to compute the intersection of their data without either…
    'p.2': 'Las Clean Rooms permiten que dos partes calculen la intersección de sus datos sin que ninguna vea nunca los registros en bruto de la otra — algo garantizado por la arquitectura, no solo por políticas.',
  },
});
