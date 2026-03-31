# Neumorphism Design System

> Soft UI design language for the Flowe website

## What is Neumorphism?

Neumorphism (also called "Soft UI") is a design trend that creates a tactile, 3D-like interface through dual shadows. Elements appear to either **rise from** or **sink into** the background surface.

## Why Neumorphism for ADHD Users?

### Calming & Grounding
- **Tactile Feel**: The soft 3D effect feels physical and less abstract, providing a grounding sensation
- **Reduced Overstimulation**: Gentle shadows instead of harsh contrasts or busy patterns
- **Organic Aesthetics**: Rounded corners and soft edges feel natural and non-threatening

### Cognitive Benefits
- **Clear Affordances**: Elevated buttons clearly signal interactivity
- **Depth Hierarchy**: Visual depth naturally guides attention without colors
- **Calm Focus**: Soft, monochromatic palette reduces visual noise

## Core Requirements

### 1. Background Color (CRITICAL)
Neumorphism **requires** a solid, neutral background:

```css
/* CORRECT */
background-color: #EDF1F5;

/* ALSO VALID */
background-color: #E8EDF2;

/* WRONG - Pure white doesn't work */
background-color: #FFFFFF; /* X */

/* WRONG - Glassmorphism is incompatible */
background-color: rgba(255, 255, 255, 0.2); /* X */
backdrop-filter: blur(10px); /* X */
```

### 2. Dual Shadows (REQUIRED)
Every neumorphic element needs **two shadows**:

```css
/* Light shadow (top-left) + Dark shadow (bottom-right) */
box-shadow:
  -4px -4px 8px rgba(255, 255, 255, 0.6),
  4px 4px 8px rgba(163, 177, 198, 0.5);
```

### 3. NO Glassmorphism
**NEVER** use these properties:
- `backdrop-filter: blur()`
- Translucent backgrounds (`opacity < 1.0`)
- Frosted glass effects

## Shadow Variations

### Elevated (Raised) State
For buttons, cards, and interactive elements:

```css
.neu-elevated {
  background: #EDF1F5;
  border-radius: 12px;
  box-shadow:
    -4px -4px 8px rgba(255, 255, 255, 0.6),
    4px 4px 8px rgba(163, 177, 198, 0.5);
}
```

### Pressed (Inset) State
For selected items or input fields:

```css
.neu-pressed {
  background: #EDF1F5;
  border-radius: 12px;
  box-shadow:
    inset 2px 2px 4px rgba(163, 177, 198, 0.3),
    inset -2px -2px 4px rgba(255, 255, 255, 0.4);
}
```

### Subtle Elevation
For secondary elements:

```css
.neu-subtle {
  background: #EDF1F5;
  border-radius: 12px;
  box-shadow:
    -2px -2px 4px rgba(255, 255, 255, 0.5),
    2px 2px 4px rgba(163, 177, 198, 0.3);
}
```

### Prominent Elevation
For hero elements, primary CTAs:

```css
.neu-prominent {
  background: #EDF1F5;
  border-radius: 16px;
  box-shadow:
    -6px -6px 12px rgba(255, 255, 255, 0.7),
    6px 6px 12px rgba(163, 177, 198, 0.6);
}
```

## Border Radius Guidelines

Neumorphism works best with **rounded corners**:

| Element | Border Radius | Tailwind |
|---------|---------------|----------|
| Buttons | `12px` | `rounded-xl` |
| Cards | `12-16px` | `rounded-xl` / `rounded-2xl` |
| Inputs | `8-12px` | `rounded-lg` / `rounded-xl` |
| Pills/Tags | `999px` | `rounded-full` |

**Avoid sharp corners** - they break the soft, organic aesthetic.

## Tailwind Utility Classes

