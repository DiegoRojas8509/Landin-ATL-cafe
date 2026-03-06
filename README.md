# ATL Café — Website

Next.js 14 · Tailwind CSS · Framer Motion · TypeScript

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Stack
- **Next.js 14** App Router
- **Tailwind CSS** with ATL custom tokens
- **Framer Motion** page transitions
- **Zustand** (ready for backend vote state)
- **TypeScript** throughout

## Project Structure

```
atl-cafe/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout: fonts, navbar, footer, cursor
│   ├── page.tsx                # Homepage
│   ├── cafe/page.tsx           # Café de Especialidad
│   ├── taller-de-arte/page.tsx # Taller de Arte
│   ├── galeria/page.tsx        # Galería Abierta
│   ├── cursos/page.tsx         # Cursos y Talleres
│   ├── comunidad/page.tsx      # Comunidad + Café Colaborativo
│   └── not-found.tsx           # 404 page
│
├── components/
│   ├── layout/                 # Navbar, Footer, Cursor, PageTransition
│   ├── home/                   # Homepage sections (Hero, Manifesto, etc.)
│   └── shared/                 # Reusable: SpaceCard, VoteButton, PageHero, SectionLabel
│
├── lib/
│   ├── constants.ts            # ALL site data: copy, spaces, coffee, poll, SEO
│   ├── hooks.ts                # useScrolled, useReveal, useCursor, useVote
│   └── utils.ts                # cn(), helpers
│
├── styles/
│   └── globals.css             # Design tokens, base reset, utilities
│
└── public/
    └── images/                 # See README.md inside for image slots
        ├── hero/
        ├── spaces/
        └── coffee/
```

## Adding Images

See `public/images/README.md` for exact filenames and specs.
Each component has an `IMAGE SLOT` comment showing exactly where to add each photo.

## Activating the Backend (Café Colaborativo)

Currently uses mock data. When ready:
1. Set up Supabase or PlanetScale
2. Add `.env.local` with `DATABASE_URL`
3. Update `lib/hooks.ts` → `useVote()` to POST to `/api/vote`
4. Create `app/api/vote/route.ts`

## Content Updates

All copy lives in `lib/constants.ts`. No need to touch components for text changes.
- **Café Colaborativo question** → `COLAB_POLL`
- **Space descriptions** → `SPACES` array
- **Coffee data** → `COFFEE_DATA`
- **Site info / social links** → `SITE`
