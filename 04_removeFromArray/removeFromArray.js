const removeFromArray = function(arr, ...args) {
    const result = [];
    for (const elem of arr) {
        if (args.indexOf(elem) === -1) {
            result.push(elem);
        }
    }
    return result;
};

// Alternative:
const removeFromArray2 = function(arr, ...args) {
    return arr.filter(elem => !args.includes(elem));
}

// Do not edit below this line
module.exports = removeFromArray;
