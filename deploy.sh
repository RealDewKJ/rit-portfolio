#!/bin/bash

# Rit Portfolio - Quick Deploy Script
# Run this to deploy to Vercel after GitHub push

set -e

echo "🚀 Rit Portfolio - Quick Deploy Script"
echo "===================================="
echo ""

# Step 1: Check git status
echo "Step 1: Checking git status..."
cd ~/.openclaw/workspace/dew-portfolio

if [ -z "$(git status --porcelain)" ]; then
    echo "✅ No changes to commit"
else
    echo "📝 Staging changes..."
    git add .
    echo "Changes:"
    git status --short
    echo ""
    read -p "Commit message: " commit_msg
    git commit -m "$commit_msg" || git commit -m "Update portfolio"
fi

# Step 2: Check if GitHub is logged in
echo ""
echo "Step 2: Checking GitHub authentication..."
if gh auth status &>/dev/null; then
    echo "✅ GitHub CLI is authenticated"
else
    echo "❌ GitHub CLI not authenticated"
    echo ""
    echo "Please run: gh auth login"
    echo ""
    exit 1
fi

# Step 3: Push to GitHub
echo ""
echo "Step 3: Pushing to GitHub..."
git push -u origin main || {
    echo "❌ Push failed"
    echo ""
    echo "Try: git push -u origin main"
    echo ""
    exit 1
}

echo ""
echo "✅ Successfully pushed to GitHub!"
echo ""

# Step 4: Vercel deployment info
echo "Step 4: Vercel Deployment"
echo "=================================="
echo ""
echo "Next steps:"
echo ""
echo "1. Go to https://vercel.com/dashboard"
echo "2. Find 'rit-portfolio' project"
echo "3. It will auto-deploy (or click 'Redeploy')"
echo ""
echo "🎉 All done!"
echo ""
echo "Your site will be available at:"
echo "  - https://rit-portfolio.vercel.app"
echo ""
echo "Need help? Check DROP_INSTRUCTIONS.md"
