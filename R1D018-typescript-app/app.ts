function sum(a, b) {
    return a + b;
};

const sum2 = (a, b) => {
    // arrow fct will be compiled to ES5 (like Babel)
    return a + b;
};

const sum3 = (a: number, b: number) => {
    return a + b
}

console.log(sum3(7, 7));
