const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');

const hostname = 'https://www.gomzilifesciences.in';
const appFileCandidates = [
    path.resolve(__dirname, 'src', 'App.js'),
    path.resolve(__dirname, 'src', 'App.jsx')
];
const legacyRoutesPath = path.resolve(__dirname, 'src', 'routes.js');
const publicDirPath = path.resolve(__dirname, 'public');
const buildDirPath = path.resolve(__dirname, 'build');
const sitemapRelativePath = 'sitemap.xml';
const robotsRelativePath = 'robots.txt';

function ensureDir(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
}

function writeToPublicAndBuild(relativePath, content) {
    ensureDir(publicDirPath);
    fs.writeFileSync(path.resolve(publicDirPath, relativePath), content, 'utf8');

    if (fs.existsSync(buildDirPath)) {
        fs.writeFileSync(path.resolve(buildDirPath, relativePath), content, 'utf8');
    }
}

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
    const paths = [];

    appFileCandidates.forEach((filePath) => {
        if (!fs.existsSync(filePath)) {
            return;
        }

        const source = fs.readFileSync(filePath, 'utf8');
        const routeRegex = /<Route\b[^>]*\bpath=["']([^"']+)["'][^>]*>/gms;
        let match;

        while ((match = routeRegex.exec(source)) !== null) {
            const normalized = normalizePath(match[1]);
            if (normalized) {
                paths.push(normalized);
            }
        }
    });

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
    const appRoutes = extractAppRoutes();
    const all = appRoutes.length > 0 ? appRoutes : extractLegacyRoutes();
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

    const xmlString = (await streamToPromise(sitemap)).toString();
    writeToPublicAndBuild(sitemapRelativePath, xmlString);
    console.log(`Sitemap generated successfully with ${routes.length} routes.`);
}

function generateRobotsTxt() {
    const robotsTxt = [
        'User-agent: *',
        'Allow: /',
        `Sitemap: ${hostname}/sitemap.xml`,
        `Host: ${hostname}`,
        ''
    ].join('\n');

    writeToPublicAndBuild(robotsRelativePath, robotsTxt);
    console.log('robots.txt generated successfully.');
}

async function main() {
    await generateSitemap();
    generateRobotsTxt();
}

main().catch((error) => {
    console.error('SEO file generation failed:', error);
    process.exit(1);
});
