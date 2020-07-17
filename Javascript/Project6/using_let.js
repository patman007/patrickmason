
function getFormattedTime() {
    //Using let instead of var
    //Hours
    let dateTime = new Date();
    let hours = dateTime.getHours();
    if(hours > 12) {
        hours =  hours - 12;
    }
    //Minutes
    let minutes = dateTime.getMinutes();
    if(minutes < 10) {
        minutes = "0" + minutes;
    }
    //Seconds
    let seconds = dateTime.getSeconds();
    if(seconds < 10){
        seconds =  "0" + seconds;
    }
    //This allows the time to be seen on the webpage
    let time = `${hours}:${minutes}:${seconds}`;
    console.log(time);
    return time;
}
    
function displayTime() {
    //String interpolation to the clock as h1
    document.getElementById("clock").innerHTML = `<h1>${getFormattedTime()}</h1>`
    console.log(`${getFormattedTime()}`)
}

        
function closeTouch() {
    //Using DOM to do style instead of CSS
    document.getElementById("clock").style.display = "block";
}

//Calling the displayTime function for each second
let int = setInterval(displayTime, 1000);
console.log(int);