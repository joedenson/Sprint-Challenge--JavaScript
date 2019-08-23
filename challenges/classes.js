class NewCuboidMaker {
    constructor(attributes) {
        this.length = attributes.length,
            this.width = attributes.width,
            this.height = attributes.height
    }

    volume() {
        return this.length * this.width * this.height;
    }

    surfaceArea() {
        return this.length * this.width + this.length * this.height + this.width * this.height;
    }

}

class CubeMaker extends NewCuboidMaker {
    constructor(attributes) {
        super(attributes);

    }

}


const newCuboid = new NewCuboidMaker({
    length: 4,
    width: 5,
    height: 5

});



// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(newCuboid.volume()); // 100
console.log(newCuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.