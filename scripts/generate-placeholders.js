// This script creates placeholder images as data URIs for development
// In production, replace these with actual images

const fs = require('fs');
const path = require('path');

// Create SVG placeholders
const createPlaceholder = (width, height, text, filename) => {
  const svg = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="hsl(200, 10%, 90%)"/>
  <rect x="10" y="10" width="${width-20}" height="${height-20}" fill="none" stroke="hsl(200, 10%, 70%)" stroke-width="2" stroke-dasharray="10,5"/>
  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-family="Arial, sans-serif" font-size="16" fill="hsl(200, 10%, 50%)">${text}</text>
</svg>`.trim();

  const base64 = Buffer.from(svg).toString('base64');
  const dataUri = `data:image/svg+xml;base64,${base64}`;

  // Save as a simple HTML file that shows the image for reference
  const html = `<!DOCTYPE html>
<html><head><title>${filename}</title></head>
<body style="margin:0;padding:20px;background:#f0f0f0;">
<h2>${filename}</h2>
<img src="${dataUri}" style="border:1px solid #ccc;" alt="${text}"/>
<p>Dimensions: ${width}x${height}</p>
<p>This is a placeholder. Replace with actual images.</p>
</body></html>`;

  fs.writeFileSync(path.join(__dirname, '..', 'public', `${filename}.html`), html);
  console.log(`Generated placeholder: ${filename}.html`);
};

// Generate placeholders
createPlaceholder(400, 400, 'Profile Image', 'placeholder-profile');
createPlaceholder(600, 400, 'Project Image 1', 'placeholder-project-1');
createPlaceholder(600, 400, 'Project Image 2', 'placeholder-project-2');
createPlaceholder(600, 400, 'Project Image 3', 'placeholder-project-3');
createPlaceholder(600, 400, 'Project Image 4', 'placeholder-project-4');
createPlaceholder(600, 400, 'Project Image 5', 'placeholder-project-5');
createPlaceholder(600, 400, 'Project Image 6', 'placeholder-project-6');

console.log('\nPlaceholder images generated! ');
console.log('These are temporary placeholders. Replace them with actual images for production.');
console.log('\nNote: The actual image files referenced in the code don\'t exist yet.');
console.log('The app will show broken images until you add real image files.');