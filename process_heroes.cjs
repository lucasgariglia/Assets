const sharp = require('sharp');
const path = require('path');

const images = [
  { src: 'ciudad-maderas-MXbM1NrRqtI-unsplash.jpg', name: 'master_hero_ciudad_maderas.webp' },
  { src: 'fernando-alvarez-rodriguez-M7GddPqJowg-unsplash.jpg', name: 'master_hero_fernando_alvarez.webp' },
  { src: 'frames-for-your-heart-zSG-kd-L6vw-unsplash.jpg', name: 'master_hero_frames.webp' },
  { src: 'francesca-saraco-_dS27XGgRyQ-unsplash.jpg', name: 'master_hero_francesca_saraco.webp' }
];

const targetDir = 'public/assets/';

async function processImages() {
  for (const img of images) {
    console.log(`Processing ${img.src}...`);
    try {
      await sharp(img.src)
        .resize({ width: 2560, withoutEnlargement: true }) // High-end hero width
        .webp({ quality: 92, effort: 6 })
        .toFile(path.join(targetDir, img.name));
      console.log(`Saved to ${path.join(targetDir, img.name)}`);
    } catch (err) {
      console.error(`Error processing ${img.src}:`, err);
    }
  }
}

processImages();
