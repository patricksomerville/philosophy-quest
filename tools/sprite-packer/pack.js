#!/usr/bin/env node
/**
 * Sprite Packer Pipeline
 * Takes individual PNG sprites and packs them into atlases
 * Generates JSON metadata for animations
 */

import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '../..');

const SPRITES_DIR = path.join(ROOT, 'assets/sprites');
const OUTPUT_DIR = path.join(ROOT, 'build/sprites');

// EGA palette (16 colors)
const EGA_PALETTE = [
  '#000000', '#0000AA', '#00AA00', '#00AAAA',
  '#AA0000', '#AA00AA', '#AA5500', '#AAAAAA',
  '#555555', '#5555FF', '#55FF55', '#55FFFF',
  '#FF5555', '#FF55FF', '#FFFF55', '#FFFFFF'
];

async function findSprites() {
  const sprites = [];
  
  try {
    const categories = await fs.readdir(SPRITES_DIR);
    
    for (const category of categories) {
      const categoryPath = path.join(SPRITES_DIR, category);
      const stat = await fs.stat(categoryPath);
      
      if (stat.isDirectory()) {
        const files = await fs.readdir(categoryPath);
        const pngs = files.filter(f => f.endsWith('.png'));
        
        for (const png of pngs) {
          sprites.push({
            category,
            name: path.basename(png, '.png'),
            path: path.join(categoryPath, png)
          });
        }
      }
    }
  } catch (e) {
    console.log('No sprites directory yet, creating...');
    await fs.mkdir(SPRITES_DIR, { recursive: true });
  }
  
  return sprites;
}

async function processSprite(sprite) {
  console.log(`Processing: ${sprite.category}/${sprite.name}`);
  
  try {
    const image = sharp(sprite.path);
    const metadata = await image.metadata();
    
    // Convert to EGA palette
    // For now, just ensure it's indexed PNG
    const outputPath = path.join(OUTPUT_DIR, sprite.category, `${sprite.name}.png`);
    
    await fs.mkdir(path.dirname(outputPath), { recursive: true });
    
    await image
      .png({ 
        palette: true,
        colors: 16,
        effort: 10
      })
      .toFile(outputPath);
    
    return {
      name: sprite.name,
      category: sprite.category,
      width: metadata.width,
      height: metadata.height,
      path: `sprites/${sprite.category}/${sprite.name}.png`
    };
  } catch (e) {
    console.error(`Failed to process ${sprite.name}:`, e.message);
    return null;
  }
}

async function generateAtlas(sprites) {
  // For now, just generate a JSON manifest
  // Future: pack into actual texture atlas
  const manifest = {
    version: '1.0',
    generated: new Date().toISOString(),
    sprites: sprites.filter(Boolean)
  };
  
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  await fs.writeFile(
    path.join(OUTPUT_DIR, 'sprites.json'),
    JSON.stringify(manifest, null, 2)
  );
  
  console.log(`\n✅ Packed ${manifest.sprites.length} sprites`);
  console.log(`📄 Manifest: build/sprites/sprites.json`);
}

async function main() {
  console.log('🎨 Philosophy Quest - Sprite Packer\n');
  
  const sprites = await findSprites();
  
  if (sprites.length === 0) {
    console.log('No sprites found. Add PNG files to assets/sprites/{category}/');
    console.log('Example: assets/sprites/characters/brock-idle.png');
    return;
  }
  
  console.log(`Found ${sprites.length} sprites\n`);
  
  const processed = await Promise.all(sprites.map(processSprite));
  await generateAtlas(processed);
}

main().catch(console.error);
