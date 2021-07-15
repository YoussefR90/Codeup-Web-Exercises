// $(document).ready(function () {
//     alert("The DOM has finished loading")
// });


$(document).ready(function () {
    // ID Selectors section
    // $("#remedy-header, .remedy-list, .remedy-text").css("color", "#c9c65f");
    // $("#rhyme-header, .rhyme-list, .rhyme-text").css("color", "#5a78c4");
    // $("#reason-header, .reasons-list, .reason-text").css("color", "#ed5547");
    // $(".container").css("background-color", "#333333");
    // $(".container").css("padding", "50px"); // gives duplicate jQuery selector warning because IJ is recommending to daisy chain .css on the first jQuery selector for multiple edits, which can include .html edits then .css in same line!! ;)
    // var idAlert = $("#reason-header").html();
    // alert(idAlert);
    // alert($("#rhyme-header").text());


    // Class Selectors lesson
    // $("#remedy-header, .remedy-list, .remedy-text").css("color", "#c9c65f");
    // $("#rhyme-header, .rhyme-list, .rhyme-text").css("color", "#5a78c4");
    // $("#reason-header, .reasons-list, .reason-text").css("color", "#ed5547");
    // $(".container").css("background-color", "#333333");
    // $(".container").css("padding", "50px");
    // $(".codeup").css({"border": "1px solid red", "background-color": "#333333"}); // "background-color here is overwriting the ".container" color as code is read last


    // Element Selectors
    // $("#remedy-header, .remedy-list, .remedy-text").css("color", "#c9c65f");
    // $("#rhyme-header, .rhyme-list, .rhyme-text").css("color", "#5a78c4");
    // $("#reason-header, .reasons-list, .reason-text").css("color", "#ed5547");
    // $(".container").css("background-color", "#333333");
    // $(".container").css("padding", "50px");
    // $("li").css("font-size", "20px");
    // $("h1, p, li").css("background-color", "#666666");
    // alert($("h1").text());
    // $("h1").each(function () {
    //     alert($(this).html());
    // });
    // $(".codeup").css({"border": "1px solid red", "background-color": "#333333"});


    // jQuery events
    // // Mouse events
    // let headerOne = $("h1");
    // let changeBGOnClick = function () {
    //     $(this).css("background-color", "beige");
    // }
    // headerOne.click(changeBGOnClick);
    //
    // let paragraphs = $("p");
    // let changeFontSizeDblClick = function () {
    //     $(this).css("font-size", "18px");
    // }
    // paragraphs.dblclick(changeFontSizeDblClick);
    //
    // let listItems = $("li");
    // let onMouseHover = function () {
    //     $(this).css("color", "red");
    // }
    // let offMouseHover = function () {
    //     $(this).css("color", "");
    // }
    // listItems.hover(onMouseHover, offMouseHover);


    // Keyboard events (Konami code exercise)
    // (function () {
    //
    //     let container = $(".container");
    //
    //     function addDOAHover(elementsToBind) {
    //
    //         let dOAHover = function () {
    //             $(this).css({
    //                 "padding": "400px",
    //                 "background-color": "#db2525",
    //                 "transition": "3s",
    //             });
    //             $(this).html("<h1> You have died!</h1> <h1>Enter password to continue, or esc to return to main menu...</h1>").css({
    //                 "width": "300px",
    //                 "height": "100px",
    //             });
    //         }
    //         elementsToBind.hover(dOAHover);
    //     }
    //
    //     addDOAHover(container);
    //
    //     let dOMInput = $(document);
    //
    //     let mainMenu = function () {
    //         $(document).keyup(function (e) {
    //             if (e.keyCode === 27) {
    //                 alert("Refresh page to begin new game");
    //                 $("container").hide("container");
    //                 $("body").css({
    //                     "background-image": "url('img/contra-menu.jpg')",
    //                     "background-size": "cover"
    //                 });
    //             }
    //         });
    //     }
    //
    //     mainMenu(dOMInput);
    //
    //     //https://codepen.io/kmaida/pen/oCkpt
    //     let secretHiddenPW = function () {
    //         let konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13]
    //         let count = 0;
    //         let start = false;
    //
    //         $(document).keyup(function (e) {
    //             let codeReset = function () {
    //                 start = false;
    //                 count = 0;
    //             };
    //
    //             let keyInput = e.keyCode;
    //             console.log(keyInput);
    //
    //             if (!start) {
    //                 if (keyInput === 38) {
    //                     start = true;
    //                 }
    //             }
    //
    //             if (start) {
    //                 if (konamiCode[count] === keyInput) {
    //                     count += 1;
    //                 } else {
    //                     codeReset();
    //                 }
    //                 if (count === 11) {
    //                     alert("You have added 30 lives!");
    //                     codeReset();
    //                 }
    //             } else {
    //                 codeReset();
    //             }
    //         });
    //     }
    //     secretHiddenPW(dOMInput);
    //
    // })();


    // jQuery Essential Methods
    $("dl, dd").css("padding", "8px");
    $("ul").css("padding", "0").css("margin-top", "0px");


    $("dd").addClass("invisible");
    $("#toggle-visibility").click(function () {
        $("dd").toggleClass("invisible");
    });

    $("dt").click(function () {
        $(this).css("background-color", "yellow");
    });

    $("#list-item-font-color").click(function () {
        $("ul").each(function () {
            $(this).children().last().css("backgroundColor", "yellow");
        });
    });

    $('h3').click(function () {
        $(this).next().children().css('font-weight', 'bold');
    });

    $('li').click(function () {
        $(this).parent().children().first().css('color', 'blue');
    })


});