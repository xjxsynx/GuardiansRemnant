
import { player } from "./player.js";
import { animator } from "./playerAnimator.js";

const cache = {};

function load(src) {
  if (cache[src]) return cache[src];
  const img = new Image();
  img.src = src;
  cache[src] = img;
  return img;
}

export function render(ctx) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  const frame = animator.getFrame();
  const img = load(`engine/assets/player/${frame}.png`);

  if (img.complete) {
    ctx.drawImage(img, player.x, player.y, player.size, player.size);
  } else {
    ctx.fillStyle = "#00ff00";
    ctx.fillRect(player.x, player.y, player.size, player.size);
  }
}
