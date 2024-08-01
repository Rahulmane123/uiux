function circle(radius) {
    return 3.14 * radius * radius;
}


function square(size) {
    return size * size
}

function rectangle(l, w) {
    return l * w
}

function tringle(b, h) {
    return 1 / 2 * b * h
}



let cal = circle(2);
let squ = square(4)
let rec = rectangle(4, 3);
let tri = tringle(6, 6);



console.log(cal);
console.log(squ);
console.log(rec);
console.log(tri);