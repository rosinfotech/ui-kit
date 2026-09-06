# Changelog

## [0.3.0] - 2026-09-06

### Added

- Light/dark theme switcher on all DNA pages: defaults to the system theme (follows `prefers-color-scheme` until an explicit choice), persists the choice in localStorage, inline SVG sun/moon toggle in the sidebar; light theme mirrors the GRY token scale, illustrations stay on fixed dark plates

## [0.2.2] - 2026-09-06

### Added

- Semantics page: "Композиция" section defining element, component and composite component with the radiobutton multi-layer example; typefaces presented as a table with weights and usage notes; DRK (dark theme) modifier

### Changed

- Terminology unified: components are no longer called elements; element is defined as an atomic part of a component residing in a single layer; BGR defined as the background for the foreground (FGR), not the component background
- Token notation unified: every slash-separated segment in its own code element, wildcard written as `***`; radiobutton code renamed RAD → RDB resolving the collision with radius scale
- Spacer component and its collision section removed (component does not exist in Figma); CLR scale corrected to 025–1000 for all families
- Example decodings added across semantics grammars and name parsing tables; table cells now start with a capital letter

## [0.2.1] - 2026-09-05

### Added

- FCL page illustrations: layers ladder (nine role steps across ABV/SFC/BLW with depth axis and inversion note) and annotated controls example (button, input field, surface panel with dashed FCL token callouts) as inline SVG assets

### Changed

- FCL palette representation rebuilt to mirror the Figma vitrine: color plates with role labels instead of hex chips, emphasis groups as single five-card rows, role order reflects spatial layering (FGR → BGR → BRD for ABV/SFC; inverted BRD → FGR → BGR for BLW) with an explanatory note; "How to apply" section moved before the full table
- DNA typography and layout polish: variable fonts with optical sizing and antialiased rendering, link underline offset, centered layout plate on black background, fluid rem-based scaling with current FTY metrics as the minimum, navigation refinements (radius 4, badge-sized triplex tags, label gaps)
- Editorial rules enforced project-wide: list punctuation (no trailing periods, colon only with sub-items), inline enumerations restructured into sub-items, wildcard notation unified to `***` for any three-letter code variant

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
