//Foundation
let marvel = require('marvel-characters');
console.log(marvel.characters);


//A. Get a random character to show in the terminal.
name = marvel();
console.log(`Question 1: Marvel Character
 ${marvel()}`);


//Using various array methods:
//let list = marvel.characters array of all character names
//B. Display the number of characters in the database
let list = marvel.characters //array of all character names
for(let i = 0; i < list.length; ++i) { 
    // console.log("Marvel Characters");
    //This will repeat more than a 1000 times      
}
console.log(`Question 2: Full Number of Characters
is ${list.length}`);


// C. Display only characters whose names start with "Man" in
// your terminal, or an error message if does not exist.
let list1 = marvel.characters //array of all character names
let iterator = list1.values();
for(let elements of iterator) { 
    console.log(elements);
    let man = elements.valueOf("Man");    
    if(elements == man) {
        console.log("Question 3: " + man);
    };    
}
console.log("Question 3: " + man);



//D. Display “Iron Man” in your terminal, or an error message 
//if does not exist
// let list1 = marvel.characters //array of all character names
// let iterator = list1.values();
// for(let elements of iterator) { 
//     // console.log(elements);
//     let ironMan = list1.values("Iron Man")    
//     if(elements === ironMan) {
//         console.log(ironMan);
//     }        
// }
// console.log("Question 3: " + ironMan);



//E. Display “Batman” in your terminal, or an error message 
//if does not exist