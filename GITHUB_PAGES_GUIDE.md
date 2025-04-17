# Deploying Verde Vista to GitHub Pages

This guide explains how to deploy your Verde Vista Next.js application to GitHub Pages.

## Prerequisites

1. Push your code to a GitHub repository
2. Enable GitHub Pages for your repository

## Repository Setup

1. Create a new GitHub repository or use an existing one
2. Push your code to the repository:

```bash
# If starting with a new repository
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/verde-vista.git
git push -u origin main
```

## GitHub Pages Setup

1. Go to your GitHub repository
2. Navigate to Settings > Pages
3. Under "Source", select "GitHub Actions"
4. The workflow file `.github/workflows/deploy.yml` will automatically handle the deployment

## Configuration Details

The deployment is configured with the following files:

1. **next.config.js**: Contains settings for static export and paths
   - `output: 'export'`: Generates static HTML/CSS/JS files
   - `basePath` and `assetPrefix`: Set to match your repository name
   - `images.unoptimized: true`: Required for static export with images

2. **.github/workflows/deploy.yml**: Workflow file that:
   - Builds the Next.js application
   - Deploys the built files to GitHub Pages

## Important Notes

- The first deployment may take a few minutes
- Remember to adjust `basePath` and `assetPrefix` in `next.config.js` if you change your repository name
- Links in your application should use Next.js `Link` component which handles the base path automatically
- For images, use Next.js `Image` component which handles the asset prefix

## Troubleshooting

If you encounter issues:

1. Check the Actions tab in your GitHub repository for workflow errors
2. Verify that GitHub Pages is properly enabled
3. Ensure your repository is public or you have GitHub Pro for private repository GitHub Pages
4. Check that all paths and configuration settings match your repository name 