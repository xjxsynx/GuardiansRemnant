export class PlayerAnimator {
  constructor(frames) {
    this.frames = frames;
    this.current = "idle_south";
    this.frame = 0;
    this.image = null;
  }

  update(state, frameIndex, imageCache) {
    this.current = state;
    this.frame = frameIndex;
    const key = `${state}_${frameIndex}`;
    this.image = imageCache[key] || null;
  }

  getCurrentFrame() {
    return this.image;
  }
}