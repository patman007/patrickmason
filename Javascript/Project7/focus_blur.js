//Form Event Javascript  Way 1
//Email Variables
var theEmail = document.getElementById("email");
var warning = document.getElementById("theForm");

// Does not Appear when use Bootstrap
theEmail.addEventListener("focus", function() {
    warning.textContent = "Please enter a valid email."
});


//Blur Event Email
theEmail.addEventListener("blur", function() {
    if (theEmail.value == "") {
        alert("Please Check the fields and make sure they are not blank");
    } else {
        warning.textContent = "";        
    }
});


//Password Variables
var thePassword = document.getElementById("password");
var warning1 = document.getElementById("theForm");

//Focus Event Password
thePassword.addEventListener("focus", function() {
    warning1.textContent = "Please enter a valid password."
});


//Appears when I use Bootstrap
thePassword.addEventListener("blur", function() {
    if (thePassword.value == "") {
        alert("Please Check the fields and make sure they are not blank");
    } else {
        warning.textContent = "";        
    }
});


/////////////////////////////////////////////////////////////////////////////////

// // Form Event Javascript Way 2 for Bootsratp Method rough draft
// // Use of calling a function instead of doing 
// // Email Variables
// var warning = document.getElementById("theForm");
// var theEmail = document.getElementById("email");


// theEmail.addEventListener("focus", displayEmail);
// //Email Function 1
// function displayEmail() {
//     warning.textContent = "Please enter a valid email." 
//     //I do not see this message when the input is selected    
// };


// theEmail.addEventListener("blur", displayEmail1);
// //Email Function 2
// function displayEmail1() {
//     if (theEmail.value == "") {
//         alert("Please Check the fields and make sure they are not blank");
//     } else {
//         warning.textContent = "";
//         console.log("Clear"); // I do not see this message in the console            
//     }
// };



// ///Password Variables
// var warning1 = document.getElementById("theForm");
// var thePassword = document.getElementById("password");


// thePassword.addEventListener("focus", displayPassword);
// //Password Function 1
// function displayPassword() {
//     warning1.textContent = "Please enter a valid password."
//     //I do not see this message when the input is selected 
// };


// thePassword.addEventListener("blur", displayPassword1);
// //Password Function 2
// function displayPassword1() {
//     if (thePassword.value == "") {
//         alert("Please Check the fields and make sure they are not blank");
//     } else {
//         warning.textContent = "";
//         console.log("Clear"); // I do not see this message in the console            
//     }
// };











