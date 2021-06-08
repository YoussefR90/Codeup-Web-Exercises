'use strict;'

//alert("I'm in my dowhile js");

// a random number that represents the number of cones I can sell today
let totalCanSell = Math.ceil(Math.random() * (100 - 50) + 50);
console.log("The number of cones I can sell" +  totalCanSell);


// total cones sold today
let totalSold = 0;

do {
    let conesBought = Math.ceil(Math.random() * (5 - 1) + 1);

    if ((totalSold + conesBought) > totalCanSell) {
        console.log("I'm sorry, I can't sell " + conesBought);
        continue;
    }
    console.log("My customer bought" + conesBought);
    totalSold = totalSold + conesBought;
    console.log("I've sold this many " + totalSold);

} while (totalSold < totalCanSell);

// ice cream do while
var allCones = Math.floor(Math.random() * 50) + 50;
document.write("I have " + allCones + " cones to sell<br>");

let total_cones = 0;

do {
    let cones_bought = Math.floor(Math.random() * 5) + 1;
    if ((allCones - total_cones) < cones_bought)
        continue;
    document.write("They bought: " + cones_bought + "<br>");
    total_cones = total_cones + cones_bought;
    document.write("I have sold: " + total_cones);
}
while (allCones > total_cones);