# Code Style

> TypeScript and React coding standards for the Flowe website

## Formatting

### Line Length
- Maximum **100 characters** per line
- Use Prettier/ESLint to auto-format

### Imports Order
```typescript
// 1. React / Next.js
import { useState } from 'react';
import Image from 'next/image';

// 2. External packages
import { motion } from 'framer-motion';
import { Timer } from '@phosphor-icons/react';

// 3. Internal modules
import { Button } from '@/components/ui/button';
import { animations } from '@/lib/constants';

// 4. Types
import type { FeatureCardProps } from '@/types';
```

### Component Structure
```tsx
// 1. Imports
import { useState } from 'react';

// 2. Types/Interfaces (if small, co-locate; if shared, separate file)
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// 3. Component
export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  // 3a. Hooks
  const [isHovered, setIsHovered] = useState(false);

  // 3b. Handlers
  const handleClick = () => { /* ... */ };

  // 3c. Render
  return (
    <div>
      {/* ... */}
    </div>
  );
}
```

## Component Guidelines

### Function Components Only
```tsx
// Good - function declaration
export function Header() { ... }

// Also good - arrow function for small components
const Logo = () => <Image src="/logo.svg" alt="Flowe" width={100} height={32} />;

// Bad - class components
class Header extends React.Component { ... }
```

### Named Exports
```tsx
// Good
export function Button() { ... }

// Avoid default exports (except for pages)
export default function Page() { ... } // OK for Next.js pages
```

### Props
```tsx
// Good - destructure props
function Button({ children, variant = 'primary', onClick }: ButtonProps) { ... }

// Bad - props object
function Button(props: ButtonProps) { ... }
```

## TypeScript

### Prefer `interface` for Objects
```typescript
// Good
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  onClick?: () => void;
}

// Use type for unions/primitives
type Variant = 'primary' | 'secondary' | 'ghost';
```

### Avoid `any`
```typescript
// Good
function parseResponse(data: unknown): WaitlistEntry { ... }

// Bad
function parseResponse(data: any): any { ... }
```

### Strict Null Checks
```typescript
// Good
const email = formData.get('email') as string | null;
if (!email) return { error: 'Email required' };

// Bad
const email = formData.get('email') as string; // assumes non-null
```

## Async/Await

### Server Actions
```typescript
'use server';

export async function joinWaitlist(formData: FormData) {
  const email = formData.get('email') as string;

  if (!email || !isValidEmail(email)) {
    return { error: 'Please enter a valid email' };
  }

  try {
    await db.insert(waitlist).values({ email });
    return { success: true };
  } catch (error) {
    return { error: 'Something went wrong. Try again?' };
  }
}
```

## CSS / Tailwind

### Prefer Tailwind Utilities
```tsx
// Good
<div className="p-4 rounded-2xl bg-background neu-elevated">

// Bad - inline styles
<div style={{ padding: '16px', borderRadius: '16px' }}>

// Bad - CSS modules for simple styling
<div className={styles.card}>
```

### Class Organization
```tsx
// Order: layout > sizing > spacing > visual > state > responsive
<button className="
  flex items-center justify-center
  h-13 w-full
  px-6
  bg-primary text-white rounded-xl font-semibold
  hover:opacity-90 active:scale-[0.98]
  transition-all duration-150
  disabled:opacity-50
  md:w-auto
">
```

### Custom Classes
Use `@layer utilities` in `globals.css` for reusable patterns (like neumorphic shadows).

## Comments

### When to Comment
- Complex business logic
- Non-obvious CSS hacks
- TODO items with context

### Don't Comment
- Obvious code
- Every component
- Commented-out code (delete it)

## Rules

### Do
- Run `npm run lint` before committing
- Use TypeScript strict mode
- Keep components small (<100 lines)
- Co-locate related files
- Use `const` by default, `let` when needed

### Don't
- Use `var`
- Use `any`
- Ignore linter/TypeScript warnings
- Use magic numbers (use constants)
- Mix concerns (API logic in components)

## References

- [Naming Conventions](naming-conventions.md)
- [Error Handling](error-handling.md)
