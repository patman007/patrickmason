//Attempt 1
// fahrTemp = () => {

//     //User enters a Fahrenheit Temperaturesets value of first string entered
//     let temp = document.getElementById('mathNumber').value;
//     // Use if else statement for cold, chilly, freezing, warm, hot, etc.
//     if (temp < -40 && temp < 0) {
//         let result = document.getElementById('mathNumber').innerHTML = temp;
//         document.getElementById('tempDisplay').innerHTML = "Freezing " + result;
//     } else if (temp > 1 && temp < 30) {
//         let result = document.getElementById('mathNumber').innerHTML = temp;
//         document.getElementById('tempDisplay').innerHTML = "Cold " + result;
//     } else if (temp > 31 && temp < 50) {
//         let result = document.getElementById('mathNumber').innerHTML = temp;
//         document.getElementById('tempDisplay').innerHTML = "Chilly " + result;
//     } else if (temp > 51 && temp < 70) {
//         let result = document.getElementById('mathNumber').innerHTML = temp;
//         document.getElementById('tempDisplay').innerHTML = "Warm " + result;
//     } else if (temp > 71 && temp < 100) {
//         let result = document.getElementById('mathNumber').innerHTML = temp;
//         document.getElementById('tempDisplay').innerHTML = "Hot " + result;
//     } else if (temp > 101 && temp < 120) {
//         let result = document.getElementById('mathNumber').innerHTML = temp;
//         document.getElementById('tempDisplay').innerHTML = "Boiling " + result;
//     } else {
//         let result = document.getElementById('mathNumber').innerHTML = temp;
//         document.getElementById('tempDisplay').innerHTML = "Dieing" + result;
//     }  
// } 

function temp() {
    let keyTest = document.getElementById('temp1').value;//gets value from input
    let tempMessage;
    if (keyTest >= -50 && keyTest < 0) {
        tempMessage = "freezing outside!!";
        } else if (keyTest >= 0 && keyTest < 50) {
            tempMessage = "chilly. Where is your coat?";
        } else if (keyTest >=50 && keyTest < 70) {
            tempMessage = "warming up.";
        } else if (keyTest >=70 && keyTest < 85) {
            tempMessage = "warm outside.";
        } else {
            tempMessage = "time to find A/C!!";
        }
        tempDisplay.innerHTML = "It is " + tempMessage;
        //event handler to determine what to do depending on what input is
try {
    if (keyTest === "") throw "a number above";//  no input gets this error message
    if (isNaN(keyTest)) throw "only numbers";//  if anything but numbers are entered
    if (keyTest < -50 || keyTest > 140) throw "a temp between/including -50 degrees or 140 degrees";
        //error message if number is outside range
    } // end of try
catch(err) {
    document.getElementById('tempDisplay').style.color = "red";//sets error message to red so it stands out
    tempDisplay.innerHTML = "Please enter " + err;//displays error message concatenated
           } // end of catch
}  // end of temp()

 