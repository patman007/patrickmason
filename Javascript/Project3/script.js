
//First Number
var num1 = parseInt(prompt("Give me a number: "));
document.write("<div>First Number is: " + num1 + "</div>");
console.log("First Number: " + num1);

//Second Number
var num2 = parseInt(prompt("Give me another number: "));
document.write("<div>Second Number is: " + num2 + "</div>");
console.log("Second Number: " + num2);

//Third Number
var num3 = parseInt(prompt("Give me a number again: "));
document.write("<div>Third Number is: " + num3 + "</div>");
console.log("Third Number: " + num3);

//For Loop Function
var sum = [parseInt(num1, 10) + parseInt(num2, 10) +parseInt(num3, 10)];
for (var i = 0; i < sum.length; i++) {
	document.write("<div> The sum of all your numbers is: " + sum[i] + "</div>");
	console.log("The sum of all your numbers is " + sum[i]);
}

//Anonymous For each Loop Function
//var sum = [parseInt(num1, 10) + parseInt(num2, 10) +parseInt(num3, 10)];
//sum.forEach(function(total) {
	//document.write("<div> The sum of all your numbers is " + total + "</div>")
	//});




	









