# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the main website for Enterverse (VEU Inc.), built as a React SPA showcasing VR experiences, team information, and contact forms. The site features promotional content for VR environments and VRChat events.

## Development Commands

```bash
# Development
npm run dev          # Start Vite dev server

# Build
npm run build        # TypeScript compilation + Vite build

# Linting
npm run lint         # Run ESLint with TypeScript support

# Preview
npm run preview      # Preview production build locally
```

## Architecture

### Tech Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with SWC plugin for fast refresh
- **Routing**: React Router v6 (browser router)
- **Styling**: Tailwind CSS + SCSS, custom color scheme (pink, neutral)
- **UI Components**: Radix UI primitives + custom components
- **Notifications**: Sonner toast library
- **Carousel**: Embla Carousel with autoplay

### Project Structure

```
src/
├── main.tsx              # App entry point, router configuration
├── layout.tsx            # Root layout with Navbar
├── constants.ts          # Image assets, team data, API endpoints
├── pages/                # Route components (home, team, 404)
├── components/
│   ├── ui/              # Reusable UI components (button, input, carousel, etc.)
│   ├── navbar.tsx       # Main navigation
│   └── error-boundary.tsx
├── utils/
│   └── form-handler.ts  # Contact & email list form submission logic
├── icons/               # Custom icon components (social media)
├── hooks/               # Custom React hooks
└── assets/              # Images organized by category (concept, vrchat, profiles, team)
```

### Key Architecture Patterns

**Routing**: Single-level nested routes using React Router `<Outlet>` in layout. All routes share the Layout component with Navbar and Toaster.

**Path Aliases**: Uses `@/` prefix for absolute imports mapped to `./src` (configured in vite.config.ts and tsconfig.json).

**API Integration**: Backend API at `https://collections.enterverse.com` with endpoints:
- `/contact` - Contact form submissions
- `/email-list` - Email list signups

Both use POST with JSON payloads and include rate limiting/duplicate detection.

**Form Handling**: Centralized in `utils/form-handler.ts` with toast notifications. Uses module-level flags (`isSubmitting`, `isSubmitting2`) to prevent duplicate submissions.

**Static Content**: Team members, executives, and associated people are defined as typed constant arrays in `constants.ts` with imported WebP images.

**UI Components**: Mix of Radix UI primitives (wrapped and styled) and custom components. Uses class-variance-authority for button variants.

## Code Style

- ESLint config extends `@ariesclark/eslint-config` with Next.js and Tailwind plugins
- TypeScript strict mode enabled
- Non-null assertions allowed (`@typescript-eslint/no-non-null-assertion: off`)
- Prettier formatting integrated
- Component exports use default exports for pages, named exports for utilities

## Important Notes

- The README.md references incorrect repo URL (`policies.enterlink.app`) - this is actually the `enterverse.com` website
- Video assets use MP4 format with WebP thumbnails
- All images are pre-optimized WebP format
- Custom Tailwind theme includes DM Sans and Geist fonts
- Extended transition durations up to 10000ms for animations
