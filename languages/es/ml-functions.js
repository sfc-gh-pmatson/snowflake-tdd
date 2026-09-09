// ─────────────────────────────────────────────────────────────────────────
// Spanish (es) — ml-functions
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
  slug: 'ml-functions',

  page: {
    // In-SQL ML Functions
    'nav-label': 'Funciones de ML en SQL',
    // In-SQL ML Functions
    's6-header': 'Funciones de ML en SQL',
    // Predictive analytics in pure SQL — no Python, no model management, no infrastructure.
    's6-sub': 'Análisis predictivo en SQL puro — sin Python, sin gestión de modelos, sin infraestructura.',
    // Forecasting
    'mlf-card-title.1': 'Pronóstico',
    // Multi-series time-series forecasting with automatic seasonality detection
    'mlf-card-desc.1': 'Pronóstico multiserie de series de tiempo con detección automática de estacionalidad',
    // Anomaly Detection
    'mlf-card-title.2': 'Detección de anomalías',
    // Identify outliers and unexpected patterns in time-series data
    'mlf-card-desc.2': 'Identifica valores atípicos y patrones inesperados en datos de series de tiempo',
    // Classification
    'mlf-card-title.3': 'Clasificación',
    // Predict categorical outcomes from labeled training data
    'mlf-card-desc.3': 'Predice resultados categóricos a partir de datos de entrenamiento etiquetados',
    // Regression
    'mlf-card-title.4': 'Regresión',
    // Predict continuous numeric values from structured features
    'mlf-card-desc.4': 'Predice valores numéricos continuos a partir de características estructuradas',
    // Contribution Explorer
    'mlf-card-title.5': 'Explorador de contribución',
    // Identify which dimensions drove a metric change between periods
    'mlf-card-desc.5': 'Identifica qué dimensiones impulsaron un cambio de métrica entre periodos',
    // Top Insights
    'mlf-card-title.6': 'Principales hallazgos',
    // Automatically surface the most interesting patterns in your data
    'mlf-card-desc.6': 'Revela automáticamente los patrones más interesantes en los datos',
    // -- Click a card above to see the SQL pattern
    'mlf-panel-code': '-- Haga clic en una tarjeta arriba para ver el patrón de SQL',
    // In-SQL ML Functions
    'h4': 'Funciones de ML en SQL',
    // Select any card above to see the SQL pattern and explanation for each ML function.
    'p': 'Seleccione cualquier tarjeta arriba para ver el patrón de SQL y la explicación de cada función de ML.',
    // © 2026 Snowflake Inc. All Rights Reserved
    'span': '© 2026 Snowflake Inc. Todos los derechos reservados',
  },

  // HTML blocks this page builds in JS.
  blocks: {
    // ForecastingCreate a SNOWFLAKE.ML.FORECAST model object against historical data, then ca…
    'explain.forecasting': `<h4>Pronóstico</h4><p>Cree un objeto de modelo <code>SNOWFLAKE.ML.FORECAST</code> sobre datos históricos y luego llame a <code>!FORECAST()</code> para generar predicciones con intervalos de confianza.</p><ul><li><strong>Multiserie:</strong> Configure <code>SERIES_COLNAME</code> para pronosticar de forma independiente cada región, producto o tienda en una sola llamada</li><li><strong>Intervalos de confianza:</strong> <code>LOWER_BOUND</code> y <code>UPPER_BOUND</code> en cualquier nivel de confianza (95% por defecto)</li><li><strong>Variables exógenas:</strong> Incluya entradas conocidas a futuro (días festivos, cambios de precio) para mejorar la precisión</li><li><strong>Actualización automática:</strong> <code>ALTER ... REFRESH()</code> reentrena con los datos más recientes sin reconstruir el pipeline</li></ul>`,
    // Anomaly DetectionTrain on normal data, then call !DETECT_ANOMALIES() on new data. Works…
    'explain.anomaly-detection': `<h4>Detección de anomalías</h4><p>Entrene con datos normales y luego llame a <code>!DETECT_ANOMALIES()</code> sobre datos nuevos. Funciona de forma supervisada (con etiquetas) o no supervisada (sin necesidad de etiquetas).</p><ul><li><strong>Ajuste del umbral:</strong> <code>threshold: 0.99</code> marca solo el 1% de puntos más anómalos — reduzca el valor para una sensibilidad más amplia</li><li><strong>Columnas de salida:</strong> <code>IS_ANOMALY</code> (bool), <code>PERCENTILE</code> y <code>DISTANCE</code> (desviación respecto a la línea base normal)</li><li><strong>Casos de uso:</strong> detección de fraude, monitoreo de sistemas, alertas de calidad de datos, anomalías de sensores IoT</li></ul>`,
    // ClassificationTrain a Snowflake-managed multi-class classifier with standard DDL. Call …
    'explain.classification': `<h4>Clasificación</h4><p>Entrene un clasificador multiclase administrado por Snowflake con DDL estándar. Llame a <code>!PREDICT()</code> para puntuar filas nuevas — sin Python, sin notebook.</p><ul><li><strong>Probabilidades por clase:</strong> Devuelve una probabilidad para cada etiqueta de clase — aplique un umbral sobre la columna de probabilidad para obtener predicciones flexibles</li><li><strong>Importancia de las características:</strong> <code>!SHOW_FEATURE_IMPORTANCE()</code> indica qué columnas impulsan el modelo — útil para las conversaciones sobre explicabilidad</li><li><strong>Evaluación:</strong> <code>!SHOW_EVALUATION_METRICS()</code> devuelve precisión, recall, F1 y AUC sobre datos de prueba reservados</li></ul>`,
    // RegressionTrain a Snowflake-managed regression model to predict continuous numeric valu…
    'explain.regression': `<h4>Regresión</h4><p>Entrene un modelo de regresión administrado por Snowflake para predecir valores numéricos continuos. No requiere infraestructura — entrene, prediga y evalúe en SQL puro.</p><ul><li><strong>Salida:</strong> Una columna <code>&lt;target&gt;_prediction</code> — únala con los datos de origen mediante un ID de fila para su uso posterior</li><li><strong>Evaluación:</strong> R cuadrado (proporción de la varianza explicada), MAE y RMSE mediante <code>!SHOW_EVALUATION_METRICS()</code></li><li><strong>Importancia de las características:</strong> <code>!SHOW_FEATURE_IMPORTANCE()</code> para la explicabilidad del modelo y la orientación en la ingeniería de características</li></ul>`,
    // Contribution ExplorerAutomatically identify which dimension values drove a metric chang…
    'explain.contribution-explorer': `<h4>Explorador de contribución</h4><p>Identifique automáticamente qué valores de dimensión impulsaron un cambio de métrica entre dos periodos de tiempo — sin entrenamiento de modelos, sin Python, resultados inmediatos.</p><ul><li><strong>Caso de uso clásico:</strong> “Los ingresos cayeron 15% — ¿qué región, producto o segmento explica la mayor parte del cambio?”</li><li><strong>Salida:</strong> Cada dimensión + contribuyente clasificado por el porcentaje de <code>RELATIVE_CONTRIBUTION</code></li><li><strong>No requiere entrenamiento:</strong> Descomposición estadística pura — se ejecuta como una sola llamada a función SQL</li></ul>`,
    // Top InsightsAutomatically surface statistically surprising patterns in your data — no m…
    'explain.top-insights': `<h4>Principales hallazgos</h4><p>Revele automáticamente patrones estadísticamente sorprendentes en los datos — sin entrenamiento de modelos, sin datos etiquetados, sin configuración.</p><ul><li><strong>Puntaje SURPRISE (0–1):</strong> Qué tan estadísticamente inesperada es una combinación respecto al resto de los datos — filtre con <code>&gt; 0.8</code> para obtener señales de alta confianza</li><li><strong>Sin configuración:</strong> Pase una tabla, una columna de métrica y columnas de dimensión — y obtenga hallazgos clasificados de inmediato</li><li><strong>Caso de uso:</strong> “Muestra los patrones más interesantes en nuestros datos de ventas por región, producto y segmento”</li></ul>`,
  },
});
