"use strict";
console.log("Hello From External Javascript");
alert("Welcome to my Website!");

var userInput;
userInput = prompt('What is your favorite color?');
console.log('The user entered: ' + userInput);
 alert("Great," + userInput + " is my favorite color too!");

 alert("the price of all the movies you rented was"  +  (5+3+1)*3);
alert("For this week i will be getting paid"  +  ((400 * 6)+(350*10)+(350*4)));

var full = confirm("is this class full?");
var conflict = confirm("is there a conflict");
alert("you can enroll in class:" + (!full && !conflict));

var premium = confirm("Are you a premium member");
var quantity = Number(prompt("How many items did you buy"));
var expired = confirm("Is the coupon expired");
alert("You can get the discount" + ((!expired) && (premium || (quantity > 2))));