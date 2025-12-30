
import { animationState } from "../core/animationState.js";
import { player } from "../player.js";

const cache = {};
function load(src) {
  if (cache[src]) return cache[src];
  const img = new Image();
  img.src = src;
  cache[src] = img;
  return img;
}

export function renderPlayer(ctx) {
  const base = animationState.current;
  const frame = animationState.frame;
  const path = base.startsWith("idle")
    ? `engine/assets/player/${base}.png`
    : `engine/assets/player/${base}_${frame}.png`;

  const img = load(path);
  if (img.complete) {
    ctx.drawImage(img, player.x, player.y, player.size, player.size);
  } else {
    ctx.fillStyle = "#00ff00";
    ctx.fillRect(player.x, player.y, player.size, player.size);
  }
}
