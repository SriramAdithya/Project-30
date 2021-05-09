class Block {
  constructor(x, y, width, height) {
    this.body = Bodies.rectangle(x, y, width, height);
    this.width = width;
    this.height = height;
    this.visibility = 255;
    this.image = loadImage('block.png');
    World.add(world, this.body);
  }
  display() {
    if (this.body.speed <= 3) {
      var angle = this.body.angle;
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    } else {
      push();
      this.visibility -= 5;
      tint(255, this.visibility);
      image(this.image, this.body.position.x, this.body.position.y, 50, 50);
      World.remove(world, this.body);
      pop();
    }
  }
}
