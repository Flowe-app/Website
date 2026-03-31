# AI Context

> Quick reference for AI assistants working on the Flowe website

## Project Summary

**Flowe Website** is the official Next.js website for the Flowe mobile app — a productivity app for people with ADHD. Core philosophy: **"Forgiving by Design"**.

The website must be visually coherent with the mobile app's neumorphic design system.

## Critical Rules

### Design Philosophy
- CALM > STIMULATION — Reduce sensory overload
- CLARITY > DECORATION — Every element has purpose
- FLEXIBILITY > RIGIDITY — Allow personalization
- PROGRESS > PERFECTION — Celebrate imperfect progress

### Code Standards
- Files: `kebab-case.tsx` for components, `camelCase.ts` for utilities
- Components: `PascalCase`
- Variables/functions: `camelCase`
- Types/Interfaces: `PascalCase`
- Constants: `SCREAMING_SNAKE_CASE` for env, `camelCase` for design tokens

### Forbidden in UI
- Pure black `#000000`
- Pure white `#FFFFFF` as main background
- Bright neon colors
- Bouncing animations
- Blinking elements
- Text smaller than 12px
- Glassmorphism (backdrop-filter, translucent backgrounds)

### Forbidden Words in User-Facing Content
- Fail/Failed
- Late/Behind
- Must/Have to
- Urgent
- Incomplete
- Deficit
- Disorder
- Symptoms

### Preferred Words
- Complete (not finish)
- Pause (not stop)
- Adjust (not change)
- Progress (not performance)
- Plan (not schedule)
- Flow (not productivity)

## Tech Stack Quick Reference

```
Next.js 15 (App Router) + TypeScript
├── Styling: Tailwind CSS
├── Animations: Framer Motion
├── Font: Lexend (Google Fonts)
├── Icons: Phosphor Icons (React)
└── Deploy: Vercel
```

## Folder Structure

```
src/
├── app/              # Pages and API routes
├── components/       # UI components
│   ├── ui/           # Base (Button, Card, Input)
│   ├── sections/     # Page sections (Hero, Features)
│   └── layout/       # Header, Footer
├── lib/              # Utilities, constants, fonts
└── styles/           # Global CSS
```

## Key Colors

| Name | Hex | Use |
|------|-----|-----|
| Primary | `#5B8FB9` | Buttons, accents |
| Secondary | `#7BAE7F` | Success, completed |
| Accent | `#B8A9C9` | Highlights, premium |
| Warning | `#E8C97D` | Alerts |
| Error | `#D97B7B` | Errors (use sparingly) |
| Background | `#EDF1F5` | Main background (neumorphism) |
| Text Primary | `#2D3748` | Main text |
| Text Secondary | `#64748B` | Subtitles |

## Neumorphism (CRITICAL)

The website uses neumorphism (Soft UI). Key rules:
1. Background must be `#EDF1F5` or `#E8EDF2`
2. Elements need **dual shadows** (light top-left + dark bottom-right)
3. **NO glassmorphism** (no backdrop-filter, no translucent backgrounds)
4. Border radius minimum 12-16px
5. Element color matches background (depth comes from shadows)

## Documentation Structure

```
docs/
├── architecture/     # Website architecture
├── brand/            # Brand guidelines (shared with app)
├── context/          # ADHD understanding
├── design/           # Design system (adapted for web/CSS)
└── standards/        # Code standards (TypeScript/React)
```

## References

- [Full README](README.md)
- [ADHD Understanding](context/adhd-understanding.md)
- [Naming Conventions](standards/naming-conventions.md)
- [Error Handling](standards/error-handling.md)
- [Colors](design/colors.md)
