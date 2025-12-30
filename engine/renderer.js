export function drawPlayer(ctx, player, sprite) {
  ctx.drawImage(sprite, player.x, player.y, player.size, player.size);
}