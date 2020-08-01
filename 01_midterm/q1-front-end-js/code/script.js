var firstNum = document.getElementById("first");
var secondNum = document.getElementById("second");
var btn = document.querySelector("input[type='submit']");
var msg = document.querySelector("#message");

btn.onclick = function Multiply(){
   let answer = Multiply(firstNum, secondNum)
   msg.innerText = `The answer is ${answer || ''}`;
}

const endFunction = function(a, b) {
   console.log(a*b);
} 
