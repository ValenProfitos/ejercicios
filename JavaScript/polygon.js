// For this excercise I first thougth about making a function that given the poligon first check whether if the polygon is a triangle, square or rectangle and then based on what polygon is give me the area.
//The polygon should be a object that has a type: 'rectangle' lenght and width, 'triangle' base and height or 'square' a side.

function polygonArea(polygon){
    let area;

    if (polygon.type === 'triangle') {
        // The area of a triangle: 0.5 * base * height
        area = 0.5 * polygon.base * polygon.height;
    } else if (polygon.type === 'square') {
        // For a square: area = side * side
        area = polygon.side * polygon.side;
    } else if (polygon.type === 'rectangle') {
        // For rectangle: area = length * width
        area = polygon.length * polygon.width;
    } else {
        console.log('Unsupported polygon type');
        return;
    }

    console.log(`The area of ${polygon.type} is: ${area}`);
    return area;
}

const triangle = { type: 'triangle', base: 5, height: 8 }
const square = { type: 'square', side: 4 };
const rectangle = { type: 'rectangle', length: 6, width: 10 };

polygonArea(triangle);
polygonArea(square);
polygonArea(rectangle);