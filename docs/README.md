# Flowe Website Documentation

> Official website for Flowe — Productivity app designed specifically for people with ADHD

## What is This Project?

The Flowe website serves as the public-facing landing page, waitlist, and information hub for the Flowe mobile app. It must be visually coherent with the app's design system (neumorphism, calming aesthetics, ADHD-friendly principles).

## Tech Stack

| Component | Technology | Reason |
|-----------|------------|--------|
| Framework | Next.js 15 (App Router) | SSG + Server Actions, scalable |
| Language | TypeScript | Type safety, DX |
| Styling | Tailwind CSS | Utility-first, design tokens |
| Animations | Framer Motion | Declarative, performant |
| Font | Lexend (Google Fonts) | ADHD-friendly readability |
| Icons | Phosphor Icons (React) | Consistent with mobile app |
| Deploy | Vercel | Free tier, edge network |

## Quick Start

```bash
cd flowe-website
npm install
npm run dev
```

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout (fonts, metadata)
│   ├── page.tsx            # Home / Landing page
│   ├── waitlist/           # Waitlist page
│   └── api/                # API routes (waitlist, contact)
├── components/             # Reusable UI components
│   ├── ui/                 # Base components (Button, Card, Input)
│   ├── sections/           # Page sections (Hero, Features, CTA)
│   └── layout/             # Layout components (Header, Footer)
├── lib/                    # Utilities and helpers
│   ├── constants.ts        # App constants, design tokens
│   ├── utils.ts            # Helper functions
│   └── fonts.ts            # Font configuration
└── styles/                 # Global styles
    └── globals.css         # Tailwind base + custom properties
```

## Documentation Index

### Foundations
- [AI Context](AI.md) — Quick context for AI assistants
- [Contributing](CONTRIBUTING.md) — Contribution guide
- [Understanding ADHD](context/adhd-understanding.md) — Why we build this way

### Architecture
- [Overview](architecture/overview.md) — Website architecture
- [Folder Structure](architecture/folder-structure.md) — Project organization

### Standards
- [Code Style](standards/code-style.md) — TypeScript/React rules
- [Naming Conventions](standards/naming-conventions.md) — File and code naming
- [Error Handling](standards/error-handling.md) — Unified error management
- [Response Format](standards/response-format.md) — User messages
- [Versioning](standards/versioning.md) — Semantic versioning

### Design System
- [Overview](design/overview.md) — ADHD design principles
- [Neumorphism](design/neumorphism.md) — Soft UI design system
- [Style Guide](design/style-guide.md) — Visual style rules
- [Colors](design/colors.md) — Color palette and neumorphic shadows
- [Typography](design/typography.md) — Font system
- [Spacing](design/spacing.md) — Spacing tokens
- [Animations](design/animations.md) — Animation rules
- [Components](design/components.md) — UI components
- [Icons](design/icons.md) — Iconography

### Brand
- [Identity](brand/identity.md) — Name, logo, tagline
- [Voice & Tone](brand/voice-tone.md) — Communication style
- [Messaging](brand/messaging.md) — Messages by context
- [Assets](brand/assets.md) — Marketing guidelines

---

*Flowe Website Documentation v1.0 — March 2026*
