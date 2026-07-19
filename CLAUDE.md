# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Vite dev server with HMR
- `npm run build` — type-check + production build (`tsc -b` is not wired in; `build` runs `vite build` only)
- `npm run lint` — run ESLint over the repo
- `npm run preview` — serve the production build locally

There is no test setup in this project.

## Architecture

This is a single-page marketing/landing site for a wellness & coaching business (branded "Triquetra Knot" / practitioner "Hannah"), built with React 19 + TypeScript + Vite.

The entire site lives in **`src/App.tsx`** — a single default-exported component (`TriquetraKnotWebsite`). There is no routing, no component library, and no state management beyond a single `useState` for the mobile menu. When making changes, expect to edit this one file.

Key structural facts about `App.tsx`:
- **All styling is inline.** A large `<style>{`...`}</style>` block at the top of the JSX (~lines 22–400) holds the entire stylesheet, including the Google Fonts `@import`, the responsive `@media` breakpoints, and the brand color palette (dark forest-olive green `#2E3A1C`, gold `#E9C35B` / deep gold `#CDA53A`, cream `#f8f7f2`). `src/App.css` and `src/index.css` exist but the meaningful styling is in this inline block.
- **Page sections** are plain `<section>` elements with `id` attributes: `home` (hero), `bio`, `services`, `products`, `testimonials`, `contact`. Navigation works via `scrollToSection(id)`, which calls `scrollIntoView` for smooth scrolling.
- The contact form (`handleFormSubmit`) is a stub — it only `alert()`s and resets; there is no backend.

`src/main.tsx` is the standard Vite entry point that mounts `<App />` into `#root`.

## Deployment

`vite.config.ts` sets `base: "/salubrious-vitality-app/"`, meaning the build is served from a subpath — this is configured for **GitHub Pages** under that repo path. Asset references (e.g. `public/logo.png`) must account for this base path. Changing the repo/deploy location requires updating `base`.

## Conventions

- Despite being `.tsx`, event handlers and helpers in `App.tsx` use untyped parameters (e.g. `(id) =>`, `(e) =>`). `tsconfig.app.json` is strict, so prefer adding types when introducing new code, but match the existing loose style only where the surrounding code already does.
