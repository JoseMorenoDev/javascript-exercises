const reverseString = function(string) {
    let reverse = "";
    for (let index = 0; index < string.length; index++) {
        reverse = string[index] + reverse;
        
    }
    
    return reverse;

};

// Do not edit below this line
module.exports = reverseString;
