
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
