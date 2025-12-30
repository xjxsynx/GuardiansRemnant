// STEP 6I – Live Player Sprite + Directional Walk Animation
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const tileSize = 32;
let player = {
  x: 5, y: 4,
  dir: "down",
  frame: 0,
  tick: 0
};

const keys = {};
window.addEventListener("keydown", e => keys[e.key] = true);
window.addEventListener("keyup", e => keys[e.key] = false);

function update() {
  let moving = false;
  if (keys["ArrowUp"]) { player.y--; player.dir="up"; moving=true; }
  if (keys["ArrowDown"]) { player.y++; player.dir="down"; moving=true; }
  if (keys["ArrowLeft"]) { player.x--; player.dir="left"; moving=true; }
  if (keys["ArrowRight"]) { player.x++; player.dir="right"; moving=true; }

  if (moving) {
    player.tick++;
    if (player.tick % 10 === 0) player.frame = (player.frame+1)%4;
  } else {
    player.frame = 0;
  }
}

function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle="#2ecc71";
  ctx.fillRect(player.x*tileSize, player.y*tileSize, tileSize, tileSize);
}

function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}
loop();
