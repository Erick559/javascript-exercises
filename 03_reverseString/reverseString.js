const reverseString = function(string) {
    if (string === '') return string;
    let reversedString = string.split('').reverse().join('');
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;