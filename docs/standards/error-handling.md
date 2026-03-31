# Error Handling

> Unified error management for the Flowe website

## Error Types

### Application Errors

```typescript
// lib/errors.ts

export class AppError extends Error {
  constructor(
    message: string,
    public code: string,
    public statusCode: number = 500,
  ) {
    super(message);
    this.name = 'AppError';
  }
}

export class ValidationError extends AppError {
  constructor(message: string) {
    super(message, 'VALIDATION_ERROR', 400);
  }
}

export class NetworkError extends AppError {
  constructor(message = 'Connection issue. Try again.') {
    super(message, 'NETWORK_ERROR', 503);
  }
}

export class NotFoundError extends AppError {
  constructor(message = 'Not found.') {
    super(message, 'NOT_FOUND', 404);
  }
}
```

## Result Pattern

```typescript
// lib/result.ts

type Result<T> =
  | { success: true; data: T }
  | { success: false; error: string };

// Usage in server actions
export async function joinWaitlist(formData: FormData): Promise<Result<{ message: string }>> {
  const email = formData.get('email') as string;

  if (!email || !isValidEmail(email)) {
    return { success: false, error: 'Please enter a valid email' };
  }

  try {
    await db.insert(waitlist).values({ email });
    return { success: true, data: { message: "You're on the list!" } };
  } catch (error) {
    if (isDuplicateError(error)) {
      return { success: false, error: "You're already on the waitlist!" };
    }
    return { success: false, error: 'Something went wrong. Try again?' };
  }
}
```

## Usage in Components

```tsx
function WaitlistForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(formData: FormData) {
    setStatus('loading');

    const result = await joinWaitlist(formData);

    if (result.success) {
      setStatus('success');
      setMessage(result.data.message);
    } else {
      setStatus('error');
      setMessage(result.error);
    }
  }

  return (
    <form action={handleSubmit}>
      <input type="email" name="email" required />
      <button type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
      </button>
      {message && (
        <p className={status === 'success' ? 'text-secondary' : 'text-error'}>
          {message}
        </p>
      )}
    </form>
  );
}
```

## API Route Error Handling

```typescript
// app/api/waitlist/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email' },
        { status: 400 },
      );
    }

    await db.insert(waitlist).values({ email });

    return NextResponse.json(
      { message: "You're on the list!" },
      { status: 201 },
    );
  } catch (error) {
    console.error('Waitlist error:', error);

    return NextResponse.json(
      { error: 'Something went wrong. Try again?' },
      { status: 500 },
    );
  }
}
```

## User-Facing Error Messages

Always use ADHD-friendly, non-blaming messages:

| Context | Message |
|---------|---------|
| Generic | "Something went wrong. Try again?" |
| Network | "Connection issue. Check your internet." |
| Validation | Specific field message |
| Not found | "Page not found." |
| Rate limit | "Too many requests. Wait a moment." |

## Error Boundaries

```tsx
// components/error-boundary.tsx
'use client';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-semibold text-text-primary">
          Something went wrong
        </h2>
        <p className="text-text-secondary">
          Don't worry, it's not you. Try again?
        </p>
        <button
          onClick={reset}
          className="bg-primary text-white px-6 py-3 rounded-xl font-semibold"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
```

## Rules

### Do
- Always use the Result pattern for server actions
- Provide user-friendly, ADHD-appropriate error messages
- Log errors server-side with context
- Handle all possible error states in forms

### Don't
- Show technical error messages to users
- Swallow errors silently
- Use `any` for error types
- Blame the user in error messages

## References

- [Response Format](response-format.md)
- [Code Style](code-style.md)
