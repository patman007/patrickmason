//Project 5
var imageArray = [
    "assets/1.jpg", 
    "assets/2.jpg", 
    "assets/3.jpg", 
    "assets/4.jpg", 
    "assets/5.jpg", 
    "assets/6.jpg"
];


var index = 0;


//FUNCTION NEXT BUTTON
//Make a function called prev() that calls on the 
//Previous button whenever it is clicked by the user 
function next() { 
    index++
    if (index === imageArray.length) {
        index = 0;
    } 
    console.log('Pressed next, index is : ' + index);      
    document.querySelector("img").setAttribute(
        "src", 
        imageArray [index]
    );
}


//FUNCTION PREVIOUS BUTTON
//Make a function called prev() that calls on the 
//Previous button whenever it is clicked by the user 
function prev() {
    index--;
    if (index < 0) {
        index = imageArray.length - 1;
    }   

    console.log('Pressed prev, index is: ' + index)
    document.querySelector("img").setAttribute(
        "src", 
        imageArray [index]
    );
}



