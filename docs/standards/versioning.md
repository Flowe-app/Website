# Versioning

> Semantic versioning standards for the Flowe website

## Semantic Versioning

Format: `MAJOR.MINOR.PATCH`

Example: `1.2.3`

| Component | When to Increment |
|-----------|-------------------|
| MAJOR | Breaking changes, major redesigns |
| MINOR | New pages, features, backward compatible |
| PATCH | Bug fixes, copy changes, minor improvements |

## Version Examples

| Version | Description |
|---------|-------------|
| `0.1.0` | Initial website with landing page |
| `0.2.0` | Added waitlist form |
| `0.2.1` | Fixed mobile layout bug |
| `1.0.0` | Public launch |
| `1.1.0` | Added pricing page |
| `2.0.0` | Major redesign |

## Package Version

```json
// package.json
{
  "name": "flowe-website",
  "version": "0.1.0"
}
```

## Release Phases

| Phase | Version Range | Description |
|-------|---------------|-------------|
| Development | `0.0.x` | Internal development |
| Beta | `0.x.0` | Testing, feedback |
| Launch | `1.0.0` | Public release |
| Iteration | `1.x.x` | Ongoing improvements |

## Changelog Format

```markdown
# Changelog

## [0.2.0] - 2026-04-10
### Added
- Waitlist form with email validation
- Success/error feedback messages

### Changed
- Updated hero copy

### Fixed
- Mobile navigation overlap

## [0.1.0] - 2026-03-30
### Added
- Initial landing page
- Neumorphic design system
- Responsive layout
```

## Git Tags

```bash
# Create version tag
git tag -a v0.1.0 -m "Initial website launch"

# Push tag
git push origin v0.1.0
```

## Rules

### Do
- Increment version with every deploy
- Update changelog with every release
- Tag releases in git
- Keep `package.json` version in sync

### Don't
- Skip version numbers
- Decrease version numbers
- Deploy without updating version

## References

- [Semantic Versioning](https://semver.org/)
