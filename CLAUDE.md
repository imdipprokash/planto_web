# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static marketing/landing site for **Planto** (a plant-identification app), exported from Figma Make. It is a client-rendered SPA with no backend. README points to the original Figma design.

## Commands

```bash
npm i          # install deps
npm run dev     # Vite dev server on http://localhost:3000 (auto-opens browser)
npm run build   # production build into ./build  (also Vercel's buildCommand)
```

There is **no test, lint, typecheck, or format command**, and no `tsconfig.json`/ESLint/Prettier config. Type errors are not enforced at build time (Vite + SWC strips types without checking). Don't add CI-style verification steps that don't exist here.

## Architecture

- **Stack:** Vite 6 + React 18 + TypeScript, `react-router-dom` for client-side routing. Deployed on Vercel; `vercel.json` rewrites all paths to `/index.html` for SPA routing.
- **Entry:** `src/main.tsx` → `src/App.tsx`. `App.tsx` is the single source of routing — every page is a `<Route>` there, wrapped by a persistent `<Header>` / `<Footer>` and `<ScrollToTop>` (smooth-scrolls to top on every route change).
- **Pages** (`src/pages/`): one component per route. Pages are composed from the marketing section components in `src/components/` (e.g. `Hero`, `Features`, `Stats`, `Testimonials`, `CTA`, `HowItWorks`).
- **UI primitives** (`src/components/ui/`): shadcn/ui components (MIT) built on Radix UI + `class-variance-authority`. `src/components/ui/utils.ts` exports `cn()` (clsx + tailwind-merge) — use it for conditional class composition. `src/components/figma/ImageWithFallback.tsx` is the standard image component for remote/Unsplash images.
- **Import alias:** `@` → `src/` (configured in `vite.config.ts`).

## Important gotchas (Figma Make artifacts)

- **CSS is pre-compiled and committed, not built.** `src/index.css` (~2400 lines) is the only stylesheet imported (by `main.tsx`); it is a *generated* Tailwind v4 output. There is no Tailwind/PostCSS plugin in the Vite config. **Adding a new Tailwind utility class in JSX will not produce any styling unless that class already exists in the compiled `src/index.css`.** Restyling means editing `src/index.css` directly (or regenerating it with Tailwind v4 against the design tokens).
- `src/styles/globals.css` holds the Tailwind v4 source / design tokens (`@theme`, light/dark CSS variables) but is **imported nowhere** and has no effect at runtime. Treat it as reference for the intended token values, not as a live stylesheet.
- **Orphan duplicate pages exist.** Only the `*Page.tsx` files are routed in `App.tsx`. The shorter siblings (`About.tsx`, `Contact.tsx`, `FAQ.tsx`, `Privacy.tsx`, `Terms.tsx`) are unused — edit the `*Page.tsx` version.
- **`vite.config.ts` aliases versioned package specifiers** (e.g. `'vaul@1.1.2'` → `vaul`) so Figma-generated imports resolve. Write new imports with plain package names.
- **Loose dependency versions:** several deps are pinned to `"*"` (`clsx`, `react-router-dom`, `tailwind-merge`) and `@types/react` is v19 while React is v18. Be cautious assuming exact API versions.
- **Export conventions are inconsistent:** most pages/components use named exports, but `PrivacyPage` (and `App`) are default exports. Match each file's existing style and check how `App.tsx` imports a page before changing its export.