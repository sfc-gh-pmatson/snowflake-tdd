// ─────────────────────────────────────────────────────────────────────────
// Spanish (es) — sql-analytics-geospatial
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
  slug: 'sql-analytics-geospatial',

  page: {
    // Analytics
    'slide-tag': 'Analítica',
    // Geospatial Analytics
    'nav-label': 'Analítica geoespacial',
    // Geospatial Analytics
    's6-header': 'Analítica geoespacial',
    // Native GEOGRAPHY and GEOMETRY types. 50+ ST_* functions. H3 hexagonal indexing for scal…
    's6-sub': 'Tipos nativos GEOGRAPHY y GEOMETRY. Más de 50 funciones ST_*. Indexación hexagonal H3 para análisis de densidad escalable.',
    // GEOGRAPHY Type
    'geo-card-label.1': 'Tipo GEOGRAPHY',
    // WGS84 real-world coordinates (lat/lon)
    'geo-card-desc.1': 'Coordenadas WGS84 del mundo real (lat/lon)',
    // Proximity and containment queries
    'geo-card-desc.2': 'Consultas de proximidad y contención',
    // Merge and aggregate geometries
    'geo-card-desc.3': 'Combina y agrega geometrías',
    // H3 Indexing
    'geo-card-label.4': 'Indexación H3',
    // Hexagonal density analysis at any resolution
    'geo-card-desc.4': 'Análisis de densidad hexagonal en cualquier resolución',
    // GeoJSON I/O
    'geo-card-label.5': 'Entrada/salida GeoJSON',
    // Ingest and export for mapping tools
    'geo-card-desc.5': 'Ingesta y exportación para herramientas de mapas',
    // GEOMETRY Type
    'geo-card-label.6': 'Tipo GEOMETRY',
    // Flat-plane coordinates for engineering CRS
    'geo-card-desc.6': 'Coordenadas en plano para CRS de ingeniería',
    // Proximity Search
    'h4': 'Búsqueda por proximidad',
    // ST_DWITHIN filters to locations within a radius (meters). ST_DISTANCE returns the exact…
    'p.1': 'ST_DWITHIN filtra las ubicaciones que están dentro de un radio (en metros). ST_DISTANCE devuelve la distancia geodésica exacta.',
    // Runs entirely in Snowflake. No PostGIS, no export. Results can be exported as GeoJSON f…
    'p.2': 'Se ejecuta por completo en Snowflake. Sin PostGIS, sin exportación. Los resultados se pueden exportar como GeoJSON para cualquier herramienta de mapas.',
  },

  // HTML blocks this page builds in JS.
  blocks: {
    // GEOGRAPHY TypeStores points, lines, and polygons using WGS84 coordinates (longitude, la…
    'explain.geography-type': `<h4>Tipo GEOGRAPHY</h4><p>Almacena puntos, líneas y polígonos con coordenadas WGS84 (longitud, latitud). Las distancias son geodésicas: precisas sobre la superficie de la Tierra, no sobre un mapa plano.</p><p><strong>Funciones de construcción clave:</strong></p><ul><li><code>ST_MAKEPOINT(lon, lat)</code> — a partir de coordenadas numéricas</li><li><code>TO_GEOGRAPHY('POINT(...)')</code> — a partir de una cadena WKT</li><li><code>TO_GEOGRAPHY('{"type":"Point",...}')</code> — a partir de GeoJSON</li></ul>`,
    // Containment and ProximityST_WITHIN(point, polygon) — true if the point is inside the po…
    'explain.containment-and-proximity': `<h4>Contención y proximidad</h4><p><strong>ST_WITHIN(point, polygon)</strong> — verdadero si el punto está dentro del polígono. Se usa para asignación por zonas, gestión de territorios y geocercado.</p><p><strong>ST_DWITHIN(a, b, distance)</strong> — verdadero si dos geometrías están a una distancia menor o igual a la indicada en metros. Es más eficiente que ST_DISTANCE en una cláusula WHERE porque aprovecha la poda por índice espacial.</p><p><strong>ST_DISTANCE(a, b)</strong> — devuelve la distancia geodésica exacta en metros.</p>`,
    // Spatial AggregationST_UNION_AGG merges multiple polygons into a single geometry, like S…
    'explain.spatial-aggregation': `<h4>Agregación espacial</h4><p><code>ST_UNION_AGG</code> combina varios polígonos en una sola geometría, como SUM pero para formas. Sirve para unir polígonos de zonas en regiones, o áreas de reparto en límites de territorio.</p><p><code>ST_AREA</code> devuelve el área en metros cuadrados. Divide entre 1,000,000 para obtener km².</p><p>Otras agregaciones espaciales: <code>ST_COLLECT</code> (conserva las geometrías individuales como una colección), <code>ST_EXTENT</code> (recuadro delimitador).</p>`,
    // H3 Hexagonal IndexingH3 (Uber's open hexagonal grid) divides the globe into hexagonal c…
    'explain.h3-hexagonal-indexing': `<h4>Indexación hexagonal H3</h4><p>H3 (la malla hexagonal abierta de Uber) divide el planeta en celdas hexagonales en 16 niveles de resolución (0 = planeta, 15 = ~1m²). Permite agrupar millones de puntos GPS en celdas con un solo GROUP BY, sin discretización personalizada ni proyecciones de área equivalente.</p><p><strong>Guía de resoluciones:</strong></p><ul><li>5 — ~250km² (regiones de un país)</li><li>7 — ~5km² (distritos de una ciudad)</li><li>8 — ~460m² (barrios)</li><li>10 — ~15m² (cuadras)</li></ul>`,
    // GeoJSON Import and ExportSnowflake reads and writes standard GeoJSON, WKT (Well-Known T…
    'explain.geojson-import-and-export': `<h4>Importación y exportación de GeoJSON</h4><p>Snowflake lee y escribe los formatos estándar GeoJSON, WKT (Well-Known Text) y WKB. Esto significa:</p><ul><li><strong>Importar</strong> desde cualquier herramienta GIS, API REST o archivo que produzca GeoJSON</li><li><strong>Exportar</strong> a Kepler.gl, Mapbox, Tableau, Looker o cualquier plataforma de mapas</li></ul><p>Usa <code>PARSE_JSON()</code> + <code>TO_GEOGRAPHY()</code> para ingerir GeoJSON desde una columna VARIANT cargada con Snowpipe o COPY INTO.</p>`,
    // GEOMETRY TypeWhere GEOGRAPHY uses real-world globe coordinates (WGS84, lat/lon, spheric…
    'explain.geometry-type': `<h4>Tipo GEOMETRY</h4><p>Mientras <strong>GEOGRAPHY</strong> usa coordenadas del globo real (WGS84, lat/lon, matemática esférica), <strong>GEOMETRY</strong> usa un plano cartesiano plano — algo crítico para planos de ingeniería, datos CAD, coordenadas de levantamientos locales y cualquier CRS que no sea geográfico.</p><p>Especifica el SRID (identificador del sistema de referencia espacial) al construir valores GEOMETRY. Las más de 50 funciones <code>ST_*</code> funcionan con ambos tipos.</p><p>Usa GEOGRAPHY para datos de ubicación del mundo real. Usa GEOMETRY para planos de planta, mapas de infraestructura y sistemas de coordenadas de ingeniería.</p>`,
  },
});
