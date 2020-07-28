//Global Scope variable
//var name = prompt("Tell me your name: ");

//FUNCTION 1
//myName function calls the prompt variable name to generate a name 
//variable name is a parameter inside the function to be invoked
function myName(name) {
    //Local Scope variable: name
    //Make a variable called nam to ask the user what is 
    //their name is either first or full name.
    var name = prompt("Tell me your name: ");

    //IF STATEMENT: If name variable is not null (empty) OR (||)
    //then the function can move onto function myNumber
    if(name !== null){

        //Using document.write this will be called on the 
        //HTML webpage as text concatenated message below.
        document.write("You are going to have a wonderful day, " 
        + name + ".");

        //Using console.log to show the message to the developer
        //to double check num1 variable.
        console.log("You are going to have a wonderful day, " 
        + name + ".");

        //Using alert message to show the user what the prompt 
        //is showing from the user response of name 
        //with a pop up box.
        alert("You are going to have a wonderful day, " 
        + name + ".");  
    }          
}
myName("");
//Enter any name to invoke the function on the prompt
//If Myname("Patrick") it only allows Patrick as the output for the name


//Global Scope variables
//var num1 = parseInt(prompt("Give me a number"));
//var num2 = parseInt(prompt("Give me another number"));

//FUNCTION 2
//myNumber function calls the prompt variable name to 
//generate two numbers and then add both numbers together.
//Variable num1 and num2 are parameters inside the 
//function to be invoked.
function myNumber(num1, num2) {

    //LOCAL SCOPE VARIABLE 1: num1   
    //Make a variable called num1 to ask the user what is 
    //their first number to choose in the prompt.
    //The parseInt only allows numbers to be entered.
    var num1 = parseInt(prompt("Give me a number: "));

    //Using document.write this will be called on the 
    //HTML webpage as text concatenated message below.
    document.write("First Number: " + num1);

    //Using console.log to show the message to the developer
    //to double check num1 variable.
    console.log("First Number:" + num1);    

    //LOCAL SCOPE VARIABLE 2: num2
    //Make a variable called num1 to ask the user what is 
    //their first number to choose in the prompt.
    //The parseInt only allows numbers to be entered.
    var num2 = parseInt(prompt("Give me another number: "));

    //Using document.write this will be called on the 
    //HTML page the concatenated message below.
    document.write("Second Number is: " + num2);

    //Using console.log to show the message to the developer
    //to double check num1 variable.
    console.log("Second Number: " + num2);   


    //IF STATEMENT: If num1 variable is not null (empty) OR (||)
    //If num2 variable is not null (empty) then the numbers can be added
    if (num1 !== null || num2 !== null) { 
        
        //LOCAL SCOPE VARIABLE 3: theTotal
        //Make a variable called num1 to ask the user what is 
        //their first number to choose in the prompt.
        //The parseInt only allows numbers to be entered.
        var theTotal = parseInt(num1, 10) + parseInt(num2, 10);

        //Using document.write this will be called on the 
        //HTML page the concatenated message below.
        document.write(" By the way, the sum of your numbers is " 
        + num1 + " added to " + num2 + " equals "  + theTotal ); 

        //Using console.log to show the message to the developer
        //to double check num1 variable.
        console.log(" By the way, the sum of your numbers is " 
        + num1 + " added to " + num2 + " equals "  + theTotal );

        //Using alert message to show the user what both responses
        //to variable num1 and num2 prompts to get a theTotal (sum) 
        //with a pop up box.    
        alert(" By the way, the sum of your numbers is " 
        + num1 + " added to " + num2 + " equals "  + theTotal );                
    }   
    
}
myNumber("", "");
//Enter any number to invoke the MyNumber on the prompts function
//If myNumber has("52", "45") it only allows those two numbers to
//be called upon since they are called in the myNumber function.

