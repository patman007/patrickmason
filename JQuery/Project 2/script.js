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