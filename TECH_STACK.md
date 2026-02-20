# Tech Stack

This project uses **Astro + shadcn/ui** as the primary tech stack.

## Core Framework

**Astro** - Modern web framework for building fast, content-focused websites.

**Why Astro:**
- Zero JS by default
- Server-side rendering (SSR)
- Fast page loads and great SEO
- Easy to work with
- Excellent for portfolio sites

## UI Library

**shadcn/ui** - Copy-paste components built with Tailwind CSS.

**Why shadcn/ui:**
- Lightweight (no heavy runtime dependencies)
- Built on Tailwind CSS
- Highly customizable
- Accessible components
- Design system ready
- No lock-in (you own the code)

## Styling

**Tailwind CSS** - Utility-first CSS framework.

**Why Tailwind:**
- Consistent design system
- Fast development
- Easy to maintain
- Works great with shadcn/ui
- Responsive utilities out of the box

## Design System

**Theme:** Light/Dark mode with CSS variables

**Colors:** shadcn/ui default color palette

**Typography:**
- **Inter** - Body text
- **Space Grotesk** - Headings and display
- **JetBrains Mono** - Code and monospace

## Component Structure

All UI components are **Astro components** (`.astro` files), not React components.

```
src/components/
├── ui/
│   ├── Button.astro          # Button component
│   ├── Badge.astro           # Badge component
│   ├── Input.astro           # Input component
│   └── card/                # Card component suite
│       ├── Card.astro
│       ├── CardContent.astro
│       ├── CardTitle.astro
│       ├── CardDescription.astro
│       ├── CardHeader.astro
│       ├── CardFooter.astro
│       └── index.ts          # Barrel export
```

## What We DON'T Use

**❌ React components** - No `.tsx` UI components (only `.astro`)

**❌ Other UI libraries** - No MUI, Chakra, Ant Design, etc.

**❌ CSS-in-JS** - No styled-components, emotion, etc.

**❌ Build tools** - No Webpack, Vite only (via Astro)

## Technology Decisions

### Why Not React?

- **Overkill for a portfolio site** - Static content doesn't need client-side frameworks
- **Bundle size** - Zero JS by default with Astro
- **Performance** - Server-side rendering is faster
- **SEO** - Better with static HTML

### Why Not Other UI Libraries?

- **shadcn/ui is flexible** - Copy-paste components, own the code
- **Tailwind-based** - Already using Tailwind, no need for another system
- **No runtime** - Components are just HTML + CSS, no heavy library overhead
- **Customizable** - Easy to modify to match brand

## Adding New Components

When adding new UI components, use this pattern:

1. **Install shadcn/ui component:**
   ```bash
   npx shadcn@latest add [component-name] --yes
   ```

2. **If it creates React files (.tsx), convert to Astro:**
   - Copy structure to `.astro` file
   - Replace React hooks with Astro features
   - Use `class:list` instead of `className`
   - Use Astro slots (`<slot />`) instead of `children`

3. **Place in `src/components/ui/`:**
   - If complex, create subfolder (like `card/`)
   - Create `index.ts` for barrel exports

## Project Stability

**This tech stack is FINAL.**

- No framework migrations planned
- No UI library changes
- No major architecture changes
- Updates to Astro, Tailwind, and shadcn/ui only

## Future Considerations

If the project needs more interactivity:

1. **Small interactions** - Use Alpine.js or vanilla JS
2. **State management** - Astro stores or Signals API
3. **Complex apps** - Consider Svelte or Preact (not React)

But for now, the current stack is perfect for this portfolio.

---

**Last Updated:** February 20, 2026
