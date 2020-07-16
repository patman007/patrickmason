//Attempt 1
// var fname = prompt("Enter your first Name");
// var lname = prompt("Enter your Last Name");

// function fName() {
//     // var first = prompt("Enter your first Name");
//     if (fname != null) {
//         console.log(" My First Name: " + fname);
//         document.getElementById("firstName").innerHTML = fname;
//     } 
// }
// fName("");

// function lName() {
//     // var last = prompt("Enter your Last Name");
//     if (lname != null) {
//         console.log(" My Last Name: " + lname);
//         document.getElementById("lastName").innerHTML = lname;
//     } 
// }
// lName("");


// function fullName() {
//     // var full = prompt("Enter your Last Name");
//     console.log(" Your full name is: " + fname + " " + lname);
// }
// fullName("");


//Calling on onclick for submit button
myName = () => {
    let yourName = {
        fName: firstName.value,
        lName: lastName.value,
        fullName: function(){
            return `Your full name is: ${this.fName} ${this.lName}`;
        }
    }
    demo.innerHTML = yourName.fullName();
    firstName.value = '';
    lastName.value = '';
 }
 

