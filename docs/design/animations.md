# Animations

> Subtle, purposeful motion for ADHD-friendly UX

## Principles

1. **Subtle** -- Don't distract
2. **Purposeful** -- Inform, not decorate
3. **Smooth** -- No bouncing or jarring

## Durations

| Type | Duration | Use |
|------|----------|-----|
| Fast | 150ms | Micro-interactions (hover, toggle) |
| Normal | 300ms | Transitions, standard animations |
| Slow | 500ms | Complex animations, emphasis |

## Easing

| Use | CSS | Framer Motion |
|-----|-----|---------------|
| Default | `ease-in-out` | `easeInOut` |
| Enter | `ease-out` | `easeOut` |
| Exit | `ease-in` | `easeIn` |

### Forbidden Easing
- `bounce` / spring with high bounce
- `elastic`
- Any easing that causes overshoot

## Allowed Animations

| Animation | Use | Duration |
|-----------|-----|----------|
| Fade in/out | Page transitions, reveals | 300ms |
| Scale | Button hover/press | 150ms |
| Slide up | Sections on scroll | 300-500ms |
| Opacity | Content reveal | 300ms |
| Translate Y | Scroll-triggered entry | 300ms |

## Forbidden Animations

| Animation | Reason |
|-----------|--------|
| Bouncing | Distracting, overstimulating |
| Blinking | Anxiety-inducing |
| Shaking | Aggressive, punishing |
| Infinite loops | Distracting |
| Multiple simultaneous | Overwhelming |
| Fast flashing | Sensory overload |
| Parallax (extreme) | Motion sickness |

## Framer Motion Implementation

```tsx
// lib/constants.ts - Animation presets
export const animations = {
  duration: {
    fast: 0.15,
    normal: 0.3,
    slow: 0.5,
  },
  ease: {
    default: [0.4, 0, 0.2, 1],  // ease-in-out
    enter: [0, 0, 0.2, 1],       // ease-out
    exit: [0.4, 0, 1, 1],        // ease-in
  },
} as const;
```

### Fade In on Scroll
```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
>
  <FeatureCard />
</motion.div>
```

### Scale on Hover
```tsx
<motion.button
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  transition={{ duration: 0.15 }}
>
  Join Waitlist
</motion.button>
```

### Staggered Children
```tsx
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  }}
>
  {features.map((feature) => (
    <motion.div
      key={feature.id}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.3 }}
    >
      <FeatureCard {...feature} />
    </motion.div>
  ))}
</motion.div>
```

## Reduced Motion Support

```tsx
// Always respect user preference
import { useReducedMotion } from 'framer-motion';

function AnimatedSection({ children }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
    >
      {children}
    </motion.div>
  );
}
```

```css
/* CSS fallback */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Page Transitions

```tsx
// Subtle fade between pages
<AnimatePresence mode="wait">
  <motion.main
    key={pathname}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.2 }}
  >
    {children}
  </motion.main>
</AnimatePresence>
```

## Rules

### Do
- Keep animations under 300ms
- Use consistent easing
- Support reduced motion (`prefers-reduced-motion`)
- Animate with purpose
- Use `viewport={{ once: true }}` for scroll animations

### Don't
- Use bouncy or elastic easing
- Create infinite loops
- Animate multiple elements simultaneously
- Use animation to grab attention aggressively
- Forget `prefers-reduced-motion` support

## References

- [Design Overview](overview.md)
- [Components](components.md)
