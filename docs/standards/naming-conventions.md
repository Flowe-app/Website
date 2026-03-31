# Naming Conventions

> Consistent naming for all code elements

## Files

| Type | Convention | Example |
|------|------------|---------|
| Components | `kebab-case.tsx` | `feature-card.tsx` |
| Pages | `page.tsx` (Next.js) | `app/waitlist/page.tsx` |
| Layouts | `layout.tsx` (Next.js) | `app/layout.tsx` |
| Utilities | `camelCase.ts` | `validateEmail.ts` |
| Constants | `camelCase.ts` | `constants.ts` |
| Types | `camelCase.ts` | `types.ts` |
| API routes | `route.ts` (Next.js) | `app/api/waitlist/route.ts` |
| CSS | `kebab-case.css` | `globals.css` |

## Components

| Type | Convention | Example |
|------|------------|---------|
| UI Components | `PascalCase` | `Button`, `Card`, `Input` |
| Section Components | `PascalCase` | `HeroSection`, `FeaturesGrid` |
| Layout Components | `PascalCase` | `Header`, `Footer`, `Container` |
| Page Components | `PascalCase` (default export) | `WaitlistPage` |

## Variables and Functions

| Type | Convention | Example |
|------|------------|---------|
| Variables | `camelCase` | `emailList`, `isLoading` |
| Functions | `camelCase` | `validateEmail()`, `joinWaitlist()` |
| Event handlers | `handle + Event` | `handleSubmit`, `handleClick` |
| Booleans | `is/has/can + Name` | `isLoading`, `hasError`, `canSubmit` |
| Constants | `camelCase` | `maxRetries`, `animationDuration` |
| Env variables | `SCREAMING_SNAKE_CASE` | `NEXT_PUBLIC_API_URL` |

## Types and Interfaces

| Type | Convention | Example |
|------|------------|---------|
| Interfaces | `PascalCase` | `ButtonProps`, `WaitlistEntry` |
| Type aliases | `PascalCase` | `Variant`, `AnimationConfig` |
| Enums | `PascalCase` | `FormStatus` |
| Enum values | `PascalCase` | `FormStatus.Success` |

## Folder Structure

```
src/
├── app/                      # Next.js pages (kebab-case routes)
│   ├── page.tsx
│   ├── layout.tsx
│   ├── waitlist/
│   │   └── page.tsx
│   └── api/
│       └── waitlist/
│           └── route.ts
├── components/               # kebab-case folders
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── input.tsx
│   ├── sections/
│   │   ├── hero-section.tsx
│   │   └── features-grid.tsx
│   └── layout/
│       ├── header.tsx
│       └── footer.tsx
├── lib/                      # camelCase files
│   ├── constants.ts
│   ├── utils.ts
│   └── fonts.ts
└── styles/
    └── globals.css
```

## CSS / Tailwind

| Type | Convention | Example |
|------|------------|---------|
| Custom CSS classes | `kebab-case` | `neu-elevated`, `neu-pressed` |
| CSS variables | `--kebab-case` | `--color-primary`, `--font-lexend` |
| Tailwind config keys | `camelCase` | `textPrimary`, `surfaceAlt` |

## Rules

### Do
- Use descriptive names that explain purpose
- Keep names concise but clear
- Match filename to main export name
- One component per file

### Don't
- Use abbreviations (except common ones: id, url, api)
- Use single letters (except in loops: `i`, `j`)
- Prefix interfaces with `I`
- Use `index.tsx` barrel files excessively

## Examples

```tsx
// Good
export function FeatureCard({ title, description, icon }: FeatureCardProps) { ... }
const isSubmitting = false;
function handleFormSubmit(e: FormEvent) { ... }

// Bad
export function FC({ t, d, i }: FCProps) { ... }  // Unclear abbreviation
const x = false;  // Unclear name
function submit(e: any) { ... }  // Generic name, any type
```

## References

- [Code Style](code-style.md)
