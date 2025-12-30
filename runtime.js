const canvas=document.getElementById("game");
const ctx=canvas.getContext("2d");
const TILE=32;
const player={x:3,y:3,direction:"south"};
const keys={};
window.addEventListener("keydown",e=>keys[e.key]=true);
window.addEventListener("keyup",e=>keys[e.key]=false);
const SPRITE_COLORS={south:"#4cff7a",north:"#4cc9ff",west:"#ffcf4c",east:"#ff7a4c"};
function update(){
 if(keys["ArrowUp"]){player.y-=0.05;player.direction="north";}
 if(keys["ArrowDown"]){player.y+=0.05;player.direction="south";}
 if(keys["ArrowLeft"]){player.x-=0.05;player.direction="west";}
 if(keys["ArrowRight"]){player.x+=0.05;player.direction="east";}
}
function drawGrid(){
 ctx.strokeStyle="rgba(120,180,220,0.15)";
 for(let x=0;x<canvas.width;x+=TILE){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,canvas.height);ctx.stroke();}
 for(let y=0;y<canvas.height;y+=TILE){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(canvas.width,y);ctx.stroke();}
}
function drawPlayer(){
 ctx.fillStyle=SPRITE_COLORS[player.direction];
 ctx.fillRect(Math.floor(player.x)*TILE,Math.floor(player.y)*TILE,TILE,TILE);
}
function loop(){
 update();
 ctx.clearRect(0,0,canvas.width,canvas.height);
 drawGrid();
 drawPlayer();
 requestAnimationFrame(loop);
}
loop();
