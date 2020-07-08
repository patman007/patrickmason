function runClock() {
    //Variables for getting time right now
    var dateTime = new Date();
    var hours = dateTime.getHours() % 12; // 0 -23 hours, Modululus makes 13 go to 1
    var minutes = dateTime.getMinutes(); //0-59 minutes
    var seconds = dateTime.getSeconds(); //0-59 seconds
    var millisec = dateTime.getMilliseconds(); //0-1000 milliseconds

    //Variables for querySelector and div clocks
    var clock = document.querySelector("div.clock");
    var hourHand = clock.querySelector("div.hour");
    var minHand = clock.querySelector("div.minute");
    var secHand = clock.querySelector("div.second");

    //Variables for Rotation
    var hourRotation = 30 * hours +(0.5 * minutes);  // (360 / 12) = 30 degrees 
    // (30 /60) 60 minutes in one hour = 0.5
    var minRotation = 6 * minutes + (0.1 * seconds); // (360 / 60 min in 1 hour) = 6 degrees
    //(6 min / 60 sec) = 0.1 is one minute to make clock rotate smoother
    var secRotation = 6 * seconds + 0.006 * millisec;  // (360 / 60 sec in 1 min) = 6 degrees
    //0.006 make the clock rotate smoother


    //Style.Transform
    hourHand.style.transform = "rotate(" + hourRotation + "deg)";
    minHand.style.transform = "rotate(" + minRotation + "deg)";
    secHand.style.transform = "rotate(" + secRotation + "deg)";    
   
    requestAnimationFrame(runClock);
}

//Call or invoke the function
runClock();