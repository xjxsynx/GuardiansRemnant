// engine/input/input.js
// STEP 6M — Unified Input Binding
// Routes keyboard + touch input into player movement vectors

export class InputManager {
  constructor() {
    this.keys = {};
    this.vector = { x: 0, y: 0 };

    window.addEventListener('keydown', e => this.keys[e.key] = true);
    window.addEventListener('keyup', e => this.keys[e.key] = false);

    // basic touch (tap to move prototype)
    window.addEventListener('touchstart', e => {
      const t = e.touches[0];
      this._lastTouch = { x: t.clientX, y: t.clientY };
    });
    window.addEventListener('touchmove', e => {
      const t = e.touches[0];
      if (!this._lastTouch) return;
      const dx = t.clientX - this._lastTouch.x;
      const dy = t.clientY - this._lastTouch.y;
      this.vector.x = Math.sign(dx);
      this.vector.y = Math.sign(dy);
    });
    window.addEventListener('touchend', () => {
      this.vector.x = 0;
      this.vector.y = 0;
      this._lastTouch = null;
    });
  }

  update() {
    let x = 0, y = 0;
    if (this.keys['ArrowLeft'] || this.keys['a']) x -= 1;
    if (this.keys['ArrowRight'] || this.keys['d']) x += 1;
    if (this.keys['ArrowUp'] || this.keys['w']) y -= 1;
    if (this.keys['ArrowDown'] || this.keys['s']) y += 1;
    this.vector.x = x;
    this.vector.y = y;
    return this.vector;
  }
}
