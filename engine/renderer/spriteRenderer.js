export function drawSprite(ctx, sprite, x, y, w, h) {
  if (!sprite || !sprite.complete) return;
  ctx.drawImage(sprite, x, y, w, h);
}