```css
/* globals.css */
@layer utilities {
  .neu-elevated {
    box-shadow:
      -4px -4px 8px rgba(255, 255, 255, 0.6),
      4px 4px 8px rgba(163, 177, 198, 0.5);
  }

  .neu-pressed {
    box-shadow:
      inset 2px 2px 4px rgba(163, 177, 198, 0.3),
      inset -2px -2px 4px rgba(255, 255, 255, 0.4);
  }

  .neu-subtle {
    box-shadow:
      -2px -2px 4px rgba(255, 255, 255, 0.5),
      2px 2px 4px rgba(163, 177, 198, 0.3);
  }

  .neu-prominent {
    box-shadow:
      -6px -6px 12px rgba(255, 255, 255, 0.7),
      6px 6px 12px rgba(163, 177, 198, 0.6);
  }
}
```

## Color Rules

### Element Colors
```css
/* Background elements (cards, containers) */
background-color: #EDF1F5; /* Must match background */

/* Primary interactive elements */
background-color: #5B8FB9; /* With colored shadows */

/* Success elements */
background-color: #7BAE7F; /* With colored shadows */
```

### Colored Neumorphism
For colored buttons, adjust shadows to match:

```css
/* Primary button */
.btn-primary-neu {
  background: #5B8FB9;
  border-radius: 12px;
  box-shadow:
    -4px -4px 10px rgba(255, 255, 255, 0.5),
    4px 4px 12px rgba(91, 143, 185, 0.4); /* Use button color */
}
```

## React Component Examples

### Neumorphic Card
```tsx
function NeuCard({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-background rounded-2xl p-4 md:p-6 neu-elevated ${className}`}>
      {children}
    </div>
  );
}
```

### Neumorphic Button
```tsx
function NeuButton({ children, variant = 'default' }: NeuButtonProps) {
  const isPrimary = variant === 'primary';

  return (
    <button
      className={`
        h-13 px-6 rounded-xl font-semibold transition-all
        ${isPrimary
          ? 'bg-primary text-white shadow-[_-4px_-4px_10px_rgba(255,255,255,0.5),_4px_4px_12px_rgba(91,143,185,0.4)]'
          : 'bg-background text-text-primary neu-elevated'
        }
      `}
    >
      {children}
    </button>
  );
}
```

### Neumorphic Input
```tsx
function NeuInput({ placeholder, ...props }: InputProps) {
  return (
    <input
      className="h-13 w-full bg-surface-alt rounded-xl px-4 text-base text-text-primary placeholder:text-text-disabled neu-pressed border-none outline-none focus:ring-2 focus:ring-primary/30"
      placeholder={placeholder}
      {...props}
    />
  );
}
```

## Common Mistakes

### Wrong Background
```html
<!-- DON'T use pure white background -->
<body class="bg-white"> <!-- X -->

<!-- DO use the neumorphic background -->
<body class="bg-background"> <!-- OK (#EDF1F5) -->
```

### Single Shadow
```css
/* DON'T use only one shadow */
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* X */

/* DO use both light and dark shadows */
box-shadow:
  -4px -4px 8px rgba(255, 255, 255, 0.6),
  4px 4px 8px rgba(163, 177, 198, 0.5); /* OK */
```

### Mixing with Glassmorphism
```css
/* DON'T use backdrop blur */
backdrop-filter: blur(10px); /* X */
background: rgba(255, 255, 255, 0.3); /* X */

/* DO use solid colors with dual shadows */
background: #EDF1F5; /* OK */
```

## Accessibility Considerations

### Contrast
- Neumorphism can reduce contrast
- Ensure text maintains 4.5:1 contrast ratio
- Use colored elements for critical CTAs

### Visual Feedback
- Add subtle color changes on hover
- Animate shadow transitions for state changes
- Visible focus rings for keyboard navigation

## Testing Checklist

- [ ] Background is `#EDF1F5` or `#E8EDF2`
- [ ] All interactive elements have dual shadows
- [ ] No `backdrop-filter` or translucent backgrounds
- [ ] Border radius is 12px or higher
- [ ] Text contrast meets WCAG AA standards
- [ ] Pressed states use inset shadows
- [ ] Primary actions have colored shadows
- [ ] Hover states provide visual feedback
- [ ] Focus rings are visible
- [ ] Design feels calm and grounded

## References

- [Design Overview](overview.md)
- [Colors](colors.md)
- [Components](components.md)
- [Spacing](spacing.md)
