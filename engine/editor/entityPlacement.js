// STEP 5B: Entity placement modes

export let placementMode = 'grid';

export function togglePlacementMode() {
  placementMode = placementMode === 'grid' ? 'free' : 'grid';
}

export function snapToGrid(px, py, tileSize) {
  return {
    gridX: Math.floor(px / tileSize),
    gridY: Math.floor(py / tileSize)
  };
}
