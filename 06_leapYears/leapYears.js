const leapYears = function(yr) {
    if (yr % 100 === 0 && yr % 400 !== 0) {
        return false;
    }
    else return yr % 4 === 0 || yr % 100 === 0;
};

// Do not edit below this line
module.exports = leapYears;
