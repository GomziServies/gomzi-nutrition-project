import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // Code written for CRA uses process.env.PUBLIC_URL (always "" for this site, served from "/")
  define: {
    "process.env.PUBLIC_URL": JSON.stringify(""),
  },

  server: {
    port: 3000,
    open: true,
  },
  preview: {
    port: 3000,
  },

  build: {
    // Keep CRA's output folder: netlify.toml, server.js (sitemap) and the react-snap prerender read "build/"
    outDir: "build",
    // Bundled JS/CSS go to build/static (like CRA), so they never mix with the site's images in public/assets
    assetsDir: "static",
    // react-snap prerenders with an older headless Chrome (~v78): transpile newer syntax such as ?. and ??
    target: ["es2019", "chrome78", "firefox78", "safari13", "edge88"],
    // App.jsx imports every page eagerly, so the main chunk is large (same as with CRA)
    chunkSizeWarningLimit: 3000,
  },
});
