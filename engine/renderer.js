let sprites = {};
let frame = 0;
let lastTime = 0;

export function initSprites() {
  const base = "/assets/player/";

  sprites = {
    idle: {
      north: load(`${base}idle_north.png`),
      south: load(`${base}idle_south.png`),
      east:  load(`${base}idle_east.png`),
      west:  load(`${base}idle_west.png`)
    },
    walk: {
      north: [
        load(`${base}walk_north_0.png`),
        load(`${base}walk_north_1.png`),
        load(`${base}walk_north_2.png`),
        load(`${base}walk_north_3.png`)
      ],
      south: [
        load(`${base}walk_south_0.png`),
        load(`${base}walk_south_1.png`),
        load(`${base}walk_south_2.png`),
        load(`${base}walk_south_3.png`)
      ],
      east: [
        load(`${base}walk_east_0.png`),
        load(`${base}walk_east_1.png`),
        load(`${base}walk_east_2.png`),
        load(`${base}walk_east_3.png`)
      ],
      west: [
        load(`${base}walk_west_0.png`),
        load(`${base}walk_west_1.png`),
        load(`${base}walk_west_2.png`),
        load(`${base}walk_west_3.png`)
      ]
    }
  };
}

function load(src) {
  const img = new Image();
  img.src = src;
  return img;
}

export function renderPlayer(ctx, player) {
  const now = performance.now();
  if (now - lastTime > 120) {
    frame = (frame + 1) % 4;
    lastTime = now;
  }

  let img;

  if (player.state === "walk") {
    img = sprites.walk[player.direction][frame];
  } else {
    img = sprites.idle[player.direction];
  }

  if (!img) return;

  const w = img.width;
  const h = img.height;

  // ✅ bottom-aligned rendering
  ctx.drawImage(
    img,
    Math.floor(player.x - w / 2),
    Math.floor(player.y - h)
  );
}
