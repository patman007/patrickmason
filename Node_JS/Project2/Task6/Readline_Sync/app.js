//Foundation
const readlineSync = require('readline-sync');

//Asking questions in the Terminal
//Question 1: What is your name?
//Prompt 1 for user
const userName = readlineSync.question('May I have your name? ');
console.log(` Hi ${userName}!`);
 
// Handle the secret text (e.g. password).
//Question 2: What is your favorit food?
//Prompt 2 for user
const favFood = readlineSync.question('What is your favorite food? ', {
  hideEchoBack: true // The typed text on screen is hidden by `*` hideEchoBack.  
});
console.log(`Your faroite food is ${favFood}!`)

//Handles text that is not secret to the user
//Question 3 What is your favorite drink?
//Prompt 3 for user
const favDrink = readlineSync.question('What is your favorite drink? ', {
    defaultInput: true // The typed text on screen is not hidden by defaultInput.
  });

//Final message in the console with all three prompts answered in one sentence
console.log(`Hi ${userName}, your favorite food is ${favFood} and your favorite drink is ${favDrink}`);