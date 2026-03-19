const { createCanvas } = require("canvas");
const fs = require("fs");
const path = require("path");

const WIDTH = 1920;
const HEIGHT = 1080;
const TOTAL_FRAMES = 120;

const OUTPUT_DIR = path.join(__dirname, "../public/sequence");

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Easing function for smooth animations
const easeInOutCubic = (t) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

console.log("Generating 120 frames...");

for (let i = 1; i <= TOTAL_FRAMES; i++) {
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext("2d");

  // Normalized progress 0 to 1
  let progress = (i - 1) / (TOTAL_FRAMES - 1);
  
  // Animation logic matching scroll sections
  // 0.0 - 0.15: Idle Hero (progress: 0)
  // 0.15 - 0.40: Explosion / separating (progress: 0 -> 1 of separate phase)
  // 0.40 - 0.65: Exploded / floating (progress: 1)
  // 0.65 - 0.85: Reassembly (progress: 1 -> 0)
  // 0.85 - 1.00: Reassembled Hero (progress: 0)

  let separationFactor = 0;
  
  if (progress > 0.15 && progress <= 0.4) {
    let p = (progress - 0.15) / 0.25;
    separationFactor = easeInOutCubic(p);
  } else if (progress > 0.4 && progress <= 0.65) {
    separationFactor = 1;
  } else if (progress > 0.65 && progress <= 0.85) {
    let p = (progress - 0.65) / 0.2;
    separationFactor = 1 - easeInOutCubic(p);
  }

  // Draw Background (matches CSS --background-primary #050505)
  ctx.fillStyle = "#050505";
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // Background radial gradient for subtle depth
  const grad = ctx.createRadialGradient(WIDTH / 2, HEIGHT / 2, 0, WIDTH / 2, HEIGHT / 2, 600);
  grad.addColorStop(0, "rgba(45, 106, 79, 0.1)"); // brand green subtle
  grad.addColorStop(1, "rgba(5, 5, 5, 0)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  ctx.translate(WIDTH / 2, HEIGHT / 2);

  // We will draw a few geometric layers to represent packaging (lid, cup/body, base)
  
  const drawLayer = (yOffset, width, height, fillStyle, strokeStyle) => {
    ctx.save();
    ctx.translate(0, yOffset);
    ctx.beginPath();
    // Simple isometric-ish shape
    ctx.moveTo(-width / 2, -height / 2);
    ctx.lineTo(width / 2, -height / 2);
    ctx.lineTo(width / 2, height / 2);
    ctx.lineTo(-width / 2, height / 2);
    ctx.closePath();
    ctx.fillStyle = fillStyle;
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = strokeStyle;
    ctx.stroke();
    ctx.restore();
  };

  // Base Y positions
  const lidY = -80;
  const bodyY = 0;
  const baseY = 80;
  const innerWrapY = -20;

  // Maximum explosion distances
  const maxExpLid = -350;
  const maxExpBase = 350;
  const maxExpWrap = -150;

  // Current Y positions based on separationFactor
  const currentLidY = lidY + maxExpLid * separationFactor;
  const currentInnerY = innerWrapY + maxExpWrap * separationFactor;
  const currentBaseY = baseY + maxExpBase * separationFactor;
  const currentBodyY = bodyY; // body stays relatively centered

  // To simulate 3D rotation slightly, we can just apply a mild scale/skew
  ctx.scale(1.2, 0.6);
  ctx.rotate((Math.PI / 180) * 45);

  // Draw from bottom to top
  // Base Layer (Kraft)
  drawLayer(currentBaseY, 160, 160, "rgba(217, 198, 165, 0.9)", "rgba(255,255,255,0.4)"); 
  
  // Body Layer (Eco Green / dark)
  drawLayer(currentBodyY, 150, 150, "rgba(45, 106, 79, 0.9)", "rgba(255,255,255,0.3)");
  
  // Inner layer / wrap (White / fiber)
  // Only clearly visible when exploded
  ctx.globalAlpha = 0.5 + 0.5 * separationFactor;
  drawLayer(currentInnerY, 130, 130, "rgba(255, 255, 255, 0.8)", "rgba(255,255,255,0.6)");
  ctx.globalAlpha = 1.0;
  
  // Lid Layer (Kraft or Green)
  drawLayer(currentLidY, 165, 165, "rgba(82, 183, 136, 0.9)", "rgba(255,255,255,0.5)");

  // Add some connection lines when exploded to look like a technical diagram
  if (separationFactor > 0.05) {
    ctx.beginPath();
    ctx.moveTo(0, currentLidY);
    ctx.lineTo(0, currentBaseY);
    ctx.strokeStyle = "rgba(255,255,255, 0.2)";
    ctx.setLineDash([5, 5]);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  // Save frame
  const frameStr = i.toString().padStart(4, "0");
  const buffer = canvas.toBuffer("image/jpeg", { quality: 0.8 });
  fs.writeFileSync(path.join(OUTPUT_DIR, `${frameStr}.jpg`), buffer);
}

console.log("Generated 120 frames in public/sequence/");
