const convertToCelsius = function(temp) {
    //To convert Fahrenheit to Celsius, 32 is subtracted from the temperature then divided by 1.8;
    let cTemp = (temp - 32) / 1.8;
    return +cTemp.toFixed(1);
};

const convertToFahrenheit = function(temp) {
    //To convert Celsius to Fahrenheit, the temperature is multiplied by 1.8 then 32 is added to it;\
    let fTemp = temp * 1.8 + 32;
    return +fTemp.toFixed(1);
};

// Do not edit below this line
module.exports = {
    convertToCelsius,
    convertToFahrenheit
};