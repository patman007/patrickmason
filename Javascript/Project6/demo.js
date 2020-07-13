// sets background colors in an array
var bgColor = ['#4FC3F7', '#29B6F6', '#03A9F4', '#039BE5', '#0288D1', '#0277BD', 
            '#01579B', '#9575CD', '#7E57C2', '#673AB7', '#5E35B1', '#512DA8', '#4527A0', 
            '#311B92', '#7986CB', '#5C6BC0', '#3F51B5', '#3949AB', '#303F9F', '#283593',
            '#1A237E', '#64B5F6', '#42A5F5', '#2196F3', '#1E88E5', '#1976D2', '#1565C0', '#0D47A1'];

// sets counter to 0 to start with first color in array
var COUNTER = 0;

function backgroundColor() { //function called when page loads
     var newBackground = setInterval(bgRotate, 1000);  //calls bgRotate function every 1 second
}

function bgRotate() { //function called from setInterval
    var d = new Date();//creates date object
    var getTime = d.toLocaleTimeString(); //sets variable to current time

    
    var dateSearch = getTime.search(/am/ig);//sets variable by searching for "am" globally and case-insensitive
    if (dateSearch < 0) { //if there is no "am" then it must be "pm" by default which returns -1
        var newTime = d.toLocaleTimeString().replace(/pm/ig, ''); //replace "pm" globally and case-insensitive with empty space
                                                            //hack way of deleting "pm" from date string
    } else { //runs if "am" is found
        var newTime = d.toLocaleTimeString().replace(/am/ig, ''); //replace "am" globally and case-insensitive with empty space
                                                            //hack way of deleting "am" from date string
    }
    localTime.innerHTML = newTime;//displays current time to id="localTime"


    document.getElementById("bgRotation").style.background = bgColor[COUNTER]; //displays new background image
    COUNTER ++; //adds 1 to counter
    if (COUNTER == bgColor.length) { //tests to see if counter has reached greater than number of elements in array
                                    // this allows for only one change needed in actual array if more backgrounds are wanted
        return COUNTER = 0; // resets counter so that it starts over with first element of array
    } //closes if statement
} //closes function