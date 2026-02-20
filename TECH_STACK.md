# Tech Stack

This project uses **Astro + Tailwind CSS** as the primary tech stack.

## Core Framework

**Astro** - Modern web framework for building fast, content-focused websites.

**Why Astro:**
- Zero JS by default
- Server-side rendering (SSR)
- Fast page loads and great SEO
- Easy to work with
- Excellent for portfolio sites

## Styling

**Tailwind CSS** - Utility-first CSS framework.

**Why Tailwind:**
- Consistent design system
- Fast development
- Easy to maintain
- Responsive utilities out of the box
- No component library dependencies

## Design System

**Theme:** Dark mode video editor theme with CSS variables

**Colors:**
- Background: #0a0a0a (near black)
- Surface: #1a1a1a (dark gray)
- Primary: #a855f7 (purple accent)
- Text: #e5e5e5 (light gray)
- Muted: #737373 (medium gray)

**Typography:**
- **Display/Headings** - Custom font for video editor aesthetic
- **Body** - System sans-serif for readability
- **Monospace** - For timestamps, code, and technical details

## Component Structure

All UI components are **Astro components** (`.astro` files), built with pure Tailwind CSS.

```
src/components/
├── ProjectCard.astro       # Portfolio project card
├── SkillCard.astro         # Skill display card
└── ...                    # Other Astro components
```

## What We DON'T Use

**❌ React components** - No `.tsx` UI components (only `.astro`)

**❌ UI libraries** - No shadcn/ui, MUI, Chakra, Ant Design, etc.

**❌ CSS-in-JS** - No styled-components, emotion, etc.

**❌ Build tools** - No Webpack, Vite only (via Astro)

## Technology Decisions

### Why Not React?

- **Overkill for a portfolio site** - Static content doesn't need client-side frameworks
- **Bundle size** - Zero JS by default with Astro
- **Performance** - Server-side rendering is faster
- **SEO** - Better with static HTML

### Why Not UI Libraries?

- **Custom design** - Your portfolio should be unique, not look like every other site
- **Less bloat** - No unused components or styles you'll never use
- **Full control** - Every pixel is under your control
- **Better learning** - Understanding CSS fundamentals helps in the long run

## Adding New Components

When adding new UI components, use this pattern:

1. **Create Astro component** in `src/components/`

2. **Use Tailwind classes** for all styling:

```astro
---
// src/components/ProjectCard.astro
interface Props {
  title: string;
  description: string;
  thumbnail?: string;
  tags?: string[];
}

const { title, description, thumbnail, tags = [] } = Astro.props;
---

<a href={`/portfolio/${slug}`} class="block group">
  <div class="bg-gray-900 border-2 border-gray-700 rounded-lg overflow-hidden hover:border-purple-500 transition-all hover:translate-y-[-4px]">
    {thumbnail && (
      <div class="aspect-video bg-black overflow-hidden">
        <img src={thumbnail} alt={title} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
    )}
    <div class="p-6">
      <h3 class="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">{title}</h3>
      <p class="text-gray-400 text-sm mb-4">{description}</p>
      <div class="flex flex-wrap gap-2">
        {tags.map(tag => (
          <span class="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
</a>
```

3. **Reuse component** in pages:

```astro
---
import ProjectCard from '../components/ProjectCard.astro';
---

<ProjectCard
  title="Neon Dreams"
  description="A vibrant music video"
  tags={['Music Video', 'Color Grading']}
/>
```

## Project Stability

**This tech stack is FINAL.**

- No framework migrations planned
- No UI library additions
- No major architecture changes
- Updates to Astro and Tailwind only

## Future Considerations

If the project needs more interactivity:

1. **Small interactions** - Use Alpine.js or vanilla JS
2. **State management** - Astro stores or Signals API
3. **Complex apps** - Consider Svelte or Preact (not React)

But for now, the current stack is perfect for this portfolio.

---

**Last Updated:** February 20, 2026
