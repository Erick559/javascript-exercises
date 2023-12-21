const add = function(a, b) {
    return a + b
};

const subtract = function(a, b) {
    return a - b
};

const sum = (arr) => arr.reduce((sum, item) =>
    sum += item, 0)

const multiply = function(array) {
    return array.reduce((product, item) => product * item)
};

const power = function(a, b) {
    return a ** b
};

const factorial = function(n) {
    const array = []
    if (n === 0) {
        return 1;
    } else {
        for (let i = 1; i <= n; i++) {
            array.push(i)
        }
        return array.reduce((factorial, item) => factorial * item)
    }
}

console.log(factorial(10))

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
};