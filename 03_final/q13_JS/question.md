An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that only contains letters is an isogram. Assume the empty string is an isogram. Ignore case of the letters.

For example, you should get the following ...

isIsogram( "Dermatoglyphics" ) == true  // since no letter is repeated 
isIsogram( "aba" )             == false
isIsogram( "moOse" )           == false // ignore letter case

### Question

A possible solution is attached here as `script.js` here. You may run it using the command `node script.js` on command line.  However it doesn't work, as it reports "hello" as an isogram, which it clearly is not (repeating "l"). Please fix and explain your fix.

### Please see script.js file for corrected code

### Answer
### I made variables for each test case to better organization for myself.
### The main fix was changing the forEach method to an every method for the array.
### The every method all the elements in the array must pass the test (true) or not
### pass the test (false). I commented out the second return true, which did not
### do anything in my code.


### Answer code pasted here in case.
Hint: You might need to use the debugger to fix this function so it does the right thing. Please do not punt this question, by finding another solution and providing it instead. You'd gain only 50% of the credit.

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

