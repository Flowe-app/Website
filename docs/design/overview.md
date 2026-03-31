# Design Overview

> ADHD-friendly design principles for the Flowe website

## Design System: Neumorphism (Soft UI)

The Flowe website uses **neumorphism** (also known as Soft UI) as its primary design language, matching the mobile app. This tactile, 3D-like design style creates a calm, organic interface that reduces ADHD overstimulation.

### Why Neumorphism?
- **Tactile & Grounding**: The soft 3D effect feels physical and less abstract
- **Calming Depth**: Subtle shadows create depth without harsh contrasts
- **ADHD-Friendly**: Reduces sensory overload compared to flat or glassmorphic designs
- **Organic Feel**: Rounded edges and soft shadows feel natural and non-threatening

### Key Characteristics
- **Dual Shadows**: Light shadow (top-left) + dark shadow (bottom-right)
- **Solid Backgrounds**: `#EDF1F5` or `#E8EDF2` required for neumorphic effect
- **No Glassmorphism**: NO `backdrop-filter` or translucent backgrounds
- **Rounded Corners**: Minimum 12-16px border radius for organic feel
- **Subtle Elevation**: Elements appear to rise from or sink into the surface

## Core Principles

### 1. CALM > STIMULATION
Reduce sensory overload. Every page should feel peaceful, not overwhelming.

### 2. CLARITY > DECORATION
Every element has a purpose. Remove anything that doesn't serve the visitor.

### 3. FLEXIBILITY > RIGIDITY
Responsive design that adapts to any screen. Respect user preferences (reduced motion, dark mode).

### 4. PROGRESS > PERFECTION
Communicate that imperfect progress is celebrated, not punished.

## ADHD Considerations for Web

### Decision Fatigue
- One clear CTA per section
- Minimal navigation items
- Smart visual hierarchy

### Sensory Sensitivity
- No harsh colors
- No sudden animations
- No blinking elements
- No autoplay videos with sound

### Short Attention Span
- Key message visible in 5 seconds
- Scannable content with clear headings
- Visual storytelling over walls of text

### Working Memory
- Consistent navigation
- Clear breadcrumbs
- Sticky header for orientation

## Visual Hierarchy

```
1. Hero / Primary CTA (most prominent)
   -- Main headline, waitlist button

2. Value Proposition (second level)
   -- Feature cards, app preview

3. Social Proof (third level)
   -- Testimonials, stats

4. Navigation & Footer (lowest)
   -- Links, legal
```

## Touch Targets (Mobile Web)

| Element | Minimum Size |
|---------|--------------|
| Buttons | 44x44px |
| Links | 44x44px tap area |
| Nav items | 48px height |
| Inputs | 52px height |

## Accessibility

### Color Contrast
- Text on backgrounds: minimum 4.5:1
- Large text (>18px): minimum 3:1
- Interactive elements: clearly distinguishable

### Text
- Minimum font size: 12px (prefer 16px for body)
- Line height: 1.5x+ for body
- Left-align all text

### Motion
- Respect `prefers-reduced-motion`
- No infinite animations
- Transitions under 300ms

### Keyboard Navigation
- All interactive elements focusable
- Visible focus indicators
- Logical tab order

## Screen Density

### Maximum Elements Per Viewport
| Section | Max Elements |
|---------|--------------|
| Hero | 1 headline, 1 subtitle, 1 CTA |
| Features | 3-4 feature cards |
| Pricing | 2-3 plan cards |
| Footer | Organized in 3-4 columns |

### White Space
- Generous padding (16-32px on mobile, 32-64px on desktop)
- Clear separation between sections
- Breathing room around CTAs

## Rules

### Do
- Use calming color palette
- Provide visual feedback for all interactions
- Make primary actions obvious
- Test on real mobile devices
- Support keyboard navigation

### Don't
- Use pure black or pure white as backgrounds
- Create walls of text
- Use aggressive notification/popup styles
- Autoplay anything
- Require many clicks for common actions

## Reference Sites

| Site | Inspiration |
|------|-------------|
| Calm.com | Sense of peace |
| Headspace.com | Soft shapes |
| Linear.app | Professional minimalism |
| Notion.so | Space and typography |

## Design Checklist

Before implementing any page/section:

- [ ] Colors from the palette?
- [ ] Neumorphic background (#EDF1F5)?
- [ ] Dual shadows (light + dark)?
- [ ] NO backdrop-filter or glassmorphism?
- [ ] Lexend typography?
- [ ] Border radius 12-16px minimum?
- [ ] Enough white space?
- [ ] Smooth animations (Framer Motion)?
- [ ] Touch targets 44px+?
- [ ] Responsive (mobile-first)?
- [ ] Does it feel calm and grounded?

> "If it doesn't feel calm and grounded, it's not Flowe."

## References

- [Style Guide](style-guide.md)
- [Colors](colors.md)
- [Typography](typography.md)
- [Spacing](spacing.md)
- [Animations](animations.md)
- [Components](components.md)
- [Icons](icons.md)
