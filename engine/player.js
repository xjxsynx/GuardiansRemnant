export class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.vx = 0;
    this.vy = 0;

    this.speed = 2;
    this.direction = "south"; // north, south, east, west
    this.state = "idle";      // idle, walk
  }

  update() {
    this.vx = 0;
    this.vy = 0;

    if (window.input?.left) {
      this.vx = -this.speed;
      this.direction = "west";
    }
    if (window.input?.right) {
      this.vx = this.speed;
      this.direction = "east";
    }
    if (window.input?.up) {
      this.vy = -this.speed;
      this.direction = "north";
    }
    if (window.input?.down) {
      this.vy = this.speed;
      this.direction = "south";
    }

    this.state = (this.vx || this.vy) ? "walk" : "idle";

    this.x += this.vx;
    this.y += this.vy;
  }
}
