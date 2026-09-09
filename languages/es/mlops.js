// ─────────────────────────────────────────────────────────────────────────
// Spanish (es) — mlops
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
  slug: 'mlops',

  page: {
    // MLOps
    'nav-label': 'MLOps',
    // MLOps
    's6-header': 'MLOps',
    // End-to-end ML lifecycle on Snowflake: develop, orchestrate, manage, deploy, and monitor…
    's6-sub': 'Ciclo de vida de ML de extremo a extremo en Snowflake: desarrolle, orqueste, gestione, despliegue y monitoree modelos sin mover los datos.',
    // Develop
    'mlo-lc-step.1': 'Desarrollar',
    // Orchestrate
    'mlo-lc-step.2': 'Orquestar',
    // Manage
    'mlo-lc-step.3': 'Gestionar',
    // Deploy
    'mlo-lc-step.4': 'Desplegar',
    // Monitor
    'mlo-lc-step.5': 'Monitorear',
    // ML Modeling APIs
    'mlo-card-title.1': 'APIs de modelado de ML',
    // Develop
    'mlo-card-phase.1': 'Desarrollar',
    // Train models using familiar Python frameworks (XGBoost, LightGBM, scikit-learn) with di…
    'mlo-card-desc.1': 'Entrene modelos con frameworks de Python familiares (XGBoost, LightGBM, scikit-learn) con ejecución distribuida en el cómputo de Snowflake. Los datos nunca salen de la plataforma.',
    // Preprocessing
    'span.1': 'Preprocesamiento',
    // Training
    'span.2': 'Entrenamiento',
    // Hyperparameter Tuning
    'span.3': 'Ajuste de hiperparámetros',
    // Cross-Validation
    'span.4': 'Validación cruzada',
    // Experiment Tracking
    'mlo-card-title.2': 'Seguimiento de experimentos',
    // Develop
    'mlo-card-phase.2': 'Desarrollar',
    // Log parameters, metrics, and artifacts for every training run. Compare experiments side…
    'mlo-card-desc.2': 'Registre parámetros, métricas y artefactos de cada ejecución de entrenamiento. Compare experimentos en paralelo para identificar la mejor configuración del modelo antes de promoverla a producción.',
    // Params & Metrics
    'span.5': 'Parámetros & métricas',
    // Run Comparison
    'span.6': 'Comparación de ejecuciones',
    // Artifact Logging
    'span.7': 'Registro de artefactos',
    // Lineage
    'span.8': 'Linaje',
    // ML Jobs
    'mlo-card-title.3': 'Trabajos de ML',
    // Orchestrate
    'mlo-card-phase.3': 'Orquestar',
    // Submit Python training scripts to managed compute pools (CPU or GPU). No Docker, no Kub…
    'mlo-card-desc.3': 'Envíe scripts de entrenamiento de Python a pools de cómputo gestionados (CPU o GPU). Sin Docker, sin Kubernetes. Se integra con Snowflake Tasks para pipelines de reentrenamiento programados con cron.',
    // GPU Compute Pools
    'span.9': 'Pools de cómputo con GPU',
    // Conda Envs
    'span.10': 'Entornos Conda',
    // Task Scheduling
    'span.11': 'Programación de tareas',
    // Job Status API
    'span.12': 'API de estado de trabajos',
    // Model Registry
    'mlo-card-title.4': 'Registro de modelos',
    // Manage
    'mlo-card-phase.4': 'Gestionar',
    // Governed catalog for all ML models. Version, tag, attach metrics, set production defaul…
    'mlo-card-desc.4': 'Catálogo gobernado para todos los modelos de ML. Versione, etiquete, adjunte métricas y defina versiones predeterminadas de producción. RBAC completo controla quién puede registrar, desplegar o eliminar modelos. Registro de auditoría inmutable.',
    // Versioning
    'span.13': 'Versionado',
    // Default Version
    'span.14': 'Versión predeterminada',
    // Metrics & Tags
    'span.15': 'Métricas & etiquetas',
    // Lineage
    'span.17': 'Linaje',
    // Feature Store
    'mlo-card-title.5': 'Feature Store',
    // Manage
    'mlo-card-phase.5': 'Gestionar',
    // Centralized feature engineering: define entities and feature views once, refresh automa…
    'mlo-card-desc.5': 'Ingeniería de características centralizada: defina entidades y feature views una sola vez, actualícelas automáticamente mediante pipelines, genere conjuntos de datos de entrenamiento correctos en el punto en el tiempo y sirva características en línea.',
    // Entities
    'span.18': 'Entidades',
    // Feature Views
    'span.19': 'Feature views',
    // Auto-Refresh
    'span.20': 'Actualización automática',
    // Point-in-Time Joins
    'span.21': 'Joins en el punto en el tiempo',
    // Online Serving
    'span.22': 'Servicio en línea',
    // Model Serving
    'mlo-card-title.6': 'Servicio de modelos',
    // Deploy
    'mlo-card-phase.6': 'Desplegar',
    // Registered models become callable SQL functions or Python methods. No endpoint provisio…
    'mlo-card-desc.6': 'Los modelos registrados se convierten en funciones SQL o métodos de Python invocables. Sin aprovisionamiento de endpoints. Escala automáticamente en warehouse o en runtime de contenedores. Inferencia por lotes y en tiempo real.',
    // SQL Function Call
    'span.23': 'Llamada a función SQL',
    // Python .run()
    'span.24': 'Python .run()',
    // Auto-Scale
    'span.25': 'Escalado automático',
    // GPU Inference
    'span.26': 'Inferencia con GPU',
    // Batch + RT
    'span.27': 'Por lotes + tiempo real',
    // ML Observability
    'mlo-card-title.7': 'Observabilidad de ML',
    // Monitor
    'mlo-card-phase.7': 'Monitorear',
    // Continuous monitoring of deployed models: detect data drift (PSI, KL divergence), track…
    'mlo-card-desc.7': 'Monitoreo continuo de los modelos desplegados: detecte deriva de datos (PSI, divergencia KL), siga la precisión de las predicciones a lo largo del tiempo, active alertas ante la degradación y reentrene automáticamente cuando se superen los umbrales.',
    // Data Drift
    'span.28': 'Deriva de datos',
    // Prediction Drift
    'span.29': 'Deriva de predicciones',
    // Accuracy Tracking
    'span.30': 'Seguimiento de precisión',
    // Alert Rules
    'span.31': 'Reglas de alerta',
    // Explainability
    'mlo-card-title.8': 'Explicabilidad',
    // Monitor
    'mlo-card-phase.8': 'Monitorear',
    // Understand why models make predictions. Shapley values per prediction, global feature i…
    'mlo-card-desc.8': 'Comprenda por qué los modelos hacen sus predicciones. Valores de Shapley por predicción, importancia global de las características y explicaciones agnósticas del modelo. Fundamental para las industrias reguladas y para la confianza de las partes interesadas.',
    // SHAP Values
    'span.32': 'Valores SHAP',
    // Feature Importance
    'span.33': 'Importancia de características',
    // Local vs Global
    'span.34': 'Local vs global',
    // Audit Trail
    'span.35': 'Registro de auditoría',
    // Bring Your Own Model
    'mlo-card-title.9': 'Traiga su propio modelo',
    // Manage + Deploy
    'mlo-card-phase.9': 'Gestionar + Desplegar',
    // Log any pre-trained Python model (PyTorch, TensorFlow, HuggingFace, custom pickle) into…
    'mlo-card-desc.9': 'Registre cualquier modelo de Python previamente entrenado (PyTorch, TensorFlow, HuggingFace, pickle personalizado) en el registro. Snowflake se encarga de la serialización, el empaquetado del entorno y la infraestructura de servicio.',
    // HuggingFace
    'span.38': 'HuggingFace',
    // scikit-learn
    'span.39': 'scikit-learn',
    // Custom Code
    'span.40': 'Código personalizado',
    // © 2026 Snowflake Inc. All Rights Reserved
    'span.42': '© 2026 Snowflake Inc. Todos los derechos reservados',
    // Full lifecycle in a few lines
    'h4': 'Todo el ciclo de vida en unas pocas líneas',
    // Train with your favorite framework, log to the Model Registry with versioning and metri…
    'p.1': 'Entrene con su framework favorito, registre en el Registro de modelos con versionado y métricas, y luego sirva predicciones vía SQL o Python. Sin Docker, sin endpoints que gestionar y sin que los datos salgan de Snowflake.',
    // Model Registry versions, tags, and governs every model. Model Serving auto-scales infer…
    'p.2': `<strong>Model Registry</strong> versiona, etiqueta y gobierna cada modelo. <strong>Model Serving</strong> escala automáticamente la inferencia en warehouse o en cómputo de contenedores.`,
  },
});
