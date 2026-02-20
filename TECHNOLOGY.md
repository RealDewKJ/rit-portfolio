# dew-portfolio - Technology Decisions

## ⚠️ TECHNOLOGY LOCK-IN

This project uses a **fixed technology stack** that will NOT change.

**Core Stack:**
- ✅ **Astro** - Web framework
- ✅ **shadcn/ui** - UI component library
- ✅ **Tailwind CSS** - Styling

**What We DON'T Use:**
- ❌ React (except optional client-side interactivity)
- ❌ Other UI libraries (MUI, Chakra, Ant Design, etc.)
- ❌ CSS-in-JS libraries (styled-components, emotion)
- ❌ Other build tools (Webpack, Rollup directly)

## Rationale

### Why Astro?

- **Performance:** Zero JS by default, server-side rendering
- **SEO:** Static HTML is better for search engines
- **Speed:** Fast page loads, great for portfolios
- **Simplicity:** Easy to develop and maintain
- **Modern:** Built for the current web (2026+)

### Why shadcn/ui?

- **Lightweight:** No runtime dependencies, just HTML + CSS
- **Customizable:** Copy-paste components, you own the code
- **Tailwind-based:** Already using Tailwind, perfect fit
- **Accessible:** Built with accessibility in mind
- **No lock-in:** Can modify any component

### Why NOT React?

- **Overkill:** Static portfolio doesn't need client-side frameworks
- **Bundle size:** Adds unnecessary JavaScript
- **Complexity:** More moving parts for simple content
- **Astro is better:** Server-side components are perfect here

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

### Add New shadcn/ui Components

```bash
npx shadcn@latest add [component-name] --yes
```

**If it creates React (.tsx) files, convert to Astro:**

1. Copy the component structure to `.astro`
2. Replace `className` with `class:list`
3. Replace `{children}` with `<slot />`
4. Remove React hooks (`useState`, `useEffect`)
5. Use Astro's built-in features instead

### Example: Convert React to Astro

**Before (React):**
```tsx
import { useState } from 'react';

export function Button({ label }: { label: string }) {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{label} ({count})</button>;
}
```

**After (Astro):**
```astro
---
interface Props {
  label: string;
}

const { label } = Astro.props;
---

<button data-astro-onclick="...">
  {label} <span id="count">0</span>
</button>
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
├── components/
│   ├── ui/              # shadcn/ui components (.astro only!)
│   │   ├── Button.astro
│   │   ├── Card/
│   │   └── ...
│   └── ...             # Other Astro components
├── pages/              # Route pages (.astro)
├── layouts/            # Layout components (.astro)
└── content/            # Markdown content
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
1. Review shadcn/ui updates
2. Check Tailwind CSS updates
3. Review performance metrics

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
