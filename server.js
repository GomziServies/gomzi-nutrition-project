const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');

const hostname = 'https://www.gomzilifesciences.in';
const appFilePath = path.resolve(__dirname, 'src', 'App.jsx');
const legacyRoutesPath = path.resolve(__dirname, 'src', 'routes.js');
const sitemapOutputPath = path.resolve(__dirname, 'public', 'sitemap.xml');

function normalizePath(routePath) {
    if (typeof routePath !== 'string') {
        return null;
    }

    const trimmed = routePath.trim();
    if (!trimmed || trimmed === '*' || trimmed.startsWith('http') || trimmed.includes(':')) {
        return null;
    }

    const withLeadingSlash = trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
    const compactSlashes = withLeadingSlash.replace(/\/+/g, '/');

    if (compactSlashes.length > 1 && compactSlashes.endsWith('/')) {
        return compactSlashes.slice(0, -1);
    }

    return compactSlashes;
}

function extractAppRoutes() {
    if (!fs.existsSync(appFilePath)) {
        return [];
    }

    const source = fs.readFileSync(appFilePath, 'utf8');
    const routeRegex = /<Route\s+path=["']([^"']+)["']/g;
    const paths = [];
    let match;

    while ((match = routeRegex.exec(source)) !== null) {
        const normalized = normalizePath(match[1]);
        if (normalized) {
            paths.push(normalized);
        }
    }

    return paths;
}

function extractLegacyRoutes() {
    if (!fs.existsSync(legacyRoutesPath)) {
        return [];
    }

    const legacyRoutes = require('./src/routes');
    if (!Array.isArray(legacyRoutes)) {
        return [];
    }

    return legacyRoutes
        .map((route) => normalizePath(route && route.path))
        .filter(Boolean);
}

function collectAllRoutes() {
    const all = [...extractAppRoutes(), ...extractLegacyRoutes()];
    const unique = Array.from(new Set(all));

    unique.sort((a, b) => {
        if (a === '/') return -1;
        if (b === '/') return 1;
        return a.localeCompare(b);
    });

    return unique;
}

async function generateSitemap() {
    const routes = collectAllRoutes();
    const sitemap = new SitemapStream({ hostname });

    routes.forEach((routePath) => {
        sitemap.write({ url: routePath, changefreq: 'monthly', priority: 0.7 });
    });

    sitemap.end();

    const xmlString = await streamToPromise(sitemap);
    fs.writeFileSync(sitemapOutputPath, xmlString);
    console.log(`Sitemap generated successfully with ${routes.length} routes.`);
}

generateSitemap().catch((error) => {
    console.error('Sitemap generation failed:', error);
    process.exit(1);
});
