### Question 6:

Write a Javascript loop that will iterate from 1 to 5, both included, and log, if the number is ...

... odd or even.

Now wrap the functionality into a function that takes appropriate inputs as arguments (e.g. the smaller number, 5 here; and the larger number 15 here) and returns an object like the following ...

    {
      1: "odd",
      2: "even",
      3: "odd",
      4: "even",
      5: "odd"
    }


### Your Answer: may be provided as a code file with single function within it.

//Function: Loop has two parameters 5 and 15
const Loop = (5, 15) => { //object

     //A variable is created to show the loop will go through each of the properties
     //inside the object of the varible called numbers  
     var numbers = {
             1: "odd", 
             2: "even", 
             3: "odd", 
             4: "even",
             5: "odd"
          };
           var txt = '';//empty string

           //FOR LOOP: goes through iterating each of the values at i 
              for (var i = 0 ; i < 6; i++) {
                 
                 //assign "i" value for numbers 
                 txt += i + [i] + "<br>"; 

                  // concate() i value with object in position 
                 //and sets to the txt
               }
               //Display txt variable in the p element or element specified on
               //HTML page using inner.HTML 
            ("p").innerHTML += txt;
  } 