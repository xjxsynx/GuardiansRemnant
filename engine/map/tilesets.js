// engine/map/tilesets.js
// Minimal tileset registry so the engine boots on mobile + Netlify.
// You can add more tilesets as you drop in art.

export const Tilesets = {
  overworld: {
    tileSize: 32,
    // Update these paths to match your repo under assets/
    image: "./engine/assets/tiles/grassland.png"
  },

  dungeon: {
    tileSize: 32,
    image: "./engine/assets/tiles/dungeon_stone.png",
  },

  water: {
    tileSize: 32,
    image: "./engine/assets/tiles/water_animated.png",
    animated: true,
    frames: 4,
    speed: 20,
  },
};
