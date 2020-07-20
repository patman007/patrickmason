// // Attempt 1
// seasonTest = () => {
//     //Sets the variable to only take numbers not letters
//     let seasonVar = Number(document.getElementById('season1').value);
//     let seasonx;//sets variable
    
//     switch (seasonVar) {//tests case against monthVar for a match using Switch
//         case 1: seasonx = "Winter";
//             break;
//         case 2: seasonx = "Winter";
//             break;
//         case 3: seasonx = "Spring";
//             break;
//         case 4: seasonx = "Spring";
//             break;
//         case 5: seasonx = "Spring";
//             break;
//         case 6: seasonx = "Summer";
//             break;
//         case 7: seasonx = "Summer";
//             break;
//         case 8: seasonxx = "Summer";
//             break;
//         case 9: seasonx = "Fall";
//             break;
//         case 10: seasonx = "Fall";
//             break;
//         case 11: seasonx = "Fall";
//             break;
//         case 12: seasonx = "Winter";
//             break;
//         }
//     season1Display.innerHTML = "The season is: " + seasonx;

//     try {
//         if (seasonVar === "") throw "a number above";//no input
//         if (isNaN(seasonVar)) throw "only numbers";//anything but numbers entered
//         if (seasonVar < 1 || seasonVar > 12) throw "a number between/including 1-12.";
//                  //error message if number is outside range
//         }  // end of try
//      catch(err) {
//         document.getElementById('season1Display').style.color = "red";//sets error message to red so it stands out
//         season1Display.innerHTML = "Please enter " + err;//displays error
//                 }  // end of catch
// }  // end of monthTest()
 
    
function season(){
    let monthSeason = Number(document.getElementById('season1').value);
    let xSeason;//sets variable
    
    switch (monthSeason) {//tests case against monthSeason for a match
        case 1:
        case 2:
        case 12: xSeason = "Winter";
            break;
        case 3:
        case 4:
        case 5: xSeason = "Spring";
            break;
        case 6:
        case 7:
        case 8: xSeason = "Summer";
            break;
        case 9:
        case 10:
        case 11: xSeason = "Fall";
            break;
        }
    seasonDisplay.innerHTML = "The Season is: " + xSeason;//displays results for assigned case


try {
    if (monthSeason === "") throw "a number above"; //  no input gets this error message
    if (isNaN(monthSeason)) throw "only numbers"; //  anything but numbers are entered
    if (monthSeason < 1 || monthSeason > 12) throw "a number between/including 1-12.";
        //error message if number is outside range
    } // end of try
    catch(err) {
    document.getElementById('seasonDisplay').style.color = "red";//sets error message to red so it stands out
    seasonDisplay.innerHTML = "Please enter " + err;//displays error message concatenated
    } // end of catch
} // end of season()