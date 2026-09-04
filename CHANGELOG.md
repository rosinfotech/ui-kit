# Changelog

## [0.2.0] - 2026-09-04

### Added

- DNA documentation subproject (apps/dna): static HTML documentation of the UI kit design system core — semantics registry of three-letter codes and name grammars, absolute (CLR) and functional (FCL) color palette pages with full token tables, spacing/radius/thickness scale pages, typography matrix (TXT) with live samples, functional text roles (FTY) with vertical rhythm, elevation gradients (GRD); served by `npm run dna` (Vite, port 33335)
- Fluid rem-based typography scaling on DNA pages (root clamp 16–20px), centered layout plate on black background, FTY text roles applied to all page text; editorial conventions: list punctuation rules (no trailing periods, colon only with sub-items), base-4 spacing unit, FTY-derived vertical rhythm

## [0.1.0] - 2026-09-02

### Added

- Button component with dot notation variants (Default, Primary, Accent, Positive, Attention, Negative), five sizes, loading, icon-only, pill, full width, pressed, href and asChild support, fully typed props
- Design tokens as CSS variables with light/dark themes and Tailwind CSS 4 theme mapping
- Library build in Vite Library Mode: ESM, CJS, TypeScript declarations and standalone styles.css
- Explorer showcase app (Vite + TanStack Router) built on the UI kit itself: component demo pages, code snippets, props table, light/dark theme toggle
- Linting stack matching frontend boilerplate: ESLint (rosinfo.tech configs), Prettier, Husky, lint-staged
- Makefile workflow (update_version, git_commit_push) and npm workspaces monorepo layout

### Changed

- Renamed package description to "Rosinfotech UI Kit"

## [0.0.1] - 2026-09-01

### Added

- Initialization
