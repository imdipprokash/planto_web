# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static marketing/landing site for **Planto** (a plant-identification app), originally exported from Figma Make and migrated to **Next.js**. It is a marketing site with no backend; every route is statically prerendered. README points to the original Figma design.

## Commands

```bash
npm i           # install deps
npm run dev     # Next.js dev server on http://localhost:3000
npm run build   # production build (also Vercel's build) — runs `tsc` type-checking
npm run start   # serve the production build on http://localhost:3000
```

There is **no test, lint, or format command**. ESLint is intentionally disabled during builds (`eslint.ignoreDuringBuilds` in `next.config.mjs`) — there is no ESLint config. **`next build` does type-check** (`tsc` via the Next plugin); a type error will fail the build, so keep types valid.

**Tailwind v4 is built at build/dev time** via `@tailwindcss/postcss` (see `postcss.config.mjs`). `src/styles/globals.css` is the live Tailwind source and the only stylesheet; CSS is generated, not committed. Any Tailwind utility class works in JSX — no need to pre-compile.

## Architecture

- **Stack:** Next.js 14 (App Router) + React 18 + TypeScript. Deployed on Vercel (zero-config; no `vercel.json` needed).
- **Routing:** file-based under `src/app/`. Each route is a thin `src/app/<path>/page.tsx` that renders the matching view component. `src/app/layout.tsx` is the single root layout — it imports the global stylesheet and wraps every page in `<Header>` / `<Footer>` plus `<ScrollToTop>` (smooth-scrolls to top on every route change).
- **Views** (`src/views/`): one component per route (e.g. `HomePage`, `FeaturesPage`). Composed from the marketing section components in `src/components/` (e.g. `Hero`, `Features`, `Stats`, `Testimonials`, `CTA`, `HowItWorks`). Route URL → view: `/`→`HomePage`, `/how-it-works`→`HowItWorksPage`, `/cookies`→`CookiePage`, etc.
- **UI primitives** (`src/components/ui/`): shadcn/ui components (MIT) built on Radix UI + `class-variance-authority`. `src/components/ui/utils.ts` exports `cn()` (clsx + tailwind-merge) — use it for conditional class composition. `src/components/figma/ImageWithFallback.tsx` is the standard image component for remote/Unsplash images.
- **Import alias:** `@` → `src/` (configured in `tsconfig.json`). App route files use `@/views/...`; views/components use relative imports.
- **Server vs client:** layout, route pages, views, and `Footer` are server components. Files needing browser APIs/hooks carry a `'use client'` directive: `Header` (scroll state + mobile menu), `ScrollToTop`, `figma/ImageWithFallback`, `views/FAQPage`, `views/ContactPage`, and the interactive `components/ui/*` primitives. Add `'use client'` to any new component using `useState`/`useEffect`/event handlers/`window`.

## Important gotchas

- **CSS is built by Tailwind v4 at build/dev time** (`@tailwindcss/postcss`, `postcss.config.mjs`). `src/styles/globals.css` is the single source stylesheet, imported once by `src/app/layout.tsx`; the old committed `src/index.css` was removed. Any Tailwind utility class works in JSX.
- **Design system lives in `src/styles/globals.css`:** botanical `--brand-*` scale (use `bg-brand-600` etc.), semantic tokens, plus custom utilities — `text-gradient`, `container-page`, `glass`/`glass-card`, `bg-grid`/`bg-dots`, `blob-mask`, `shadow-soft/card/float/brand`, and `animate-float`/`animate-blob`. Fonts: Inter (body) + Sora (display, auto-applied to `h1`–`h4`). `<Reveal>` (`src/components/Reveal.tsx`, client) does scroll-in fade/rise — wrap section headers and stagger grid items with `delay`.
- **Orphan duplicate views exist.** Only the `*Page.tsx` files are routed. The shorter siblings in `src/views/` (`About.tsx`, `Contact.tsx`, `FAQ.tsx`, `Privacy.tsx`, `Terms.tsx`) are unused — edit the `*Page.tsx` version.
- **Routing uses `next/link`, not `react-router-dom`** (removed in the migration). Use `<Link href="...">` from `next/link` and `usePathname()` from `next/navigation`. The old Figma `pkg@version` import specifiers were rewritten to plain package names — write new imports with plain names.
- **Loose dependency versions:** be cautious assuming exact API versions of pinned deps.
- **Export conventions are inconsistent:** most views use named exports, but `PrivacyPage` is a default export. Check how the route's `src/app/<path>/page.tsx` imports the view before changing its export.
