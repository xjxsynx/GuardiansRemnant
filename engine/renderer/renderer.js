import { drawSprite } from "./spriteRenderer.js";

export function renderPlayer(ctx, player) {
  const img = player.animator.getCurrentFrame();
  drawSprite(ctx, img, player.x, player.y, player.size, player.size);
}