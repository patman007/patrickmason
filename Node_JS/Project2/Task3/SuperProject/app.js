//Foundation
//NPM Marvel Characters
const marvelChar = require('marvel-characters')

//Part A: Get a random character to show in the terminal 
console.log(marvelChar());

//Using array methods
//Part B: Display the number of characters in the database
//Use length property without an iterator
console.log('# of characters in the db: '+ marvelChar.characters.length);


//Part C: Display only characters whose names start with "Man" in your
//terminal, or an error message if it does not exist
//Use filter Method
//el or (element) is a placeholder or a predicate
let names = marvelChar.characters.filter(function(el){

    //RETURN statement is to return marvel super hero in 
    //the array that has the first letters of Man
    //at the beginning of there name, not Iron man
    return el.substring(0,3) == 'Man';
})
//You must use let names to have it output without with Man 
console.log(names);

// Notes for Part C
// //Part C with Arrays using substring method
// //We want strings only
// let test = marvelChar().substring(0,3);
// console.log(test);

// //For each and substring Method
// let names = []
// marvelChar.characters.forEach(function(el) {
//     if(el.substring(0,3) == 'Man'){
//         names.push(el)
//     }
// })
// console.log(names);


//Part D: Display "Iron Man" in your terminal, or an error message
//if it does not exist
//Use filter Method
// el or (element) is a placeholder or a predicate
let ironMan = marvelChar.characters.filter(function(el){

    //RETURN statement is to return marvel super hero in 
    //the array that has the full name of Iron Man
    //to use for an exact match unlike "Man"
    return el.substring(0,8) == 'Iron Man';
})
// You must use let ironMan to have it output without with Iron Man
console.log(ironMan);


//Part E
//Part E. Display “Batman” in your terminal, or an error message 
//if does not exist.
//Use filter Method
// el or (element) is a placeholder or a predicate
let bat = marvelChar.characters.filter(el => {

    //RETURN statement is to return marvel super hero in 
    //the array that has the full name of Batman
    //to use for an exact match unlike "Man"
    return el == 'Batman'
})
// You must use let bat to have it output without with bat
// console.log(bat);
// We don't want empty array symbol but an actual message


//If bat not equal to 0 using Ternary operator (?) if and (:) else
//Make the result variable
let result = bat.length != 0 ? bat : "No matches found"
console.log(result);
// Answer No matches found
//We have not match because Batman is a DC character




//////////////////////////////////////////////////////////////////////////////////

//ATTEMPT 1
//Foundation
// const marvelChar = require('marvel-characters');
// console.log(marvel.characters);


// //A. Get a random character to show in the terminal.
// name = marvel();
// console.log(`Question 1: Marvel Character
// ${marvel()}`);

// //Using various array methods:
// //let list = marvel.characters array of all character names
// //B. Display the number of characters in the database
// let list = marvel.characters //array of all character names
// for(let i = 0; i < list.length; ++i) { 
//     list.length;     
// }
// console.log(`Question 2: Full Number of Characters
// is ${list.length}`);


// // C. Display only characters whose names start with "Man" in
// // your terminal, or an error message if does not exist.

// list.forEach( character => {
//     list.indexOf("Man");
// });
// console.log(list.indexOf("Man"));


// // D. Display “Iron Man” in your terminal, or an error message 
// // if does not exist
// let indices = [];
// let array = [list];
// let element = 'Iron Man'; 
// let ids = array.indexOf(element);
// while (ids != -1) {
//     indices.push(ids);
//     ids = array.indexOf(element, ids + 1);
// }
// console.log(ids);

// //E. Display “Batman” in your terminal, or an error message 
// //if does not exist

//map, ternary operators, forEach