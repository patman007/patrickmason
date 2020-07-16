//Form Event Javascript  Way 1
//Email Variable and Password Variable
var theEmail = document.getElementById("email");
var thePassword = document.getElementById("password");

//Use Query Selector to create a function on the submit button
document.querySelector("form").addEventListener("submit", function(event) {

    var errors =[];
    //conditional to check name input
    if(theEmail.value === null || theEmail.value === "") {
        errors.push("Please enter an email address");
    };

    //conditional to check password
    //It cannot be null, empty or less than 6 characters
    if(thePassword.value === null || thePassword.value === "" || 
    thePassword.value.length <= 6) {
        errors.push("Password must be entered and greater than 6 characters");
    }

    if(errors.length > 0) {
        //Display the error messages
        event.preventDefault();        
        document.querySelector("p").textContent = errors.join(", ");
        document.querySelector("p").style.color = "red";
    }

});

