// function formValidate(evt) {
//     // evt.preventDefault();
//     console.log(email.value) 
//     if (email.value == "" || email.value == null) { // tests to see if email field is filled out
//         alert("Please fill out email address"); //displays alert if field is not field out
//     } else if (password.value == "" || password == null) { //tests to see if password field is filled ouot
//         alert("Please fill out password"); //displays alert if password field empty
//     } else { //both fields filled out?
//         alert("Congratulations! Information received"); //displays confirmation alert that info has been received
//     } //closes if..else   
// }//closes verification function

//USE below if not using an onsubmit method

//form validation and prevention of submission
//event handler
function createSubmitListener(){
    var FORM = document.getElementsByTagName("form")[0];
        if (FORM.addEventListener) {
            FORM.addEventListener("submit", formValidate, false);
        } else if (FORM.attachEvent) { //prior IE 9
            FORM.attachEvent("onsubmit", formValidate);
        }//closes if statements	
}//closes createListener function


//creates event listener when page loads
if (window.addEventListener) {
	window.addEventListener("load", createSubmitListener, false);
	} else if (window.attachEvent) { //prior IE 9
		window.attachEvent("onload", createSubmitListener);
	}//closes window listener