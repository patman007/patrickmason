// Write a JavaScript function that checks how similar are two strings, which 
// are passed in to this function as arguments.
// Hint: Convert the string to an array and then loop over the array.

//Given two strings str1 and str2, find the minimum number of operations 
//required to convert str1 to str 2
//Insert a character, Delete a character, Replace a characters

//Arrow function with arguments str1 and str2 to be used 
const compareStrings = (str1, str2) => {

  //Nested Array
  //2D matrix 2x2
  //Example here is a 2x2 matrix: 
  //[[1, 2, 3], [1,2,3]]
  const matrix = [];

  //For Loop for str1.length of array
  //and increment by 1 (i++). 
  //The + 1 is used to add an additional 
  //index in the empty string.
  //This helps keep track of every single
  //outer array or outer for loop.
  for (let i = 0; i < str1.length + 1; i++) {

    //To populate inner arrays str1.length 
    //is a column that we use to populate 
    //with rows.

    //Rows matrix to used in next For Loop
    const row = [];

    //For Loop for str2.length of array
    //and increment by 1 (i++). 
    //The + 1 is used to add an additional 
    //index in the empty string.     
    for (let j = 0; j < str2.length + 1; j++) {

      //To populate inner arrays str2.length 
      //is a column that we use to populate 
      //with rows.

      //push the tracked values by j iterator
      row.push(j);
    }
    //set our first row [0] to i 
    //to keep track of everything
    row[0] = i;
    //Push the rows into our matrix
    matrix.push(row);
  }
  
  //For loop start i at 1 because index 0 is 
  //an empty string.
  //The + 1 is used to add an additional 
  //index in the empty string.
  for (let i = 1; i < str1.length + 1; i++) {

    //For loop start i at 1 because index 0 is 
    //an empty string.
    //The + 1 is used to add an additional 
    //index in the empty string.
    for (let j = 1; j < str2.length + 1; j++) {

      //If statement asks is the str1 value
      //equal to our str2 value at the current
      //index of 1.
      if (str1[i - 1] == str2[j - 1]) {

        //True condition
        //if our current matrix value
        //equals the caddie corner
        //value.
        //Algorithm 1
        matrix[i][j] = matrix[i - 1][j - 1]

      } else {
        //False Condition (everything else)
        //if our current matrix value
        //does not equal the caddie
        //corner value.  
        //Algorithm 2      
        matrix[i][j] = 1 + Math.min(matrix[i - 1][j - 1], matrix[i - 1][j], matrix[i][j - 1]) 
        //Math.min is a math function for minimum amount
      }
    }
  }

    //Extra Function to show the the actual letter differences 
    //between the two strings instead of a number of differences
    function diffStrings(str1, str2){ 
      //create an empty string
      let diff= "";

      //Use the split method on str2 with 
      //a forEach loop method using value
      //and 'a' as the iterator
      str2.split('').forEach(function(val, a){

        //If the value from str2 does not equal
        //the character element charAt() then
        //get the different letters used
        if (val != str1.charAt(a))        
          //Add the difference letter to value
          diff += val ;        
      });

      //Return statement for the letter differences
      return diff;
    }  

  //Console.log messages for the end of the function  
  // console.log(Object.keys((matrix)))
  // console.log(Object.entries((matrix)))
  // console.log((Object.values((matrix))))
  console.log(diffStrings(str1, str2));
  console.log(`${(matrix[str1.length][str2.length])} differences`)

  //Return statement for number of differences
  return (matrix[str1.length][str2.length])
}

//TEST CASES
//Call arguements in for function
console.log(compareStrings("This is a string","There was string"))
// ere was and 7
console.log(compareStrings("The quick red fox","The slow blue fox"))
// slow blue was and 9