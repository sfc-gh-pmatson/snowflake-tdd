// ─────────────────────────────────────────────────────────────────────────
// Spanish (es) — storage-micropartitions
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
  slug: 'storage-micropartitions',

  page: {
    // Storage & Tables
    'slide-tag': 'Almacenamiento & tablas',
    // Micro-Partitioning
    'nav-label': 'Microparticionamiento',
    // Storage Architecture
    'mp-eyebrow': 'Arquitectura de almacenamiento',
    // Micro-Partitioning
    'mp-title': 'Microparticionamiento',
    // Every Snowflake table is automatically divided into immutable, compressed micro-partiti…
    'mp-sub': 'Cada tabla de Snowflake se divide automáticamente en microparticiones inmutables y comprimidas — sin ajustes, sin diseño de índices, sin mantenimiento manual.',
    // Immutable Columnar Storage
    'mp-feature-title.1': 'Almacenamiento columnar inmutable',
    // Data is stored in 50–500 MB compressed columnar files. DML never overwrites a partition…
    'mp-feature-body.1': 'Los datos se guardan en archivos columnares comprimidos de 50–500 MB. El DML nunca sobrescribe una partición — las actualizaciones y eliminaciones crean particiones nuevas, lo que deja disponibles las versiones anteriores para Time Travel. Sin fragmentación, sin vacuum, sin reconstrucción de índices.',
    // Rich Column-Level Metadata
    'mp-feature-title.2': 'Metadatos ricos a nivel de columna',
    // For every column in every micro-partition, Snowflake stores: min/max values, distinct c…
    'mp-feature-body.2': `Para cada columna de cada micropartición, Snowflake almacena: <b>valores mínimo y máximo</b>, <b>conteo de valores distintos</b>, <b>conteo de nulos</b> y un <b>filtro de Bloom</b>. Estos metadatos residen en la capa de Cloud Services — no se requiere escanear la tabla para determinar la relevancia de una partición.`,
    // Partition Pruning
    'mp-feature-title.3': 'Poda de particiones',
    // Before any scan, Snowflake compares query predicates against partition metadata. Partit…
    'mp-feature-body.3': 'Antes de cualquier escaneo, Snowflake compara los predicados de la consulta con los metadatos de las particiones. Las particiones cuyo rango mínimo/máximo no puede contener filas coincidentes se omiten por completo. En tablas bien ordenadas se puede podar entre 80–99% de las particiones — lo que reduce drásticamente la I/O y el costo de cómputo.',
    // Time Travel & Fail-Safe
    'mp-feature-title.4': 'Time Travel & Fail-Safe',
    // Because partitions are never overwritten, Snowflake retains previous versions automatic…
    'mp-feature-body.4': `Como las particiones nunca se sobrescriben, Snowflake conserva las versiones anteriores de forma automática. <code style="font-size:10px;background:rgba(41,181,232,.1);padding:1px 4px;border-radius:3px;color:var(--sf-blue);">AT(TIMESTAMP =&gt; ...)</code> o <code style="font-size:10px;background:rgba(41,181,232,.1);padding:1px 4px;border-radius:3px;color:var(--sf-blue);">BEFORE(STATEMENT =&gt; ...)</code> consultan la tabla tal como estaba. Fail-Safe extiende la protección 7 días más allá de la ventana de Time Travel para recuperación ante desastres.`,
    // ORDERS table — 400M rows
    'mp-raw-title': 'Tabla ORDERS — 400M filas',
    // Data written across multiple loads and DML operations
    'mp-raw-sub': 'Datos escritos a lo largo de múltiples cargas y operaciones DML',
    // Snowflake organizes automatically at write time
    'mp-arrow-label': 'Snowflake organiza automáticamente al momento de la escritura',
    // Micro-partition 1
    'mp-part-label.1': 'Micropartición 1',
    // Jan 1 – Jan 31
    'mp-part-val.1': '1 ene – 31 ene',
    // rows: 2.1M &nbsp;·&nbsp; 312 MBstatus: FULFILLED, PENDING
    'mp-part-meta.1': `filas: 2.1M &nbsp;·&nbsp; 312 MB<br>status: FULFILLED, PENDING`,
    // Pruned
    'mp-part-badge.1': 'Podada',
    // Micro-partition 2
    'mp-part-label.2': 'Micropartición 2',
    // Feb 1 – Feb 28
    'mp-part-val.2': '1 feb – 28 feb',
    // rows: 1.9M &nbsp;·&nbsp; 287 MBstatus: FULFILLED, CANCELLED
    'mp-part-meta.2': `filas: 1.9M &nbsp;·&nbsp; 287 MB<br>status: FULFILLED, CANCELLED`,
    // Pruned
    'mp-part-badge.2': 'Podada',
    // Micro-partition 3
    'mp-part-label.3': 'Micropartición 3',
    // Mar 1 – Mar 31
    'mp-part-val.3': '1 mar – 31 mar',
    // rows: 2.3M &nbsp;·&nbsp; 341 MBstatus: PENDING, PROCESSING
    'mp-part-meta.3': `filas: 2.3M &nbsp;·&nbsp; 341 MB<br>status: PENDING, PROCESSING`,
    // Scanned
    'mp-part-badge.3': 'Escaneada',
    // Micro-partition 4
    'mp-part-label.4': 'Micropartición 4',
    // Apr 1 – Apr 30
    'mp-part-val.4': '1 abr – 30 abr',
    // rows: 2.0M &nbsp;·&nbsp; 298 MBstatus: FULFILLED
    'mp-part-meta.4': `filas: 2.0M &nbsp;·&nbsp; 298 MB<br>status: FULFILLED`,
    // Pruned
    'mp-part-badge.4': 'Podada',
    // 1 partition scanned
    'mp-result-scanned': '1 partición escaneada',
    // 3 partitions pruned — 75% less I/O
    'mp-result-pruned': '3 particiones podadas — 75% menos de I/O',
    // © 2026 Snowflake Inc. All Rights Reserved
    'span': '© 2026 Snowflake Inc. Todos los derechos reservados',
  },
});
