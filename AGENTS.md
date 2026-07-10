# Agent Notes

## Project Overview
Landing page for YZN, a creative agency (produccion audiovisual, diseno, branding y contenido digital). Dark, cinematic aesthetic with premium visual details.

## Stack
- **Framework**: Next.js 16.2.10 (App Router, Turbopack)
- **UI Library**: React 19.2.4
- **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss` — no `tailwind.config.*`)
- **Animations**: GSAP 3.15 (`gsap`, `gsap/ScrollTrigger`) + Lenis 1.3.25 (smooth scroll)
- **Typography**: Geist (Geist Sans + Geist Mono via `next/font/google`)
- **Linting**: ESLint with `eslint-config-next` (flat config, `core-web-vitals`)
- **Package manager**: npm (`package-lock.json`)

## Scripts
- `npm run dev` — dev server at http://localhost:3000
- `npm run build` — production build
- `npm run lint` — ESLint
- No test or typecheck scripts.

## Architecture

### Route
- Single-page app; only `/` (`src/app/page.js`).

### Component tree (`page.js`)
```
<LenisController />     smooth scroll + GSAP ticker sync
<MotionController />    GSAP entrance animations
<Navbar />
<main>
  <Hero />
  <Services />
  <Portfolio />
  <Testimonials />
  <Contact />
</main>
<Footer />
```

### Animation details
- **MotionController.jsx** runs in `useLayoutEffect`, uses `gsap.context()`.
  - **Navbar**: direct `gsap.from()` (no ScrollTrigger), with y: -28, autoAlpha, scale.
  - **Hero**: direct `gsap.from()` with stagger (autoAlpha, y, scale). No ScrollTrigger.
  - **Services**: `gsap.from()` per-card via ScrollTrigger (`once: true`, `start: "top 78%"`).
  - **Portfolio**: `gsap.from()` per-project via ScrollTrigger (`once: true`, `start: "top 78%"`).
  - **Testimonials / Contact**: `gsap.from()` grouped items via ScrollTrigger (`once: true`, `start: "top 76%"`).
  - Safety timeout at 3s restores visibility on all motion elements if ScrollTrigger never fires.
- **LenisController.jsx** creates Lenis with `wrapper: window`, `content: document.documentElement`. Calls `ScrollTrigger.refresh()` after init. Registers ScrollTrigger plugin.
- Motion elements use `data-motion-section`, `data-motion-item`, `data-motion-group`, `data-motion-text`, `data-motion-title`, `data-motion-visual`, `data-motion-button` attributes.
- Shared motion defaults in `motionConfig.js`: `duration: 0.9`, `ease: "power3.out"`, `stagger: 0.08`.
- Footer has `data-motion-section="footer"` but is NOT animated by MotionController (not included in its query selectors).

### Design system
- **Background**: `#030303` with radial purple gradients on body.
- **Cards**: Glass morphism (`backdrop-blur-2xl`, translucent borders, gradient fills).
- **Colors**: Violet/purple primary accent (`#a855f7`), white text with varying opacity levels (`/52`, `/62`, `/68`, `/74`, etc.).
- **Typography**: Geist Sans for body, Geist Mono where needed. Font sizes use Tailwind scale + arbitrary values.
- **Imports**: `@/` maps to `src/` via `jsconfig.json`.

## Conventions
- Client components (`"use client"`) only when browser APIs needed: Navbar, all animation components, and any scroll/event logic.
- No TypeScript. Plain JSX files (`.jsx`, `.js`).
- All form inputs use `color-scheme: dark` (set in globals.css).
