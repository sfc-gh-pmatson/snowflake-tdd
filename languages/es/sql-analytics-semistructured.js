// ─────────────────────────────────────────────────────────────────────────
// Spanish (es) — sql-analytics-semistructured
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
  slug: 'sql-analytics-semistructured',

  page: {
    // Analytics
    'slide-tag': 'Analítica',
    // Semi-Structured / JSON
    'nav-label': 'Semiestructurado / JSON',
    // Semi-Structured Data & JSON
    's6-header': 'Datos semiestructurados & JSON',
    // Land raw JSON. Query it immediately. Add structure progressively. No schema definition …
    's6-sub': 'Aterriza JSON en bruto. Consúltalo de inmediato. Agrega estructura progresivamente. Sin definir el esquema por adelantado.',
    // VARIANT & Path Syntax
    'ss-card-label.1': 'VARIANT & sintaxis de rutas',
    // Typed read-on-access with colon notation
    'ss-card-desc.1': 'Lectura tipada en el acceso con notación de dos puntos',
    // Explode nested arrays into rows
    'ss-card-desc.2': 'Expande arreglos anidados en filas',
    // Build JSON from structured data
    'ss-card-desc.3': 'Construye JSON a partir de datos estructurados',
    // Ingest raw JSON strings safely
    'ss-card-desc.4': 'Ingiere cadenas JSON en bruto de forma segura',
    // Auto-detect schema from staged files
    'ss-card-desc.5': 'Detecta el esquema automáticamente desde archivos en un stage',
    // ARRAY Functions
    'ss-card-label.6': 'Funciones de ARRAY',
    // JSON + FLATTEN in one query
    'h4': 'JSON + FLATTEN en una sola consulta',
    // Access nested JSON fields with colon path syntax. LATERAL FLATTEN explodes the tags arr…
    'p.1': 'Accede a campos JSON anidados con la sintaxis de ruta con dos puntos. LATERAL FLATTEN expande el arreglo tags para que cada etiqueta se convierta en su propia fila unida al evento padre.',
    // The WHERE clause filters on a nested field — Snowflake pushes the predicate down into t…
    'p.2': 'La cláusula WHERE filtra sobre un campo anidado — Snowflake empuja el predicado hacia el escaneo del VARIANT.',
  },

  // HTML blocks this page builds in JS.
  blocks: {
    // VARIANT Path SyntaxAccess nested JSON using colon-dot notation: payload:user:id. Cast o…
    'explain.variant-path-syntax': `<h4>Sintaxis de rutas de VARIANT</h4><p>Accede a JSON anidado con la notación de dos puntos y puntos: <code>payload:user:id</code>. Convierte el tipo en la lectura con <code>::TYPE</code>.</p><p><strong>Reglas:</strong></p><ul><li>Las claves inexistentes devuelven NULL — sin error</li><li>Convierte el tipo de inmediato para evitar la coerción implícita a cadena</li><li>Snowflake crea automáticamente un índice de columnas virtuales sobre las rutas de VARIANT</li></ul><p>No se requiere ningún cambio de esquema para agregar campos JSON nuevos — se pueden consultar de inmediato.</p>`,
    // FLATTENConverts a JSON array into rows. Each element in the array becomes a separate ro…
    'explain.flatten': `<h4>FLATTEN</h4><p>Convierte un arreglo JSON en filas. Cada elemento del arreglo se convierte en una fila separada unida a su fila padre.</p><p><strong>LATERAL FLATTEN:</strong> hace un cross join de cada arreglo con su fila padre. Un pedido con 3 líneas produce 3 filas — una por línea.</p><p>Accede al elemento actual con <code>item.value</code>. Usa <code>item.index</code> para la posición y <code>item.path</code> para la cadena de la ruta.</p>`,
    // OBJECT_CONSTRUCT &amp; ARRAY_AGGBuild structured JSON from relational data. OBJECT_CONS…
    'explain.object-construct-and-array-agg': `<h4>OBJECT_CONSTRUCT &amp; ARRAY_AGG</h4><p>Construye JSON estructurado a partir de datos relacionales. <code>OBJECT_CONSTRUCT</code> crea un objeto JSON a partir de pares clave-valor. <code>ARRAY_AGG</code> agrupa filas en un arreglo JSON.</p><p>Sirve para producir respuestas JSON listas para una API a partir de tablas normalizadas, sin que una capa de aplicación tenga que armarlas.</p>`,
    // PARSE_JSON &amp; TRY_PARSE_JSONConvert a JSON string column into a queryable VARIANT va…
    'explain.parse-json-and-try-parse-json': `<h4>PARSE_JSON &amp; TRY_PARSE_JSON</h4><p>Convierte una columna de cadena JSON en un valor VARIANT consultable.</p><p><strong>PARSE_JSON</strong> — genera un error si el JSON está mal formado. Úsalo cuando controlas la fuente y sabes que es válido.</p><p><strong>TRY_PARSE_JSON</strong> — devuelve NULL si la entrada está mal formada. Úsalo con fuentes no confiables, como cargas de webhooks o datos enviados por usuarios.</p>`,
    // INFER_SCHEMAAutomatically detects column names, types, and nullability from Parquet, Av…
    'explain.infer-schema': `<h4>INFER_SCHEMA</h4><p>Detecta automáticamente los nombres, tipos y nulabilidad de las columnas desde archivos Parquet, Avro, ORC o JSON ubicados en un stage.</p><p>Usa <code>USING TEMPLATE</code> con el patrón de ARRAY_AGG para crear una tabla correctamente tipada sin escribir el DDL manualmente.</p><p>Elimina el paso de "adivinar el esquema" al incorporar nuevas fuentes de datos — ejecuta INFER_SCHEMA, revisa la salida, ajusta si es necesario y ejecuta CREATE TABLE.</p>`,
    // Array FunctionsWork directly with JSON arrays without FLATTEN when you only need a chec…
    'explain.array-functions': `<h4>Funciones de arreglos</h4><p>Trabaja directamente con arreglos JSON sin FLATTEN cuando solo se necesita una verificación o una extracción simple.</p><ul><li><strong>ARRAY_CONTAINS(value, array)</strong> — devuelve true si el valor está en el arreglo. Nota: el valor debe convertirse a VARIANT.</li><li><strong>ARRAY_SIZE(array)</strong> — devuelve la cantidad de elementos.</li><li><strong>ARRAY_SLICE(array, from, to)</strong> — devuelve un subarreglo por rango de índices.</li><li><strong>ARRAYS_OVERLAP(a, b)</strong> — devuelve true si algún elemento aparece en ambos arreglos.</li></ul>`,
  },
});
