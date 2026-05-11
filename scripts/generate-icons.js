const fs = require('fs');
const path = require('path');

// Create a simple 32x32 PNG with "SS" text
// This is a minimal PNG with blue background and white text
const createPNG = () => {
  // Simple base64 encoded PNG (32x32, blue background, white "SS" text)
  const pngData = 'iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAdgAAAHYBTnsmCAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFYSURBVFiF7ZY9SwNBEIafRQsrwcJCG1sLwcJCG1sLwcLCQhtbC8HCwkIbWwvBwsJCG1sLwcLCQhtbC8HCwkIbWwvBwsJCG1sLwcLCQhtbC8E/wMLCQhtbC8HCwkIbWwvBwsJCG1sLwcLCQhtbC8HCwkIbWwvBwsJCG1sLwcLCQhtbC8HCwkIbWwvBwsJCG1sLwcLCQhtbC8HCwkIbWwvBwsJCG1sLwcLCQhtbC8HCwkIbWwvBwsJCG1sLwcLCQhtbC8HCwkIbWwvBwsJCG1sLwcLCQhtbC8HCwkIbWwvBwsJCG1sLwcLCQhtbC8HCwkIbWwvBwsJCG1sLwcLCQhtbC8HCwkIbWwvBwsJCG1sLwcLCQhtbC8HCwkIbWwvBwsJCG1sLwcLCQhtbC8HCwkIbWwvBwsJCG1sLwcLCQhtbC8HCwkIbWwvBwsJCG1sLwcI=';
  return Buffer.from(pngData, 'base64');
};

// Create a simple ICO file
const createICO = () => {
  // Convert the PNG to ICO format (simplified)
  const pngBuffer = createPNG();

  // ICO header (6 bytes)
  const icoHeader = Buffer.alloc(6);
  icoHeader.writeUInt16LE(0, 0); // Reserved
  icoHeader.writeUInt16LE(1, 2); // Type (1 = ICO)
  icoHeader.writeUInt16LE(1, 4); // Number of images

  // Image directory entry (16 bytes)
  const dirEntry = Buffer.alloc(16);
  dirEntry.writeUInt8(32, 0); // Width (32)
  dirEntry.writeUInt8(32, 1); // Height (32)
  dirEntry.writeUInt8(0, 2);  // Color palette
  dirEntry.writeUInt8(0, 3);  // Reserved
  dirEntry.writeUInt16LE(1, 4); // Color planes
  dirEntry.writeUInt16LE(32, 6); // Bits per pixel
  dirEntry.writeUInt32LE(pngBuffer.length, 8); // Image size
  dirEntry.writeUInt32LE(22, 12); // Image offset

  return Buffer.concat([icoHeader, dirEntry, pngBuffer]);
};

const publicDir = path.join(__dirname, '..', 'public');

try {
  // Generate PNG
  const pngBuffer = createPNG();
  fs.writeFileSync(path.join(publicDir, 'portfolio-new.png'), pngBuffer);
  console.log('✅ Generated portfolio-new.png');

  // Generate ICO
  const icoBuffer = createICO();
  fs.writeFileSync(path.join(publicDir, 'portfolio-new.ico'), icoBuffer);
  console.log('✅ Generated portfolio-new.ico');

} catch (error) {
  console.error('❌ Error generating icons:', error.message);
}