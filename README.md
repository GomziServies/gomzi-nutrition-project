# gomzi-nutrition

## View Source Solution

If you run the app with `npm start`, browser View Source shows the base HTML template (React development mode).

To see prerendered HTML in View Source:

1. Run `npm run preview:seo`
2. Open the local URL shown by `serve`
3. Check View Source again

Notes:

- `npm start` = client-side rendering during development
- `npm run build:seo` = production build + react-snap prerender

## Sitemap And Robots Setup

- `npm run generate:seo`
	- Generates `public/sitemap.xml` and `public/robots.txt`
	- If `build` folder exists, also updates `build/sitemap.xml` and `build/robots.txt`

- `npm run build:seo`
	- Automatically runs SEO generation before build (`prebuild`)
	- Runs react-snap prerender (`postbuild`)
	- Regenerates sitemap and robots after prerender to keep final build output synced

## Local And Live Prerender Setup

To see prerendered HTML in `View Source` for local and live:

1. Local preview:
	- Run `npm run preview:seo`
2. Live (Netlify):
	- Netlify build command uses `npm run build:seo`
	- Prerender is forced with `FORCE_PRERENDER=true` in `netlify.toml`
