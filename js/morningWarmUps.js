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
// TODO: Create a function named capitalizeAllNames that accepts an array of strings and returns the array with all of its elements capitalized.
// Example:  capitalizeAllNames(["bob","Seth","TOFU","Toyota"]) ---- returns ----> ["BOB","SETH","TOFU","TOYOTA"]
// TODO: Create a function named capitalizeFirstLetter that accepts an array of strings and returns the array with all of the first letters in
//  each string being capitalized while having the rest of the string lowercase look at the example below for reference.
// Example:  capitalizeFirstLetter(["bob","Seth","TOFU","Toyota"]) ---- returns ----> ["Bob","Seth","Tofu","Toyota"]
function capitalizeAllNames(stringsArray) {
    var allCapsArray = [];

    stringsArray.forEach(function(string) {
        allCapsArray.push(string.toUpperCase());
    });

    return allCapsArray;
}

console.log('ALL CAPS');
console.log(capitalizeAllNames(["bob","Seth","TOFU","Toyota"]));

function capitalizeFirstLetter(stringsArray) {
    var capitalizedArray = [];

    stringsArray.forEach(function(string) {
        var capitalized = string[0].toUpperCase() + string.slice(1).toLowerCase();
        capitalizedArray.push(capitalized);
    });

    return capitalizedArray;
}

console.log('Capitalized');
console.log(capitalizeFirstLetter(["bob","Seth","TOFU","Toyota"]));