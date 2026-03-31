# Spacing

> Consistent spacing system for visual harmony

## Spacing Scale

| Token | Value | Tailwind | Use |
|-------|-------|----------|-----|
| `xs` | 4px | `1` | Icon-to-text gap |
| `sm` | 8px | `2` | Inside components |
| `md` | 16px | `4` | Between elements |
| `lg` | 24px | `6` | Between sections (mobile) |
| `xl` | 32px | `8` | Between sections (desktop) |
| `2xl` | 48px | `12` | Large section gaps |
| `3xl` | 64px | `16` | Hero/section spacing |
| `4xl` | 96px | `24` | Major section divisions |

## Page Layout

| Context | Mobile | Desktop |
|---------|--------|---------|
| Page horizontal padding | 16px (`px-4`) | 32px (`px-8`) |
| Max content width | 100% | 1200px (`max-w-6xl`) |
| Section vertical spacing | 48px (`py-12`) | 96px (`py-24`) |
| Container padding | 16px | 32px |

## Border Radius

| Token | Value | Tailwind | Use |
|-------|-------|----------|-----|
| `sm` | 8px | `rounded-lg` | Small elements, chips |
| `md` | 12px | `rounded-xl` | Buttons, inputs |
| `lg` | 16px | `rounded-2xl` | Cards |
| `xl` | 24px | `rounded-3xl` | Modals, hero cards |
| `full` | 999px | `rounded-full` | Pills, circular |

## Component Sizes

| Component | Height | Tailwind |
|-----------|--------|----------|
| Button (primary) | 52px | `h-13` |
| Button (small) | 40px | `h-10` |
| Input field | 52px | `h-13` |
| Nav height | 64px | `h-16` |

## Touch Targets

| Element | Minimum |
|---------|---------|
| Any interactive | 44x44px |
| Icon button | 44x44px |
| Link tap area | 44px height |

## Usage Examples

```tsx
// Section layout
<section className="py-12 md:py-24 px-4 md:px-8">
  <div className="max-w-6xl mx-auto">
    {/* Content */}
  </div>
</section>

// Space between elements
<div className="space-y-4">
  <FeatureCard />
  <FeatureCard />
</div>

// Card with padding
<div className="p-4 md:p-6 rounded-2xl">
  {/* Card content */}
</div>

// Section spacing
<div className="space-y-6 md:space-y-8">
  <SectionHeader />
  <Content />
</div>
```

## Layout Patterns

### Card Layout
```tsx
<div className="p-4 md:p-6 rounded-2xl neu-elevated">
  <h3 className="text-xl font-semibold mb-2">Title</h3>
  <p className="text-text-secondary">Description</p>
</div>
```

### Grid Layout
```tsx
// Feature cards grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
  <FeatureCard />
  <FeatureCard />
  <FeatureCard />
</div>
```

## Rules

### Do
- Use Tailwind spacing utilities consistently
- Maintain visual rhythm
- Give CTAs breathing room
- Use generous white space
- Mobile-first responsive spacing

### Don't
- Use arbitrary pixel values
- Crowd elements together
- Mix spacing scales
- Forget touch target minimums

## References

- [Colors](colors.md)
- [Typography](typography.md)
- [Components](components.md)
