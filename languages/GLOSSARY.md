# Spanish Glossary — Interactive TDD

Agreed terminology for the Spanish translation. **Fixed before bulk translation** so that
78 pages stay consistent and review is a consistency check rather than a vocabulary debate.

Variety: **Latin American neutral** (e.g. `costo` not `coste`, `computadora`-free phrasing).
If your reviewer prefers Iberian Spanish, flag it — the affected terms are marked ⚑.

---

## Platform terms

| English | Spanish | Note |
|---|---|---|
| data | datos | |
| query (noun) | consulta | |
| query (verb) | consultar | |
| table | tabla | |
| external table | tabla externa | |
| view | vista | |
| materialized view | vista materializada | |
| column | columna | |
| row | fila | |
| schema | esquema | |
| database | base de datos | |
| account | cuenta | |
| role | rol | |
| grant (verb) | otorgar | |
| compute | cómputo | |
| storage | almacenamiento | |
| workload | carga de trabajo | |
| scale / scaling | escalar / escalado | |
| performance | rendimiento | |
| cost | costo | ⚑ Iberian: `coste` |
| governance | gobernanza | |
| governed | gobernado / gobernada | |
| access | acceso | |
| policy / policies | política / políticas | |
| row access policy | política de acceso a filas | |
| masking | enmascaramiento | |
| lineage | linaje | |
| encryption | cifrado | |
| secure | seguro | |
| ingestion | ingesta | |
| batch | por lotes | |
| refresh | actualización / actualizar | |
| latency | latencia | |
| file | archivo | |
| dashboard | panel | |
| model | modelo | |
| agent | agente | |
| search | búsqueda | |
| deploy | desplegar | |
| semi-structured | semiestructurado | |
| micro-partition | micropartición | |
| catalog | catálogo | |
| data sharing | uso compartido de datos | |
| business user | usuario de negocio | |

## Terms deliberately kept in English

These are Snowflake product nouns or industry terms where the English is what practitioners
actually say. Translating them would make the deck read *less* naturally to a technical
Spanish-speaking audience.

| Term | Why |
|---|---|
| **warehouse** | A Snowflake compute object, not a data warehouse. Translating it to `almacén` collides with `almacén de datos` and actively confuses the two concepts. **Exception:** the phrase *data warehouse* → `almacén de datos`. |
| **clustering** | Snowflake feature name; `agrupamiento` is not what practitioners say. |
| **lakehouse** | Industry term with no settled Spanish equivalent. |
| **share** (the object) | The named Snowflake object. The *activity* is `uso compartido de datos`. |
| **pipeline** | Widely used untranslated; `canalización` reads unnatural. |
| **streaming** | Widely used untranslated. |
| **throughput** | Avoids colliding with `rendimiento`, already used for *performance*. |
| **notebook** | Product name (Snowflake Notebooks). |

## Never translated

- **Product names:** Snowflake, Cortex, Snowpark, Streamlit, Iceberg, Horizon, Polaris,
  Arctic, CoWork, Snowgrid, Unistore, Snowsight, Snowpipe
- **Tier names:** Standard, Enterprise, Business Critical, Virtual Private Snowflake
- **Third-party names:** AWS, Azure, GCP, Databricks, Spark, Delta, Parquet, Kafka, dbt
- **SQL keywords and constructs:** `SELECT`, `QUALIFY`, `ASOF JOIN`, `DATE_SPINE`,
  `TIMESERIES`, `VARIANT`, `GEOGRAPHY`, `FLATTEN`, `INFER_SCHEMA`, `H3`, `ST_*`, etc.
- **Function and type names** of any kind
- **Metrics, figures, version numbers, dates**
- **Code panel contents** — these are never tagged for translation, so they are safe by
  construction, but do not translate SQL that appears inline in prose either.

## Availability tags

Standard translations for the nav-bar tags, applied once globally:

| English | Spanish |
|---|---|
| Generally Available | Disponibilidad General |
| Public Preview | Vista Previa Pública |
| Private Preview | Vista Previa Privada |
| Business Critical | Business Critical *(kept)* |
| Enterprise | Enterprise *(kept)* |

