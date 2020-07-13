
var num = [];

num[0] = Number(prompt("Give a number: "));

num[1] = Number(prompt("Give another number: "));

num[2] = Number(prompt("Give a number again: "));

function numMath() {
    var sumNum = 0; //resets variable to 0
    numLen = num.length; //sets variable to the length (number of elements in num array)
    for (i = 0; i < numLen; i++) { //starts for..loop which will iterate the length amount of times
        sumNum = sumNum + num[i]; //adds previous number to new number based on array element 0-2
    }// closes for loop

    displayResult.innerHTML ="The sum of all your numbers is: " + sumNum; // displays results
}// closes function