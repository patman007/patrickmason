// Faulty Solution

function isIsogram(str){
    let strObj = {};          // here we track occurrence of each alphabet

    // don't care about case, convert to array and loop over it
    // Corrected the code replacing forEach with Every Method
    return str.toLowerCase().split("").every(
        function(letter) {
            if(strObj[letter]){  // testing strObj property for each unique letter
                return false;     // if a repeat letter found, then not an isogram
            }
            return strObj[letter] = true; // if not found, then the property is set to true
        }
    )
    // return true; 
}

//Test Cases
const test = "Hello";
console.log(`test: ${isIsogram(test)}`); //== false //t is repeated twice

const test2 = 'Dermatoglyphics';
console.log(`test: ${isIsogram(test2)}`); //== true  // since no letter is repeated 

const test3 = "aba";
console.log(`test: ${isIsogram(test3)}`); // == false // a is repeated twice

const test4 = "moOse";
console.log(`test: ${isIsogram(test4)}`);// == false // ignore letter case