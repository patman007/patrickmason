//Foundation
var asciiHeart = require("ascii-heart");

//Default console message
console.log(asciiHeart());

//Display a small heart size (width by height)
console.log(asciiHeart(10, 10));

//Display heart with a different character
//smiley faces and size (width x height)
console.log(asciiHeart(20, 40, {
    fill: ":)"
}));

//Display heart with a different character
//letter p and size (width x height)
console.log(asciiHeart(40, 40, {
    fill: "p"
}));

//Route Handling


//Listener