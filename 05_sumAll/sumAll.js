const sumAll = function(a, b) {
    if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
        return "ERROR";
    }
    let result = 0;
    const start = Math.min(a, b);
    const end = Math.max(a, b);
    for (let i = start; i < end + 1; i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
