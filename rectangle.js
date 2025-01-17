
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}
const rectangle = new Rectangle(13, 17);
console.log(`The area of the rectangle is: ${rectangle.area()}`);
