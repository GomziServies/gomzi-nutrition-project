const { spawnSync } = require("child_process");
const path = require("path");

function envFlag(name) {
  const value = process.env[name];
  if (!value) return false;
  return value === "1" || value.toLowerCase() === "true";
}

function run(command, args) {
  const result = spawnSync(command, args, {
    stdio: "inherit",
    shell: false,
    env: process.env,
  });

  return result.status === 0;
}

function runReactSnap() {
  const binName = process.platform === "win32" ? "react-snap.cmd" : "react-snap";
  const reactSnapBin = path.resolve(__dirname, "..", "node_modules", ".bin", binName);

  return run(reactSnapBin, []);
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

  if (envFlag("VERCEL")) {
    return true;
  }

  return false;
}

function main() {
  if (shouldSkipPrerender()) {
    console.log("Skipping react-snap prerender for this environment.");
  } else {
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