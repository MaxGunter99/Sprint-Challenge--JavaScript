// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

//BASECONSTRUCTOR
class CuboidMaker {
    constructor(add) {
      this.length = add.length;
      this.width = add.width;
      this.height = add.height;
    }
    //METHODS
    volume() {
      return ( this.length * this.width * this.height);
    }
      surfaceArea() {
      return( 2 * (this.length * this.width + this.length * this.height + this.width * this.height));
    }
  }
  
  class CuboidMaker2 extends CuboidMaker{
    constructor(math) {
      super(math)
    }
      //METHODS
    volume() {
      return ( this.length * this.width * this.height);
    }
      surfaceArea() {
      return( 2 * (this.length * this.width + this.length * this.height + this.width * this.height));
    }
  }
  
  //CUBOID OBJECT
  const cuboid = new CuboidMaker ({
    length: 4,
    width: 5,
    height: 5
  });
  
  const cuboid2 = new CuboidMaker2 ({
    length: 4,
    width: 5,
    height: 5
  });
  
  console.log("The Volume of this Cuboid is:");
  console.log(cuboid.volume());
  console.log("The Suface Area of this Cuboid is:")
  console.log(cuboid.surfaceArea());
  console.log("The Volume of this Cuboid 2 is:");
  console.log(cuboid2.volume());
  console.log("The Suface Area of this Cuboid 2 is:")
  console.log(cuboid2.surfaceArea());