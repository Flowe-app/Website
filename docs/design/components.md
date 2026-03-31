# Components

> Standard UI components for the Flowe website

## Specifications

### Buttons
| Property | Value | Tailwind |
|----------|-------|----------|
| Minimum height | `52px` | `h-13` |
| Horizontal padding | `24px` | `px-6` |
| Touch target | `44x44px` minimum | - |
| Border radius | `12px` | `rounded-xl` |

### Cards (Neumorphic)
| Property | Value |
|----------|-------|
| Background | `#EDF1F5` (matches page background) |
| Padding | `16-24px` |
| Border radius | `16px` (`rounded-2xl`) |
| Shadow Light | `-4px -4px 8px rgba(255,255,255,0.6)` |
| Shadow Dark | `4px 4px 8px rgba(163,177,198,0.5)` |

### Navigation
| Property | Value |
|----------|-------|
| Position | Fixed top |
| Height | `64px` |
| Max items | 4-5 |

### Inputs
| Property | Value | Tailwind |
|----------|-------|----------|
| Height | `52px` | `h-13` |
| Border radius | `12px` | `rounded-xl` |
| Padding | `16px` | `px-4` |

---

## Buttons

### Primary Button
```tsx
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit';
  className?: string;
}

function PrimaryButton({ children, onClick, isLoading, disabled, type = 'button', className }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isLoading || disabled}
      className={`
        h-13 w-full px-6 rounded-xl font-semibold text-white
        bg-primary transition-all duration-150
        shadow-[-4px_-4px_10px_rgba(255,255,255,0.5),_4px_4px_12px_rgba(91,143,185,0.4)]
        hover:opacity-90 active:scale-[0.98]
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  );
}
```

### Secondary Button
```tsx
function SecondaryButton({ children, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        h-13 px-6 rounded-xl font-semibold
        text-primary border-2 border-primary
        bg-transparent transition-all duration-150
        hover:bg-primary/5 active:scale-[0.98]
        ${className}
      `}
    >
      {children}
    </button>
  );
}
```

### Ghost Button
```tsx
function GhostButton({ children, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-xl text-text-secondary
        transition-colors duration-150
        hover:text-text-primary hover:bg-surface-alt
        ${className}
      `}
    >
      {children}
    </button>
  );
}
```

## Cards

### Feature Card (Neumorphic)
```tsx
function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-background rounded-2xl p-6 neu-elevated">
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-text-primary mb-2">
        {title}
      </h3>
      <p className="text-text-secondary leading-relaxed">
        {description}
      </p>
    </div>
  );
}
```

## Inputs

### Text Input
```tsx
function TextInput({ label, placeholder, error, ...props }: TextInputProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="text-sm font-medium text-text-primary">
          {label}
        </label>
      )}
      <input
        className={`
          h-13 w-full px-4 rounded-xl text-base
          bg-surface-alt text-text-primary
          placeholder:text-text-disabled
          neu-pressed border-none outline-none
          focus:ring-2 focus:ring-primary/30
          ${error ? 'ring-2 ring-error/30' : ''}
        `}
        placeholder={placeholder}
        {...props}
      />
      {error && (
        <p className="text-sm text-error">{error}</p>
      )}
    </div>
  );
}
```

### Email Input (Waitlist)
```tsx
function WaitlistInput() {
  return (
    <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
      <input
        type="email"
        placeholder="your@email.com"
        className="flex-1 h-13 px-4 rounded-xl bg-surface-alt text-text-primary placeholder:text-text-disabled neu-pressed border-none outline-none focus:ring-2 focus:ring-primary/30"
        required
      />
      <PrimaryButton type="submit" className="sm:w-auto">
        Join Waitlist
      </PrimaryButton>
    </form>
  );
}
```

## Navigation

### Header
```tsx
function Header() {
  return (
    <header className="fixed top-0 w-full h-16 bg-background/95 backdrop-blur-sm z-50 border-b border-shadow-dark/10">
      <div className="max-w-6xl mx-auto h-full px-4 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-6">
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#about">About</NavLink>
          <PrimaryButton className="h-10 text-sm">
            Join Waitlist
          </PrimaryButton>
        </nav>
        <MobileMenuButton className="md:hidden" />
      </div>
    </header>
  );
}
```

## Sections

### Hero Section
```tsx
function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center py-24 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-text-primary leading-tight">
          Productivity that <span className="text-primary">flows</span>
        </h1>
        <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
          The app designed for your ADHD brain. No guilt trips, just progress.
        </p>
        <WaitlistInput />
      </div>
    </section>
  );
}
```

## Toast / Notifications

```tsx
function Toast({ message, type = 'success' }: ToastProps) {
  const colors = {
    success: 'bg-secondary text-white',
    error: 'bg-error text-white',
    info: 'bg-info text-white',
  };

  return (
    <div className={`px-4 py-3 rounded-xl ${colors[type]} text-sm font-medium`}>
      {message}
    </div>
  );
}
```

## References

- [Colors](colors.md)
- [Typography](typography.md)
- [Spacing](spacing.md)
