//Recipe Name Function
function Name(recipe_name) {
    //Local Variable
    var recipe_name = prompt("Please enter recipe name: ");
    if (recipe_name !== null) {        
        console.log("Recipe Name: " + recipe_name);
        document.getElementById("recipe").innerHTML = "Name: " + recipe_name;
    }       
}
//Invoke Function
Name("");

//Servings Function
function Serves(number) {
    //Local Variable
    var number = parseInt(prompt("Please ente the amount of servings: "));
    if (number !== null) {        
        console.log("Serves: " + number);
        document.getElementById("serves").innerHTML = "Serves: " + number;
    } 
    if (isNaN(number)) {
        return Serves("That is not a number!")
    }          
}
//Invoke Function
Serves("");

//Ingredients Function
function Ingredients(arr) {
    //Local Variable
    var arr = [];
    //Empty array to plug indexes in for loop
    for (var i = 0; i < 5; i++) {           
        arr[i] = prompt("Enter your ingredient: " + arr); 
        console.log(arr)
        document.getElementById("ingredients").innerHTML = "Ingredients: " + arr;
    }       
}
//Invoke Function
Ingredients("");

