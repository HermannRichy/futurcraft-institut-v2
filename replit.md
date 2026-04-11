# FuturCraft Institut — Site Web

Centre de formation professionnelle aux métiers du numérique (Abidjan, Côte d'Ivoire).

## Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Runtime**: Node.js 20 / pnpm
- **UI**: Tailwind CSS v4, shadcn/ui components, Radix UI primitives
- **Fonts**: Outfit (Google), Techovier (local — `src/app/fonts/Techovier.otf`)
- **Forms**: react-hook-form + zod v4
- **Animations**: GSAP + @gsap/react
- **Carousel**: Embla / Swiper
- **Theme**: Dark mode default via next-themes

## Architecture

```
src/
  app/                     # Next.js App Router pages
    page.tsx               # Accueil
    a-propos/page.tsx      # À propos
    contact/page.tsx       # Contact
    inscription/page.tsx   # Inscription
    filieres/              # Nos filières (list + [id] detail)
    layout.tsx             # Root layout (fonts, theme provider, cookie banner)
    globals.css
  components/
    sections/              # Page-level section components
      Header.tsx           # Sticky nav with mobile drawer
      Footer.tsx
      Hero.tsx             # Home hero with image collage
      HeroPage.tsx         # Reusable inner-page hero
      FilieresMisesEnAvant.tsx
      FilieresGrid.tsx
      StatsAvantages.tsx   # Bento grid stats cards
      Testimonials.tsx
      CTA.tsx              # 3-step CTA section
      MissionValeurs.tsx   # À propos: histoire, mission, valeurs
      FormulaireContact.tsx  # Contact: info cards + form
      FormulaireInscription.tsx  # Inscription: form + filière preview
    ui/                    # shadcn/ui primitives (Badge, Button, etc.)
    CookieBanner.tsx
    FiliereCard.tsx
  data/
    filieres.json          # Toutes les filières (10+)
  lib/
    utils.ts
  hooks/
```

## Design Language

- **Dark theme** with `bg-card`, `border-border`, `rounded-2xl` cards
- Decorative backgrounds: blurred gradient orbs, SVG dashed arcs/circles, icon bubbles
- **font-techovier** for all headings, `font-sans` (Outfit) for body
- `Badge` + section title + muted description pattern for section headers
- Cards use `group` hover effects with top accent lines and gradient washes
- Color coding per topic (blue = tech, red = security, purple = design, orange = AV, green = business)

## Dev Server

- Port: **5000** (`next dev -p 5000 -H 0.0.0.0`)
- Workflow: "Start application" → `pnpm run dev`
