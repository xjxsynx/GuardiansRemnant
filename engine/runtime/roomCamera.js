export class Camera{
  constructor(roomW,roomH){
    this.roomW=roomW;this.roomH=roomH;
    this.x=0;this.y=0;
  }
  follow(target){
    this.x=target.x-innerWidth/2;
    this.y=target.y-innerHeight/2;
    this.x=Math.max(0,Math.min(this.x,this.roomW-innerWidth));
    this.y=Math.max(0,Math.min(this.y,this.roomH-innerHeight));
  }
}
