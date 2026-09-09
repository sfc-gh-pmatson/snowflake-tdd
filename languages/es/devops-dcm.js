// ─────────────────────────────────────────────────────────────────────────
// Spanish (es) — devops-dcm
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
  slug: 'devops-dcm',

  page: {
    // Data Engineering
    'slide-tag': 'Ingeniería de datos',
    // DevOps & Database Change Management
    'nav-label': 'DevOps & gestión de cambios de base de datos',
    // Database Change Management
    's6-header': 'Gestión de cambios de base de datos',
    // Declarative schema management for Snowflake — define your database objects as code, dep…
    's6-sub': 'Gestión declarativa de esquemas para Snowflake — define los objetos de la base de datos como código, despliega con confianza y elimina la desviación entre entornos.',
    // Imperative (Traditional)
    'dcm-compare-label.1': 'Imperativo (tradicional)',
    // Declarative (DCM)
    'dcm-compare-label.2': 'Declarativo (DCM)',
    // DEFINE Objects
    'dcm-pillar-title.1': 'DEFINE de objetos',
    // Declare tables, views, schemas, and databases in a versioned YAML manifest. DCM compute…
    'dcm-pillar-desc.1': 'Declara tablas, vistas, esquemas y bases de datos en un manifiesto YAML versionado. DCM calcula la diferencia y aplica solo lo que cambió.',
    // manifest.yml
    'dcm-chip.3': 'manifest.yml',
    // Auto-Generated Roles
    'dcm-pillar-title.2': 'Roles generados automáticamente',
    // DCM generates three roles per schema automatically — ADMIN, READ-WRITE, and READ-ONLY —…
    'dcm-pillar-desc.2': 'DCM genera tres roles por esquema de forma automática — ADMIN, READ-WRITE y READ-ONLY — siguiendo el patrón de acceso de tres niveles de Snowflake con los permisos correctos ya otorgados.',
    // ADMIN role
    'dcm-chip.4': 'rol ADMIN',
    // RW role
    'dcm-chip.5': 'rol RW',
    // RO role
    'dcm-chip.6': 'rol RO',
    // CI/CD Deployment
    'dcm-pillar-title.3': 'Despliegue con CI/CD',
    // Use snow dcm plan to preview the changeset and snow dcm deploy to apply it. Drop into a…
    'dcm-pillar-desc.3': `Usa <code style="font-size:10px;">snow dcm plan</code> para previsualizar el conjunto de cambios y <code style="font-size:10px;">snow dcm deploy</code> para aplicarlo. Se integra en cualquier pipeline de GitHub Actions o GitLab CI.`,
    // snow dcm plan
    'dcm-chip.7': 'snow dcm plan',
    // snow dcm deploy
    'dcm-chip.8': 'snow dcm deploy',
    // GitHub Actions
    'dcm-chip.9': 'GitHub Actions',
    // © 2026 Snowflake Inc. All Rights Reserved
    'span': '© 2026 Snowflake Inc. Todos los derechos reservados',
  },
});
