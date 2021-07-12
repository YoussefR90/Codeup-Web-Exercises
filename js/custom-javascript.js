"use strict";

// //ID Selectors alerting contents
// var contents = $("#list").html();
// alert(contents);


// //Class Selector using css in java
// $('.codeup').css('border', '1px red solid');

// // Element Selector
// $('li').css('font-size', '20px');
// $('.something').css('background-color', 'red');
// var contents = $("h1").html();
// alert(contents);

// //Multiple Selectors
// $('h1, p, li').css('background-color', 'red');


// $('h1').click(function() {
//     $(this).css('background-color', '#FF0')
// });
//
// $('p').dblclick(function() {
//     $(this).css('font-size', '18px')
// });
//
// $('li').hover(
//     function() {
//         $(this).css('color', 'red');
//     },
//     function() {
//         $(this).css('color', 'black');
//     }
// );

// a key map of allowed keys
var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b'
};

// the 'official' Konami Code sequence
var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

// a variable to remember the 'position' the user has reached so far.
var konamiCodePosition = 0;

// add keydown event listener
document.addEventListener('keydown', function(e) {
    // get the value of the key code from the key map
    var key = allowedKeys[e.keyCode];
    // get the value of the required key from the konami code
    var requiredKey = konamiCode[konamiCodePosition];

    // compare the key with the required key
    if (key == requiredKey) {

        // move to the next key in the konami code sequence
        konamiCodePosition++;

        // if the last key is reached, activate cheats
        if (konamiCodePosition == konamiCode.length) {
            activateCheats();
            konamiCodePosition = 0;
        }
    } else {
        konamiCodePosition = 0;
    }
});

function activateCheats() {

    alert("cheats activated");
}