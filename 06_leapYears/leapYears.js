const leapYears = function(year) {
    //The first condition to determine whether it's a leap year is that it's
    //supposed to be divisible by 4;
    // The other condition is that it has to be divisible by both 100 and 400;
    // The contradiction is that the year is not supposed to be divisible by 100 only;

    if (year % 4 == 0 && year % 100 !== 0) {
        return true;
    } else if (year % 400 == 0 && year % 100 == 0) {
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;