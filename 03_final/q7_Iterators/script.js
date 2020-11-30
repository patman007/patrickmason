//FOR OF Example iterating over Object containg arrays

//Make colors a new map object full of array
let colors = new Map();

//Create the elements to be inside of the Map object
colors.set('red', '#ff0000');
colors.set('yelloow', '##B7950B');
colors.set('blue', '#0000ff');

//FOR OF Loop iterates through
//all the colors that were 
//setup in the Map object
for (let color of colors) {

    //The console.log message
    //shows all the colors (elements)
    //setup in the map object    
    console.log(color);
}

//Output
// [ 'red', '#ff0000' ]
// [ 'yellow', '#B7950B ' ]
// [ 'blue', '#0000ff' ]

////////////////////////////////////////////////////////////////

//FOR EACH Example iteratring over an array
//Create an array with amounts
const amounts = [65, 44, 12, 4];

//Create an empty array called doubleAmounts
let doubledAmounts = [];

//FOR EACH Loop Take the amounts array values (item)
amounts.forEach(item => {

  //Take the amount values in 
  //the array to be push into the 
  //empty array doubleAmounts.
  doubledAmounts.push(item * 2);
})

//Console log the the doubleAmounts array
//after going through the For Each loop.
console.log(doubledAmounts);

//Output
// [ 130, 88, 24, 8 ]