
export async function fade(ctx, dir="out", dur=400){
  const start = performance.now();
  return new Promise(res=>{
    function step(t){
      const p = Math.min(1,(t-start)/dur);
      ctx.fillStyle = `rgba(0,0,0,${dir==="out"?p:1-p})`;
      ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height);
      if(p<1) requestAnimationFrame(step); else res();
    }
    requestAnimationFrame(step);
  });
}
