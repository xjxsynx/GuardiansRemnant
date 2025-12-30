
import { drawSprite } from "../renderer/spriteRenderer.js";

export function renderPlayer(ctx, player, camera) {
  drawSprite(ctx, player.sprite, player.x, player.y, camera);
}
