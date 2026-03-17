# AI Coding Guidelines for codrillo

## Architecture Overview

This is a React code snippet manager app built with Vite, TypeScript, and Chakra UI. The app structure follows:

- `src/app/` - Main app logic, with `pages/` containing page components organized in subfolders (home/, signin/, signup/)
- `src/components/` - Reusable UI components (Header, Footer, UI components in ui/)
- `src/assets/` - Static images and resources
- `src/routes/` - Routing configuration
- Path mapping: `@/*` resolves to `./src/*`

The app uses Chakra UI v3 with next-themes for color mode switching.

## Key Dependencies & Integrations

- **UI Framework**: Chakra UI with `defaultSystem` and next-themes for dark/light mode
- **Icons**: React Icons (Io* from ionicons, Sl* from simple-line-icons, etc.)
- **Routing**: React Router DOM for client-side routing
- **Syntax Highlighting**: Shiki for code blocks
- **Build Tool**: Vite with React plugin and tsconfig paths

## Developer Workflows

- **Package Manager**: npm (use `npm install`, not pnpm/yarn)
- **Development**: `npm run dev` starts Vite dev server
- **Build**: `npm run build` runs TypeScript check then Vite build
- **Lint**: `npm run lint` runs ESLint on TSX files
- **Preview**: `npm run preview` serves built app locally

## Code Conventions

- **Imports**: Use `@/` path alias (e.g., `import { Header } from '@/components/Header'`)
- **Components**: Export as named functions with JSX.Element return type annotation
- **Styling**: Chakra UI props directly on components, responsive with `base`/`md` breakpoints
- **Assets**: Import images from `@/assets/` and use in `src` or `bgImage`
- **TypeScript**: Strict mode enabled, use interfaces for props (e.g., `type Snippet = { ... }`)
- **File Structure**: Components organized in subfolders, pages in `pages/` folder with subcomponents and hooks

## Component Patterns

- Wrap app in `<Provider>` for Chakra and theme context
- Use `Flex`, `Box`, `Text`, `Heading`, `Button`, `Icon` from Chakra for layout
- Responsive props: `fontSize={{ base: "xs", md: "sm" }}`
- Color mode: Use `useColorMode` from next-themes for theme switching
- Code blocks: Use `CodeBlock` from Chakra UI with Shiki adapter
- Icons: Import from react-icons (e.g., `IoCodeSlash` from "react-icons/io5")

## Section Organization

Each major section is organized in its own subfolder with:

- Main component (e.g., `AboutSection.tsx`)
- Subcomponents (e.g., `AboutProfile.tsx`, `AboutSoftSkills.tsx`)
- Data file (e.g., `aboutData.ts`)

## Examples

- Home page: Cards for features with icons and descriptions
- Code snippets: Display with syntax highlighting using CodeBlock
- Navigation: Header and Footer components with routing

Reference: `src/app/App.tsx` for app structure, `src/components/Header.tsx` for component patterns.
