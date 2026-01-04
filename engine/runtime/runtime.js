import { CollisionGrid } from "../map/collisionGrid.js";
import { resolveCollision } from "../map/collisionResolver.js";


import { Player } from "./player.js";
import { Camera } from "./roomCamera.js";
import { initSprites } from "./initSprites.js";

export function startRuntime() {
  const canvas = document.getElementById("game");
  const ctx = canvas.getContext("2d");
  const DPR = window.devicePixelRatio || 1;

  function resize() {
    canvas.width = innerWidth * DPR;
    canvas.height = innerHeight * DPR;
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  }

  window.addEventListener("resize", resize);
  resize();

  // ✅ load sprites ONCE
  initSprites();

  const player = new Player(160, 160);
  const camera = new Camera(320, 240);

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    player.update();
    camera.follow(player);

    ctx.save();
    ctx.translate(-camera.x, -camera.y);
    player.draw(ctx);
    ctx.restore();

    requestAnimationFrame(loop);
  }

  loop();
}
