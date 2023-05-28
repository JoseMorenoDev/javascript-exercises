const repeatString = function(string, num) {
    if (num <0) {
        return "ERROR";
    }
    let count=1;
    let newString="";
    while (count <= num) {
        newString = string + newString;
        count++;
        
    }
    return newString;


};



// Do not edit below this line
module.exports = repeatString;
