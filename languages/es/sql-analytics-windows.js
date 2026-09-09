// ─────────────────────────────────────────────────────────────────────────
// Spanish (es) — sql-analytics-windows
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
  slug: 'sql-analytics-windows',

  page: {
    // Analytics
    'slide-tag': 'Analítica',
    // Window Functions & Advanced SQL
    'nav-label': 'Funciones de ventana & SQL avanzado',
    // Window Functions & Advanced SQL
    's6-header': 'Funciones de ventana & SQL avanzado',
    // QUALIFY eliminates subqueries. Full ANSI window functions plus Snowflake extensions for…
    's6-sub': 'QUALIFY elimina las subconsultas. Funciones de ventana ANSI completas más extensiones de Snowflake para ranking, comparación entre periodos y remodelado de datos.',
    // QUALIFY Clause
    'win-card-label.1': 'Cláusula QUALIFY',
    // Filter window results inline — no CTE needed
    'win-card-desc.1': 'Filtra los resultados de ventana en línea — sin necesidad de CTE',
    // Ranking Functions
    'win-card-label.2': 'Funciones de ranking',
    // Period-over-period without self-joins
    'win-card-desc.3': 'Comparación entre periodos sin self-joins',
    // Running Totals
    'win-card-label.4': 'Totales acumulados',
    // Cumulative sums and averages over partitions
    'win-card-desc.4': 'Sumas y promedios acumulados por partición',
    // Reshape rows to columns and back
    'win-card-desc.5': 'Transforma filas en columnas y viceversa',
    // Boundary values within a window partition
    'win-card-desc.6': 'Valores de frontera dentro de una partición de ventana',
    // QUALIFY: Top-N Per Group
    'h4': 'QUALIFY: Top-N por grupo',
    // Without QUALIFY this requires wrapping in a CTE or subquery. QUALIFY filters on the win…
    'p.1': 'Sin QUALIFY esto requiere envolver la consulta en una CTE o subconsulta. QUALIFY filtra sobre el resultado de la función de ventana en la misma consulta — como HAVING para GROUP BY.',
    // Any window function result is filterable with QUALIFY.
    'p.2': 'Cualquier resultado de una función de ventana se puede filtrar con QUALIFY.',
  },

  // HTML blocks this page builds in JS.
  blocks: {
    // QUALIFY ClauseFilters the result of a window function in the same SELECT — like HAVING …
    'explain.qualify-clause': `<h4>Cláusula QUALIFY</h4><p>Filtra el resultado de una función de ventana en el mismo SELECT — igual que HAVING lo hace con las funciones de agregación. Elimina la necesidad de envolver la consulta en una CTE o subconsulta.</p><p><strong>Patrones comunes:</strong></p><ul><li><code>QUALIFY ROW_NUMBER() OVER (...) = 1</code> — conserva el registro más reciente por partición</li><li><code>QUALIFY RANK() OVER (...) &lt;= 3</code> — top-N por grupo</li><li><code>QUALIFY COUNT(*) OVER (PARTITION BY x) > 1</code> — encuentra duplicados</li></ul><p>QUALIFY se evalúa después de WHERE y GROUP BY, pero antes de ORDER BY — igual que HAVING.</p>`,
    // Ranking FunctionsROW_NUMBER — unique sequential integer. No ties.RANK — ties get the sa…
    'explain.ranking-functions': `<h4>Funciones de ranking</h4><p><strong>ROW_NUMBER</strong> — entero secuencial único. Sin empates.</p><p><strong>RANK</strong> — los empates reciben el mismo rango; el siguiente rango se salta (1,1,3).</p><p><strong>DENSE_RANK</strong> — los empates reciben el mismo rango; el siguiente rango es consecutivo (1,1,2).</p><p><strong>NTILE(n)</strong> — divide las filas en n grupos iguales. Se usa para cuartiles, deciles y rangos percentiles.</p><p><strong>PERCENT_RANK</strong> — rango relativo como fracción de 0 a 1. Se combina con QUALIFY para filtrar el X% superior.</p>`,
    // LEAD and LAGLAG(col, n) returns the value n rows before the current row in the window. …
    'explain.lead-and-lag': `<h4>LEAD y LAG</h4><p><code>LAG(col, n)</code> devuelve el valor de n filas antes de la fila actual dentro de la ventana. <code>LEAD(col, n)</code> devuelve el de n filas más adelante.</p><p><strong>Casos de uso:</strong></p><ul><li>Comparaciones mes contra mes y año contra año</li><li>Detección de brechas entre sesiones (LEAD para encontrar el siguiente evento)</li><li>Detección de cambios de precio (comparar con la lectura anterior)</li></ul><p>El tercer argumento define un valor por defecto cuando el desplazamiento queda fuera de rango: <code>LAG(revenue, 1, 0)</code> devuelve 0 en la primera fila en lugar de NULL.</p>`,
    // Running Totals and Moving AveragesROWS UNBOUNDED PRECEDING — includes all rows from the…
    'explain.running-totals-and-moving-averages': `<h4>Totales acumulados y promedios móviles</h4><p><strong>ROWS UNBOUNDED PRECEDING</strong> — incluye todas las filas desde el inicio de la partición. Es el patrón estándar para sumas acumuladas.</p><p><strong>ROWS BETWEEN N PRECEDING AND CURRENT ROW</strong> — ventana móvil de tamaño fijo (promedio móvil de 7 días).</p><p><strong>Porcentaje acumulado</strong> — divide el total acumulado entre el gran total (un OVER() vacío = todo el conjunto de resultados). Sin necesidad de self-join.</p>`,
    // PIVOT and UNPIVOTPIVOT rotates rows into columns. Specify the aggregate function, the c…
    'explain.pivot-and-unpivot': `<h4>PIVOT y UNPIVOT</h4><p><strong>PIVOT</strong> rota filas para convertirlas en columnas. Se indican la función de agregación, la columna que se va a distribuir y los valores que se usarán como nombres de columna.</p><p><strong>UNPIVOT</strong> invierte el proceso — convierte una tabla ancha con muchas columnas en una tabla alta con una fila por valor. Se usa para normalizar tablas de reporte desnormalizadas.</p><p><strong>PIVOT dinámico</strong> — Snowflake permite usar una subconsulta en la lista IN, así que no hace falta codificar los valores de columna cuando el conjunto se desconoce al momento de la consulta.</p>`,
    // FIRST_VALUE and LAST_VALUEReturn the first or last value in the window frame. Useful fo…
    'explain.first-value-and-last-value': `<h4>FIRST_VALUE y LAST_VALUE</h4><p>Devuelven el primer o el último valor del marco de la ventana. Son útiles para análisis de cohortes y para encontrar el evento de entrada o de salida de cada partición.</p><p><strong>Detalle a cuidar con LAST_VALUE:</strong> el marco por defecto es <code>RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW</code> — lo que significa que el "último valor" es solo la fila actual, a menos que el marco se extienda explícitamente a <code>ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING</code>.</p>`,
  },
});
