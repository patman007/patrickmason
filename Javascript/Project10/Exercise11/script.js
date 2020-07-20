//Attempt 1
// month = () => {
//     let keyTest = document.getElementById('month1').value;//gets value from input
//     let monthMessage;
//     if (keyTest == 1) {
//         monthMessage = "January";
//         } else if (keyTest == 2) {
//             monthMessage = "February";
//         } else if (keyTest == 3) {
//             monthMessage = "March";
//         } else if (keyTest == 4) {
//             monthMessage = "April";
//         } else if (keyTest == 5) {
//             monthMessage = "May";
//         } else if (keyTest == 6) {
//             monthMessage = "June";
//         } else if (keyTest == 7) {
//             monthMessage = "July";
//         } else if (keyTest == 8) {
//             monthMessage = "August";
//         }  else if (keyTest == 9) {
//             monthMessage = "September";
//         } else if (keyTest == 10) {
//             monthMessage = "October";
//         } else if (keyTest == 11) {
//             monthMessage = "November";
//         } else if (keyTest == 12) {
//             monthMessage = "December";
//         }   
//           else {
//             monthMessage = "Choose another number";
//         }
//         monthDisplay.innerHTML = monthMessage;
//         //event handler to determine what to do depending on what input is

// try {
//     if (keyTest === "") throw "a number above";//  no input gets this error message
//     if (isNaN(keyTest)) throw "only numbers";//  if anything but numbers are entered
//     if (keyTest < 0 || keyTest > 12) throw "a number between/including 1 and 12";
//         //error message if number is outside range
//     } // end of try
// catch(err) {
//     document.getElementById('monthDisplay').style.color = "red";//sets error message to red so it stands out
//     monthDisplay.innerHTML = "Please enter " + err;//displays error message concatenated
//            } // end of catch
// }  // end of function()


monthTest = () => {
    //Sets the variable to only take numbers not letters
    let monthVar = Number(document.getElementById('month1').value);
    let monthx;//sets variable
    
    switch (monthVar) {//tests case against monthVar for a match using Switch
        case 1: monthx = "January";
            break;
        case 2: monthx = "February";
            break;
        case 3: monthx = "March";
            break;
        case 4: monthx = "April";
            break;
        case 5: monthx = "May";
            break;
        case 6: monthx = "June";
            break;
        case 7: monthx = "July";
            break;
        case 8: monthx = "August";
            break;
        case 9: monthx = "September";
            break;
        case 10: monthx = "October";
            break;
        case 11: monthx = "November";
            break;
        case 12: monthx = "December";
            break;
        }
    month1Display.innerHTML = "The month is: " + monthx;

    try {
        if (monthVar === "") throw "a number above";//no input
        if (isNaN(monthVar)) throw "only numbers";//anything but numbers entered
        if (monthVar < 1 || monthVar > 12) throw "a number between/including 1-12.";
                 //error message if number is outside range
        }  // end of try
     catch(err) {
        document.getElementById('month1Display').style.color = "red";//sets error message to red so it stands out
        month1Display.innerHTML = "Please enter " + err;//displays error
                }  // end of catch
}  // end of monthTest()
 
    


 