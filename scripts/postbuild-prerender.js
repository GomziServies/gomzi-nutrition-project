const { spawnSync } = require("child_process");
const path = require("path");
const fs = require("fs");

const BUILD_DIR = path.resolve(__dirname, "..", "build");
const REACT_SNAP_MARKER = path.join(BUILD_DIR, "200.html");

function envFlag(name) {
  const value = process.env[name];
  if (!value) return false;
  return value === "1" || value.toLowerCase() === "true";
}

function run(command, args) {
  const result = spawnSync(command, args, {
    stdio: "inherit",
    shell: process.platform === "win32",
    env: process.env,
  });

  return result.status === 0;
}

function runReactSnap() {
  const binName = process.platform === "win32" ? "react-snap.cmd" : "react-snap";
  const reactSnapBin = path.resolve(__dirname, "..", "node_modules", ".bin", binName);

  return run(reactSnapBin, []);
}

function cleanupStaleReactSnapOutput() {
  if (fs.existsSync(REACT_SNAP_MARKER)) {
    fs.unlinkSync(REACT_SNAP_MARKER);
    console.log("Removed stale build/200.html before prerender.");
  }
}

function runCanonicalFix() {
  const nodeBin = process.execPath;
  const scriptPath = path.resolve(__dirname, "fix-prerender-canonical.js");
  return run(nodeBin, [scriptPath]);
}

function shouldSkipPrerender() {
  if (envFlag("FORCE_PRERENDER")) {
    return false;
  }

  if (envFlag("SKIP_PRERENDER")) {
    return true;
  }

  // Skip only on hosted Vercel CI builds; local Vercel build can still prerender.
  if (envFlag("VERCEL") && envFlag("CI")) {
    return true;
  }

  return false;
}

function main() {
  if (shouldSkipPrerender()) {
    console.log("Skipping react-snap prerender for this environment.");
  } else {
    cleanupStaleReactSnapOutput();
    console.log("Running react-snap prerender...");
    if (!runReactSnap()) {
      process.exit(1);
    }
  }

  console.log("Running canonical URL fix...");
  if (!runCanonicalFix()) {
    process.exit(1);
  }
}

main();