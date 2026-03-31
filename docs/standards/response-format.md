# Response Format

> Standardized user messages for the Flowe website

## Message Types

| Type | Color | Icon | Use |
|------|-------|------|-----|
| Success | `#7BAE7F` | checkmark | Completed actions |
| Info | `#7BA7C9` | info | Tips, neutral info |
| Warning | `#E8C97D` | warning | Soft alerts |
| Error | `#D97B7B` | x | Failures (use sparingly) |

## Message Principles

### 1. Positive, Not Condescending
```
"You're on the list!"
NOT: "Email successfully registered in our database"
NOT: "OMG AMAZING you did it!!!"
```

### 2. Direct, Not Cold
```
"Message sent"
NOT: "Your message has been successfully transmitted"
NOT: "Sent."
```

### 3. Empathetic, Not Clinical
```
"Something went wrong. Try again?"
NOT: "Error 500: Internal Server Error"
NOT: "Operation failed"
```

## Messages by Context

### Form Success
```typescript
const successMessages = {
  waitlist: "You're on the list! We'll be in touch.",
  contact: "Message sent. We'll get back to you soon.",
  newsletter: "Subscribed! Check your inbox.",
};
```

### Form Errors
```typescript
const errorMessages = {
  generic: "Something went wrong. Try again?",
  network: "Connection issue. Check your internet.",
  invalidEmail: "Please enter a valid email",
  alreadyRegistered: "You're already on the waitlist!",
  rateLimited: "Too many requests. Wait a moment.",
};
```

### Empty States
```typescript
const emptyMessages = {
  notFound: "Page not found.",
  noResults: "Nothing here yet.",
};
```

## Words to Use

| Use | Instead of |
|-----|------------|
| Complete | Finish/end |
| Pause | Stop |
| Adjust | Change/modify |
| Progress | Performance |
| Flow | Productivity |

## Forbidden Words

Never use these in user-facing messages:
- Fail / Failed
- Late / Behind
- Must / Have to
- Urgent
- Incomplete
- Error (in user-visible text; use "Something went wrong")

## Toast Implementation

```tsx
// Minimal toast component
function Toast({ message, type = 'success' }: { message: string; type: 'success' | 'error' | 'info' }) {
  const styles = {
    success: 'bg-secondary text-white',
    error: 'bg-error text-white',
    info: 'bg-info text-white',
  };

  return (
    <div className={`px-4 py-3 rounded-xl text-sm font-medium ${styles[type]}`}>
      {message}
    </div>
  );
}
```

## Inline Feedback

```tsx
// Form field feedback
{status === 'success' && (
  <p className="text-sm text-secondary mt-2">
    You're on the list!
  </p>
)}

{status === 'error' && (
  <p className="text-sm text-error mt-2">
    {errorMessage}
  </p>
)}
```

## Rules

### Do
- Keep messages short (under 50 characters ideal)
- Use consistent terminology
- Be warm but professional
- Provide clear next steps when possible

### Don't
- Use technical jargon
- Be overly casual or formal
- Use exclamation marks excessively
- Create anxiety with messaging

## References

- [Error Handling](error-handling.md)
- [Voice & Tone](../brand/voice-tone.md)
- [Colors](../design/colors.md)
