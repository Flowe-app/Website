# Contributing to Flowe Website

> Guidelines for contributing to the website project

## Getting Started

### Prerequisites
- Node.js 18+
- npm
- Git

### Setup
```bash
# Clone the repository
git clone https://github.com/Flowe-app/Website.git
cd Website

# Install dependencies
npm install

# Run dev server
npm run dev
```

## Code Standards

Before contributing, familiarize yourself with:
- [Naming Conventions](standards/naming-conventions.md)
- [Code Style](standards/code-style.md)
- [Error Handling](standards/error-handling.md)

## Branch Naming

| Type | Format | Example |
|------|--------|---------|
| Feature | `feature/description` | `feature/waitlist-form` |
| Bug fix | `fix/description` | `fix/mobile-nav-overlap` |
| Refactor | `refactor/description` | `refactor/component-structure` |
| Docs | `docs/description` | `docs/update-readme` |

## Commit Messages

Format: `type(scope): description`

### Types
| Type | Use |
|------|-----|
| `feat` | New feature |
| `fix` | Bug fix |
| `refactor` | Code refactoring |
| `style` | Formatting, no logic change |
| `docs` | Documentation |
| `test` | Adding tests |
| `chore` | Maintenance tasks |

### Examples
```
feat(waitlist): add email signup form with validation
fix(hero): resolve CLS on mobile viewport
refactor(components): extract neumorphic card to shared component
docs(readme): update setup instructions
```

## Pull Request Process

1. **Create branch** from `main`
2. **Make changes** following code standards
3. **Test** your changes (responsive, accessibility)
4. **Lint/format** with `npm run lint`
5. **Commit** with descriptive message
6. **Push** to your branch
7. **Open PR** with description

### PR Description Template
```markdown
## Summary
Brief description of changes

## Changes
- Change 1
- Change 2

## Testing
How was this tested?

## Screenshots
(if UI changes — include mobile + desktop)
```

## Code Review Checklist

Reviewers will check:
- [ ] Follows naming conventions
- [ ] Code passes linting (`npm run lint`)
- [ ] No TypeScript errors
- [ ] UI follows design system (neumorphism, colors, spacing)
- [ ] Responsive (mobile-first)
- [ ] Accessible (contrast, keyboard nav, screen reader)
- [ ] No hardcoded strings (use constants)
- [ ] Animations are subtle and purposeful

## Design Changes

For UI/UX changes:
1. Reference [Design System](design/overview.md)
2. Use only approved colors, typography
3. Follow ADHD-friendly principles
4. Include screenshots in PR (mobile + desktop)

## Reporting Issues

### Bug Reports
Include:
- Browser/OS
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

### Feature Requests
Include:
- Use case description
- How it aligns with Flowe's mission
- Proposed implementation (optional)
