// function test() {
// 	document.write("This is a test to see if sheet is being called");
//     }

// NOTE: if you do not know about DOM, use document.write instead of displayResults.innerHTML

function greetings() {

    document.body.innerHTML = "";

    //variable created for failure to fill out prompt
    var txt = "User has chosen not to participate. Please reload page to begin again.";    
    var name = prompt("Please enter your first name:");//prompt box to get name imput
    
        try {//tests for empty prompt response
            if (name === null || name === "") throw txt;
        }
        catch(err) {
            displayResults.innerHTML = err;//displays customized error message
            return;
        }

    var snack = prompt("Please enter your favorite snack: ");

        try {//tests for empty prompt response
            if (snack === null || snack === "") throw txt;
        }
        catch(err) {
            displayResults.innerHTML = err;//displays customized error message
            return;
        }

    var drink = prompt("Please enter your favorite drink: ");

        try {//tests for empty prompt response
            if (drink === null || drink === "") throw txt;
        }
        catch(err) {
            displayResults.innerHTML = err;//displays customized error message
            return;
        }
    
    //sets txt variable with customized message with results from prompts
    txt = "Hi there " + name + ", it seems that you enjoy eating " + snack  + " and drinking " + drink + "!";

    displayResults.innerHTML = txt;//displays results for user
}