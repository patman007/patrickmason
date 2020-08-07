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
    list.length;     
}
console.log(`Question 2: Full Number of Characters
is ${list.length}`);


// C. Display only characters whose names start with "Man" in
// your terminal, or an error message if does not exist.

//OLD CODE
// let list1 = marvel.characters //array of all character names
// let iterator = list1.values();
// for(let elements of iterator) { 
//     console.log(elements);
//     let man = elements.valueOf("Man");    
//     if(elements == man) {
//         console.log("Question 3: " + man);
//     };    
// }
// console.log("Question 3: " + man);

//NEW CODE
list.forEach( character => {
    list.indexOf("Man");
});
console.log(list.indexOf("Man"));


// D. Display “Iron Man” in your terminal, or an error message 
// if does not exist
let indices = [];
let array = [list];
let element = 'Iron Man'; 
let ids = array.indexOf(element);
while (ids != -1) {
    indices.push(ids);
    ids = array.indexOf(element, ids + 1);
}
console.log(ids);


//E. Display “Batman” in your terminal, or an error message 
//if does not exist