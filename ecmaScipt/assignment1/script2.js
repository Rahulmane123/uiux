let circle = function(radius) {
    return 3.14 * radius * radius;
}

let square = function(side) {
    return side * side;
}
let rectangle = function(l, w) {
    return l * w;
}

function tringle(b, h) {
    return 1 / 2 * b * h
}


let cir = circle(2);
let squ = square(20);
let rec = rectangle(4, 5);
let tri = tringle(4, 4);




console.log(squ);
console.log(cir);
console.log(rec);
console.log(tri);