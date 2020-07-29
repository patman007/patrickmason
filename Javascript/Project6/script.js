//Project 6 Digital Clock Original File
//Make a function called getFormattedTime to set the variables,
//set up the if statments, and show the time on the screen for each
//second (setInterval) that goes by.
function getFormattedTime() {

    //SET the VARIABLES:
    //Make a variable called dateTime that instantly gets the time right now
    var dateTime = new Date();

    //Make a variable called hours that uses the Get Method for the hours
    var hours = dateTime.getHours(); // 0 -23 hours

    //Make a variable called hours that uses the Get Method for the minutes
    var minutes = dateTime.getMinutes(); //0-59 minutes

    //Make a variable called hours that uses the Get Method for the seconds
    var seconds = dateTime.getSeconds(); //0-59 seconds    


    //HOURS 
    //IF STATEMENT: If the hours are greater than 12 then reset the hours
    //back between 1 and 12 instead of military time (1-24)  
    if(hours > 12) {

        //When the hours are greater than 12 then minus 12 from the number
        //For example 13 - 12 = 1 and this will be 1pm
       hours = hours - 12;       
    }


    //MINUTES
    //IF STATEMENT: If the hours are less than (>) 10 then add a zero in 
    //front of the single digit number.     
    if (minutes < 10) {

        //When the minutes are less than (<) 10 a 0 "string" is put in front
        //of the minute number.For example instead of "9" minutes
        //it is "09" minutes.
        minutes = "0" + minutes;
    }


    //SECONDS
    //IF STATEMENT: If the hours are less than (>) 10 then add a zero in 
    //front of the single digit number.    
    if (seconds < 10) {

        //When the minutes are less than (<) 10 a 0 "string" is put in front
        //of the minute number.For example instead of "9" minutes
        //it is "09" minutes.
        seconds = "0" + seconds;
    }
    

    //TIME VARIABLE
    //Call the hours, minutes, and seconds variables defined above into
    //one variable called time to easily display on the screen. 
    var time = hours + ":" + minutes + ":" + seconds;


    //Display Time
    //The getElementById calls the div on the HTML page to show the time
    //variable that was defined in the previous step.
    document.getElementById("clock").innerHTML = time;


    //Set Interval for the getFormattedTime for each second
    setInterval(getFormattedTime, 1000) //1000ms equals 1 second   
}

// Call/invoke the getFormattedTime function
getFormattedTime();






