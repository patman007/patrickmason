//FUNCTION: Converts the pounds (lbs) to kilograms 
// when the user uses the arrows in the text box
//to change the number.

const kmInput = (valNum) => {

    //Get the Element By Id and round the numbers to 
    //2 decimal places.
    document.getElementById("outputKilometers").innerHTML=(Math.round(valNum/0.62137).toFixed(2));
}

//FUNCTION: Converts the miles into kilometers 
// when the user uses the arrows in the text box 
//to change the number.

const milesInput = (valNum) => {

    //Get the Elemeent By Id and round the numbers to 
    //2 decimal places.
    document.getElementById("outputKilograms").innerHTML=(Math.round(valNum/2.2046).toFixed(2));    
}