// assigns name variable when user enters their name at prompt
var name = prompt("Tell me your first name: ");

// assigns first number variable user enters at prompt
var num1 = prompt("Give me a number: ");

// assigns second number variable user enters at prompt
var num2 = prompt("Give me another number: ");


function fname() {
    displayName.innerHTML = "You are going to have a wonderful day, " 
     + name + "."; //displays result of text plus name entered at name prompt
}

function projectMath() {
    var newNum = Number(num1) + Number(num2); //assigns new variable the sum of two numbers entered by user
            //using Number() allows for decimals
            // could also use parseInt() for similar results

        //displays result of text plus the newNum variable for user
    displayNum.innerHTML = "By the way, the sum of your numbers is " + newNum + ".";
}