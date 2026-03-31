# Architecture Overview

> Website architecture and technical decisions

## Framework: Next.js 15 (App Router)

### Why Next.js?
- **SSG + Server Actions**: Static pages for performance, server actions for forms
- **API Routes**: Handle waitlist signups without a separate backend
- **SEO**: Built-in metadata, sitemap, robots.txt support
- **Image Optimization**: Automatic next/image optimization
- **Edge Runtime**: Deploy on Vercel's edge network

## Architecture Pattern

```
Browser (Client)
    |
    v
Next.js App Router
    |
    ├── Static Pages (SSG)
    │   ├── Home / Landing
    │   ├── Features
    │   └── Pricing (future)
    |
    ├── Server Actions
    │   ├── Waitlist signup
    │   └── Contact form
    |
    └── API Routes
        └── /api/waitlist (POST)
```

## Rendering Strategy

| Page | Strategy | Reason |
|------|----------|--------|
| Home / Landing | SSG | Static content, fast load |
| Waitlist | SSG + Server Action | Static form, server-side processing |
| Blog (future) | SSG with ISR | Content updates periodically |
| 404 | SSG | Static error page |

## Key Decisions

### Static-First
Most of the website is static content. Use SSG by default. Only use server components/actions for interactive features (forms, waitlist).

### No Client-Side State Management Library
The website is simple enough that React's built-in `useState` and server actions are sufficient. No need for Redux, Zustand, etc.

### Tailwind CSS + Custom Utilities
Use Tailwind for all styling. Custom CSS classes only for neumorphic shadow utilities (`neu-elevated`, `neu-pressed`, etc.).

### Framer Motion for Animations
Use Framer Motion for scroll-triggered animations and page transitions. Always respect `prefers-reduced-motion`.

## Data Flow

```
1. User visits page
   -> Next.js serves static HTML (SSG)
   -> Instant load, good SEO

2. User submits waitlist form
   -> Server Action processes form
   -> Validates email
   -> Stores in database
   -> Returns result to client

3. Client shows feedback
   -> Success: "You're on the list!"
   -> Error: "Something went wrong. Try again?"
```

## Deployment

| Service | Purpose |
|---------|---------|
| Vercel | Hosting, CDN, edge functions |
| GitHub | Source code, CI/CD trigger |

### Deploy Pipeline
```
Push to main -> Vercel auto-deploys -> Live
Push to branch -> Vercel preview deploy -> Review
```

## Performance Targets

| Metric | Target |
|--------|--------|
| LCP | < 2.5s |
| FID | < 100ms |
| CLS | < 0.1 |
| Lighthouse Score | > 90 |

## References

- [Folder Structure](folder-structure.md)
- [Code Style](../standards/code-style.md)
