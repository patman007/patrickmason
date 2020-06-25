//Questions for Project 1
//Were we supposed to use practice using document.write? 
//I could not get it to show up here until I used document.getElementById. 
//In class we got the text to appear using document.write() without using document.getElementById

var name = prompt("Please enter your name: ");
if (name!= null) {
    document.getElementById("your_name").innerHTML = "Hi there " + name + ",";
    console.log("Hi there  " + name + ",");
    alert("Hi there  " + name + ",");
}
var snack = prompt("What is your favorite snack?");
if (snack!= null) {
    document.getElementById("your_food").innerHTML = "it seems that you enjoy eating " + snack;
    console.log("it seems that you enjoy eating " + snack);
    alert("it seems that you enjoy eating " + snack);
}

var drink = prompt("What is your favorite drink?");
if (drink!= null) {
    document.getElementById("your_drink").innerHTML = "and drinking " + drink;
    console.log("and drinking " + drink);
    alert("and drinking " + drink);      
}
//Question for Project 1
//Is this what we were supposed to do for the message? (See next line) 
//document.write("Hi there " + name + " it seems that you enjoy eating " + snack + " and drinking " + drink + ".");


//Other way to do Project 1 with a function
//If a Function was used I tried to do it this way
//I could not get it to appear in on the webpage
//function welcome(name, drink, food ) {
    //if (name != null) {
    //    document.write("Hi there  " + name + ",");
    //    console.log("Hi there  " + name + ",");
    //} else if (snack != null) {
    //    document.write("it seems that you enjoy eating " + snack);
    //    console.log("it seems that you enjoy eating " + snack);        
    //} else {
    //    (drink != null) 
    //    document.write("and drinking" + drink);
    //    console.log("and drinking" + drink);
    //}
    //return ("Hi there  " + name + ", it seems that you enjoy eating " + snack + "and drinking " + drink);        
//}
