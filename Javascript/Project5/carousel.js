//Project 5 Boostrap with Carousel
//Make an array to go through image indexes for Previous and Next button click
var imageArray = [
    "assets/1.jpg", 
    "assets/2.jpg", 
    "assets/3.jpg", 
    "assets/4.jpg", 
    "assets/5.jpg", 
    "assets/6.jpg"
];

//Set the index to 0 to start at the beginning of the imageArray
var index = 0;


//FUNCTION NEXT BUTTON
//Make a function called prev() that calls on the 
//Previous button whenever it is clicked by the user 
const next = () => { 

    //Use the increment x++ to go forward with the next button when it is clicked
    index++;

    //IF STATEMENT for when the image is strict equal (===) in value and data type
    //of the index and length of the imageArray index the index will be 0.
    if (index === imageArray.length) {

        //index is equal to 0
        index = 0;
    } 

    //Using console.log to double check the next function is working when the
    //button is clicked.
    console.log('Pressed next, index is : ' + index);
    
    //Using the querySelector to select the 'img'tags from the HTML and set the 
    //attribute for imageArray going up a certain number of indexes.
    //The lowest index is 0 and the highest index is 5.
    document.querySelector("img").setAttribute(
        "src", 
        imageArray [index]
    );
}



//FUNCTION PREVIOUS BUTTON
//Make a function called prev() that calls on the 
//Previous button whenever it is clicked by the user  
const prev = () => {

    //Use the decrement x-- to go forward with the next button when it is clicked
    index--;

    //IF STATEMENT for when the index is less than 0 (<) the index of the image array
    //will start over when the Previous Button is clicked.
    if (index < 0) {

        //The previous function will start the index count over after the last image 
        //in the array clicked.
        index = imageArray.length - 1;
    }   

    //Using console.log to double check the next function is working when the
    //button is clicked.
    console.log('Pressed prev, index is: ' + index);


    //Using the querySelector to select the 'img'tags from the HTML and set the 
    //attribute for imageArray going up a certain number of indexes.
    //The lowest index is 0 and the highest index is 5.
    document.querySelector("img").setAttribute(
        "src", 
        imageArray [index]
    );
}







