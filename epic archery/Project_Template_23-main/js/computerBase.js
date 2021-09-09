class ComputerBase{
    constructor(x,y,w,h){
        var option={
            isStatic:true
        }
    this.body=Bodies.rectangle(x,y,w,h,option);
    this.width=w;
    this.height=h;
    this.image=loadImage("./assets/base2.png");
    World.add(world,this.body);

    }
  display(){
      var pos=this.body.position;
      var angle=this.body.angle;

      push();
      translate(pos.x,pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0,0,this.width,this.height);
      pop();
  }
}