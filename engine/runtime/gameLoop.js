import { renderPlayer } from "../renderer/renderer.js";

export function gameLoop(ctx, player) {
  ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
  renderPlayer(ctx, player);
  requestAnimationFrame(() => gameLoop(ctx, player));
}