export class CollisionGrid {
  constructor(width, height, tileSize) {
    this.width = width;
    this.height = height;
    this.tileSize = tileSize;

    // 0 = walkable, 1 = solid
    this.grid = new Array(height)
      .fill(0)
      .map(() => new Array(width).fill(0));
  }

  setSolid(x, y, solid = true) {
    if (this.inBounds(x, y)) {
      this.grid[y][x] = solid ? 1 : 0;
    }
  }

  isSolidAtWorld(x, y) {
    const tx = Math.floor(x / this.tileSize);
    const ty = Math.floor(y / this.tileSize);

    if (!this.inBounds(tx, ty)) return true;
    return this.grid[ty][tx] === 1;
  }

  inBounds(x, y) {
    return x >= 0 && y >= 0 && x < this.width && y < this.height;
  }
}
