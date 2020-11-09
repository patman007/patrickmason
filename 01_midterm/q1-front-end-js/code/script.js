// var firstNum = document.getElementById("first").value;
// var secondNum = document.getElementById("second").value;
var btn = document.querySelector("input[type='submit']");
// var msg = document.querySelector("#message");

btn.onclick = function Multiply(firstNum, secondNum){   
   firstNum = parseInt(document.getElementById("first").value);
   secondNum = parseInt(document.getElementById("second").value);
   let message = firstNum * secondNum;
   let p = document.getElementById('message');
   p.innerHTML = `The answer is: ${message}`;

   // let answer = Multiply(firstNum, secondNum)
   // msg.innerHTML = `The answer is ${answer || ''}`;
}

//Not sure on the console.log 
// const endFunction = function(a, b) {
//    console.log(a * b);
// } 

