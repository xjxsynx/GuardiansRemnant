const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const TILE = 32;
let frame = 0;
let dir = "down";

const colors = {
  down: "#4ade80",
  up: "#60a5fa",
  left: "#facc15",
  right: "#f472b6"
};

function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = colors[dir];
  ctx.fillRect(144,104,32,32);
  frame++;
  if(frame%60===0){
    dir = ["down","left","up","right"][(frame/60)%4|0];
  }
  requestAnimationFrame(draw);
}
draw();