## Style conventions

- **Sentence case** for headings, matching the English deck's tone.
- **`tú` is avoided** — prefer impersonal constructions (`Consulta datos...`,
  `Permite consultar...`) over addressing the reader directly, which keeps the register
  neutral for a customer-facing technical deck.
- **Inverted punctuation** is required: `¿` and `¡`.
- **No trailing periods on card titles or labels**, matching the English.
- Keep the English's em-dash rhythm (`—`) where it reads naturally in Spanish.

---

## Decisions made during the first-pass translation

These came up while translating all 79 pages. They are recorded here because two
translators working different pages chose differently, and the deck has to be
consistent. A reviewer may overturn any of them — but change them **everywhere**.

| Term | Decision | Why |
|---|---|---|
| **Skills** (Cortex Sense Skills, Agent Skills, CoCo Skills) | keep English | Product noun, not a human ability. `habilidades` reads as personal skills. |
| **listing** | keep English | Marketplace object, same logic as `share`. |
| **pruning** | keep English | `poda` is not what practitioners say. |
| **target lag** | keep English | Mirrors the `TARGET_LAG` parameter. |
| **chargeback** | keep English | No settled Spanish term. |
| **data estate** | `patrimonio de datos` | Alternative considered: `entorno de datos`. |
| **Scale Up / Across / Out** | `Escalado vertical / transversal / horizontal` | Appears on both `compute` and `compute-scaling`; unified. |
| **redact / redaction** | `ocultar` / `ocultamiento` | Spanish `redactar` means *to draft* — a false friend. |
| **Enterprise / Standard** | tier name → keep; ordinary adjective → translate | "Standard pattern" is not the Standard tier. `Gobernanza Enterprise` was corrected to `Gobernanza empresarial`. |

### Deliberately left as-is

- **The ampersand is kept**, not replaced with `y`. Spanish would normally prefer
  `y`; `&` was kept to match the English layout. Worth a project-wide decision.
- **HTML entities depend on the key type.** A plain `data-i18n` value is applied
  with `textContent`, which does **not** decode entities — writing `&amp;` there
  makes the slide literally show `&amp;`. So those values hold real characters
  (`&`, `—`, `·`, `©`). A `data-i18n-html` value goes through `innerHTML`, where
  entities are fine and are left as authored. `i18n-gen.py` decodes text-content
  values automatically, so an entity that slips into a translation is corrected
  rather than shipped.
- **Number separators follow the English** (`1,400+`, `1,000,000`). Latin American
  Spanish would write `1.400+`. Changing this needs a matching change to the
  figure check in `tools/i18n-validate-es.py`.
- **`SSN` expanded** to `número de seguro social`. A LatAm audience may prefer the
  acronym or a local analogue.

### Flagged for the reviewer

Strings where the translation is defensible but a native speaker should decide:

- `compute / cmp-sub.2`, `compute-scaling / csc-title.2` — the warehouse
  "T-shirt sizing" metaphor does not carry into Spanish.
- `transactions / txn-feature-body.5`, `txn-sub.2` — "No Pipeline Tax" is a coined
  metaphor in English too.
- `marketplace / mp-card-label.5` — "Capacity Drawdown" is Snowflake commercial
  jargon; confirm the internal wording.
- `well-architected-framework / waf-lens-label.*` — the "lens" metaphor.
- `cortex-sense-skills / cse-skill-name.3` — "Deal Intelligence".
- `snowflake-cowork / cw-chip.5` — "GA Soon" expands to
  `Disponibilidad General pronto`, much longer than the English; may overflow.
- `data-engineering / de-chip.11`, `compute / cmp-sub.9` — "Sub-second" expands to
  `menos de un segundo`.
- `iceberg-v3 / v3-card-title.5` — "Deletion Vectors", "bitmap sidecar": no
  settled Spanish terms.
- `document-ai / p.2` vs `horizon-lineage / hsp-feature-body.1` — `Task` kept
  English in one place, `tareas` used in the other. Pick one.
