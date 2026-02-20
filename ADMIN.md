# Admin Panel - Usage Guide

## 🛠️ Tech Stack

This project uses **Astro + shadcn/ui**.

**⚠️ IMPORTANT:** This tech stack is final - no framework or UI library changes planned.

See [TECH_STACK.md](./TECH_STACK.md) for full details.

---

## 🚀 Quick Start

### 1. Access Admin Panel

Navigate to: `http://localhost:4321/admin` (development) or `https://your-domain.vercel.app/admin` (production)

### 2. Login

Default password: `admin123`

**⚠️ CHANGE THIS IN PRODUCTION!**

Set your password in `.env` file:
```bash
ADMIN_PASSWORD=your-secure-password
```

## 📝 Managing Portfolio Entries

### Create New Entry

1. Click **"➕ Create New Entry"**
2. Fill in the fields:
   - **Title**: Project name
   - **Date**: Publication date (YYYY-MM-DD)
   - **Description**: Brief project description
   - **Thumbnail**: Image URL (recommended: 1600x900, JPG/WebP)
   - **Tags**: Comma-separated (e.g., `Music Video, Commercial`)
   - **Client**: Client name (optional)
   - **Link**: Project link (YouTube, Vimeo, etc.)
   - **YouTube ID**: Extract from URL (e.g., `dQw4w9WgXcQ`)
   - **Content**: Full project description (Markdown supported)
3. Click **"Create Entry"**

### Edit Existing Entry

1. Find the entry in the list
2. Click **"Edit"** button
3. Modify fields as needed
4. Click **"Update Entry"**

### Delete Entry

1. Find the entry in the list
2. Click **"Delete"** button (red)
3. Confirm deletion

## 🚀 Deployment

### Quick Deploy

Click **"🚀 Git Push & Deploy"** to:
1. Commit all changes to Git
2. Push to GitHub
3. Trigger Vercel auto-deploy

**Note**: Make sure your Vercel project is connected to your GitHub repository.

## 🔧 File Structure

Portfolio entries are stored as Markdown files:

```
src/content/portfolio/
├── 2025/
│   ├── commercial.md
│   ├── documentary.md
│   └── wedding.md
└── 2026/
    └── music-video.md
```

Each year gets its own folder based on the entry date.

## 📝 Markdown Format

Frontmatter structure:
```yaml
---
title: "Project Name"
description: "Brief description"
date: 2026-02-19
thumbnail: "https://example.com/image.jpg"
tags: ["Tag1", "Tag2"]
client: "Client Name"
link: "https://youtube.com/watch?v=xxx"
youtubeId: "youtube-video-id"
---

Full project description here...
```

## 🔐 Security

**Always set a strong ADMIN_PASSWORD in production!**

Environment variables:
- Local: `.env` file
- Vercel: Project Settings → Environment Variables

Add `.env` to `.gitignore` to avoid committing secrets.

## 🐛 Troubleshooting

### Deploy button not working

1. Check if Git is initialized and configured
2. Ensure Vercel is connected to your GitHub repository
3. Verify `ADMIN_PASSWORD` is set correctly

### Changes not reflecting

1. Make sure to click "Git Push & Deploy" after editing
2. Check Vercel dashboard for deployment status
3. Clear browser cache if needed

### Login issues

1. Verify `ADMIN_PASSWORD` is set in `.env` (local) or Vercel environment variables (production)
2. Restart dev server after changing `.env`
3. Re-deploy on Vercel after updating environment variables

## 📚 Technical Details

- **Framework**: Astro v5 with SSR
- **Hosting**: Vercel
- **Adapter**: `@astrojs/vercel/serverless`
- **Content**: Markdown files with frontmatter
- **Authentication**: Simple password-based (set via `ADMIN_PASSWORD`)

## 🎯 Next Steps

1. Change the default password
2. Add your portfolio entries
3. Test the deployment flow
4. Customize the admin UI if needed
5. Set up Vercel GitHub integration for auto-deploy

---

Built with ❤️ using Astro and a video editor aesthetic.
