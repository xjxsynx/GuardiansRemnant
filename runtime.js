// STEP 6C — Runtime Map Injection + Player Spawn

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const TILE = 32;
let map = null;
let player = { x:0, y:0 };

function resize(){
 canvas.width = innerWidth * devicePixelRatio;
 canvas.height = innerHeight * devicePixelRatio;
 ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);
}
addEventListener("resize", resize);
resize();

async function loadMap(){
 const res = await fetch("./Overworld_Start.grmap.json");
 map = await res.json();

 // spawn on first tile
 const keys = Object.keys(map.tiles);
 if(keys.length){
   const [gx,gy] = keys[0].split(",").map(Number);
   player.x = gx * TILE;
   player.y = gy * TILE;
 }
}
await loadMap();

function drawGrid(){
 ctx.strokeStyle = "rgba(120,180,255,.25)";
 for(let x=0;x<canvas.width;x+=TILE){
  ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,canvas.height);ctx.stroke();
 }
 for(let y=0;y<canvas.height;y+=TILE){
  ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(canvas.width,y);ctx.stroke();
 }
}

function drawMap(){
 for(const k in map.tiles){
  const [gx,gy] = k.split(",").map(Number);
  const id = map.tiles[k];
  ctx.fillStyle = id===1?"#3fa94a":id===4?"#3b8dff":"#888";
  ctx.fillRect(gx*TILE, gy*TILE, TILE, TILE);
 }
}

function drawPlayer(){
 ctx.fillStyle = "#9aff6a";
 ctx.fillRect(player.x, player.y, TILE, TILE);
}

function loop(){
 ctx.clearRect(0,0,canvas.width,canvas.height);
 drawMap();
 drawPlayer();
 drawGrid();
 requestAnimationFrame(loop);
}
loop();
