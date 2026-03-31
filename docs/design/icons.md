# Icons

> Consistent iconography for the Flowe website

## Icon Library

**Primary:** Phosphor Icons (React)
**Alternative:** Lucide React

Both libraries provide:
- Consistent stroke width
- Rounded corners
- Minimal style
- Good legibility
- React components

## Installation

```bash
npm install @phosphor-icons/react
# or
npm install lucide-react
```

## Sizes

| Context | Size | Use |
|---------|------|-----|
| Navigation | 24px | Nav items |
| Button inline | 20px | Inside buttons |
| Feature card | 32-48px | Decorative icons |
| Small inline | 16px | Inline with text |

## Common Icons

| Action | Phosphor | Lucide |
|--------|----------|--------|
| Menu | `List` | `Menu` |
| Close | `X` | `X` |
| Arrow right | `ArrowRight` | `ArrowRight` |
| Check | `Check` | `Check` |
| Timer | `Timer` | `Timer` |
| Calendar | `Calendar` | `Calendar` |
| Star | `Star` | `Star` |
| Download | `DownloadSimple` | `Download` |
| Mail | `Envelope` | `Mail` |
| External link | `ArrowSquareOut` | `ExternalLink` |

## Usage Examples

```tsx
import { Timer, Check, ArrowRight } from '@phosphor-icons/react';

// In navigation
<Timer size={24} weight="regular" className="text-text-primary" />

// In button
<button className="flex items-center gap-2">
  Get Started
  <ArrowRight size={20} weight="bold" />
</button>

// Feature card icon
<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
  <Timer size={32} weight="regular" className="text-primary" />
</div>

// Success state
<Check size={24} weight="bold" className="text-secondary" />
```

## Icon States

```tsx
// Active/Inactive navigation
<NavIcon
  icon={Timer}
  className={isActive ? 'text-primary' : 'text-text-secondary'}
  weight={isActive ? 'fill' : 'regular'}
/>

// Disabled
<Timer
  size={24}
  className={isEnabled ? 'text-text-primary' : 'text-text-disabled'}
/>
```

## Rules

### Do
- Use ONE icon library consistently
- Maintain consistent size per context
- Ensure 44px minimum touch target on icon buttons
- Use semantic icons

### Don't
- Mix icon libraries
- Use icons smaller than 16px
- Use filled icons for inactive states
- Use icons without labels for primary actions

## References

- [Phosphor Icons](https://phosphoricons.com/)
- [Lucide Icons](https://lucide.dev/)
- [Components](components.md)
- [Spacing](spacing.md)
