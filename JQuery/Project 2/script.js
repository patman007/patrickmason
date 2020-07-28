$('#submit').on('click', function() {
    valid = true;     

    if (valid && $('#email').val() === '' || valid && $('#email').val() === null) {
        $("p").text("You must enter a valid email address"); 
        $("#email").css("background-color", "#f7f8bc");        
        valid = false;
    }  

    if (valid && $('#password').val() === '' || valid && $('#password').val() === null) {
        $("p").text("You must enter a valid password");
        $("#password").css("background-color", "#f7f8bc");        
         valid = false;
    } 

    return valid;
});

//Attempt 1
// document.ready(function() {
//     let theEmail = $('#email').val();
//     let thePassword = $('#password').val();
//     valid = true

//     $('#submit').on('click', function() {        
//         //conditional to check name input
//         if(valid && theEmail == null ||  valid && theEmail == ""){
//             $('p').push("Please enter an email");
//             $("#email").css("background-color", "#f7f8bc");
//             valid = false;
//         };

//         //condition to check password
//         if(thePassword.length <= 6){
//             $('p).push("Password must be greater than 6 characters");
//             $("#password").css("background-color", "#f7f8bc");
//             valid = false;
//         };

//         if(errors.length > 0){
//             //Display these error messages
//             // event.preventDefault();
//             $("#textwrap").css("border","1px solid red");
//             $(".errorMessage").text() = errorsMessage.join(", ");
//             $(".errorMessage").css("color", "red");
            
//         };
        
//     });   
//     return valid;   
// });
