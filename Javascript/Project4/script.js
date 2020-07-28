//Project 4
//Grab the images from the assets folder and make an array variable called imageArray
var imageArray = ["assets/background1.jpg","assets/background2.jpg","assets/background3.jpg"];

// Set the index to 0 to start from the begining of the array
var index = 0;

//Make a function called rotateImagebackground 
function rotateImagebackground() {

    //Use document.querySelector to select img elemcent in the HTML
    //in the array with a source (src) specified in the HTML
    //and go through each index of the array
    document.querySelector("img").setAttribute("src", imageArray [index]);

    //To go through all of the image use the increments call(++) or i++
    index++;

    
    //IF STATEMENT if the  var index array of the imageArray variable is greater 
    //than or equal to imageArray length of the array then invoke the whole
    //rotateImagebackground function 
    if (index >= imageArray.length) {

        //Have the index start at 0 as specified in the variable on Line 6
        index= 0;
    }
}

//Call/invoke the rotateImagebackground function 
//with a setInterval property of 3 seconds to rotate through each image
//inside the array of the ImageArray variable  
setInterval(rotateImagebackground, 3000);