# MST Module 1 — Project Reference Document

This document is a full implementation reference for rebuilding the same style of landing page in another project.

## 1) Project Goal

Build a premium, animated, blockchain-style landing page with:
- High-end hero + section storytelling
- Scroll-driven product narrative
- Explorer-style live data cards
- Motion-rich UI using modern React/Next.js stack

## 2) Tech Stack

- Framework: Next.js 15 (App Router)
- UI: React 19 + Tailwind CSS
- Animation: Framer Motion + GSAP (+ ScrollTrigger)
- 3D: Three.js
- Icons: Lucide React
- API route: Next.js Route Handler (`app/api/explorer/route.js`)

## 3) Current Dependency Set

```json
{
  "dependencies": {
    "framer-motion": "^11.18.2",
    "gsap": "^3.14.2",
    "lucide-react": "^1.7.0",
    "next": "^15.5.2",
    "react": "19.0.0",
    "react-dom": "19.0.0",
    "three": "^0.183.2"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.20",
    "postcss": "^8.5.3",
    "tailwindcss": "^3.4.17"
  }
}
```

## 4) What Was Done in This Session

### Fixed build error
**Problem:** `Module not found: Can't resolve 'three'` in `ProductSlide.jsx`.

**Action taken:**
- Installed missing runtime package `three`
- Installed `gsap` (also imported by the same component)

**Result:**
- Module resolution issue was fixed.

### Build re-check result
A new build blocker was identified:
- `next/font` failed to fetch Google fonts (`fonts.googleapis.com`) in restricted/no-network environment.
- Source: `app/layout.jsx` using `next/font/google` (`Inter`, `Space_Grotesk`).

## 5) Runbook (Local)

1. Install dependencies:
   - `npm install`
2. Start development server:
   - `npm run dev`
3. Production build:
   - `npm run build`
4. Start production server:
   - `npm run start`

## 6) App Composition

### Root page order (`app/page.jsx`)
1. Navbar
2. HeroSection
3. WhatIsMST
4. ProductsSection
5. ValidatorCTA
6. ExplorerSection
7. EcosystemSection
8. BlogsSection
9. StructuralPurity
10. Footer

This order is the page narrative flow and should be kept when cloning the same UX style.

## 7) Architecture Notes by Area

### A) Global layout + typography
- `app/layout.jsx` defines metadata and font variables.
- Uses CSS variables:
  - `--font-inter`
  - `--font-space-grotesk`

### B) Global styles
- `app/globals.css` includes:
  - Tailwind base/components/utilities
  - body theme defaults
  - marquee animation (`partners-marquee`)
  - custom utility `.bg-noise`

### C) Products section (core interaction)
- `components/sections/ProductsSection.jsx`
- Pattern used:
  - very tall section (`h-[300vh]`) + sticky viewport
  - scroll progress via `useScroll`
  - active product derived from progress
  - image phone-card parallax + rotateY
  - text panel controlled with `AnimatePresence`

### D) Product 3D slide details
- `components/sections/ProductSlide.jsx`
- Contains `MobilePhoneCanvas` with Three.js scene:
  - perspective camera
  - ambient + directional lights
  - phone body/screen/glass/notch meshes
  - ring accent and continuous render loop
  - GSAP `ScrollTrigger` timeline for flip/pin behavior
- Important cleanup implemented in `useEffect` return:
  - remove listeners
  - cancel animation frame
  - kill GSAP timelines/triggers
  - dispose geometries/materials/renderer

### E) Explorer live panel
- UI: `components/sections/ExplorerSection.jsx`
- API: `app/api/explorer/route.js`
- Behavior:
  - polls explorer endpoint periodically
  - updates block list and randomized tx fallback rows
  - keeps previous rows when API temporarily fails

## 8) API Behavior (`/api/explorer`)

Current route responsibilities:
- Query latest block number from RPC
- Walk recent blocks until enough rows found
- Normalize fields for UI:
  - block id
  - relative age (`s ago`, `m ago`, `h ago`)
  - tx hash truncation
  - wei-to-MST formatting
- Return shape:
```json
{
  "blocks": [{ "uid": "", "id": 0, "time": "" }],
  "transactions": [{ "uid": "", "address": "", "value": "" }]
}
```
- Fallback on failure:
  - 500 + empty arrays + message

## 9) Known Operational Issue

If internet/DNS is blocked, build can fail while fetching Google fonts.

### Recommended fixes for offline-safe clone
Pick one:
1. Move to local fonts using `next/font/local`
2. Keep `next/font/google` but ensure network/DNS access
3. Commit local `.woff2` assets and map to font variables in layout

## 10) Checklist to Recreate a Similar Landing Page

1. Scaffold Next.js app with App Router.
2. Install Tailwind and motion stack (`framer-motion`, `gsap`, `three`).
3. Create section-driven home page structure.
4. Implement one hero + one sticky scrollytelling section.
5. Add 3D canvas card with lifecycle cleanup.
6. Add API-backed “live explorer” cards.
7. Add gradient/noise utility backgrounds and tokenized typography.
8. Validate performance:
   - cleanup animation loops
   - avoid heavy rerenders
   - keep image sizes optimized
9. Add offline-safe fonts if build environment has restricted network.
10. Run `npm run build` and resolve all warnings/errors before publish.

## 11) Suggested Reuse Pattern (for your next project)

- Keep this folder strategy:
  - `app/` for routing and API
  - `components/hero`, `components/navbar`, `components/sections`, `components/layout`
- Keep section modules independent and data-driven.
- Use one interaction model per section (scroll, hover, marquee, card update).
- Keep visual design system centralized in globals + utility classes.

## 12) Quick Migration Notes for a New Brand Version

When creating another page of the same type, replace these first:
- Product names, descriptions, and images in `ProductsSection`
- RPC endpoint and value formatter in `app/api/explorer/route.js`
- Hero copy and CTA labels
- Theme colors in gradients/utilities
- Metadata title/description in `app/layout.jsx`

---

## Appendix: Commands Used in This Session

- `npm install three gsap`
- `npm run build`

Outcome summary:
- Fixed missing module error for Three.js
- Identified separate network/font fetch issue unrelated to module resolution
