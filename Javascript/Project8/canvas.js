//Project 8 Analog Clock
//Make a function called runclock to set the variables,
//set up the if statments, and show the time on the screen for each
//second (setInterval) that goes by.
const runClock = () => {

    //Variables for getting time right now
    //SET the VARIABLES:
    //Make a variable called dateTime that instantly gets the time right now
    const dateTime = new Date();

    //Make a variable called hours that uses the Get Method for the hours
    const hours = dateTime.getHours() % 12; // 0 -23 hours, Modululus makes 13 go to 1

    //Make a variable called minutes that uses the Get Method for the minutes
    const minutes = dateTime.getMinutes(); //0-59 minutes

    //Make a variable called seconds that uses the Get Method for the seconds
    const seconds = dateTime.getSeconds(); //0-59 seconds

    //Make a variable called millisec that uses the Get Method for the millseconds
    const millisec = dateTime.getMilliseconds(); //0-1000 milliseconds

    
    //Variables for querySelector and div clocks
    //SET the QUERYSELECTOR for the divs
    //Clock div
    let clock = document.querySelector("div.clock");
    //Hour hand div
    let hourHand = clock.querySelector("div.hour");
    //Minute hand div
    let minHand = clock.querySelector("div.minute");
    //Second hand div
    let secHand = clock.querySelector("div.second");


    //Variables for Rotation
    //SET the VARIABLE for the Hour hand, Minute hand, and Second Hand 
    let hourRotation = 30 * hours +(0.5 * minutes);  // (360 / 12) = 30 degrees 
    // (30 /60) 60 minutes in one hour = 0.5

    let minRotation = 6 * minutes + (0.1 * seconds); // (360 / 60 min in 1 hour) = 6 degrees
    //(6 min / 60 sec) = 0.1 is one minute to make clock rotate smoother
    
    let secRotation = 6 * seconds + 0.006 * millisec;  // (360 / 60 sec in 1 min) = 6 degrees
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



//Attempt 2
// setInterval(setClock, 1000)


// const hourHand = document.querySelector('[data-hour-hand]')
// const minuteHand = document.querySelector('[data-minute-hand]')
// const secondHand = document.querySelector('[data-second-hand]')

// function setClock() {
//     const currentDate = new Date()
//     const secondsRatio = currentDate.getSeconds() / 60
//     // const minutesRatio = currentDate.getMinutes() /60
//     const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60


//     const hoursRatio = (minutesRatio + currentDate.getHours()) / 12

//     setRotation(secondHand, secondsRatio)
//     setRotation(minuteHand, minutesRatio)
//     setRotation(hourHand, hoursRatio)
// }


// function setRotation(element, rotationRatio) {
//     element.style.setProperty('--rotation', rotationRatio * 360)

// }

// setClock();
