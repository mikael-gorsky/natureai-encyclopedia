# NatureAI Encyclopedia

A multilingual encyclopedia (English / Русский / עברית / አማርኛ) on the impact of AI on human thought, after Rénald Gesnot's monograph *The Impact of Artificial Intelligence on Human Thought* (arXiv:2508.16628, 2025).

Live at **[rain1.mgorsky.net](https://rain1.mgorsky.net)** (Netlify alias: `rain1.netlify.app`).

## Stack

- **Astro 4** (static SSG) with React islands
- **Tailwind 3** with CSS-variable theming (light + dark; per-script font swaps)
- **MDX** content collections — Zod-typed frontmatter
- **Pagefind** for client-side full-text search (per-language index)
- **Self-hosted fonts**: Fraunces + Inter (Latin/Cyrillic), Frank Ruhl Libre + Heebo (Hebrew, RTL), Noto Serif/Sans Ethiopic (Amharic). Phase 0 loads via Google Fonts; self-hosting in Phase 0.5.

## Scripts

```sh
npm install
npm run dev        # Astro dev server (Phase 0 only — never local for testing)
npm run build      # Astro build + Pagefind index
npm run preview    # Preview built site
npm run check      # astro check (type-check)
```

## Authoring

The canonical paper text lives at [`source/paper.txt`](source/paper.txt) and split-by-chapter at [`source/chapters/`](source/chapters/). Working notes for each plate are at `source/_drafts/{lang}/{slug}.notes.md` (gitignored).

Per-article workflow: see the implementation plan at `~/.claude/plans/there-is-a-pdf-purring-raccoon.md`.

## Folder map

```
src/
├── content/
│   ├── articles/{en,ru,he,am}/   # MDX articles, one per plate
│   ├── glossary/{en,ru,he,am}/   # Glossary entries
│   └── paths/{en,ru,he,am}/      # Curated reading paths
├── i18n/                         # Locale config + UI message bundles
├── layouts/                      # BaseLayout, ArticleLayout, SectionLayout
├── components/                   # Plate, Nav, SeeAlso, Citations, etc.
├── pages/                        # Astro routes
│   ├── index.astro               # Bare language picker (4 doors)
│   ├── 404.astro                 # Custom — "this room is closed"
│   └── [lang]/
│       ├── index.astro           # Per-locale landing
│       ├── about.astro
│       ├── glossary/
│       └── [section]/
│           ├── index.astro       # Section opener + catalogue grid
│           └── [slug].astro      # Article page
├── lib/                          # Helpers
└── styles/global.css             # Design tokens, base + prose
```

## Deploy

Pushing to `main` triggers Netlify build:
1. `npm run build` produces `dist/`
2. Pagefind indexes the built site, output to `dist/pagefind/`
3. Netlify serves with immutable asset caching for `/_astro/*` and `/fonts/*`

The build IS the test suite — broken cross-links, missing translations, or schema violations fail the deploy.

## Attribution

After Rénald Gesnot, *The Impact of Artificial Intelligence on Human Thought*, arXiv:2508.16628 (2025). Adapted with permission.
