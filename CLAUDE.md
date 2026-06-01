# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository overview

A personal portfolio site (Producer / Developer / Builder) deployed via GitHub Pages to the custom domain `rickli.qzz.io` (see `CNAME`). There is no build system, no package manager, and no dependencies — plain static files.

- `index.html` — main portfolio markup + inline app JS. Single-page app with hash-based routing.
- `styles.css` — all styles (split out from `index.html`).
- `data.js` — content arrays (`prodData`, `gearData`, `devData`, `blogData`). Edit here to add/remove projects, gear, and blog posts; the renderers in `index.html` pick them up. Loaded via `<script src="data.js">` before the inline app script.
- `python30days.html`, `shell30days.html` — standalone interactive learning curriculum pages (separate styling, not linked into the SPA's router).
- `CNAME` — GitHub Pages custom domain.

Because `data.js` and `styles.css` are loaded as separate files, opening `index.html` directly via `file://` won't work the same in all browsers — use the local server below.

## Local development

No build, no install. Just open the file or serve the directory:

```bash
python3 -m http.server 8000   # then visit http://localhost:8000/
```

There are no tests, linters, or CI configured.

## Architecture of `index.html`

Despite being one file (~920 lines), `index.html` is structured as an SPA. Future edits almost always touch one of these zones — find them by line ranges via `grep`, not by file structure.

### Content data (`data.js`)
The site is **data-driven**. Four JS arrays/objects hold all user-visible content (now in `data.js`, attached as globals):
- `prodData` — production projects (filtered by `type`: drama / film / commercial)
- `gearData` — gear inventory grouped by category (camera / lens / lighting / grip / audio)
- `devData` — dev/hardware projects (filtered by `cat`: hw / sw), with `problem` / `solution` / `result` fields for case-study detail view
- `blogData` — blog posts (filtered by `tag`: tech / film / life), with full HTML `body` and optional `crosslink` to a dev project

Most user-facing strings are bilingual `{en, zh}` objects. The helper `t(obj)` (line ~514 of `index.html`) resolves them against `currentLang`. **When adding content, always provide both `en` and `zh`** or the other language renders empty.

### Routing & rendering
- Hash router. URL format is `#/`, `#/<page>`, or `#/<page>/<id>` (e.g. `#/dev/dev1`). Back/forward and shareable links both work.
- `navigate(page)` switches the active `.page` div and clears any detail. `show*Detail(id)` / `show*List()` toggle list↔detail. All three call `setHash(...)` to keep the URL in sync — `applyRoute()` is the inverse and runs on `hashchange` / `DOMContentLoaded`. The `_ignoreNextHash` flag prevents feedback loops.
- `renderCurrentPage()` dispatches to `renderProdGrid` / `renderGear` / `renderDevGrid` / `renderBlogGrid`.
- Filters (`filterProd`, `filterDev`, `filterBlog`, `filterGear`) mutate a module-level `*Filter` variable and re-render. Filter state is **not** persisted in the URL.
- When adding a new top-level section, add its slug to `PAGES`; if it has list/detail, also to `DETAIL_PAGES`.

### i18n
- Driven by `data-lang` attribute on `<html>`. CSS rules at `styles.css` lines ~727–728 hide `.en-only` / `.zh-only` based on it.
- `setLang(lang)` (line ~505 of `index.html`) updates the attribute and re-renders the current page so dynamic content (from the data arrays) refreshes too.

### Visual layer
- Background particle canvas (`bgCanvas`) and cursor glow (`cursorGlow`) — purely decorative; safe to ignore for content edits.
- Both are gated by `enableAmbientFx` (false on `prefers-reduced-motion` or `max-width: 768px`). The hero canvas (`initHeroDescCanvas`) early-returns on `prefers-reduced-motion`. When adding new heavy effects, gate them the same way.
- IntersectionObserver-based reveal animations (`revealObserver`).

### CSS conventions
- Design tokens are CSS custom properties on `:root` (`styles.css` lines ~2–27): `--bg`, `--card`, `--cyan`, `--film-gold`, fonts (`--mono`, `--sans`), easings, etc. Reuse these instead of hard-coding colors.
- Fonts loaded from Google Fonts: Space Mono, Outfit, Noto Sans SC.

## Editing guidance

- To add a project / blog post / gear item: append to the appropriate data array. No template or component file to touch — the existing `render*` function handles layout.
- To change layout/styling for a card type: edit the template strings inside the relevant `render*Grid` / `show*Detail` function (they build HTML via template literals).
- The `python30days.html` and `shell30days.html` files are **independent**; they share no CSS or JS with `index.html`. Edits there don't affect the main site.
