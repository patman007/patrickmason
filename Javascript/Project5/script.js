var imageArray = ["assets/1.jpg", "assets/2.jpg", "assets/3.jpg", "assets/4.jpg", "assets/5.jpg", "assets/6.jpg"];
var index =0;

function getCurrentImageIndex() {
    document.querySelector("img").setAttribute("src", imageArray [index]);
    index++;
    if (index >= imageArray.length) {
        index = 0;
    }    
}

function next() {
    nextImage = (getCurrentImageIndex() + 1) % imageArray.length;    
    document.querySelector("img").setAttribute("src", imageArray [index]);
    index++;
    if (index >= imageArray.length) {
        index = 0;
    }    
}

function prev() {
    nextImage = (getCurrentImageIndex() - 1 + imageArray.length) % imageArray.length;    
    document.querySelector("img").setAttribute("src", imageArray [index]);
    index++;
    if (index >= imageArray.length) {
        index = 0;
    }   
}






