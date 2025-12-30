import { PlayerAnimator } from "./playerAnimator.js";
import { renderPlayer } from "../renderer/spriteRenderer.js";

export class Player {
  constructor(x, y) {
    this.position = { x, y };
    this.width = 32;
    this.height = 32;

    this.animator = new PlayerAnimator();
  }

  update() {
    this.animator.update();
  }

  draw(ctx) {
    // 🚫 NO canvas drawing here
    // ✅ ALL rendering delegated to sprite system
    renderPlayer(ctx, this);
  }
}
