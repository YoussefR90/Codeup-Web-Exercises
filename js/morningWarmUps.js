// TODO: Create a function named countSpaces that accepts a string and returns the total number of spaces in the string.
function countSpaces(str) {
    var spaces = 0;

    if (typeof str !== 'string') {
        return false;
    }
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            spaces++;
        }
    }
    return spaces;
}
var result = countSpaces('how are you today?');
console.log(result);
// TODO: Add validation to function above, if the argument pass is not a string it should return false.