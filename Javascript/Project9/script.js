//Recipe Name Function
function Name(recipe_name) {
    //Local Variable
    var recipe_name = prompt("Please enter recipe name: ");
    if (recipe_name !== null) {        
        console.log("Recipe Name: " + recipe_name);
        document.getElementById("recipe").innerHTML = recipe_name;
    }       
}

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

Serves("");

//Ingredients Function
function Ingredients(arr) {
    //Local Variable
    var arr = []; 
    //Convert all letters to uppercase
    // var arr1 = arr.toUpperCase();?????????
    for (var i = 0; i < 5; i++) {           
        arr[i] = prompt("Enter your ingredient: " + arr); 
        console.log(arr)
        document.getElementById("ingredients").innerHTML = "Ingredients: " + arr;
    }       
}

Ingredients("");

//Directions Function
function Directions(dir) {
    //Local Variable
    var dir = []; 
    //Convert all letters to uppercase
    // var dir1 = dir.toUpperCase();???????
    for (var i = 0; i < 5; i++) {           
        dir[i] = prompt("Enter your direction: " + dir); 
        console.log(dir)
        document.getElementById("directions").innerHTML = "Directions: " + dir; 
    }       
}

Directions("");

//Click button reset form function??????????????
function myFunction() {
    document.getElementById("click").reset();
  }

  myFunction("");

