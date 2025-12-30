
export function drawSprite(ctx, sprite, x, y, camera) {
  if (!sprite || !sprite.image.complete) return;

  const drawX = Math.floor(x - sprite.width / 2 - camera.x);
  const drawY = Math.floor(y - sprite.height - camera.y);

  ctx.drawImage(
    sprite.image,
    drawX,
    drawY,
    sprite.width,
    sprite.height
  );
}
