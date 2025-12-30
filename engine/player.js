export const Player = {
  x: 0,
  y: 0,
  size: 32,
  dir: "down",
  speed: 2,
  update(input) {
    if (input.left) { this.x -= this.speed; this.dir = "left"; }
    if (input.right) { this.x += this.speed; this.dir = "right"; }
    if (input.up) { this.y -= this.speed; this.dir = "up"; }
    if (input.down) { this.y += this.speed; this.dir = "down"; }
  }
};