class ComputerArcher {
  constructor(x, y, width, height, archerAngle) {
    var options = {
      
      friction: 1.0,
      density: 1.0,
      isStatic: true
    };
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    this.image = loadImage("./assets/computerArcher.png");
    World.add(world, this.body);
    Matter.Body.setAngle(this.body,PI/3);
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
}