
import { animationState } from "../core/animationState.js";
import { renderPlayer } from "../renderer/spriteRenderer.js";
import { player } from "../player.js";

let last = performance.now();
export function loop(ctx) {
  const now = performance.now();
  const delta = now - last;
  last = now;

  animationState.resolve(player);
  animationState.tick(delta, player.frameCount || 4);

  ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
  renderPlayer(ctx);
  requestAnimationFrame(() => loop(ctx));
}
