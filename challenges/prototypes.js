/* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/


/* == Step 2: Volume Method ==
  Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
  
  Formula for cuboid volume: length * width * height
*/


/* == Step 3: Surface Area Method ==
  Create another method using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 

  Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
*/


/* == Step 4: Create a new object that uses CuboidMaker ==
  Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
*/

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

//BASECONSTRUCTOR
function CuboidMaker (add) {
  this.length = add.length;
  this.width = add.width;
  this.height = add.height;
};
//METHODS
CuboidMaker.prototype = Object.create(CuboidMaker.prototype)
CuboidMaker.prototype.volume = function() {
  return ( this.length * this.width * this.height);
}

CuboidMaker.prototype = Object.create(CuboidMaker.prototype)
CuboidMaker.prototype.surfaceArea = function() {
  return( 2 * (this.length * this.width + this.length * this.height + this.width * this.height));
}
  
function CuboidMaker2 (math) {
  this.length = math.length;
  this.width = math.width;
  this.height = math.height;
}

CuboidMaker2.prototype = Object.create(CuboidMaker2.prototype)
CuboidMaker2.prototype.volume = function() {
  return ( this.length * this.width * this.height);
}

CuboidMaker2.prototype = Object.create(CuboidMaker2.prototype)
CuboidMaker2.prototype.surfaceArea = function() {
  return( 2 * (this.length * this.width + this.length * this.height + this.width * this.height));
}
      //METHOD
  
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


