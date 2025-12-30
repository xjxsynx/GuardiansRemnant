
export const animationState = {
  current: "idle_south",
  frame: 0,
  timer: 0,
  fps: 8,
  resolve(player) {
    if (player.moving) {
      this.current = `walk_${player.dir}`;
    } else {
      this.current = `idle_${player.dir}`;
      this.frame = 0;
    }
  },
  tick(delta, frameCount) {
    this.timer += delta;
    if (this.timer >= 1000 / this.fps) {
      this.timer = 0;
      this.frame = (this.frame + 1) % frameCount;
    }
  }
};
