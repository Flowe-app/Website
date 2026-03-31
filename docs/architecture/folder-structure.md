# Folder Structure

> Project organization for the Flowe website

## Structure

```
flowe-website/
├── docs/                       # Project documentation
│   ├── README.md               # Documentation index
│   ├── AI.md                   # AI assistant context
│   ├── CONTRIBUTING.md         # Contribution guide
│   ├── architecture/           # Architecture docs
│   ├── brand/                  # Brand guidelines
│   ├── context/                # ADHD understanding
│   ├── design/                 # Design system
│   └── standards/              # Code standards
├── public/                     # Static assets
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── og-image.png
│   ├── logo.svg
│   └── images/                 # Images
│       ├── hero/
│       ├── features/
│       └── app-screenshots/
├── src/                        # Source code
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   ├── not-found.tsx       # 404 page
│   │   ├── error.tsx           # Error boundary
│   │   ├── globals.css         # Global styles
│   │   ├── waitlist/
│   │   │   └── page.tsx        # Waitlist page
│   │   └── api/
│   │       └── waitlist/
│   │           └── route.ts    # Waitlist API
│   ├── components/             # UI Components
│   │   ├── ui/                 # Base components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   └── toast.tsx
│   │   ├── sections/           # Page sections
│   │   │   ├── hero-section.tsx
│   │   │   ├── features-grid.tsx
│   │   │   ├── value-prop.tsx
│   │   │   ├── waitlist-cta.tsx
│   │   │   └── pricing-preview.tsx
│   │   └── layout/             # Layout components
│   │       ├── header.tsx
│   │       ├── footer.tsx
│   │       └── container.tsx
│   └── lib/                    # Utilities
│       ├── constants.ts        # Design tokens, app constants
│       ├── utils.ts            # Helper functions
│       ├── fonts.ts            # Font configuration
│       └── animations.ts       # Framer Motion presets
├── .env.local                  # Environment variables (gitignored)
├── .gitignore
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

## Key Conventions

### `src/app/` — Pages
- One `page.tsx` per route
- `layout.tsx` for shared layouts
- `error.tsx` for error boundaries
- `loading.tsx` for loading states
- `api/` for server-side endpoints

### `src/components/` — Components
- `ui/` — Primitive, reusable components (Button, Card, Input)
- `sections/` — Page-level sections (Hero, Features, CTA)
- `layout/` — Structural components (Header, Footer)

### `src/lib/` — Utilities
- `constants.ts` — Design tokens, config values
- `utils.ts` — Pure helper functions
- `fonts.ts` — Google Fonts configuration
- `animations.ts` — Framer Motion animation presets

### `public/` — Static Assets
- Brand assets (logo, favicon, OG image)
- Images organized by context
- No large files (optimize before adding)

### `docs/` — Documentation
- Mirrors the mobile app's docs structure
- Adapted for web technologies (CSS/Tailwind vs Dart/Flutter)
- Shared brand and design principles

## Rules

### Do
- Keep components in the appropriate subfolder
- One component per file
- Co-locate types with components when small
- Use `@/` path alias for imports

### Don't
- Create deeply nested folder structures
- Put business logic in components
- Create `index.ts` barrel files unnecessarily
- Store sensitive data in `public/`

## References

- [Architecture Overview](overview.md)
- [Naming Conventions](../standards/naming-conventions.md)
