// sets array with background images - any ADDITINAL images need to be added with #.jpg -i.e, 7.jpg, 8.jpg, etc...
var images = ["assets/1.jpg", "assets/2.jpg", "assets/3.jpg", "assets/4.jpg", "assets/5.jpg", "assets/6.jpg"]

// declares variable for new images created by building the src for images
var newImage;

//declares global counter and sets to 1 since initial image is already established as 1.jpg
// user can reset variable to whichever image they would like as starting image but needs to change src in HTML to match
var COUNTER = 1;

function nextImage(x) {
     COUNTER += x; //adds 1 to counter in order to proceed to next image
    //  newImage = "assets/" + COUNTER + ".jpg"; //builds image to be displayed based on counter var
     newImage = `assets/${COUNTER}.jpg`;
     
    if (COUNTER <= images.length) { //tests to make sure counter does not exceed the number of elements in array
                                    // allows additional images to be added without having to change script
            displayImage.src = newImage; //displays new image
            return; //returns out of function with current counter
        } else { //if counter is more than the number of elelemtns in array
            COUNTER = 1; //resets counter to 1 for first image
            newImage = "assets/" + COUNTER + ".jpg"; //builds image to be displayed based on counter var
            displayImage.src = newImage; //dislays new image
            return; //returns out of function with current counter
        } //closes if..else
}//closes nextImage function

function prevImage(x) {
    COUNTER -= x; //subtracts 1 from counter in order to "reverse" direction of images
    newImage = "assets/" + COUNTER + ".jpg"; //builds new image
    if (COUNTER >= 1) { //tests to make sure counter does not reach 0
            displayImage.src = newImage; //displays current new image
            return; //returns out of function
        } else { //if counter is less than 1
            COUNTER = images.length; //resets counter to .length of images (last element in array) - allows additional images to
                                    // be added without having to change script
            newImage = "assets/" + COUNTER + ".jpg"; //builds new image
            displayImage.src = newImage; //displays new image
            return; // returns out of function
        } //closes if..else

}//closes prevImage function