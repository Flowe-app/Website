# Colors

> Calming color palette for ADHD-friendly design

## Primary Palette

| Name | Hex | RGB | Tailwind Variable | Use |
|------|-----|-----|-------------------|-----|
| Primary | `#5B8FB9` | 91, 143, 185 | `--color-primary` | Buttons, accents, logo |
| Primary Light | `#A3C4DC` | 163, 196, 220 | `--color-primary-light` | Active backgrounds |
| Secondary | `#7BAE7F` | 123, 174, 127 | `--color-secondary` | Success, completed |
| Accent | `#B8A9C9` | 184, 169, 201 | `--color-accent` | Highlights, premium |
| Warning | `#E8C97D` | 232, 201, 125 | `--color-warning` | Soft alerts |

## Backgrounds (Neumorphism)

| Name | Hex | RGB | Tailwind Variable | Use |
|------|-----|-----|-------------------|-----|
| Background | `#EDF1F5` | 237, 241, 245 | `--color-background` | **Main background (REQUIRED for neumorphism)** |
| Surface | `#FFFFFF` | 255, 255, 255 | `--color-surface` | Elevated cards, modals |
| Surface Alt | `#E8EDF2` | 232, 237, 242 | `--color-surface-alt` | Alternative neumorphic background |

**CRITICAL**: Neumorphism requires the `#EDF1F5` background. Do NOT use pure white backgrounds as the main bg.

## Text

| Name | Hex | RGB | Tailwind Variable | Use |
|------|-----|-----|-------------------|-----|
| Text Primary | `#2D3748` | 45, 55, 72 | `--color-text-primary` | Main text, titles |
| Text Secondary | `#64748B` | 100, 116, 139 | `--color-text-secondary` | Subtitles, help text |
| Text Disabled | `#94A3B8` | 148, 163, 184 | `--color-text-disabled` | Placeholders |

## Functional

| Name | Hex | RGB | Use |
|------|-----|-----|-----|
| Success | `#7BAE7F` | 123, 174, 127 | Completed states |
| Error | `#D97B7B` | 217, 123, 123 | Errors (use sparingly) |
| Info | `#7BA7C9` | 123, 167, 201 | Tips, information |

## Dark Mode (Future)

| Name | Hex | Use |
|------|-----|-----|
| Dark Background | `#1A1D21` | Main background |
| Dark Surface | `#252A30` | Cards, modals |
| Dark Text Primary | `#E2E8F0` | Main text |

## Forbidden Colors

| Color | Reason |
|-------|--------|
| `#000000` (pure black) | Too aggressive |
| `#FFFFFF` as main background | Visual fatigue, breaks neumorphism |
| Bright reds | Anxiety-inducing |
| Neon colors | Sensory overload |
| High-saturation colors | Too stimulating |

## Neumorphic Shadows

| Name | Color | Opacity | Use |
|------|-------|---------|-----|
| Shadow Dark | `#A3B1C6` | 0.3-0.6 | Bottom-right shadow (depth) |
| Shadow Light | `#FFFFFF` | 0.4-0.7 | Top-left shadow (highlight) |

### CSS Shadow Patterns

```css
/* Elevated (raised) element */
.neu-elevated {
  background: #EDF1F5;
  box-shadow:
    -4px -4px 8px rgba(255, 255, 255, 0.6),
    4px 4px 8px rgba(163, 177, 198, 0.5);
}

/* Pressed (inset) element */
.neu-pressed {
  background: #EDF1F5;
  box-shadow:
    inset 2px 2px 4px rgba(163, 177, 198, 0.3),
    inset -2px -2px 4px rgba(255, 255, 255, 0.4);
}

/* Subtle elevation */
.neu-subtle {
  background: #EDF1F5;
  box-shadow:
    -2px -2px 4px rgba(255, 255, 255, 0.5),
    2px 2px 4px rgba(163, 177, 198, 0.3);
}

/* Prominent elevation (CTAs, hero elements) */
.neu-prominent {
  background: #EDF1F5;
  box-shadow:
    -6px -6px 12px rgba(255, 255, 255, 0.7),
    6px 6px 12px rgba(163, 177, 198, 0.6);
}
```

## Tailwind Configuration

```typescript
// tailwind.config.ts (extend theme)
{
  colors: {
    primary: {
      DEFAULT: '#5B8FB9',
      light: '#A3C4DC',
    },
    secondary: '#7BAE7F',
    accent: '#B8A9C9',
    warning: '#E8C97D',
    error: '#D97B7B',
    info: '#7BA7C9',
    background: '#EDF1F5',
    surface: {
      DEFAULT: '#FFFFFF',
      alt: '#E8EDF2',
    },
    text: {
      primary: '#2D3748',
      secondary: '#64748B',
      disabled: '#94A3B8',
    },
    shadow: {
      dark: '#A3B1C6',
      light: '#FFFFFF',
    },
  },
}
```

## Usage Examples

```tsx
// Primary button
<button className="bg-primary text-white rounded-xl px-6 py-3 neu-elevated hover:opacity-90 transition-opacity">
  Join Waitlist
</button>

// Success indicator
<div className="bg-secondary/10 text-secondary rounded-lg p-4">
  <CheckIcon /> Task completed
</div>

// Error state
<p className="text-error text-sm">Could not save</p>
```

## Rules

### Do
- Use colors from this palette only
- Maintain 4.5:1 contrast ratio for text
- Use functional colors consistently
- Test in both light conditions

### Don't
- Use pure black `#000000`
- Use pure white as main background
- Mix colors outside the palette
- Use red for non-error states

## References

- [Design Overview](overview.md)
- [Components](components.md)
