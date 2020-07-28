//Project 1 Official answer without a Function

//NAME VARIABLE
//Make a variable called name to ask the user what is 
//their name. This can be full name. 
var name = prompt("Please enter your name: ");

//if statement for name not equal != null meaning the 
//prompt has to be filled in order to continue on.
if (name!= null) {

    // Using document.getElementbyID to show the innerHTML message 
    //on the webpage.
    document.getElementById("your_name").innerHTML = "Hi there " 
    + name + ",";

    //Using console.log to show the message to the developer
    //to double check name.
    console.log("Hi there  " + name + ",");

    //Using alert message to show the user what the prompt 
    //is showing from the user response for their name.
    alert("Hi there  " + name + ",");
}


//SNACK VARIABLE
//Make a variable called drink to ask the user what is 
//their favorite snack.
var snack = prompt("What is your favorite snack?");

//if statement for snack not equal != null meaning the 
//prompt has to be filled in order to continue on.
if (snack!= null) {

    //Using document.getElementbyID to show the innerHTML message 
    //on the webpage.
    document.getElementById("your_food").innerHTML = "it seems that you enjoy eating "
     + snack;

    //Using console.log to show the message to the developer
    //to double check snack.
    console.log("it seems that you enjoy eating " + snack);

    //Using alert message to show the user what the prompt 
    //is showing from the user response for snack as a 
    //popup box.
    alert("it seems that you enjoy eating " + snack);
}


//DRINK VARIABLE
//Make a variable called drink to ask the user what is 
//their favorite drink.
var drink = prompt("What is your favorite drink?");

//if statement for drink not equal != null meaning the 
//prompt has to be filled in order to continue on.
if (drink!= null) {

    //Using document.getElementbyID to show the innerHTML message 
    //on the webpage.
    document.getElementById("your_drink").innerHTML = "and drinking "
     + drink;

    //Using console.log to show the message to the developer 
    //to double check drink.
    console.log("and drinking " + drink);

    //Using alert message to show the user what the prompt 
    //is showing from the user response for drink as a 
    //popup box.
    alert("and drinking " + drink);      
}

//Using document.getElementbyID to show the innerHTML message 
//on the webpage worked after running through all if statements 
//and variables created.
document.write("Hi there " + name + " it seems that you enjoy eating "
 + snack + " and drinking " + drink + ".");
