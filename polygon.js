class Polygon {
  constructor(x, y, height, width) {
    this.body = Bodies.rectangle(x, y, height, width);
    this.height = height;
    this.width = width;
    World.add(world, this.body);
  }
  display() {
    imageMode(CENTER);
    image(polygon_img, this.body.position.x, this.body.position.y, this.width, this.height);
  }
}
