////Attempt 1
// randomNum = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
// }
// //Show the Random number on the webpage
// //Works when the refresh button is pressed
// document.getElementById("displaySentence").innerHTML = randomNum(25, 75);


randomRun = (min,max) => { // passed 25 as min and 75 as max from call

    // this enables min and max to be included as possible numbers
    // otherwise 25 and 75 would never be chosen
let randomNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
    //displays results      
document.getElementById('randNum').innerHTML = "Your random number is: " + randomNumber;
}