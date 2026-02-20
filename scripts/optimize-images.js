import sharp from 'sharp';
import { readdir, stat, mkdir } from 'fs/promises';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const INPUT_DIR = join(__dirname, '../public/img');
const OUTPUT_DIR = join(__dirname, '../public/img/optimized');

const SIZES = [
  { width: 320, suffix: '-sm' },
  { width: 640, suffix: '-md' },
  { width: 1024, suffix: '-lg' },
  { width: 1920, suffix: '-xl' }
];

const QUALITY = {
  webp: 85,
  jpeg: 80,
  png: 90
};

async function ensureDir(dir) {
  try {
    await mkdir(dir, { recursive: true });
  } catch (error) {
    if (error.code !== 'EEXIST') throw error;
  }
}

async function getImageFiles(dir) {
  const files = await readdir(dir);
  const imageFiles = [];

  for (const file of files) {
    const filePath = join(dir, file);
    const fileStat = await stat(filePath);

    if (fileStat.isFile()) {
      const ext = extname(file).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
        imageFiles.push(filePath);
      }
    }
  }

  return imageFiles;
}

async function optimizeImage(inputPath, outputDir) {
  const fileName = basename(inputPath, extname(inputPath));
  const ext = extname(inputPath).toLowerCase();
  
  console.log(`Optimizando: ${fileName}${ext}`);

  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    // Optimizar imagen original
    const originalOutput = join(outputDir, `${fileName}.webp`);
    await image
      .webp({ quality: QUALITY.webp, effort: 6 })
      .toFile(originalOutput);

    console.log(`  ✓ Original optimizado: ${fileName}.webp`);

    // Generar versiones responsivas solo si la imagen es grande
    if (metadata.width > 640) {
      for (const size of SIZES) {
        if (size.width < metadata.width) {
          const resizedOutput = join(outputDir, `${fileName}${size.suffix}.webp`);
          
          await sharp(inputPath)
            .resize(size.width, null, {
              withoutEnlargement: true,
              fit: 'inside'
            })
            .webp({ quality: QUALITY.webp, effort: 6 })
            .toFile(resizedOutput);

          console.log(`  ✓ Generado: ${fileName}${size.suffix}.webp (${size.width}px)`);
        }
      }
    }

    // Estadísticas de compresión
    const originalStats = await stat(inputPath);
    const optimizedStats = await stat(originalOutput);
    const savings = ((1 - optimizedStats.size / originalStats.size) * 100).toFixed(2);
    
    console.log(`  💾 Ahorro: ${savings}% (${(originalStats.size / 1024).toFixed(2)}KB → ${(optimizedStats.size / 1024).toFixed(2)}KB)\n`);

  } catch (error) {
    console.error(`  ✗ Error optimizando ${fileName}: ${error.message}\n`);
  }
}

async function main() {
  console.log('🚀 Iniciando optimización de imágenes...\n');

  await ensureDir(OUTPUT_DIR);

  const imageFiles = await getImageFiles(INPUT_DIR);
  
  console.log(`📁 Encontradas ${imageFiles.length} imágenes para optimizar\n`);

  let processed = 0;
  for (const imagePath of imageFiles) {
    await optimizeImage(imagePath, OUTPUT_DIR);
    processed++;
  }

  console.log(`\n✅ Proceso completado: ${processed} imágenes optimizadas`);
  console.log(`📂 Imágenes optimizadas guardadas en: ${OUTPUT_DIR}`);
}

main().catch(console.error);
