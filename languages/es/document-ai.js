// ─────────────────────────────────────────────────────────────────────────
// Spanish (es) — document-ai
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
  slug: 'document-ai',

  page: {
    // Document AI
    'nav-label': 'Document AI',
    // Document AI Pipeline
    's6-header': 'Pipeline de Document AI',
    // From raw files to structured, governed data in a single SQL pipeline. Click any stage t…
    's6-sub': 'De archivos sin procesar a datos estructurados y gobernados en un solo pipeline de SQL. Haga clic en cualquier etapa para explorar.',
    // Stage — PDFs, images, DOCX
    'dai-terminal-label.1': 'Stage — PDFs, imágenes, DOCX',
    // OCR · Layout · Multimodal
    'dai-stage-desc.1': 'OCR · Layout · Multimodal',
    // Identify document type
    'dai-stage-desc.2': 'Identificar el tipo de documento',
    // Optional
    'dai-stage-badge.1': 'Opcional',
    // Named field extraction
    'dai-stage-desc.3': 'Extracción de campos con nombre',
    // Remove PII & sensitive data
    'dai-stage-desc.4': 'Eliminar PII & datos sensibles',
    // Optional
    'dai-stage-badge.2': 'Opcional',
    // Structured Table — typed, governed
    'dai-terminal-label.2': 'Tabla estructurada — tipada, gobernada',
    // ← click a stage
    'dai-detail-hint': '← haga clic en una etapa',
    // © 2026 Snowflake Inc. All Rights Reserved
    'span': '© 2026 Snowflake Inc. Todos los derechos reservados',
    // Full Pipeline in SQL
    'h4': 'Pipeline completo en SQL',
    // One query parses every file in a stage, classifies it, extracts structured fields, and …
    'p.1': 'Una sola consulta analiza cada archivo de un stage, lo clasifica, extrae campos estructurados y oculta la PII. No se necesita orquestación externa.',
    // Wrap this in a Dynamic Table or Task to process new files automatically as they land.
    'p.2': `Encapsule esto en una <strong>tabla dinámica</strong> o una <strong>Task</strong> para procesar automáticamente los archivos nuevos a medida que llegan.`,
    // The DIRECTORY() table function lists all files in the stage, enabling batch processing …
    'p.3': `La función de tabla <code>DIRECTORY()</code> lista todos los archivos del stage, lo que permite el procesamiento por lotes de cientos de documentos.`,
  },

  // HTML blocks this page builds in JS.
  blocks: {
    // AI_PARSE_DOCUMENT Converts files from a Snowflake Stage into text. Three modes: OCR — s…
    'explain.ai-parse-document': `<h4>AI_PARSE_DOCUMENT</h4> <p>Convierte los archivos de un Stage de Snowflake en texto. Tres modos:</p> <ul> <li><strong>OCR</strong> — imágenes escaneadas y documentos manuscritos. Ideal para flujos de digitalización de papel.</li> <li><strong>LAYOUT</strong> — PDFs con tablas, columnas y estructura. Preserva las relaciones espaciales.</li> <li><strong>MULTIMODAL</strong> — analiza gráficos, diagramas y elementos visuales dentro de los PDFs.</li> </ul> <p><strong>Formatos admitidos:</strong> PDF, PNG, JPEG, TIFF, DOCX, PPTX, XLSX.</p> <p>Devuelve un VARIANT — use <code>:content</code> para extraer el texto y pasarlo a funciones posteriores.</p>`,
    // AI_CLASSIFY (Document Routing) Before extracting fields, classify the document so you c…
    'explain.ai-classify-document-routing': `<h4>AI_CLASSIFY (enrutamiento de documentos)</h4> <p>Antes de extraer campos, clasifique el documento para poder aplicar el esquema de extracción correcto. Una factura necesita campos distintos que un contrato.</p> <p>Use el resultado de la clasificación para filtrar y bifurcar:</p> <ul> <li><code>WHERE doc_type = 'invoice'</code> → extraer proveedor/monto/fecha</li> <li><code>WHERE doc_type = 'contract'</code> → extraer partes/plazo/terminación</li> </ul> <p>Esto evita campos alucinados cuando se piden campos de factura sobre un contrato.</p>`,
    // AI_EXTRACT Extracts named fields from unstructured text and returns them as a typed VAR…
    'explain.ai-extract': `<h4>AI_EXTRACT</h4> <p>Extrae campos con nombre de texto no estructurado y los devuelve como un objeto VARIANT tipado.</p> <p>Los nombres de campo son lenguaje natural — use nombres descriptivos como <code>'total_amount_usd'</code> en lugar de <code>'amt'</code>. El modelo infiere la intención a partir del nombre.</p> <p><strong>Convierta el tipo de los resultados</strong> con el acceso semiestructurado de Snowflake: <code>fields:vendor_name::STRING</code>, <code>fields:total_amount::FLOAT</code>.</p> <p>Para los campos de varios valores (partidas, firmantes) el resultado es un ARRAY.</p>`,
    // AI_REDACT Replaces sensitive values with [REDACTED] while preserving document structure…
    'explain.ai-redact': `<h4>AI_REDACT</h4> <p>Reemplaza los valores sensibles con <code>[REDACTED]</code> y conserva la estructura y el contexto del documento. El texto circundante permanece intacto para el análisis.</p> <p><strong>Categorías de ocultamiento:</strong></p> <ul> <li><code>'pii'</code> — nombres, números de seguro social, fechas de nacimiento, números de teléfono</li> <li><code>'financial'</code> — números de cuenta, datos de tarjetas, números de ruta</li> <li><code>'phi'</code> — información de salud cubierta por HIPAA</li> <li><code>'all'</code> — todo lo anterior</li> </ul> <p>Aplíquelo antes de almacenar en una tabla compartida, escribir en un producto de datos o enviar a un agente de IA.</p>`,
  },
});
