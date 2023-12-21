const sumAll = function(firstNumber, secondNumber) {
    if (typeof(firstNumber) !== 'number' || typeof(secondNumber) !== 'number' || firstNumber < 0 || secondNumber < 0) {
        return 'ERROR';
    }

    let sum = 0;
    if (firstNumber < secondNumber) {
        for (let i = firstNumber; i <= secondNumber; i++) {
            sum += i;
        }
        return sum;
    } else if (firstNumber > secondNumber) {
        for (let i = secondNumber; i <= firstNumber; i++) {
            sum += i;
        }
        return sum;
    }
}


// Do not edit below this line
module.exports = sumAll;