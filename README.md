# Rit - Video Editor Portfolio

A clean, video editor-themed portfolio website built with Astro and HTML.

## 🎬 About

Portfolio for **Maritta Ketnawang** (aka **Rit** or **Richy**), a professional video editor specializing in:
- Music Videos
- Commercials
- Documentaries
- Wedding Films
- Social Media Content

## 🚀 Live Demo

View the live site: [rit-portfolio.vercel.app](https://rit-portfolio.vercel.app)

## 🎨 Tech Stack

- **Astro** - Static site generator
- **Tailwind CSS** - Styling (optional, for future use)
- **Pure HTML/CSS** - Currently deployed version
- **Vercel** - Hosting & deployment

## 📂 Project Structure

```
rit-portfolio/
├── public/
│   ├── index.html          # Main HTML version (deployed)
│   └── vercel.json        # Vercel config
├── src/
│   ├── content/
│   │   └── portfolio/      # Portfolio entries (Markdown)
│   ├── layouts/
│   │   └── Layout.astro   # Main layout
│   └── pages/
│       ├── index.astro      # Home page
│       ├── portfolio.astro  # Portfolio listing
│       ├── about.astro     # About page
│       └── contact.astro   # Contact page
├── astro.config.mjs        # Astro configuration
├── tailwind.config.mjs     # Tailwind configuration
└── package.json           # Dependencies
```

## 📝 Adding New Projects

### Step 1: Create a new portfolio entry

Create a new Markdown file in `src/content/portfolio/`:

```markdown
---
title: "Project Name"
description: "Brief project description"
date: 2026-02-19
thumbnail: "https://example.com/image.jpg"
tags: ["Tag1", "Tag2"]
client: "Client Name"
link: "https://youtube.com/watch?v=xxx"
youtubeId: "youtube-video-id"
---

Full project description here...

Technical details, challenges, and results can be written in Markdown format.
```

### Step 2: Update HTML version (for immediate deployment)

If using the HTML version (`public/index.html`), manually add the new project to the Portfolio section.

## 🎨 Customization

### Update Personal Info

Edit `public/index.html` and update:
- Name and bio
- Contact links (email, social media)
- Skills and tools
- Portfolio projects

### Update Colors

Edit `public/index.html` and update CSS variables:

```css
:root {
  --video-bg: #0a0a0a;        /* Main background */
  --video-surface: #111111;      /* Card backgrounds */
  --video-border: #222222;       /* Borders */
  --video-accent: #00d4ff;      /* Primary accent */
  --video-accent2: #ff4d4d;     /* Secondary accent */
  --video-muted: #666666;        /* Muted text */
}
```

## 🌐 Deployment

### Deploy to Vercel

1. Push changes to GitHub
2. Vercel auto-deploys (if connected)
3. Or manually trigger deploy from Vercel dashboard

### Deploy for First Time

1. Go to [vercel.com](https://vercel.com)
2. Import this GitHub repository
3. Click "Deploy"
4. That's it! 🎉

## 🔧 Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📸 Adding Project Thumbnails

For the best results:
- **Recommended size**: 1600x900 (16:9 aspect ratio)
- **Format**: JPG or WebP
- **File size**: Under 500KB for fast loading

Host thumbnails on:
- Unsplash (free, example images)
- Cloudinary / Imgur
- Your own server
- GitHub repository (via GitHub Pages or RawGit)

## 🎬 Video Embedding

To embed YouTube videos:

1. Add `youtubeId` to your portfolio entry frontmatter:
   ```yaml
   youtubeId: "dQw4w9WgXcQ"
   ```

2. The `[slug].astro` template automatically creates an embed.

## 📱 Responsive Design

The site is fully responsive:
- Mobile-first approach
- Touch-friendly navigation
- Optimized for all screen sizes

## 🎭 Theme - Video Editor Aesthetic

- Dark mode (cinematic feel)
- Timeline indicators ("REC ● 00:00:00:00")
- Monospace fonts for timestamps
- Video editing software color palette
- Clean, minimalist layout

## 📄 License

© 2026 Maritta Ketnawang (Rit) - Video Editor

---

Built with ❤️ using Astro, Tailwind CSS, and a video editor aesthetic.
