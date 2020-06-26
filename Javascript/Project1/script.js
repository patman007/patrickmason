//Project 1 Official answer without a Function

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

document.write("Hi there " + name + " it seems that you enjoy eating " + snack + " and drinking " + drink + ".");
