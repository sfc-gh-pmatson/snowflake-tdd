// ─────────────────────────────────────────────────────────────────────────
// Spanish (es) — cortex-search
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
  slug: 'cortex-search',

  page: {
    // Cortex Search
    'nav-label': 'Cortex Search',
    // Cortex Search
    's6-header': 'Cortex Search',
    // Fully managed hybrid retrieval — vector + keyword — for RAG pipelines and Cortex Agents…
    's6-sub': 'Recuperación híbrida totalmente administrada — vectorial + por palabra clave — para pipelines de RAG y Cortex Agents. Sin embeddings que administrar.',
    // Source Table
    'cs-node-title.1': 'Tabla de origen',
    // Any Snowflake table or view. Text, documents, semi-structured data.
    'cs-node-sub.1': 'Cualquier tabla o vista de Snowflake. Texto, documentos, datos semiestructurados.',
    // Cortex Search Service
    'cs-node-title.2': 'Servicio de Cortex Search',
    // Incrementally indexed. Refreshes on target lag.
    'cs-node-sub.2': 'Indexado de forma incremental. Se actualiza según el target lag.',
    // Dense (Vector)
    'cs-hybrid-pill.1': 'Densa (vectorial)',
    // Sparse (BM25)
    'cs-hybrid-pill.2': 'Dispersa (BM25)',
    // Re-ranked
    'cs-hybrid-pill.3': 'Reordenada',
    // Query / Agent
    'cs-node-title.3': 'Consulta / Agente',
    // SQL function, REST API, or Cortex Agent tool call.
    'cs-node-sub.3': 'Función SQL, API REST o llamada de herramienta de Cortex Agent.',
    // LLM Answer
    'cs-node-title.4': 'Respuesta del LLM',
    // Grounded in retrieved context. Cited sources.
    'cs-node-sub.4': 'Fundamentada en el contexto recuperado. Con fuentes citadas.',
    // Hybrid Retrieval
    'cs-feat-title.1': 'Recuperación híbrida',
    // Combines dense (semantic) and sparse (BM25 keyword) retrieval. Better recall than vecto…
    'cs-feat-desc.1': 'Combina la recuperación densa (semántica) y dispersa (por palabra clave, BM25). Mejor recall que los enfoques solo vectoriales sobre datos empresariales.',
    // Auto-Refresh
    'cs-feat-title.2': 'Actualización automática',
    // Target lag keeps the index fresh as source data changes. No pipelines, no manual re-ind…
    'cs-feat-desc.2': 'El target lag mantiene el índice actualizado a medida que cambian los datos de origen. Sin pipelines, sin reindexación manual, sin desfases.',
    // Zero Embedding Ops
    'cs-feat-title.3': 'Cero operaciones de embeddings',
    // Snowflake manages embeddings, indexing, and serving. You define the source table and co…
    'cs-feat-desc.3': 'Snowflake administra los embeddings, la indexación y el servicio. Solo se define la tabla y la columna de origen — nada más.',
    // Governed by Horizon
    'cs-feat-title.4': 'Gobernado por Horizon',
    // RBAC applied at query time. Masking policies respected in retrieved results. Full audit…
    'cs-feat-desc.4': 'RBAC aplicado en el momento de la consulta. Las políticas de enmascaramiento se respetan en los resultados recuperados. Registro de auditoría completo en cada llamada de búsqueda.',
    // © 2026 Snowflake Inc. All Rights Reserved
    'span': '© 2026 Snowflake Inc. Todos los derechos reservados',
    // Cortex Search
    'h4': 'Cortex Search',
    // Define the source table and column to search on. Snowflake handles all embedding genera…
    'p.1': 'Defina la tabla y la columna de origen sobre las que buscar. Snowflake se encarga automáticamente de toda la generación de embeddings, la indexación y el servicio.',
    // ATTRIBUTES are additional columns returned with results for filtering and display.
    'p.2': `<strong>ATTRIBUTES</strong> son columnas adicionales que se devuelven con los resultados para filtrar y mostrar.`,
    // TARGET_LAG keeps the index in sync as new rows land &#8212; no manual refresh needed.
    'p.3': `<strong>TARGET_LAG</strong> mantiene el índice sincronizado a medida que llegan filas nuevas &#8212; sin actualización manual.`,
    // Add the service as a tool to any Cortex Agent and it will search autonomously at reason…
    'p.4': 'Agregue el servicio como herramienta a cualquier Cortex Agent y buscará de forma autónoma en el momento del razonamiento.',
  },
});
