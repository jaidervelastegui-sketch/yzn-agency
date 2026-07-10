# Agent Notes

## Project Overview
Landing page for YZN, a creative agency (producción audiovisual, diseño, branding y contenido digital). Dark, cinematic aesthetic with premium visual details.

## Stack
- **Framework**: Next.js 16.2.10 (App Router, Turbopack)
- **UI Library**: React 19.2.4
- **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss` — no `tailwind.config.*`)
- **Animations**: GSAP 3.15 (`gsap`, `gsap/ScrollTrigger`) + Lenis 1.3.25 (smooth scroll)
- **Typography**: Geist (Geist Sans + Geist Mono via `next/font/google`)
- **Linting**: ESLint with `eslint-config-next` (flat config)

## Scripts
- `npm run dev` — dev server at http://localhost:3000
- `npm run build` — production build
- `npm run lint` — ESLint
- No test or typecheck scripts configured.

## Architecture

### Route
- Single-page app; only `/` (`src/app/page.js`).

### Component tree (`page.js`)
```
<LenisController />    ← smooth scroll
<MotionController />   ← GSAP entrance animations
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

### Directory structure

```
src/
├── app/
│   ├── globals.css     — global styles, CSS variables, body gradients
│   ├── layout.js       — root layout (html lang="es", fonts, metadata)
│   └── page.js         — home page, assembles all components
├── components/
│   ├── animations/
│   │   ├── gsapClient.js       — re-exports gsap singleton
│   │   ├── index.js            — barrel exports
│   │   ├── LenisController.jsx — Lenis init + GSAP ticker + ScrollTrigger sync
│   │   ├── motionConfig.js     — shared defaults and selectors
│   │   ├── MotionController.jsx— all GSAP entrance animations (hero direct, rest via ScrollTrigger)
│   │   └── useAnimationScope.js— simple ref helper
│   ├── layout/
│   │   ├── Footer.jsx          — brand tagline + copyright
│   │   └── Navbar.jsx          — sticky nav with blur, scroll detection, mobile menu
│   ├── sections/
│   │   ├── Contact.jsx         — form with premium fields + CTA
│   │   ├── Hero.jsx            — full-screen hero with YZN title, poster card, animated particles
│   │   ├── Portfolio.jsx       — 4 project case studies (Dôm, Ritual, Taller de Bosque, Club Milán)
│   │   ├── Services.jsx        — 4 service cards (Audiovisual, Graphic, Branding, Content)
│   │   └── Testimonials.jsx    — single testimonial quote
│   └── ui/
│       ├── Button.jsx          — primary/secondary variants, anchor or button
│       ├── Card.jsx            — glass card wrapper with hover glow
│       ├── Container.jsx       — max-width centered wrapper
│       └── SectionTitle.jsx    — eyebrow + title + description
├── assets/            ← empty
├── data/              ← empty
├── hooks/             ← empty
├── lib/               ← empty
├── styles/            ← empty
└── utils/             ← empty
```

### Animation details
- **MotionController.jsx** runs in `useLayoutEffect`, uses `gsap.context()`.
  - **Hero**: direct `gsap.from()` with stagger (autoAlpha, y, scale). No ScrollTrigger.
  - **Services/Portfolio/Testimonials/Contact**: `gsap.from()` with `ScrollTrigger` (`once: true`, `start: "top 78%"`).
  - Safety timeout at 3s restores visibility on all motion elements if ScrollTrigger never fires.
- **LenisController.jsx** creates Lenis with `wrapper: window` (no wrapper element — compatible with ScrollTrigger). Calls `ScrollTrigger.refresh()` after init.
- All motion elements use `data-motion-section`, `data-motion-item`, `data-motion-group`, `data-motion-text`, `data-motion-title`, `data-motion-visual`, `data-motion-button` attributes.

### Design system
- **Background**: `#030303` with radial purple gradients on body.
- **Cards**: Glass morphism (`backdrop-blur-2xl`, translucent borders, subtle gradient fills).
- **Colors**: Violet/purple primary accent (`#a855f7`), white text with varying opacity levels (`/52`, `/62`, `/68`, `/74`, etc.).
- **Typography**: Geist Sans for body, Geist Mono where monospace is needed. Font sizes use Tailwind scale + arbitrary values.
- **Imports**: `@/` maps to `src/` via `jsconfig.json`.

## Conventions
- Client components: only when browser APIs are needed (`"use client"`). Navbar, animations, and any scroll/event logic.
- Keep browser-only logic behind client components.
- All form inputs use `color-scheme: dark` (set in globals.css).
