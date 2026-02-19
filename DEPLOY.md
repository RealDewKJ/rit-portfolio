# Deploy to Vercel Guide

## Step 1: Initialize Git & Push to GitHub

```bash
cd ~/.openclaw/workspace/dew-portfolio
git init
git add .
git commit -m "Initial commit: Portfolio site"
```

Then create a new repository on GitHub and push:

```bash
git remote add origin https://github.com/YOUR_USERNAME/dew-portfolio.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel

### Option A: Via Vercel Website (Easiest)

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Vercel will auto-detect Astro
5. Click "Deploy"

### Option B: Via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy from project directory
cd ~/.openclaw/workspace/dew-portfolio
vercel
```

## Step 3: Custom Domain (Optional)

1. Go to your project on Vercel
2. Settings → Domains
3. Add your custom domain
4. Update DNS records as instructed

## Configuration Notes

Vercel configuration is already set in `public/vercel.json`:

- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

## Environment Variables

No environment variables needed for this basic setup.

## What You Get

- ⚡ Fast static site (Astro)
- 🎨 Video editor dark theme
- 📱 Fully responsive
- 🚀 Auto-deploys on git push
- 🌐 HTTPS by default
- 💰 Free tier available

## Next Steps After Deployment

1. Update `src/pages/about.astro` with your actual bio
2. Add real blog posts in `src/pages/posts/`
3. Update interests on the home page
4. Customize colors in `tailwind.config.mjs`
5. Add your domain to `astro.config.mjs`
