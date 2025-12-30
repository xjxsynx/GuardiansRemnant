// engine/core/player.input.patch.js
// STEP 6M — Example hook for wiring InputManager into Player

// Usage (inside runtime loop):
// const input = new InputManager();
// const v = input.update();
// player.move(v.x, v.y);

export function applyInput(player, input) {
  const v = input.update();
  player.move(v.x, v.y);
}
