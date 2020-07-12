var backgroundImages = ["assets/background1.jpg", "assets/background2.jpg", "assets/background3.jpg"];
var index = 1;

function rotateImage() {
    //url('img/background1.jpg')
    document.querySelector("body").style.backgroundImage = "url('" + backgroundImages[index] + "')";
    //increase the index
    index++;
    //check to see if index goes past end of the array
    //If it does, reset back to 0;
    if(index > backgroundImages.length - 1) {
        index = 0;
    }
}

setInterval(rotateImage, 3000);