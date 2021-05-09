class Slingshot {
  constructor(bodyA, pointB) {
    const options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 0.1,
      length: 5,
    };
    this.pointB = pointB;
    this.sling = Constraint.create(options);
    World.add(world, this.sling);
  }
  fly() {
    this.sling.bodyA = null;
  }
  display() {
    if (this.sling.bodyA) {
      const pointA = this.sling.bodyA.position;
      const pointB = this.pointB;
      line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
  }
}
