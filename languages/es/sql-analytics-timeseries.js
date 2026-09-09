// ─────────────────────────────────────────────────────────────────────────
// Spanish (es) — sql-analytics-timeseries
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
  slug: 'sql-analytics-timeseries',

  page: {
    // Analytics
    'slide.tag': 'Análisis',
    // Time Series Analytics
    'nav.label': 'Análisis de Series Temporales',
    // Time Series Analytics
    'header': 'Análisis de Series Temporales',
    // Purpose-built SQL constructs for ordered time data. Fill gaps, align on nearest timesta…
    'sub': 'Construcciones SQL diseñadas específicamente para datos temporales ordenados. Rellena huecos, alinea con la marca de tiempo más cercana y desliza ventanas sin subconsultas.',
    // Generate a gapless time scaffold for any interval
    'card.datespine.desc': 'Genera un armazón temporal sin huecos para cualquier intervalo',
    // Time Slice
    'ts-card-label.2': 'Time Slice',
    // DATE_TRUNC and TIME_SLICE for period bucketing
    'card.timeslice.desc': 'DATE_TRUNC y TIME_SLICE para agrupar por periodos',
    // Join to the nearest prior timestamp
    'card.asof.desc': 'Une con la marca de tiempo anterior más cercana',
    // Interval-based sliding window frames
    'card.range.desc': 'Marcos de ventana deslizante basados en intervalos',
    // Resample
    'ts-card-label.5': 'Remuestreo',
    // Change time granularity with aggregation
    'card.resample.desc': 'Cambia la granularidad temporal con agregación',
    // Interpolate
    'ts-card-label.6': 'Interpolación',
    // Fill gaps with linear or forward-fill values
    'card.interpolate.desc': 'Rellena huecos con valores lineales o de arrastre',
    // Complete Time Series Pipeline
    'h4': 'Pipeline completo de series de tiempo',
    // DATE_SPINE generates every day in the range. LEFT JOIN ensures dates with no events sho…
    'p.1': 'DATE_SPINE genera todos los días del rango. LEFT JOIN garantiza que las fechas sin eventos muestren 0 y no NULL. La ventana del promedio móvil recorre el andamiaje completo.',
    // No complex CTEs for gap-filling. One clean query.
    'p.2': 'Sin CTEs complejas para rellenar huecos. Una sola consulta limpia.',
  },

  // HTML blocks this page builds in JS.
  blocks: {
    // DATE_SPINEGenerates one row per time period between two dates. Eliminates the need for …
    'explain.datespine': `<h4>DATE_SPINE</h4><p>Genera una fila por cada periodo de tiempo entre dos fechas. Elimina la necesidad de CTEs recursivas o de tablas de calendario.</p><p>Uso clásico: generar todos los días del año y luego hacer LEFT JOIN con los datos de transacciones para que los días sin actividad aparezcan como cero — algo crítico para gráficos de tendencia precisos.</p><p>Consejo: envolverlo en una CTE llamada <code>spine</code> como base de la consulta de series de tiempo.</p>`,
    // TIME_SLICE &amp; DATE_TRUNCTIME_SLICE(ts, n, unit) buckets timestamps into fixed-width …
    'explain.timeslice': `<h4>TIME_SLICE &amp; DATE_TRUNC</h4><p><strong>TIME_SLICE(ts, n, unit)</strong> agrupa marcas de tiempo en intervalos de ancho fijo. A diferencia de DATE_TRUNC, no está limitado a los límites del calendario — sirve para agrupar en intervalos de 15 minutos, 5 minutos o cualquier intervalo personalizado.</p><p><strong>DATE_TRUNC(unit, ts)</strong> trunca a un límite del calendario: 'month', 'week', 'day', 'hour', etc. Es la opción clásica para agregaciones de reportes diarios o mensuales.</p>`,
    // ASOF JOINJoins each row to the matching row with the nearest prior (or equal) timestamp…
    'explain.asof': `<h4>ASOF JOIN</h4><p>Une cada fila con la fila coincidente que tiene la marca de tiempo previa (o igual) más cercana. Sin join por rangos, sin función de ventana, sin CTE de self-join.</p><p><strong>Usos clásicos:</strong></p><ul><li>Asociar el precio más reciente a cada operación</li><li>Obtener el tipo de cambio vigente al momento de la transacción</li><li>Unir lecturas de sensores con el cambio de configuración previo más cercano</li></ul><p>La <code>MATCH_CONDITION</code> controla la dirección: <code>&gt;=</code> para el más cercano anterior, <code>&lt;=</code> para el más cercano posterior.</p>`,
    // RANGE BETWEEN with IntervalsRANGE-based window frames use value distance rather than ro…
    'explain.range': `<h4>RANGE BETWEEN con intervalos</h4><p>Los marcos de ventana basados en RANGE usan la <strong>distancia entre valores</strong> en lugar del número de filas. Con <code>INTERVAL '1 hour' PRECEDING</code>, la ventana incluye todas las filas de los últimos 60 minutos — sin importar cuántas filas sean.</p><p>Es fundamental en series de tiempo irregulares, donde las lecturas no llegan a intervalos fijos. Un marco ROWS de 10 filas previas podría abarcar 10 segundos o 10 horas; RANGE es determinista independientemente de la densidad de los datos.</p>`,
    // Resample (Change Time Granularity)Resampling converts a fine-grained time series into a…
    'explain.resample': `<h4>Remuestreo (cambiar la granularidad temporal)</h4><p>El remuestreo convierte una serie de tiempo de grano fino en una más gruesa. El patrón es: agrupar las marcas de tiempo con <code>TIME_SLICE</code> o <code>DATE_TRUNC</code> y luego agregar dentro de cada grupo.</p><p><strong>Patrones comunes:</strong></p><ul><li>Datos tick → barras OHLC (con FIRST_VALUE/LAST_VALUE/MIN/MAX)</li><li>Eventos en bruto → conteos por hora o por día</li><li>Métricas por segundo → promedios de 5 minutos</li></ul>`,
    // Interpolation PatternsForward-fill (LOCF): Use LAST_VALUE(col IGNORE NULLS) OVER (ORDER…
    'explain.interpolate': `<h4>Patrones de interpolación</h4><p><strong>Relleno hacia adelante (LOCF):</strong> usar <code>LAST_VALUE(col IGNORE NULLS) OVER (ORDER BY ts ROWS UNBOUNDED PRECEDING)</code> para arrastrar el último valor conocido a través de los periodos faltantes.</p><p><strong>Interpolación lineal:</strong> combinar LAST_VALUE y LEAD para encontrar los valores que delimitan el hueco y luego calcular el relleno proporcional entre ellos.</p><p>La cláusula <code>IGNORE NULLS</code> es clave — sin ella, LAST_VALUE devuelve el valor de la última fila aunque sea nulo.</p>`,
  },

  // Translated talk-track notes. A selected personal notes
  // author still takes priority over this.
  notes: `
<h3>Guión de Presentación</h3>
<p>El análisis de series temporales es donde el SQL estándar se vuelve incómodo: rellenar huecos requiere tablas de calendario, alinear eventos desalineados requiere subconsultas correlacionadas y las ventanas deslizantes requieren sintaxis de marcos compleja. Snowflake incorpora construcciones específicas que eliminan las tres.</p>

<h3>Puntos Clave</h3>
<ul>
  <li><strong>DATE_SPINE:</strong> Genera un armazón temporal sin huecos sin CTEs recursivos ni tablas de calendario.</li>
  <li><strong>ASOF JOIN:</strong> Une con la marca de tiempo anterior más cercana — ideal para precios, cotizaciones y lecturas de sensores.</li>
  <li><strong>RANGE BETWEEN:</strong> Marcos de ventana basados en intervalos reales de tiempo, no en recuentos de filas.</li>
  <li><strong>Todo es SQL:</strong> Sin librerías externas, sin exportar a Python — se ejecuta sobre los datos gobernados donde ya residen.</li>
</ul>

<h3>Preguntas para Hacer</h3>
<ul>
  <li>¿Cómo manejan hoy los periodos sin actividad en sus informes de tendencias?</li>
  <li>¿Tienen flujos de datos que llegan con marcas de tiempo desalineadas y que necesitan reconciliar?</li>
  <li>¿Se está exportando parte de este trabajo temporal a Python o a una base de datos de series temporales aparte?</li>
</ul>`,
});
