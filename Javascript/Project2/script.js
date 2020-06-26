var name = prompt("Tell me your name: ");

function Myname(name) {
    if(name == ""){
        document.write("You are going to have a wonderful day," + name);
        console.log("You are going to have a wonderful day," + name);
        alert("You are going to have a wonderful day," + name);
    }    
}
//Having problems invoking any name
//Invoking Function only lists the name specified, but I want any name.
Myname("");



//Having issues parsing the prompt box and getting the numbers to add in document.write and console method
//Integer attempt 1
//var num1 = parseInt(prompt("Give me a number"));
//var num2 = parseInt(prompt("Give me another number"));


//function myNumber(num1, num2) {
//    if(num1 != null){
//        document.write(parseInt(num1));
//        console.log(parseInt(num1));     
//    }

//    if(num2 != null) {
//        document.write(parseInt(num2));
//        console.log(parseInt(num2));        
//    }
//      var theTotal = parseInt(num1, 10) + parseInt(num2, 10);
//    document.write("By the way, the sum of your numbers is " num1 + " added to " + num2 + " equals "  + theTotal);

//    return ("By the way, the sum of your numbers is" + sum);
//};


//Integer attempt 2 I found online and reworded it a bit to Project 2
var firstNumber = prompt("Enter the first number","");
var secondNumber = prompt("Enter the second number","");
function MyNumber() {    
    if (firstNumber == "" || secondNumber == "") {
        var firstNumber = prompt("Enter the first number","");
        var secondNumber = prompt("Enter the second number","");
} else {
    var theTotal = parseInt(firstNumber, 10) + parseInt(secondNumber, 10);
    document.write("By the way, the sum of your numbers is "+ firstNumber + " added to " + secondNumber + " equals "  + theTotal);
    document.write(firstNumber + " added to " + secondNumber + " equals "  + theTotal);

}
  

}

//Integer attempt 2 I found online that seems to help a bit
//var firstNumber = prompt("Enter the first number","");
//var secondNumber = prompt("Enter the second number","");
//if (firstNumber == "" || secondNumber == "") {
//   var firstNumber = prompt("Enter the first number","");
//   var secondNumber = prompt("Enter the second number","");
//}else{
//   var theTotal = parseInt(firstNumber, 10) + parseInt(secondNumber, 10);
//document.write("By the way, the sum of your numbers is "+ firstNumber + " added to " + secondNumber + " equals "  + theTotal);
//document.write(firstNumber + " added to " + secondNumber + " equals "  + theTotal);
//}
