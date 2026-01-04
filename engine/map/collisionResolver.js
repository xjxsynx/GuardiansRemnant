export function resolveCollision(entity, collisionGrid) {
  const feetX = entity.position.x;
  const feetY = entity.position.y;

  if (collisionGrid.isSolidAtWorld(feetX, feetY)) {
    entity.position.x -= entity.vx;
  }

  if (collisionGrid.isSolidAtWorld(feetX, feetY)) {
    entity.position.y -= entity.vy;
  }
}
