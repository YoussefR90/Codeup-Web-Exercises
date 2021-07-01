// TODO: Create a function named countSpaces that accepts a string and returns the total number of spaces in the string.
function countSpaces(str) {
    let spaces = 0;
    if (typeof str !== "string"){
        return false;
    }
    for (let s = 0; s < str.length; s++) {
        if (str[s] === "" ) {
            spaces ++;
        }
    }
    return spaces;
}
let result = countSpaces("how are you doing today?");
console.log(result);
// TODO: Add validation to function above, if the argument pass is not a string it should return false.