class Circle {

    radius;

    area() { return 3.1415 * this.radius * this.radius; }

    perimeter() { return 2 * 3.1415 * this.radius; }

    constructor(radius) {
        this.radius = radius;
    }
}

const calcAreaPerimeter = () => {
    let radius = +document.getElementById("radius").value;
    let circle = new Circle(radius);
    document.getElementById("area").value = circle.area();
    document.getElementById("perimeter").value = circle.perimeter();
};