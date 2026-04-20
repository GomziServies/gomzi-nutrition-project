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

## Local And Live Prerender Setup

To see prerendered HTML in `View Source` for local and live:

1. Local preview:
	- Run `npm run preview:seo`
2. Live (Netlify):
	- Netlify build command uses `npm run build:seo`
	- Prerender is forced with `FORCE_PRERENDER=true` in `netlify.toml`
