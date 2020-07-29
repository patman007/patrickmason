//Project 6 Digital Clock
//Make a function called getFormattedTime to set the variables,
//set up the if statments, and show the time on the screen for each
//second (setInterval) that goes by.
const getFormattedTime = () => {

    //Using let instead of var below    

    //Make a variable called dateTime that instantly gets the time right now
    let dateTime = new Date();

    //HOURS
    //Make a variable called hours that uses the Get Method for the hours
    let hours = dateTime.getHours(); //0-23 hours

    //IF STATEMENT: If the hours are greater than (>) 12 then reset the hours
    //back between 1 and 12 instead of military time (1-24)
    if(hours > 12) {

        //When the hours are greater than (>) 12 then minus 12 from the number
        //For example 13 - 12 = 1 and this will be 1pm
        hours =  hours - 12;
    }


    //MINUTES
    //Make a variable called hours that uses the Get Method for the minutes
    let minutes = dateTime.getMinutes(); //0-59 minutes

    //IF STATEMENT: If the hours are less than (<) 10 then add a zero in 
    //front of the single digit number. 
    if(minutes < 10) {

        //When the minutes are less than (<) 10 a 0 "string" is put in front
        //of the minute number.For example instead of "9" minutes
        //it is "09" minutes.
        minutes = "0" + minutes;
    }


    //SECONDS
    //Make a variable called hours that uses the Get Method for the seconds
    let seconds = dateTime.getSeconds();

    //IF STATEMENT: If the hours are less than (<) 10 then add a zero in 
    //front of the single digit number.
    if(seconds < 10){

        //When the minutes are less than (<) 10 a 0 "string" is put in front
        //of the minute number.For example instead of "9" minutes
        //it is "09" minutes.
        seconds =  "0" + seconds;
    }


    //This allows the time to be seen on the webpage
    //Call the hours, minutes, and seconds variables defined above into
    //one variable called time to easily display on the screen. 
    let time = `${hours}:${minutes}:${seconds}`;
    console.log(time);


    //Return/End the function when time is returned 
    return time;
}


//Make a function called displayTime to display the time when the 
//getFormattedTime function runs.
const displayTime = () => {

    //String interpolation to the clock as h1
    //Using the DOM to get the getelementById to display the text
    //from the previous function getFormatted time onto the webpage.
    document.getElementById("clock").innerHTML = `<h1>${getFormattedTime()}</h1>`
    console.log(`${getFormattedTime()}`)
}


//Make a function called closeTouch to change the css of the clock div.
//after the displayTime function has run.        
const closeTouch = () => {

    //Using DOM to do style instead of CSS
    document.getElementById("clock").style.display = "block";
}

//Calling the displayTime function for each second
let int = setInterval(displayTime, 1000);
console.log(int);