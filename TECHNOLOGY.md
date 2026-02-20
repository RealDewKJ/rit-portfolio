# dew-portfolio - Technology Decisions

## ⚠️ TECHNOLOGY LOCK-IN

This project uses a **fixed technology stack** that will NOT change.

**Core Stack:**
- ✅ **Astro** - Web framework
- ✅ **Tailwind CSS** - Styling

**What We DON'T Use:**
- ❌ React (except optional client-side interactivity)
- ❌ UI libraries (shadcn/ui, MUI, Chakra, Ant Design, etc.)
- ❌ CSS-in-JS libraries (styled-components, emotion)
- ❌ Other build tools (Webpack, Rollup directly)

## Rationale

### Why Astro?

- **Performance:** Zero JS by default, server-side rendering
- **SEO:** Static HTML is better for search engines
- **Speed:** Fast page loads, great for portfolios
- **Simplicity:** Easy to develop and maintain
- **Modern:** Built for the current web (2026+)

### Why Tailwind CSS?

- **Utility-first:** Rapid development with pre-built classes
- **Consistent:** Design system built-in
- **Responsive:** Mobile-first approach
- **Customizable:** Easy to extend with your own styles
- **No lock-in:** Just CSS, no component library dependencies

### Why NOT React?

- **Overkill:** Static portfolio doesn't need client-side frameworks
- **Bundle size:** Adds unnecessary JavaScript
- **Complexity:** More moving parts for simple content
- **Astro is better:** Server-side components are perfect here

### Why NOT UI Libraries?

- **Custom design:** Your portfolio should look unique, not like a template
- **Less bloat:** No unused components or styles
- **Full control:** Every pixel is under your control
- **Better learning:** Understanding CSS fundamentals helps long-term

## Component Guidelines

### Use Astro Components (.astro)

All UI components should be `.astro` files, not `.tsx`:

```astro
---
// Component props
interface Props {
  title: string;
  variant?: 'default' | 'secondary';
}

const { title, variant = 'default' } = Astro.props;
---

<div class:list={['card', `card-${variant}`]}>
  <h2>{title}</h2>
  <slot />
</div>
```

### Use Pure Tailwind CSS

Style everything with Tailwind utility classes:

```astro
---
---

<div class="bg-gray-900 border-2 border-gray-700 rounded-lg p-6 hover:border-purple-500 transition-colors">
  <h2 class="text-xl font-bold text-white mb-2">Title</h2>
  <p class="text-gray-300">Description</p>
</div>
```

### Create Reusable Components

Build your own components using Tailwind classes:

```astro
---
// src/components/ProjectCard.astro
interface Props {
  title: string;
  description: string;
  tags: string[];
}

const { title, description, tags } = Astro.props;
---

<div class="bg-gray-900 border-2 border-gray-700 rounded-lg overflow-hidden hover:border-purple-500 transition-all">
  <div class="p-6">
    <h3 class="text-xl font-bold text-white mb-2">{title}</h3>
    <p class="text-gray-300 text-sm mb-4">{description}</p>
    <div class="flex flex-wrap gap-2">
      {tags.map(tag => (
        <span class="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300">
          {tag}
        </span>
      ))}
    </div>
  </div>
</div>
```

## Interactivity Policy

### Prefer Static Content

This is a portfolio - most content should be static HTML.

### When to Use JavaScript

✅ **Use JavaScript for:**
- Theme toggle (light/dark)
- Form submissions (contact form)
- Client-side search/filtering
- Animations that need JS

❌ **Don't use JavaScript for:**
- Static content display
- Navigation links
- Simple hover effects (use CSS)
- Basic interactions (use CSS)

### JavaScript Strategy

For small interactions, use:
1. **Vanilla JS** - Simple scripts in `<script>` tags
2. **Alpine.js** (optional) - Lightweight reactivity if needed
3. **Preact** (if needed) - React-like API, smaller bundle

**Avoid:** Full React for simple interactions.

## File Structure

```
src/
├── components/          # Reusable Astro components
│   ├── ProjectCard.astro
│   ├── SkillCard.astro
│   └── ...
├── pages/               # Route pages (.astro)
├── layouts/             # Layout components (.astro)
└── content/             # Markdown content
```

## Dependencies

### Core (No changes)
```json
{
  "astro": "^5.0.0",
  "@astrojs/tailwind": "^5.0.0",
  "@astrojs/vercel": "^9.0.0",
  "tailwindcss": "^3.4.0"
}
```

### Optional (Use only if needed)
```json
{
  "alpinejs": "^3.x",           // Lightweight interactivity
  "@astrojs/alpinejs": "^1.x"
}
```

### Forbidden
```json
{
  // ❌ Do NOT add these
  "react": "...",
  "react-dom": "...",
  "@astrojs/react": "...",
  "shadcn-ui": "...",
  "@radix-ui/*": "...",
  "next": "...",
  "nuxt": "...",
  "vue": "..."
}
```

## Deployment

**Platform:** Vercel

**Why:**
- Native Astro support
- Edge network
- Automatic previews
- Easy Git integration

**Build command:** `npm run build`
**Output:** `dist/` folder (SSR)

## Performance Goals

- **Lighthouse Score:** 90+ Performance
- **First Contentful Paint:** < 1.5s
- **JavaScript Bundle:** < 50KB (total)
- **CSS:** < 20KB (total)

## Maintenance

### Monthly
1. Update Astro dependencies: `npm update astro @astrojs/*`
2. Check for security updates: `npm audit`
3. Test on mobile devices

### Quarterly
1. Check Tailwind CSS updates
2. Review performance metrics

### Yearly
1. Evaluate Astro major versions
2. Consider major tech changes (only if critical)

## Future Considerations

**If this project outgrows the current stack:**

1. **More interactivity needed** → Add Alpine.js
2. **State management needed** → Astro Stores
3. **SPA behavior needed** → Astro + Preact (NOT React)

**But for a portfolio, the current stack is perfect.**

---

**Last Updated:** February 20, 2026
**Tech Stack Locked:** Yes - No changes planned
