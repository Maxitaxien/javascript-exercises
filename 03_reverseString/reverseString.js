const reverseString = function(string) {
    let result = "";
    for (let i = 1; i < string.length + 1; i++) {
        result += string.at(-i);
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
