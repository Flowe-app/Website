# Typography

> Lexend-based type system for optimal readability

## Primary Font: Lexend

Lexend is scientifically designed to improve reading:
- Reduces visual stress
- Improves reading speed
- Used by Google, HP, Adobe
- Free via Google Fonts

## Fallback: Inter

When Lexend is unavailable, use Inter:
- Excellent screen readability
- Google Fonts (free)

## Type Scale

| Name | Size | Weight | Line Height | Tailwind Class | Use |
|------|------|--------|-------------|----------------|-----|
| Display | 56px | Bold (700) | 1.1 | `text-6xl font-bold` | Hero headlines |
| H1 | 40px | Bold (700) | 1.2 | `text-4xl font-bold` | Page titles |
| H2 | 32px | SemiBold (600) | 1.3 | `text-3xl font-semibold` | Section headers |
| H3 | 24px | SemiBold (600) | 1.3 | `text-2xl font-semibold` | Subsections |
| H4 | 20px | SemiBold (600) | 1.4 | `text-xl font-semibold` | Card titles |
| Body | 16px | Regular (400) | 1.6 | `text-base` | Main text |
| Body Small | 14px | Regular (400) | 1.5 | `text-sm` | Secondary text |
| Caption | 12px | Regular (400) | 1.4 | `text-xs` | Timestamps, notes |
| Button | 16px | SemiBold (600) | 1.0 | `text-base font-semibold` | Button labels |

**Note**: Web sizes are slightly larger than mobile for readability at desktop distances.

## Rules

### Do
- Minimum 12px for any text
- Line height 1.5x+ for body text
- Left-align all text
- Clear visual hierarchy

### Don't
- Text smaller than 12px
- Justified text alignment
- Mix too many font sizes
- Use pure black text

## Next.js Font Configuration

```typescript
// src/lib/fonts.ts
import { Lexend, Inter } from 'next/font/google';

export const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
});

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});
```

```tsx
// src/app/layout.tsx
import { lexend, inter } from '@/lib/fonts';

export default function RootLayout({ children }) {
  return (
    <html className={`${lexend.variable} ${inter.variable}`}>
      <body className="font-lexend text-text-primary">
        {children}
      </body>
    </html>
  );
}
```

## Tailwind Configuration

```typescript
// tailwind.config.ts (extend theme)
{
  fontFamily: {
    lexend: ['var(--font-lexend)', 'sans-serif'],
    inter: ['var(--font-inter)', 'sans-serif'],
  },
}
```

## Usage Examples

```tsx
// Hero headline
<h1 className="text-4xl md:text-6xl font-bold text-text-primary leading-tight">
  Productivity that flows
</h1>

// Section header
<h2 className="text-2xl md:text-3xl font-semibold text-text-primary">
  Designed for your ADHD brain
</h2>

// Body text
<p className="text-base text-text-secondary leading-relaxed">
  Unlike other apps that punish when you fail...
</p>

// Caption
<span className="text-xs text-text-secondary">
  Join 2,000+ on the waitlist
</span>

// Button
<button className="text-base font-semibold text-white">
  Get Started
</button>
```

## Responsive Typography

```tsx
// Mobile-first approach
<h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
  Your rhythm, your flow
</h1>

<p className="text-sm md:text-base text-text-secondary">
  Flowe adapts to you, not the other way around.
</p>
```

## References

- [Colors](colors.md)
- [Components](components.md)
- [Lexend Font](https://fonts.google.com/specimen/Lexend)
