// STEP 6E — Player Render Layer (Sprite-Style Placeholder)
// Auto-loads Overworld_Start.grmap.json and draws tiles + player placeholder sprite (no movement yet).

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const DPR = window.devicePixelRatio || 1;

const TILE = 32;
let map = null;

const player = {
  gx: 0, gy: 0,
  px: 0, py: 0,
  sprite: new Image()
};
player.sprite.src = "./assets/player_placeholder.png";

function resize(){
  canvas.width = innerWidth * DPR;
  canvas.height = innerHeight * DPR;
  canvas.style.width = innerWidth + "px";
  canvas.style.height = innerHeight + "px";
  ctx.setTransform(DPR,0,0,DPR,0,0);
}
addEventListener("resize", resize);
resize();

async function loadMap(){
  const res = await fetch("./Overworld_Start.grmap.json");
  map = await res.json();

  const keys = Object.keys(map.tiles || {});
  let gx = 0, gy = 0;
  if(keys.length){
    keys.sort((a,b)=>{
      const [ax,ay]=a.split(",").map(Number);
      const [bx,by]=b.split(",").map(Number);
      return (ay-by) || (ax-bx);
    });
    [gx,gy] = keys[0].split(",").map(Number);
  }
  player.gx = gx; player.gy = gy;
  player.px = gx * TILE; player.py = gy * TILE;
}

function tileColor(id){
  if(id === 1) return "#2f8f49";
  if(id === 4) return "#2f6fbf";
  return "#6b6f77";
}

function drawTiles(){
  if(!map) return;
  for(const k in map.tiles){
    const [gx,gy] = k.split(",").map(Number);
    const id = map.tiles[k];
    ctx.fillStyle = tileColor(id);
    ctx.fillRect(gx*TILE, gy*TILE, TILE, TILE);
  }
}

function drawGrid(){
  if(!map) return;
  const w = (map.width || 20) * TILE;
  const h = (map.height || 12) * TILE;
  ctx.strokeStyle = "rgba(127,212,255,.18)";
  for(let x=0;x<=w;x+=TILE){
    ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,h); ctx.stroke();
  }
  for(let y=0;y<=h;y+=TILE){
    ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(w,y); ctx.stroke();
  }
}

function drawPlayer(){
  ctx.drawImage(player.sprite, player.px, player.py, TILE, TILE);
}

function loop(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  if(map){
    const mapW = (map.width || 20) * TILE;
    const mapH = (map.height || 12) * TILE;
    const offsetX = Math.max(0, Math.floor((innerWidth - mapW) / 2));
    const offsetY = Math.max(0, Math.floor((innerHeight - mapH) / 2));
    ctx.save();
    ctx.translate(offsetX, offsetY);
    drawTiles();
    drawPlayer();
    drawGrid();
    ctx.restore();
  }

  requestAnimationFrame(loop);
}

await loadMap();
loop();