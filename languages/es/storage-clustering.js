// ─────────────────────────────────────────────────────────────────────────
// Spanish (es) — storage-clustering
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
  slug: 'storage-clustering',

  page: {
    // Storage & Tables
    'slide-tag': 'Almacenamiento & tablas',
    // Clustering & Search Optimization
    'nav-label': 'Clustering & Search Optimization',
    // Clustering & Search Optimization
    's6-header': 'Clustering & Search Optimization',
    // Two complementary techniques for accelerating queries on large tables — automatic clust…
    's6-sub': 'Dos técnicas complementarias para acelerar consultas sobre tablas grandes — clustering automático para escaneos por rango y el Search Optimization Service para búsquedas puntuales.',
    // Clustering
    'cs-tab.1': 'Clustering',
    // Search Optimization Service
    'cs-tab.2': 'Search Optimization Service',
    // Use Clustering when
    'cs-when-label.1': 'Usa clustering cuando',
    // Skip Clustering when
    'cs-when-label.2': 'Omite el clustering cuando',
    // Choosing a Cluster Key
    'cs-card-title.1': 'Elegir una clave de cluster',
    // Pick columns that appear most often in WHERE clauses and have moderate-to-high cardinal…
    'cs-card-desc.1': 'Elige columnas que aparezcan con más frecuencia en las cláusulas WHERE y que tengan cardinalidad de moderada a alta. Las columnas de baja cardinalidad (p. ej. booleanas) aportan poco beneficio; una cardinalidad demasiado alta (UUID) dispersa las filas en exceso.',
    // cardinality
    'cs-chip.2': 'cardinalidad',
    // filter patterns
    'cs-chip.3': 'patrones de filtrado',
    // Automatic Reclustering
    'cs-card-title.2': 'Reclustering automático',
    // Once a cluster key is defined, Snowflake monitors clustering depth and triggers reclust…
    'cs-card-desc.2': 'Una vez definida la clave de cluster, Snowflake monitorea la profundidad de clustering y activa el reclustering de forma serverless en segundo plano a medida que el DML genera desorden. No se necesitan comandos ALTER ni reconstrucciones manuales.',
    // Serverless
    'cs-chip.4': 'Serverless',
    // Background
    'cs-chip.5': 'En segundo plano',
    // Zero maintenance
    'cs-chip.6': 'Cero mantenimiento',
    // Monitoring Clustering Depth
    'cs-card-title.3': 'Monitorear la profundidad de clustering',
    // SYSTEM$CLUSTERING_INFORMATION returns average depth and average overlaps. Lower depth =…
    'cs-card-desc.3': 'SYSTEM$CLUSTERING_INFORMATION devuelve la profundidad promedio y los solapamientos promedio. Menor profundidad = mejor pruning. Sigue el consumo de créditos de reclustering con AUTOMATIC_CLUSTERING_HISTORY.',
    // Clustering Cost Model
    'cs-card-title.4': 'Modelo de costo del clustering',
    // Reclustering consumes serverless credits proportional to the data volume reorganized. B…
    'cs-card-desc.4': 'El reclustering consume créditos serverless en proporción al volumen de datos reorganizado. Equilibra el ahorro del reclustering (menor costo de escaneo) frente a su gasto. Las tablas con mucha rotación pueden reclusterizarse con frecuencia; las tablas mayormente de inserción rara vez lo necesitan.',
    // Serverless credits
    'cs-chip.9': 'Créditos serverless',
    // ROI analysis
    'cs-chip.10': 'Análisis de ROI',
    // Use Search Optimization when
    'cs-when-label.3': 'Usa Search Optimization cuando',
    // vs. Clustering
    'cs-when-label.4': 'frente al clustering',
    // Equality & Range Lookups
    'cs-card-title.5': 'Búsquedas de igualdad & rango',
    // SOS builds access paths for equality (=, IN) and range (, BETWEEN) predicates on high-c…
    'cs-card-desc.5': `SOS crea rutas de acceso para predicados de igualdad (=, IN) y de rango (<, >, BETWEEN) sobre columnas de alta cardinalidad. Las consultas no cambian — Snowflake usa automáticamente la ruta de acceso cuando resulta útil.`,
    // Transparent
    'cs-chip.13': 'Transparente',
    // Substring & VARIANT Search
    'cs-card-title.6': 'Búsqueda de subcadenas & VARIANT',
    // Enable substring search for LIKE '%term%' and ILIKE patterns on text columns. Also supp…
    'cs-card-desc.6': "Habilita la búsqueda de subcadenas para patrones LIKE '%term%' e ILIKE en columnas de texto. También admite búsquedas de igualdad sobre valores de subcampos VARIANT sin extraer todo el JSON en cada fila.",
    // VARIANT paths
    'cs-chip.16': 'Rutas VARIANT',
    // Setup & Management
    'cs-card-title.7': 'Configuración & administración',
    // One ALTER TABLE command enables SOS on specific columns and access types. Snowflake bui…
    'cs-card-desc.7': 'Un solo comando ALTER TABLE habilita SOS en columnas y tipos de acceso específicos. Snowflake crea las rutas de acceso sin conexión — sin bloqueo de tabla y sin impacto en las consultas durante la construcción. Se puede deshabilitar por columna para controlar el costo de almacenamiento.',
    // Monitoring & Cost
    'cs-card-title.8': 'Monitoreo & costo',
    // SOS builds access paths incrementally, consuming serverless credits. Monitor build prog…
    'cs-card-desc.8': 'SOS crea las rutas de acceso de forma incremental, consumiendo créditos serverless. Monitorea el avance de la construcción y la aceleración de las consultas con SEARCH_OPTIMIZATION_HISTORY y los planes de EXPLAIN — busca "Search Optimization: YES" en la salida del plan.',
    // © 2026 Snowflake Inc. All Rights Reserved
    'span': '© 2026 Snowflake Inc. Todos los derechos reservados',
  },
});
