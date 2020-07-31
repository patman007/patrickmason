//Project9
//Recipe Name Function
//FUNCTION: The function lets the user input the name of 
//their recipe with an if statement to check on if the 
//value is null or not.
function Name(recipe_name) {

    //Local Variable
    //Variable is a prompt that allows the user to enter 
    //a recipe of any name.
    var recipe_name = prompt("Please enter recipe name: ");

    //IF STATEMENT: If statment suggests if the receipe name
    //is a null value then the user's cannot fill in a recipe 
    //name to appear on the webpage.
    if (recipe_name !== null) {  

        //Using console.log to double check the next function 
        //is working.
        console.log("Recipe Name: " + recipe_name);

        
        //The recipe name is taken from the prompt statement
        //will appear in the HTML based on the id  recipe using 
        //getElementById with innerHTML.
        document.getElementById("recipe").innerHTML = "Name: " 
        + recipe_name;
    }     

}
//Calling/Invoke the Function Name
Name("");


//Servings Function
//FUNCTION: The function lets the user input the name of 
//their recipe with an if statement to check on if the 
//value is null or not.
function Serves(number) {

    //Local Variable
    //Variable is a prompt that allows the user to enter 
    //a number for the servings the recipe is for.
    var number = parseInt(prompt("Please ente the amount of servings: ")
    );


    //IF STATEMENT: If statment suggests if the servings 
    //is a null value then the user's cannot fill in a recipe 
    //name to appear on the webpage.
    if (number !== null ) {         
        
        //Using console.log to double check the next function 
        //is working.       
        console.log("Serves: " + number);

        
        //The serving size is taken from the prompt statement
        //will appear in the HTML based on the id serves using 
        //getElementById with innerHTML.
        document.getElementById("serves").innerHTML = "Serves: " 
        + number;
    } 

    //IF STATEMENT: If statment suggests if the servings 
    //are non a number then the user cannot continue on
    //without making sure a number value is filled in 
    //for the number to appear to appear on the webpage.
    if (isNaN(number)) {

        //Return statement to let the user know they cannot 
        //continue on without putting a number for the 
        //serving.
        return Serves("That is not a number!");
    }          
}
//Calling/Invoke the Function Serves
Serves("");


//Ingredients Function
//FUNCTION: The function lets the user input array of
//items used to make the recipe that runs in a for loop.
//the values cannot greater than (<) 5.
function Ingredients(arr) {
    
    //Local Variable
    //Empty array to plug indexes in the for loop for array
    // The array at this point can any amount of index until
    //the user specifies in the for loop  
    var arr = [];


    //FOR LOOP: The for loop is to make sure var= arr[] only 
    //has a max amount of 5 ingredients (5 indexes). The iterator
    //is var i to stand for the index and increment (x++) in the 
    //for loop
    for (var i = 0; i < 5; i++) { 
        
        //A new array is created when the for loop is started
        //with each index i and the list is entered in a 
        //prompt on the user end.
        arr[i] = prompt("Enter your ingredient: " + arr); 


        //Using console.log to double check the next function 
        //is working.
        console.log(arr)

        //The ingredients are taken from the prompt statement
        //will appear in the HTML based on the id ingredients using 
        //getElementById with innerHTML.
        document.getElementById("ingredients").innerHTML = "Ingredients: "
        + arr;
    }       
}
//Calling/Invoke the Function Ingredients
Ingredients("");


//create a variable constant with document.querySelector
//for the click button at the top of the page for the
//addevent listeners at the end of the script.
const clickButton = document.querySelector('.click');


//FUNCTION: Click Reset Button and this will reload the 
//webpage.
function myReset() { 
    

    //Javascript code that automatically reloads/resets
    //the webpage. 
    window.location.reload();       
}


//FUNCTION: After the myReset Function has been clicked
//an alert message will appear to let the user know the
//webpage has been reset.
function myAlert() {


    //Alert message string to let the user know the webpage
    //has been reset.
    alert("This webpage has reset!");
}


//ADD EVENT LISTENERS and Invoke Functions:
//Both of the addEvent listeners call/invoke
//Functions: myRest() and MyAlert() when the 
//button is clicked by the user.
clickButton.addEventListener('click', myReset);
clickButton.addEventListener('click', myAlert);

