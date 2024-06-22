function add(a, b) {
    return a + b;
}

var add1 = function (a, b) {
    return a + b;
}
var add2 = (a, b) => a + b;

function print(a) {
    console.log("Result: " + a);
}

function callStart(a, b, callback) {
    let sum = add1(a, b);
    callback(sum);
}

function ff() {
    callStart(5, 9, print);
}
ff();

module.exports = {
    ff
}