//Project 7 Form Event Javascript  Way 1
//Email Variable and Password Variable
var theEmail = document.getElementById("email");
var thePassword = document.getElementById("password");

//Use Query Selector to create a function on the submit button
document.querySelector("form").addEventListener("submit", function(event) {

    //Make an empty array to have errors push for the IF Statements
    var errors =[];

    //IF STATEMENT: If the email is strict equal (===) null OR empty('') 
    //push an error message. Conditional to check name input
    if(theEmail.value === null || theEmail.value === "") {

        //Error message if it passes one of the conditions for null
        //or empty for email
        errors.push("Please enter an email address");
    };


    //IF STATEMENT: If the password is strict equal (===) null OR (||) 
    //empty ('') OR (||) password legnth is less than six characters in 
    //push an error message. Conditional to check password.    
    if(thePassword.value === null || thePassword.value === "" || 
    thePassword.value.length <= 6) {

        //Error message if it passes one of the three conditions for null
        //empty, or less than six characters for Password
        errors.push("Password must be entered and greater than 6 characters");
    }

    //IF STATEMENT: If any of the error happen for Password or Email stop the 
    //function(event).Display the error messages
    if(errors.length > 0) {

        //Stop the function(event).Display the error messages
        event.preventDefault();  

        //When the error messages happen use DOM Manipulation to change
        //contents for the error messages to happen if one or both errors
        //for the Password and Email appear      
        document.querySelector("p").textContent = errors.join(", ");
        document.querySelector("p").style.color = "red";
    }

});

