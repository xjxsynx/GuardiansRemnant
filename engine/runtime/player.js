export class Player{
  constructor(x,y){
    this.x=x;this.y=y;this.speed=2;
    this.keys={};
    window.addEventListener("keydown",e=>this.keys[e.key]=true);
    window.addEventListener("keyup",e=>this.keys[e.key]=false);
  }
  update(){
    if(this.keys["ArrowUp"])this.y-=this.speed;
    if(this.keys["ArrowDown"])this.y+=this.speed;
    if(this.keys["ArrowLeft"])this.x-=this.speed;
    if(this.keys["ArrowRight"])this.x+=this.speed;
  }
  draw(ctx){
    ctx.fillStyle="#2cff88";
    ctx.fillRect(this.x-16,this.y-16,32,32);
  }
}
