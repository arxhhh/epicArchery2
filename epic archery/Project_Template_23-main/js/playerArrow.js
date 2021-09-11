class PlayerArrow {
    constructor(x, y, width, height, archerAngle) {
      var options = {
        density: 1.0,
        isStatic: true
      };
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      this.archerAngle=archerAngle;
      this.velocity=0;
      this.image = loadImage("./assets/arrow.png");
      World.add(world, this.body);
    }
  
   display() {
      var pos = this.body.position;
      var angle = this.body.angle;
      
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }

    shoot(archerAngle){
      this.velocity=p5.Vector.fromAngle(archerAngle);
      velocity.mult(10);
      Matter.Body.setStatic(this.body,false);
      Matter.Body.setVelocity(this.body,{x:this.velocity.x,y:this.velocity.y})
    }
  }