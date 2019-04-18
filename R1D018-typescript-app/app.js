function sum(a, b) {
    return a + b;
}
;
var sum2 = function (a, b) {
    // arrow fct will be compiled to ES5 (like Babel)
    return a + b;
};
var sum3 = function (a, b) {
    return a + b;
};
console.log(sum3(7, 7));
