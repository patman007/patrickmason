//Foundation
const readlineSync = require('readline-sync');

//Question 1: How spicy would you like your tacos?
//List from the array for the user to choose from
  spicyness = ['spicy', 'very spicy, and', 'so spicy, you wont be able to feel your face'],

  //Use the keyInSelect Method to the array as a selection
  index = readlineSync.keyInSelect(spicyness, 'How spicy would you like your tacos?');

//Response at the end of Question 1 to the terminal  
console.log(`Ok, so you want our tacos to be ${spicyness[index]}`);


//IF STATEMENT: If statement is to make sure they are sure with
//their order of spicy tacos and use the console.log response
//when the Y key is pressed
if (readlineSync.keyInYN('Are you sure about this?')) {
    // 'Y' key is pressed.
    console.log('Ok we will have your order right out');
    
    //ELSE STATEMENT: If anything other than the Y key was 
    //pressed then use the console.log response
}   else {
    // Another key was pressed other than Y.
    console.log('Whats the matter? Cant handle the heat?');
    // Do something...
}



