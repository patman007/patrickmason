// Attempt 1
// $(document).ready(function() {
// 	$('#submit').click(function() {
// 		let emailTrue = $("#email").val();
// 		let passwordTrue = $('#password').val();
// 		let passwordLength = $('#password').val().length;

// 		$('#email').focus(function () {
// 			emailTrue;

// 			$('#email').blur(function() {
// 				let emailPattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);

// 				if(emailTrue == "") {
// 					//if statement checking for empty text in email
// 					$('#email').next().text('*** Please enter a vaild email ***').addClass('p');
// 					return email = false; 
// 				}

// 				if (!emailPattern.test(emailTrue)) {					
// 					//email error if else statement
// 					$("#email").css("background-color", "#f7f8bc"); 
// 					$('#displayEmaillMessage').text
// 					('*** Please enter a vaild email ***').addClass('p');
// 					return emailTrue = false;	
// 				} else {
// 						//email no error found 
// 						$('#displayEmailMessage').text('');
// 						return emailTrue = true;
// 				};					
// 			});						
// 		});	

// 		$('#password').focus(function() {
// 			//clears placeholder and adds password type attriute to keep password hidden
// 			$('#password').removeAttr('type').attr('type', 'password').val('');

// 			$('#password').blur(function() {
// 				passwordLength;

// 				if(passwordTrue == "") {
// 					//if statement checking for empty ext in password
// 					$("#password").css("background-color", "#f7f8bc"); 
// 					$('#password').next().text('*** Please enter a vaild password***').addClass('p');
// 					return email = false; 
// 				}
				
// 				if(passwordLength < 6) {
// 					//password error if else statement
// 					$("#email").css("background-color", "#f7f8bc"); 
// 					$('#displayPasswordMessage').text
// 					('*** Your password should be six characters or more ***').addClass('red');
// 					return passwordTrue = false;

// 				} else {
// 					//password no error found
// 					$('#displayPasswordMessage').text('');
// 					return passwordTrue = true;
// 				}
// 			});
// 		});
		
// 		$('#submit').submit(function(e) { // once submit button is clicked
// 			if (emailTrue && passwordTrue) { // receives verification that both email and password passed verification
				
// 				alert('Form has been successfully submitted'); // alerts user to success and form is submitted
// 			} else { 
// 				// displays to user that there are still errors that need to be fixed
// 				$('#displayEmailMessage').text('*** Please enter a vaild email ***').addClass('red');

// 				$('#displayPasswordMessage').text('*** Your password should be six characters or more ***').addClass('red');
// 				e.preventDefault(); // prevents form from beng submitted
// 			}; // closes verification 
// 		}); // closes submit
// 	});
// });

$(document).ready(function(){
	$('form').submit(function(){
		var errorMessages = false;
		$('.warning').html(''); //clear our error messages everytime the submit button is clicked

		var email = $('input[name=email]').val();
		var password = $('input[name=password]').val();
		// event.preventDefault();
		

		function emailChecker(email) {
			var regex = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
			return regex.test(email); // Returns true or false
			
		}

		if (!emailChecker(email)){
			errorMessages = true;
			$("#email").css("background-color", "#f7f8bc");
			$('.warning').text('You must enter a valid email.');
		}

		if (password.length < 6){
			errorMessages = true;
			$("#password").css("background-color", "#f7f8bc");
			$('.warning').text('Your password is too short.');
			
		}
		

		if(errorMessages == true){
			return false; // It returns false to prevent the form from being submitted.
		}	

	});
	
});
