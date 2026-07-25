// Genera iconos PWA PNG desde ditri.png (logo circular de Distri Roluba)
// Uso: node scripts/gen-pwa-icons.mjs
import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const LOGO = "public/images/ditri.png";
const OUT = "public/icons";
const BRAND_BG = "#0077B6"; // cerúleo v7 (fondo para maskable/apple-touch)

/** Crea un buffer SVG con máscara circular blanca (para blend dest-in). */
function circleMask(size, radius) {
  const r = radius ?? size / 2;
  const c = size / 2;
  return Buffer.from(
    `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <circle cx="${c}" cy="${c}" r="${r}" fill="white"/>
    </svg>`
  );
}

/**
 * Toma el logo ditri.png, lo redimensiona a un cuadrado (cover) y lo recorta
 * a círculo (radio size/2), eliminando el fondo blanco de las esquinas.
 * Devuelve un buffer PNG con transparencia fuera del círculo.
 */
async function logoAsCircle(size, logoFillRatio = 1) {
  // logoFillRatio: qué fracción del cuadrado ocupa el logo (1 = toca bordes)
  const inner = Math.round(size * logoFillRatio);
  const resized = await sharp(LOGO)
    .resize(inner, inner, { fit: "cover", position: "center" })
    .toBuffer();
  // Recortar a círculo del tamaño del logo redimensionado
  return sharp(resized)
    .composite([{ input: circleMask(inner, inner / 2), blend: "dest-in" }])
    .png()
    .toBuffer();
}

/** Icono "any": fondo transparente + logo circular centrado (flotante, elegante). */
async function makeAnyIcon(size) {
  const logo = await logoAsCircle(size, 1); // el círculo del logo toca los bordes
  await sharp({
    create: { width: size, height: size, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } },
  })
    .composite([{ input: logo, gravity: "center" }])
    .png()
    .toFile(`${OUT}/icon-${size}.png`);
  console.log("✓ icon-" + size + ".png  [any, transparente, logo circular]");
}

/**
 * Icono "maskable": fondo de color de marca + logo circular centrado con
 * padding de zona segura (~20%) para que el SO pueda aplicar squircle/círculo
 * sin cortar el logo.
 */
async function makeMaskableIcon(size) {
  const logoSize = Math.round(size * 0.6); // 60% del canvas → 20% padding por lado
  const logo = await logoAsCircle(logoSize, 1);
  await sharp({
    create: { width: size, height: size, channels: 4, background: BRAND_BG },
  })
    .composite([{ input: logo, gravity: "center" }])
    .png()
    .toFile(`${OUT}/icon-maskable-${size}.png`);
  console.log("✓ icon-maskable-" + size + ".png  [maskable, fondo cerúleo, logo centrado]");
}

/** apple-touch-icon (iOS): fondo de marca opaco + logo circular centrado. */
async function makeAppleTouchIcon() {
  const size = 180;
  const logoSize = Math.round(size * 0.62);
  const logo = await logoAsCircle(logoSize, 1);
  await sharp({
    create: { width: size, height: size, channels: 4, background: BRAND_BG },
  })
    .composite([{ input: logo, gravity: "center" }])
    .png()
    .toFile(`${OUT}/apple-touch-icon.png`);
  console.log("✓ apple-touch-icon.png  [iOS, fondo cerúleo, logo centrado]");
}

/** Favicon: fondo cerúleo + logo circular para visibilidad a 32px. */
async function makeFavicon() {
  const size = 32;
  const logoSize = Math.round(size * 0.7);
  const logo = await logoAsCircle(logoSize, 1);
  await sharp({
    create: { width: size, height: size, channels: 4, background: BRAND_BG },
  })
    .composite([{ input: logo, gravity: "center" }])
    .png()
    .toFile(`${OUT}/favicon-32.png`);
  console.log("✓ favicon-32.png  [32px, fondo cerúleo]");
}

await mkdir(OUT, { recursive: true });

console.log("Generando iconos PWA desde ditri.png (logo circular)...\n");
await makeAnyIcon(192);
await makeAnyIcon(512);
await makeMaskableIcon(192);
await makeMaskableIcon(512);
await makeAppleTouchIcon();
await makeFavicon();

console.log("\nTodos los iconos generados en", OUT);
