//Foundation
//NPM Pets
let petChar = require('log.pets');
console.log(petChar);

//NPM Animals
let animalChar = require('animals');
console.log(animalChar);


//Part 1: Random animal
console.log(animalChar());

//Part 2: Lion ASCII pet
//Use the documentation inside the NPM website
petChar.lion();

//Part 3: Combining both together
//Use the documentation inside the NPM website that
//talks about log.zoo for the sign
petChar.zoo(animalChar(), animalChar(), animalChar());



//Part 4: Display number of animals
//in generator
//To display the number of animals in the array
// use the length property to get a number of 
//the full array
console.log('# of animals in generator: '
+ animalChar.words.length);



//Part 5: how many animals start with the 
//letter 'G' or display an error message if none found
//Make a variable to get the character names and filter
//through the names to look for certain indexes of the array
let names = animalChar.words.filter(el =>{
    
    //RETURN statement is to return every animal in 
    //the array that has the first letter of "G"
    //not lowercase "g"
    return el.substring(0,1) == 'G';
})

//Use the length property to get the number of animalsinstead
//of just of the whole names of the animals starting with
//the letter G
console.log('# of animals stargin with G: ' + names);
//The Answe is No Matches Found because the array lists 
//them as lowercase "g"'s

//If bat not equal to 0 using Ternary operator (?) if and (:) else
//Make the result variable
let result = names.length != 0 ? bat : "No matches found"
console.log(result);
// Answer No matches found
//We have not match because animals with an Uppercase G
//are not in the array.



//Part 6: how many animals start with the 
//letter 'g' or display an error message if none found
//Make a variable to get the character names and filter
//through the names to look for certain indexes of the array
let g_names = animalChar.words.filter(function(el){

    //RETURN statement is to return every animal in 
    //the array that has the first letter of g
    return el.substring(0,1) == 'g';
})

//Use the length property to get the number 19 instead
//of just of the whole names of the animals
console.log('# of animals stargin with g: ' + g_names.length);
//The Answe is 19 because the array lists them as lowercase "g"'s




