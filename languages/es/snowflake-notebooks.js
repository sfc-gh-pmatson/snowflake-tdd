// ─────────────────────────────────────────────────────────────────────────
// Spanish (es) — snowflake-notebooks
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
  slug: 'snowflake-notebooks',

  page: {
    // Analytics
    'slide-tag': 'Analítica',
    // Snowflake Notebooks
    'nav-label': 'Snowflake Notebooks',
    // Snowflake Notebooks
    's6-header': 'Snowflake Notebooks',
    // SQL and Python in one governed workspace. Runs on Snowflake compute. No local environme…
    's6-sub': 'SQL y Python en un solo espacio de trabajo gobernado. Se ejecuta sobre el cómputo de Snowflake. Sin entorno local, sin exportar datos, sin administrar kernels.',
    // SQL + Python Cells
    'nb-card-label.1': 'Celdas SQL + Python',
    // Mix SQL and Python freely in one notebook
    'nb-card-desc.1': 'Combina SQL y Python libremente en un mismo notebook',
    // Snowpark Integration
    'nb-card-label.2': 'Integración con Snowpark',
    // Snowpark DataFrames and UDFs from notebook cells
    'nb-card-desc.2': 'DataFrames y UDFs de Snowpark desde las celdas del notebook',
    // Cortex AI in Notebooks
    'nb-card-label.3': 'Cortex AI en notebooks',
    // Call AI functions and agents directly in cells
    'nb-card-desc.3': 'Invoca funciones de IA y agentes directamente en las celdas',
    // Python Packages
    'nb-card-label.4': 'Paquetes de Python',
    // 1000+ Anaconda packages, no pip install needed
    'nb-card-desc.4': 'Más de 1000 paquetes de Anaconda, sin necesidad de pip install',
    // Git + Sharing
    'nb-card-label.5': 'Git + uso compartido',
    // Version control and governed sharing within Snowflake
    'nb-card-desc.5': 'Control de versiones y uso compartido gobernado dentro de Snowflake',
    // Container Runtime
    'nb-card-label.6': 'Container Runtime',
    // GPU compute, custom packages, deep learning workloads
    'nb-card-desc.6': 'Cómputo con GPU, paquetes personalizados y cargas de trabajo de deep learning',
    // Python Cell Pattern
    'h4': 'Patrón de una celda de Python',
    // Use get_active_session() to get the Snowflake session. Reference previous SQL cell resu…
    'p.1': `Usa <code>get_active_session()</code> para obtener la sesión de Snowflake. Se hace referencia a los resultados de una celda SQL anterior con <code>cell1.to_pandas()</code>.`,
    // Cortex AI functions are called via session.sql() — they run server-side on the full dat…
    'p.2': `Las funciones de Cortex AI se invocan mediante <code>session.sql()</code> — se ejecutan del lado del servidor sobre el conjunto de datos completo antes de que los resultados regresen a Python.`,
  },

  // HTML blocks this page builds in JS.
  blocks: {
    // SQL + Python in One NotebookAlternate SQL and Python cells freely. Reference any SQL ce…
    'explain.sql-python-in-one-notebook': `<h4>SQL + Python en un mismo notebook</h4><p>Permite alternar celdas de SQL y de Python libremente. Cualquier resultado de una celda SQL se referencia en Python con <code>cellN.to_pandas()</code>.</p><p><strong>Sin necesidad de exportar datos.</strong> La celda SQL se ejecuta en el warehouse y devuelve resultados. Las celdas de Python acceden a esos resultados como DataFrames sin mover datos a una máquina local.</p><p>Matplotlib, Plotly, Altair y los widgets de Streamlit funcionan en las celdas del notebook para visualización en línea.</p>`,
    // Snowpark in Notebooksget_active_session() returns the authenticated Snowflake session —…
    'explain.snowpark-in-notebooks': `<h4>Snowpark en notebooks</h4><p><code>get_active_session()</code> devuelve la sesión autenticada de Snowflake — sin cadena de conexión, sin credenciales, sin archivo de configuración. Ya se está dentro de Snowflake.</p><p>Los DataFrames de Snowpark se ejecutan de forma diferida en el warehouse. Conviene llamar a <code>.to_pandas()</code> solo para el resultado final — así se evita traer conjuntos de datos grandes al proceso de Python sin necesidad.</p>`,
    // Cortex AI in Notebook CellsCall any Cortex AI function from a Python cell via session.s…
    'explain.cortex-ai-in-notebook-cells': `<h4>Cortex AI en celdas de notebook</h4><p>Cualquier función de Cortex AI se puede invocar desde una celda de Python mediante <code>session.sql()</code>. La IA se ejecuta del lado del servidor sobre la infraestructura de GPU de Snowflake — no se envían datos a una API externa.</p><p>Esto permite ejecutar AI_CLASSIFY o AI_SENTIMENT sobre millones de filas y traer de vuelta a Python solo el conjunto de resultados para visualizarlo o analizarlo más a fondo.</p>`,
    // Package EcosystemSnowflake Notebooks have 1000+ Anaconda packages pre-available: pandas…
    'explain.package-ecosystem': `<h4>Ecosistema de paquetes</h4><p>Snowflake Notebooks incluye más de 1000 paquetes de Anaconda ya disponibles: pandas, numpy, scikit-learn, XGBoost, LightGBM, Plotly, SciPy, statsmodels y más.</p><p>No se necesita <code>pip install</code> para los paquetes estándar. Para paquetes de PyPI que no están en Anaconda, se puede usar <code>!pip install</code> en una celda o agregarlos a la configuración del entorno.</p><p>Las versiones de los paquetes quedan fijadas por notebook para garantizar la reproducibilidad.</p>`,
    // Git Integration &amp; SharingConnect notebooks to any Git repository (GitHub, GitLab, B…
    'explain.git-integration-and-sharing': `<h4>Integración con Git &amp; uso compartido</h4><p>Los notebooks se conectan a cualquier repositorio de Git (GitHub, GitLab, Bitbucket). Los cambios se confirman y se versionan como cualquier otro código.</p><p><strong>Uso compartido:</strong> se otorgan permisos con GRANT sobre los notebooks como en cualquier objeto de Snowflake. Quienes los reciben abren el notebook en Snowsight — sin descargas, sin archivos adjuntos por correo, sin el clásico "en mi máquina funciona".</p><p>Los notebooks también se pueden ejecutar sin interfaz mediante la CLI de Snowflake, para flujos de trabajo programados o impulsados por CI/CD.</p>`,
    // Container RuntimeNotebooks can run on a Container Runtime instead of a warehouse. This …
    'explain.container-runtime': `<h4>Container Runtime</h4><p>Los notebooks pueden ejecutarse en un Container Runtime en lugar de un warehouse. Esto ofrece:</p><ul><li><strong>Acceso a GPU</strong> para deep learning e inferencia de LLM</li><li><strong>Más memoria RAM</strong> para cargas de trabajo grandes en memoria</li><li><strong>Paquetes personalizados</strong> de PyPI, incluidos PyTorch, TensorFlow y HuggingFace Transformers</li></ul><p>El cambio a Container Runtime se hace en la configuración del notebook. El notebook sigue ejecutándose dentro de Snowflake — la gobernanza de datos y el RBAC siguen aplicándose.</p>`,
  },
});
