//Project 8 Analog Clock
//Make a function called runclock to set the variables,
//set up the if statments, and show the time on the screen for each
//second (setInterval) that goes by.
function runClock() {

    //Variables for getting time right now
    //SET the VARIABLES:
    //Make a variable called dateTime that instantly gets the time right now
    var dateTime = new Date();

    //Make a variable called hours that uses the Get Method for the hours
    var hours = dateTime.getHours() % 12; // 0 -23 hours, Modululus makes 13 go to 1

    //Make a variable called minutes that uses the Get Method for the minutes
    var minutes = dateTime.getMinutes(); //0-59 minutes

    //Make a variable called seconds that uses the Get Method for the seconds
    var seconds = dateTime.getSeconds(); //0-59 seconds

    //Make a variable called millisec that uses the Get Method for the millseconds
    var millisec = dateTime.getMilliseconds(); //0-1000 milliseconds

    

    //Variables for querySelector and div clocks
    //SET the QUERYSELECTOR for the divs
    //Clock div
    var clock = document.querySelector("div.clock");
    //Hour hand div
    var hourHand = clock.querySelector("div.hour");
    //Minute hand div
    var minHand = clock.querySelector("div.minute");
    //Second hand div
    var secHand = clock.querySelector("div.second");



    //Variables for Rotation
    //SET the VARIABLE for the Hour hand, Minute hand, and Second Hand 
    var hourRotation = 30 * hours +(0.5 * minutes);  // (360 / 12) = 30 degrees 
    // (30 /60) 60 minutes in one hour = 0.5
    var minRotation = 6 * minutes + (0.1 * seconds); // (360 / 60 min in 1 hour) = 6 degrees
    //(6 min / 60 sec) = 0.1 is one minute to make clock rotate smoother
    var secRotation = 6 * seconds + 0.006 * millisec;  // (360 / 60 sec in 1 min) = 6 degrees
    //0.006 make the clock rotate smoother



    //Style.Transform
    //Do DOM Manipulation for rotate hands:
    //Hour Hand
    hourHand.style.transform = "rotate(" + hourRotation + "deg)";
    //Minute Hand    
    minHand.style.transform = "rotate(" + minRotation + "deg)";
    //Second Hand
    secHand.style.transform = "rotate(" + secRotation + "deg)";    
   
    //If we want clock to make go smoothly go around 360 degrees of the clock uncomment Line 30
    //requestAnimationFrame(runClock);
}

//Call or invoke the function wit a set interval of 1 second to run the runclock function
//for each second that passes in real time. 
setInterval(runClock, 1000); // 1000ms = 1 second