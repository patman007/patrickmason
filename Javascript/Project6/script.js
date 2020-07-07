function getFormattedTime() {
    var dateTime = new Date();
    var hours = dateTime.getHours(); // 0 -23 hours
    var minutes = dateTime.getMinutes(); //0-59 minutes
    var seconds = dateTime.getSeconds(); //0-59 seconds
    var session = "AM";

    //Hours    
    if(hours > 12) {
        hours = hours - 12;
        session = "PM";
    }

    //Minutes    
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    //Seconds    
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    
    var time = hours + ":" + minutes + ":" + seconds + " " + session;

    //Display Time
    document.getElementById("clock").innerHTML = time;

    //Set Interval
    setInterval(getFormattedTime, 1000)    
}

//Call or invoke the function
getFormattedTime();






