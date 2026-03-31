# Design Style Guide

> Visual style defined for the website
> All design must follow these rules

## Style: Soft Neumorphism

Soft UI (neumorphism) with calm, tactile elements. Designed to reduce sensory overload for neurodivergent users through subtle depth and organic shapes.

## Principles

| Principle | Application |
|-----------|-------------|
| **Calm** | Soft colors, no aggressive elements |
| **Clarity** | One purpose per section |
| **Space** | Generous whitespace between elements |
| **Softness** | Rounded corners, subtle shadows |
| **Consistency** | Same style throughout the site and app |

## Visual Identity

### What Flowe Feels Like
- Peaceful, not clinical
- Supportive, not demanding
- Modern, not cold
- Soft, not weak

### Design Mantra
> "If it doesn't feel calm, it's not Flowe."

## Quick Reference

### Colors
| Use | Color |
|-----|-------|
| Primary (buttons, accents) | `#5B8FB9` |
| Success (completed) | `#7BAE7F` |
| Accent (highlights) | `#B8A9C9` |
| Warning (alerts) | `#E8C97D` |
| Background | `#EDF1F5` |
| Surface (cards) | `#FFFFFF` |
| Text Primary | `#2D3748` |

### Forbidden
- Pure black (#000000)
- Pure white as background
- Neon or saturated colors
- Bright red/yellow

### Typography
- **Font:** Lexend (Google Fonts)
- **Body:** 16px Regular
- **Titles:** 24-40px SemiBold/Bold
- **Display (hero):** 48-56px Bold
- **Minimum:** 12px

### Spacing
```
xs: 4px   sm: 8px   md: 16px   lg: 24px   xl: 32px   2xl: 48px
```

### Border Radius
- Cards: `16px` (`rounded-2xl`)
- Buttons: `12px` (`rounded-xl`)
- Inputs: `12px` (`rounded-xl`)
- Pills/Tags: `999px` (`rounded-full`)

### Shadows (Neumorphism)
```css
/* Soft elevated elements (buttons, cards) */
box-shadow:
  -6px -6px 12px rgba(255, 255, 255, 0.5),
  6px 6px 12px rgba(163, 177, 198, 0.6);

/* Pressed/inset elements */
box-shadow:
  inset 4px 4px 8px rgba(163, 177, 198, 0.4),
  inset -4px -4px 8px rgba(255, 255, 255, 0.3);

/* Subtle cards (less depth) */
box-shadow:
  -3px -3px 6px rgba(255, 255, 255, 0.4),
  3px 3px 6px rgba(163, 177, 198, 0.4);
```

### Touch Targets
- Minimum: `44x44px`
- Buttons height: `52px`
- Button padding: `24px` horizontal

## Neumorphism Guidelines

### Background Colors
Base background should be light, soft gray for neumorphism to work:
- Primary background: `#EDF1F5` or `#E8EDF2`
- Card/surface: Same as background (depth through shadows only)

### Rules
1. **Same color** for background and elements - depth comes from shadows
2. **Soft shadows** - never harsh or dark
3. **Subtle depth** - don't overdo the 3D effect
4. **Rounded corners** - always use generous border radius (12-16px minimum)
5. **Limited use** - only for interactive elements (buttons, inputs, cards)

### Where to Use
- Buttons (elevated state)
- Input fields (inset state)
- Cards with content
- Interactive elements
- NOT on text, icons, or backgrounds themselves

## Reference Sites

| Site | Inspiration |
|------|-------------|
| Calm.com | Sense of peace |
| Headspace.com | Soft shapes |
| Notion.so | Space and typography |
| Linear.app | Professional minimalism |

## Design Checklist

Before implementing any section:

- [ ] Colors from the palette?
- [ ] Lexend typography?
- [ ] Border radius 12px+?
- [ ] Enough white space?
- [ ] Subtle neumorphic shadows?
- [ ] Smooth animations (Framer Motion)?
- [ ] Touch targets 44px+?
- [ ] Responsive (mobile-first)?
- [ ] Does it feel calm?

## Dark Mode (Future)

| Element | Color |
|---------|-------|
| Background | `#1A1D21` |
| Surface | `#252A30` |
| Text Primary | `#E2E8F0` |

## References

- [Colors](colors.md)
- [Typography](typography.md)
- [Spacing](spacing.md)
- [Animations](animations.md)
- [Components](components.md)
- [Icons](icons.md)
