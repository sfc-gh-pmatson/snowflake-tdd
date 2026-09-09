// ─────────────────────────────────────────────────────────────────────────
// Spanish (es) — snowpark
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
  slug: 'snowpark',

  page: {
    // Data Engineering
    'slide-tag': 'Ingeniería de datos',
    // Write Python, Java, or Scala. Your code runs inside Snowflake's engine as SQL — no data…
    's6-sub': 'Escribe Python, Java o Scala. El código se ejecuta dentro del motor de Snowflake como SQL — sin movimiento de datos, con optimización completa de consultas.',
    // Java
    'sp-lang-name.2': 'Java',
    // Scala
    'sp-lang-name.3': 'Scala',
    // Your Code
    'sp-flow-label.1': 'Tu código',
    // Local IDE, Notebooks, Snowflake CLI
    'sp-flow-sub.1': 'IDE local, notebooks, Snowflake CLI',
    // DataFrame, UDFs, Stored Procs
    'sp-flow-sub.2': 'DataFrame, UDFs, procedimientos almacenados',
    // Pushdown
    'sp-flow-arrow-label.2': 'Pushdown',
    // Snowflake Engine
    'sp-flow-label.3': 'Motor de Snowflake',
    // Optimized SQL, no data movement
    'sp-flow-sub.3': 'SQL optimizado, sin movimiento de datos',
    // DataFrames
    'sp-cap-title.1': 'DataFrames',
    // Lazy evaluation and full query pushdown. pandas-compatible with Snowflake performance.
    'sp-cap-desc.1': 'Evaluación diferida y pushdown completo de consultas. Compatible con pandas y con el rendimiento de Snowflake.',
    // UDFs & UDTFs
    'sp-cap-title.2': 'UDFs & UDTFs',
    // Register Python, Java, or Scala functions as SQL-callable UDFs or table-valued UDTFs.
    'sp-cap-desc.2': 'Registra funciones de Python, Java o Scala como UDFs invocables desde SQL o como UDTFs que devuelven tablas.',
    // Stored Procedures
    'sp-cap-title.3': 'Procedimientos almacenados',
    // Application logic in-database. Transactions, branching, error handling — no external se…
    'sp-cap-desc.3': 'Lógica de aplicación dentro de la base de datos. Transacciones, ramificación, manejo de errores — sin necesidad de un servidor externo.',
    // Vectorized UDFs
    'sp-cap-title.4': 'UDFs vectorizadas',
    // pandas batch execution on Snowflake. High-throughput transformation using your existing…
    'sp-cap-desc.4': 'Ejecución por lotes con pandas en Snowflake. Transformación de alto throughput usando el código pandas existente.',
    // © 2026 Snowflake Inc. All Rights Reserved
    'span': '© 2026 Snowflake Inc. Todos los derechos reservados',
    // Snowpark Execution Model
    'h4': 'Modelo de ejecución de Snowpark',
    // The DataFrame is lazy: no query runs until you call .collect() or .show(). Snowflake co…
    'p.1': `El DataFrame es <strong>diferido</strong>: no se ejecuta ninguna consulta hasta que se invoca <code>.collect()</code> o <code>.show()</code>. Snowflake compila toda la cadena en una única consulta SQL optimizada.`,
    // UDFs are uploaded to Snowflake and run server-side. No data is returned to the client d…
    'p.2': 'Las UDFs se cargan a Snowflake y se ejecutan del lado del servidor. Ningún dato se devuelve al cliente durante el procesamiento.',
    // No data movement. Your Python logic executes inside Snowflake's compute layer alongside…
    'p.3': `<strong>Sin movimiento de datos.</strong> La lógica de Python se ejecuta dentro de la capa de cómputo de Snowflake, junto a los datos.`,
  },
});
