//var name = prompt("Please enter your name: ");
//var snack = prompt("What is your favorite snack?");
//var drink = prompt("What is your favorite drink?");
//Disregard comments in lines 2 to 4.


//Project 1 Function Calling on paramenters in the variables
//Making a function with parameters name, snack and drink
//inside the function called myFunction()
function Myfunction(name, snack, drink) {
    if (name != null) {
        //if statement for name not equal != null meaning the prompt 
        //has to be filled in order to continue on.
        //Using document.getElementbyID to show the 
        //innerHTML message on the webpage for name.
        document.write("Hi there  " + name + ",");
        //Using console.log to show the message to the developer 
        //to do double checking.
        console.log("Hi there  " + name + ",");
    } 
    if (snack != null) {
        //if statement for snack not equal != null meaning the prompt or parameters
        //has to be filled in order to continue on.
        //Using document.getElementbyID to show the 
        //innerHTML message on the webpage for snack.
        document.write("it seems that you enjoy eating " + snack);
        //Using console.log to show the message to the developer
        //to double checking.
        console.log("it seems that you enjoy eating " + snack);        
    } 
    if (drink != null){
        //if statement for drink not equal != null meaning the prompt or parameters
        //has to be filled in order to continue on
        //Using document.getElementbyID to show the 
        //innerHTML message on the webpage for drink 
        document.write("and drinking" + drink);
        //Using console.log to show the message to the developer
        //to double checking.
        console.log("and drinking" + drink);
    }
    //Return stateement shows the return can be called at the very end of the myFunction()
    //function.
    return ("Hi there " + name + ", it seems that you enjoy eating " + snack + 
    " and drinking " + drink);        
};

//Invoking the function with the parameters from the function 
//without using a prompt: 
//Patrick is for name
//Avocado is for snack
//Powerade is for drink
Myfunction("Patrick", "Avocado", "Powerade");