# Copilot / AI Agent Instructions

This repository is a Vite + React + TypeScript single-page app with a small API client and a focused folder structure. The goal of these instructions is to make an AI coding agent productive quickly by surfacing project-specific conventions, important files, and concrete examples.

Summary
- Frameworks: Vite (dev/build), React 19, TypeScript, React Router v7, TanStack React Query for data fetching.
- Entry point: [src/main.tsx](src/main.tsx) mounts `HeroesApp` in [src/HeroesApp.tsx](src/HeroesApp.tsx).
- Routes: See [src/router/app.routes.tsx](src/router/app.routes.tsx) for app routing and lazy-loading patterns.
- API client: single axios instance in [src/heroes/api/hero.api.ts](src/heroes/api/hero.api.ts). It uses the environment variable `VITE_API_URL`.

Key conventions and patterns
- Data fetching: network calls live in `src/heroes/actions/*.action.ts`. These functions call `heroApi` and often transform the returned `image` path by prefixing with `VITE_API_URL` (see get-heroes-by-page and get-hero-by-slug).
- Hooks & caching: higher-level hooks live in `src/heroes/hooks/*` and use TanStack React Query to call the action functions. Prefer adding a new action + hook pair when adding new endpoints.
- UI system: shadcn/Radix-based primitives are under `src/auth/ui` and `src/auth/components/custom` (use these for consistent UI patterns).
- Layouts: top-level layouts are `HeroesLayout` and `AdminLayout` in `src/heroes/layouts` and `src/admin/layouts`. Routes mount layouts in `app.routes.tsx`.
- Lazy-loading: pages are commonly lazy-loaded (see `SearchPage` in `app.routes.tsx`). Use `React.lazy` + routes when adding large pages.

Build, run and environment
- Dev server: `npm run dev` (runs `vite`).
- Production build: `npm run build` (runs `tsc -b && vite build`).
- Preview production build: `npm run preview`.
- Lint: `npm run lint` (runs `eslint .`).
- Environment: network base is `VITE_API_URL`. Default code expects an API at `${VITE_API_URL}/api/heroes` and images at `${VITE_API_URL}/images/...`.

Codebase specifics (concrete examples)
- To add a new endpoint:
  1. Create `src/heroes/actions/your-action.action.ts` using `heroApi` from [src/heroes/api/hero.api.ts](src/heroes/api/hero.api.ts).
  2. Export a typed function returning the API response type (add types in `src/heroes/types`).
  3. Create a hook in `src/heroes/hooks` to wrap the action with React Query.
  4. Use transformed `image` URLs the same way other actions do (prefix with `VITE_API_URL`).

- Routes and pages:
  - Add page components to `src/heroes/pages/*` and register them in [src/router/app.routes.tsx](src/router/app.routes.tsx). Follow the existing pattern for nested routes under `HeroesLayout`.

Testing & debugging notes
- There are no test commands included in `package.json` currently. If you add tests, update `package.json` accordingly.
- Console logging is used in several actions (e.g. get-hero-by-slug). Use these logs for quick debugging; prefer adding more descriptive messages if needed.

What not to change without asking
- Don't change the `VITE_API_URL` usage or the `heroApi` base path pattern unless the API surface changes.
- Keep `src/auth/ui` and `src/auth/components/custom` consistent — they provide shared UI primitives used across pages.

Where to look first when asked to implement a feature
- Routing/structure: [src/router/app.routes.tsx](src/router/app.routes.tsx)
- Entry/boot: [src/main.tsx](src/main.tsx) and [src/HeroesApp.tsx](src/HeroesApp.tsx)
- API client: [src/heroes/api/hero.api.ts](src/heroes/api/hero.api.ts)
- Example actions: [src/heroes/actions/get-heroes-by-page.action.ts](src/heroes/actions/get-heroes-by-page.action.ts)

If you need more context
- Read [README.md](README.md) for developer notes (UI tooling, shadcn setup).
- Ask for the expected `VITE_API_URL` value and whether you should add sample `.env` files.

If anything in these instructions is unclear, tell me which area (routing, API, UI primitives, or build) and I will expand with precise examples and file excerpts.
