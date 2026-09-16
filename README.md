# Tilt Slide Template

A minimal, modern Next.js starter template demonstrating editorial tilt-and-slide page transitions powered by the native **View Transition API** and **React 19**.

## Features

- **Native View Transitions**: Smooth, browser-native page navigation using CSS keyframes (`page-out` tilted scale exit and `page-in` diagonal clip-path entrance).
- **React 19 `<ViewTransition>`**: Seamless route transition orchestration in Next.js App Router using `template.tsx`.
- **TypeScript**: 100% typed codebase with zero external runtime animation libraries required.
- **Clean & Lightweight**: Minimal boilerplate with static route placeholders ready for custom content and assets.
- **Turbopack Ready**: Configured for Next.js with React Compiler and Turbopack support.

## Project Structure

```text
src/
├── app/
│   ├── about/
│   │   └── page.tsx        # About page route
│   ├── info/
│   │   └── page.tsx        # Info page route
│   ├── projects/
│   │   └── page.tsx        # Projects page route
│   ├── globals.css         # Transition styles, keyframes, and global CSS
│   ├── layout.tsx          # Root layout and persistent Navbar wrapper
│   ├── page.tsx            # Home page route
│   └── template.tsx        # ViewTransition wrapper for route transitions
└── components/
    └── Navbar.tsx          # Fixed navigation bar with viewTransitionName
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) (v18.17+ or later) or [Bun](https://bun.sh) (v1.0+)

### Installation

Clone the repository and install dependencies:

```bash
bun install
# or npm install / pnpm install / yarn
```

### Development

Run the local development server:

```bash
bun dev
# or npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to preview the template.

### Production Build

Create an optimized production build:

```bash
bun run build
bun start
```

## How It Works

1. **Persistent Navbar**: `src/components/Navbar.tsx` assigns `style={{ viewTransitionName: "navbar" }}` to keep navigation fixed in place while content transitions underneath.
2. **Page View Transition Wrapper**: `src/app/template.tsx` wraps every route with `<ViewTransition enter="page-enter" exit="page-exit" default="none">`, re-evaluating on navigation between sibling routes.
3. **Transition Keyframes**: `src/app/globals.css` specifies the custom pseudo-element animations:
   - `::view-transition-old(.page-exit)`: Tilts, shrinks, and slides the exiting view downwards with easing.
   - `::view-transition-new(.page-enter)`: Slides in the entering view with an expanding diagonal polygon `clip-path`.

## Customization

- **Add New Pages**: Create a folder in `src/app/<route>/page.tsx` and add corresponding navigation links inside `src/components/Navbar.tsx`.
- **Adjust Transition Timing**: Edit the duration and cubic-bezier easing curves inside `src/app/globals.css`.

## License

MIT
