# Snowflake Interactive TDD

Interactive Technical Deep Dive for the Snowflake Platform. Built for Snowflake SE demos and team enablement.

## Live site

> [https://sfc-gh-pmatson.github.io/snowflake-tdd/](https://sfc-gh-pmatson.github.io/snowflake-tdd/)

## Structure

```
snowflake-tdd/
├── index.html          ← Landing page (platform architecture diagram)
├── shared.css          ← All shared styles — edit here for global changes
├── pages/
│   ├── _template.html  ← Copy this to start a new module page
│   ├── coming-soon.html
│   ├── cortex-ai.html
│   ├── data-engineering.html
│   └── ...
├── sf-icons/           ← Official Snowflake SVG icons
└── icons/              ← Third-party logos (AWS, GCP, Azure, etc.)
```

## Adding a new module

1. Copy `pages/_template.html` to `pages/your-module.html`
2. Replace `MODULE_NAME` with your module title
3. Build your content using `shared.css` component classes
4. Update the link in `index.html` from `./pages/coming-soon.html` to `./pages/your-module.html`
5. Commit and push — GitHub Pages deploys automatically

## Colors and design tokens

All tokens are in `shared.css` under `:root`:

| Token | Value | Use |
|---|---|---|
| `--sf-blue` | `#29B5E8` | Primary brand blue |
| `--sf-navy` | `#050d1a` | Dark backgrounds |
| `--sf-ink` | `#071525` | Body text on light bg |
| `--sf-border` | `rgba(41,181,232,.16)` | Subtle borders |

## GitHub Pages setup

1. Go to **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: `main`, Folder: `/ (root)`
4. Save — live in ~1 minute
