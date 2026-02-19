# Quick Start: Deploy Rit's Portfolio

## Step 1: Login to GitHub CLI

```bash
gh auth login
```

Follow the prompts to authenticate with your GitHub account.

## Step 2: Push to GitHub

```bash
cd ~/.openclaw/workspace/dew-portfolio
git push -u origin main
```

## Step 3: Deploy to Vercel

### Option A: Via Vercel Website (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Login with GitHub
3. Click "Add New" → "Project"
4. Import `rit-portfolio` repository
5. Click **Deploy**

**That's it! 🎉**

Vercel will:
- Build the site automatically
- Deploy it to a free URL
- Set up auto-deploys for future changes

### Option B: Via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
cd ~/.openclaw/workspace/dew-portfolio
vercel
```

## After Deployment

Your site will be available at:
- `https://rit-portfolio.vercel.app` (or similar)
- Vercel will show the exact URL after deployment

### Custom Domain (Optional)

1. Go to your project on Vercel
2. Settings → Domains
3. Add your custom domain
4. Update DNS records as shown

## Troubleshooting

### Git Push Authentication Error

If you see `fatal: could not read Username`, run:
```bash
gh auth login
```

### Vercel Build Fails

Make sure:
- `package.json` exists ✓
- `astro.config.mjs` exists ✓
- All `.astro` files are valid

---

Need help? Check the full [README.md](./README.md) for detailed documentation.
