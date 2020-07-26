$(document).ready(function() {
	$('#submit').click(function() {
		let emailTrue = $("#email").val();
		let passwordTrue = $('#password').val();
		let passwordLength = $('#password').val().length;

		$('#email').focus(function () {
			emailTrue;

			$('#email').blur(function() {
				let emailPattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);

				if(emailTrue == "") {
					//if statement checking for empty text in email
					$('#email').next().text('*** Please enter a vaild email ***').addClass('p');
					return email = false; 
				}

				if (!emailPattern.test(emailTrue)) {					
					//email error if else statement
					$("#email").css("background-color", "#f7f8bc"); 
					$('#displayEmaillMessage').text
					('*** Please enter a vaild email ***').addClass('p');
					return emailTrue = false;	
				} else {
						//email no error found 
						$('#displayEmailMessage').text('');
						return emailTrue = true;
				};					
			});						
		});	


		$('#password').focus(function() {
			//clears placeholder and adds password type attriute to keep password hidden
			$('#password').removeAttr('type').attr('type', 'password').val('');

			$('#password').blur(function() {
				passwordLength;

				if(passwordTrue == "") {
					//if statement checking for empty ext in password
					$("#password").css("background-color", "#f7f8bc"); 
					$('#password').next().text('*** Please enter a vaild password***').addClass('p');
					return email = false; 
				}
				
				if(passwordLength < 6) {
					//password error if else statement
					$("#email").css("background-color", "#f7f8bc"); 
					$('#displayPasswordMessage').text
					('*** Your password should be six characters or more ***').addClass('red');
					return passwordTrue = false;

				} else {
					//password no error found
					$('#displayPasswordMessage').text('');
					return passwordTrue = true;
				}
			});
		});
		
		$('#submit').submit(function(e) { // once submit button is clicked
			if (emailTrue && passwordTrue) { // receives verification that both email and password passed verification
				
				alert('Form has been successfully submitted'); // alerts user to success and form is submitted
			} else { 
				// displays to user that there are still errors that need to be fixed
				$('#displayEmailMessage').text('*** Please enter a vaild email ***').addClass('red');

				$('#displayPasswordMessage').text('*** Your password should be six characters or more ***').addClass('red');
				e.preventDefault(); // prevents form from beng submitted
			}; // closes verification 
		}); // closes submit
	});
});


