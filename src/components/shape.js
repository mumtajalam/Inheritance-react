const Shape = class Shape {
  constructor() {
    this.color = "red";
  }
  drawShape() {
    return this.color;
  }
  calculateArea() {
    return "new";
  }
};
// export class using module.exports
module.exports = Shape;
