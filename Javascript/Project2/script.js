//Global Scope variable
//var name = prompt("Tell me your name: ");

function Myname(name) {
    //Local Scope variable
    var name = prompt("Tell me your name: ");
    if(name !== null){
        document.write("You are going to have a wonderful day, " + name + ".");
        console.log("You are going to have a wonderful day, " + name + ".");
        alert("You are going to have a wonderful day, " + name + ".");  
    }          
}
Myname("");
//Enter any name to invoke the function
//If Myname("Patrick") it only allows Patrick as the output for the name


//Global Scope variables
//var num1 = parseInt(prompt("Give me a number"));
//var num2 = parseInt(prompt("Give me another number"));

function MyNumber(num1, num2) {
    //Local Scope variable 1
    var num1 = parseInt(prompt("Give me a number: "));
    //document.write("First Number: " + num1);
    console.log("First Number: " + num1);    

    //Local Scrop variable 2
    var num2 = parseInt(prompt("Give me another number: "));
    //document.write("Second Number is: " + num2);
    console.log("Second Number: " + num2);    

    if (num1 !== null || num2 !== null) {                 
        var theTotal = parseInt(num1, 10) + parseInt(num2, 10);
        document.write(" By the way, the sum of your numbers is " + num1 + " added to " + num2 + " equals "  + theTotal );       
        console.log(" By the way, the sum of your numbers is " + num1 + " added to " + num2 + " equals "  + theTotal );
        alert(" By the way, the sum of your numbers is " + num1 + " added to " + num2 + " equals "  + theTotal );                
    }    
}
MyNumber("", "");

