var imageArray = [
    "assets/1.jpg", 
    "assets/2.jpg", 
    "assets/3.jpg", 
    "assets/4.jpg", 
    "assets/5.jpg", 
    "assets/6.jpg"
];
var index = 0;

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

// //Next Button
// const next = () => { 
//     index++;
//     //Use the .length property to call the array for the if statement
//     if (index === imageArray.length) {
//         index = 0;
//     } 
//     console.log('Pressed next, index is : ' + index);
//     //Selecting the image with img src in HTML      
//     document.querySelector("img").setAttribute(
//         "src", 
//         imageArray [index]
//     );    
// }


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

// //Previous Button
// const prev = () => {
//     index--;
//     if (index < 0) {
//         //Too call the last image do the length property - 1
//         index = imageArray.length - 1;
//     }   

//     console.log('Pressed prev, index is: ' + index)
//     //Selecting the image with img src in HTML
//     document.querySelector("img").setAttribute(
//         "src", 
//         imageArray [index]
//     );
// }






