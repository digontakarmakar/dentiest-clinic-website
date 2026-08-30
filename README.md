# Dentiest Clinic Website

A React + TypeScript + Vite dental clinic landing website ready to publish on GitHub Pages.

## Deploy to GitHub Pages

1. Create a GitHub repository.
2. Push this project to the repository.
3. Update the `homepage` field in `package.json` with your GitHub username and repository name.
4. Run:

```bash
npm install
npm run deploy
```

This command builds the app and publishes the generated `dist` folder to the `gh-pages` branch.

## GitHub Pages configuration

After pushing, enable GitHub Pages in your repository settings:

- Source: Deploy from a branch
- Branch: `gh-pages` / `root`

If you prefer automatic deployment, GitHub Actions is also configured to deploy on pushes to the main branch.

## Local development

```bash
npm install
npm run dev
```
