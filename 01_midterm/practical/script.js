const kmInput = (valNum) => {
    //Get the Element By Id and round the numbers to 2 decimal places
    document.getElementById("outputKilometers").innerHTML=(Math.round(valNum/0.62137).toFixed(2));
}

const milesInput = (valNum) => {
    //Get the Elemeent By Id and round the numbers to 2 decimal places
    document.getElementById("outputKilograms").innerHTML=(Math.round(valNum/2.2046).toFixed(2));    
}