const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function main() {
  const rootDir = path.resolve(__dirname, '..');
  const inputPath = path.join(rootDir, 'public', 'blog', 'jada-terminal-hero.svg');
  const outputPath = path.join(rootDir, 'public', 'blog', 'jada-terminal-hero.png');

  const svgBuffer = fs.readFileSync(inputPath);

  await sharp(svgBuffer)
    .png({ compressionLevel: 9, quality: 100 })
    .toFile(outputPath);

  process.stdout.write(`Rendered ${path.relative(rootDir, outputPath)}\n`);
}

main().catch((error) => {
  process.stderr.write(`${error.stack || error}\n`);
  process.exit(1);
});