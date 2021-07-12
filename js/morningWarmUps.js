// // TODO: Create a function named countSpaces that accepts a string and returns the total number of spaces in the string.
// function countSpaces(str) {
//     var spaces = 0;
//
//     if (typeof str !== 'string') {
//         return false;
//     }
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === " ") {
//             spaces++;
//         }
//     }
//     return spaces;
// }
// var result = countSpaces('how are you today?');
// console.log(result);
// // TODO: Add validation to function above, if the argument pass is not a string it should return false.
// // TODO: Create a function named capitalizeAllNames that accepts an array of strings and returns the array with all of its elements capitalized.
// // Example:  capitalizeAllNames(["bob","Seth","TOFU","Toyota"]) ---- returns ----> ["BOB","SETH","TOFU","TOYOTA"]
// // TODO: Create a function named capitalizeFirstLetter that accepts an array of strings and returns the array with all of the first letters in
// //  each string being capitalized while having the rest of the string lowercase look at the example below for reference.
// // Example:  capitalizeFirstLetter(["bob","Seth","TOFU","Toyota"]) ---- returns ----> ["Bob","Seth","Tofu","Toyota"]
// function capitalizeAllNames(stringsArray) {
//     var allCapsArray = [];
//
//     stringsArray.forEach(function(string) {
//         allCapsArray.push(string.toUpperCase());
//     });
//
//     return allCapsArray;
// }
//
// console.log('ALL CAPS');
// console.log(capitalizeAllNames(["bob","Seth","TOFU","Toyota"]));
//
// function capitalizeFirstLetter(stringsArray) {
//     var capitalizedArray = [];
//
//     stringsArray.forEach(function(string) {
//         var capitalized = string[0].toUpperCase() + string.slice(1).toLowerCase();
//         capitalizedArray.push(capitalized);
//     });
//
//     return capitalizedArray;
// }
//
// console.log('Capitalized');
// console.log(capitalizeFirstLetter(["bob","Seth","TOFU","Toyota"]));
// // July 7th 2021
// // TODO: Create a method on the object down below named getFullName that when called returns the users full name using the "this" key term.
// // Example: personOne.getFullName() ---- returns ----> "silvia floopertan"
// var personOne = {
//     firstName: "silvia",
//     lastName: "floopertan",
//     ageInYears: 34,
//     heightInInches: 65,
//     fullName: function getFullName() {
//         return this.firstName + " " + this.lastName;
//     }
// }; console.log(personOne.fullName());
//
//
//
// // TODO: Create a method on the object down below named getNicelyFormattedFullName that when called returns the
// //  users full name with both first letters in the names being capitalized look at example down below for more reference.
// // Example: personOne.getNicelyFormattedFullName() ---- returns ----> "Dan Valdarez"
// var personTwo = {
//     firstName: "dan",
//     lastName: "valdarez",
//     ageInYears: 61,
//     heightInInches: 73,
//     fullName: function getFullName() {
//         return this.firstName.charAt(0).toUpperCase() + " " + this.lastName.charAt(0).toUpperCase();
//     }
// }; console.log(personTwo.fullName());
// July 8th 2021
// Part 1
// TODO: Create a function that takes an array of strings and returns an array of objects
//  where each object has 2 properties: originalString and countOfLetters
// Example: input: ["hello", "dave"]
//          returns: [
//                    { "originalString":"hello", lengthOfOriginalString:5 },
//                    { "originalString":"dave", lengthOfOriginalString:4 }
//                   ]
// Part 2
function strings(arrayStrings){
    var input = []
    for (let i = 0; i < arrayStrings.length; i++) {
        input.push({ originalString:arrayStrings[i], lengthOfOriginalString:arrayStrings[i].length})
    }
    return input;
}
var objectsArray = console.log(strings(["hello", "dave"]))
function objects(objectsparam) {
    var results = []
    objects.forEach(function(single) {
        results.push(single.originalString)
    })
    return results.join("")
}
 console.log(objects(objectsArray))


// TODO: Create a function that takes the array of objects from PART 1
//  and returns a string of all of the originalStrings concatenated with spaces in between
// Example: input: [
//                    { "originalString":"hello", lengthOfOriginalString:5 },
//                    { "originalString":"dave", lengthOfOriginalString:4 }
//                  ]
//          returns: "hello dave"
// TODO: Create a function named getTallUsers that accepts an array of objects. The objects in the array will be in the same format
//  as PersonOne, PersonTwo, and PersonThree. The functions job is to return an array of users that have heightInInches equal to or greater than 65.
//var people = [personOne,personTwo,personThree];
// Example: getTallUsers(people)
// ---- returns ----> [{firstName: "silvia", lastName: "floopertan", ageInYears: 34, heightInInches: 65},
//
var people = [personOne,personTwo,personThree];
document.getelementb
function getTallUsers(arrayOfObjects){
    var tallUsers = [];

    for (let i = 0; i < arrayOfObjects.length; i++) {

        var currentUser = arrayOfObjects[i];

        var currentUsersHeight = currentUser.heightInInches;

        var userIsTallEnough = currentUsersHeight >= 65

        if (userIsTallEnough){
            tallUsers.push(currentUser)
        }

    }

    return tallUsers;
}

console.log(getTallUsers(people));