
export function createGameLoop(update, render){
  let last = 0;
  function frame(t){
    const dt = (t-last)/1000;
    last = t;
    update(dt);
    render();
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}
// --- TEMP DEBUG DRAW ---
const canvas = document.getElementById("game");
const ctx = canvas?.getContext("2d");

let t = 0;
function debugTick() {
  if (!ctx) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#7fd4ff";
  ctx.font = "20px system-ui";
  ctx.fillText("Loop running: " + t++, 20, 80);
  requestAnimationFrame(debugTick);
}

debugTick();
