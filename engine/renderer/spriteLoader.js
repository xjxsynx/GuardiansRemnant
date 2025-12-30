export const SpriteStore = {};

export function loadSprite(key, src) {
  const img = new Image();
  img.src = src;
  SpriteStore[key] = img;
}
