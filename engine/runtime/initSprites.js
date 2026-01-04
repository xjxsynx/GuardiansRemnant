import { loadSprite } from "../renderer/spriteLoader.js";

const DIRS = ["north", "south", "east", "west"];

export function initSprites() {
  DIRS.forEach(dir => {
    loadSprite(`idle_${dir}`, `assets/player/idle_${dir}.png`);
    for (let i = 0; i < 4; i++) {
      loadSprite(`walk_${dir}_${i}`, `assets/player/walk_${dir}_${i}.png`);
    }
  });
}
