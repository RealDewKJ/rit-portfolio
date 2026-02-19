# D's Portfolio

A personal website built with Astro, featuring a video editor-inspired dark theme.

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deploy to Vercel

1. Push this project to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Vercel will detect Astro automatically
4. Deploy!

## Customization

### Add new posts
Create Markdown files in `src/pages/posts/` with this frontmatter:

```md
---
import Layout from '../../layouts/Layout.astro';

const title = "Your Post Title";
const date = new Date('2026-02-19');
---
```

### Update about
Edit `src/pages/about.astro` to change your bio and focus areas.

### Colors
Theme colors are defined in `tailwind.config.mjs`:

- `video-bg`: Main background (#0a0a0a)
- `video-surface`: Card backgrounds (#111111)
- `video-accent`: Primary accent (#00d4ff)
- `video-accent2`: Secondary accent (#ff4d4d)

## Design Philosophy

Inspired by Peter Steinberger's site (steipete.me), but with:
- Video editor aesthetic (timelines, REC indicators)
- Dark mode optimized for devs
- Clean, minimal layout
- Fast loading with Astro

## Tech Stack

- **Astro**: Static site generator
- **Tailwind CSS**: Styling
- **Vercel**: Hosting (optional)
