# Gomzi Lifesciences website

React 18 app built with [Vite](https://vite.dev/).

## Scripts

| Command | What it does |
| --- | --- |
| `npm start` (or `npm run dev`) | Dev server at http://localhost:3000 with hot reload |
| `npm run build` | Regenerates `sitemap.xml` / `robots.txt`, builds to `build/`, then prerenders pages with react-snap |
| `npm run build:seo` | Same as `build`, but always prerenders (used by Netlify) |
| `npm run preview` | Serves the `build/` folder locally |

## Notes

- Entry point: `index.html` (project root) loads `src/index.jsx`.
- Static files (images, PDFs, `robots.txt`, …) live in `public/` and are served from `/`.
- Bundled JS/CSS go to `build/static/`.
- API base URL is chosen by hostname in `src/assets/js/config/apiConfig.js` (localhost uses the dev API).
