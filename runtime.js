
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const TILE = 32;
const MAP = {
  width: 20,
  height: 12,
  solid: new Set(["2,5","3,5","4,5","5,5","6,5","7,5"])
};

const camera = { x:0, y:0 };

const player = {
  x:1, y:5,
  px:1*TILE, py:5*TILE,
  moving:false,
  speed:6
};

function isSolid(x,y){
  return MAP.solid.has(`${x},${y}`);
}

function tryMove(dx,dy){
  if(player.moving) return;
  const nx = player.x + dx;
  const ny = player.y + dy;
  if(nx<0||ny<0||nx>=MAP.width||ny>=MAP.height) return;
  if(isSolid(nx,ny)) return;
  player.x = nx; player.y = ny;
  player.moving = true;
}

window.addEventListener("keydown",e=>{
  if(e.key==="ArrowUp"||e.key==="w") tryMove(0,-1);
  if(e.key==="ArrowDown"||e.key==="s") tryMove(0,1);
  if(e.key==="ArrowLeft"||e.key==="a") tryMove(-1,0);
  if(e.key==="ArrowRight"||e.key==="d") tryMove(1,0);
});

canvas.addEventListener("touchstart",e=>{
  const t = e.touches[0];
  const cx = canvas.width/2;
  const cy = canvas.height/2;
  const dx = t.clientX - cx;
  const dy = t.clientY - cy;
  if(Math.abs(dx)>Math.abs(dy)){
    tryMove(dx>0?1:-1,0);
  }else{
    tryMove(0,dy>0?1:-1);
  }
});

function update(){
  const tx = player.x*TILE;
  const ty = player.y*TILE;
  player.px += (tx-player.px)/player.speed;
  player.py += (ty-player.py)/player.speed;
  if(Math.abs(player.px-tx)<1 && Math.abs(player.py-ty)<1){
    player.px=tx; player.py=ty; player.moving=false;
  }
  camera.x = Math.max(0, player.px - canvas.width/2 + TILE/2);
  camera.y = Math.max(0, player.py - canvas.height/2 + TILE/2);
}

function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.strokeStyle="#123";
  for(let x=0;x<MAP.width;x++){
    for(let y=0;y<MAP.height;y++){
      ctx.strokeRect(x*TILE-camera.x,y*TILE-camera.y,TILE,TILE);
    }
  }
  ctx.fillStyle="#2a7";
  MAP.solid.forEach(p=>{
    const [x,y]=p.split(",").map(Number);
    ctx.fillRect(x*TILE-camera.x,y*TILE-camera.y,TILE,TILE);
  });
  ctx.fillStyle="#4f8";
  ctx.fillRect(player.px-camera.x,player.py-camera.y,TILE,TILE);
}

function loop(){
  update(); draw(); requestAnimationFrame(loop);
}
loop();
