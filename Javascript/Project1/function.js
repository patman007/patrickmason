//Project 1 Function variables do not use Lines 2 to 4 for prompts
//var name = prompt("Please enter your name: ");
//var snack = prompt("What is your favorite snack?");
//var drink = prompt("What is your favorite drink?");

function Myfunction(name, snack, drink) {
    if (name != null) {
        document.write("Hi there  " + name + ",");
        console.log("Hi there  " + name + ",");
    } 
    if (snack != null) {
        document.write("it seems that you enjoy eating " + snack);
        console.log("it seems that you enjoy eating " + snack);        
    } 
    if (drink != null){ 
        document.write("and drinking" + drink);
        console.log("and drinking" + drink);
    }
    return ("Hi there " + name + ", it seems that you enjoy eating " + snack + " and drinking " + drink);        
};

//Invoking the function
Myfunction("Patrick", "Avocado", "Powerade");