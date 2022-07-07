const Shape = require("./shape");
// declare class
const Circle = class Circle extends Shape {
  calculateArea() {
    return "updated";
  }
};
// export class using module.exports
module.exports = Circle;
