$(document).ready(function(){

    // prevents form from accidentally being sent without proper verifiaction
    let passwordTrue = false;
    let emailTrue = false;

    // as soon as user clicks in email field
    $('#email').focus(function(){ 
        $('#email').val(''); // clears email placeholder value

        // as soon as user leaves field, verification takes place
        $('#email').blur(function(){
            // sets var to have a email pattern to check against
            let emailPattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);

            // NOTE: checks to see if valid email pattern
            if (!emailPattern.test($('#email').val())) { // if email does NOT match standard pattern
                // displays error and what what needs to be done
                $('#validEmailDisplay').text('*** Please enter a vaild email ***').addClass('red');
                return emailTrue = false; //returns false so form will not be accidnetally submitted
            } else {
                // email pattern matches
                $('#validEmailDisplay').text(''); // clears error field for user
                return emailTrue = true; //returns true so form can be submitted
            }; // closes email varification on blur
        }); // closes email blur
    }); // closes password focus

    // as soon as user clicks in password field
    $('#password').focus(function(){ 
        
        // clears placeholder and adds password type attribute to keep password hidden
        $('#password').removeAttr('type').attr('type', 'password').val('');

        // when user leaves the password input field
        $('#password').blur(function(){

            // retireves the length of password
            let pwdLength = $('#password').val().length;

            // NOTE: tests to see if password is appropriate length
            if (pwdLength < 6) { // password less than 6 charachters?

                // displays error and how to resiolve issue for user
                $('#validPasswordDisplay').text('*** Your password should be six characters or more ***').addClass('red');
                return passwordTrue = false; // resets so form will not accidentally be sent
            } else { // password greater than 6 characters?
                $('#validPasswordDisplay').text(''); // clears error field for the user
                return passwordTrue = true; //sets to true to allow for proper form submission
            }; //closes if condition
        }); // closes password blur
    }); // closes password focus


    $('#form-submit').submit(function(e) { // once submit button is clicked
        if (emailTrue && passwordTrue) { // receives verification that both email and password passed verification
            alert('Form has been successfully submitted'); // alerts user to success and form is submitted
        } else { 
            // displays to user that there are still errors that need to be fixed
            $('#validEmailDisplay').text('*** Please enter a vaild email ***').addClass('red');
            $('#validPasswordDisplay').text('*** Your password should be six characters or more ***').addClass('red');
            e.preventDefault(); // prevents form from beng submitted
        }; // closes verification 
    }); // closes submit
}); // closes ready