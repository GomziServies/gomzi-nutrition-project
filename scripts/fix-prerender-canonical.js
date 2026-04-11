const fs = require("fs");
const path = require("path");

const BUILD_DIR = path.resolve(__dirname, "..", "build");
const SITE_ORIGIN = "https://www.gomzilifesciences.in";
const LOCALHOST_ORIGIN_PATTERN = /http:\/\/localhost:\d+/g;

function walk(dir, fileList = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  entries.forEach((entry) => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      walk(fullPath, fileList);
      return;
    }

    if (entry.isFile() && entry.name.endsWith(".html")) {
      fileList.push(fullPath);
    }
  });

  return fileList;
}

function replaceOriginsInFile(filePath) {
  const original = fs.readFileSync(filePath, "utf8");
  const updated = original.replace(LOCALHOST_ORIGIN_PATTERN, SITE_ORIGIN);

  if (updated !== original) {
    fs.writeFileSync(filePath, updated, "utf8");
    return true;
  }

  return false;
}

function main() {
  if (!fs.existsSync(BUILD_DIR)) {
    console.error("Build directory not found. Run build first.");
    process.exit(1);
  }

  const htmlFiles = walk(BUILD_DIR);
  let changedCount = 0;

  htmlFiles.forEach((filePath) => {
    if (replaceOriginsInFile(filePath)) {
      changedCount += 1;
    }
  });

  console.log(`Updated canonical origins in ${changedCount} HTML file(s).`);
}

main();
