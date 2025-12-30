import { SpriteStore } from "./spriteLoader.js";

export function renderPlayer(ctx, player) {
  const { x, y } = player.position;
  const { direction, state, frame } = player.animator;

  const key = state === "idle"
    ? `idle_${direction}`
    : `walk_${direction}_${frame}`;

  const sprite = SpriteStore[key];
  if (!sprite) return;

  ctx.drawImage(sprite, x, y);
}
