// Please use the following formula for calculating BAC:

// BAC% = (A × 5.14 / W × r) - 0.015 × H

// A: Total alcohol consumed, in ounces (oz) W: Body weight, in pounds (lbs) r: The alcohol 
// distribution ratio, 0.73 for man, and 0.66 for women H: Time passed since drinking, in hours

// Alcohol consumed will be passed as a drinks object with two properties: ounces 
// (the total volume of beverage consumed in ounces), and abv (the % of alcohol by volume of the
// beverage as a floating point number--such as 0.05 for 5% abv beer or 0.4 for 40% abv whisky). 
// For simplicity, Bob assures us that he drinks the same kind of beverage each time he drinks.

// The gender will be passed as a string, either "male" or "female".

// Output must be returned as a number data-type, greater than or equal to 0, with up to 4 decimal 
// places. No error handling is needed.

// Using these parameters, create the function that will calculate Bob's and other partier's BAC.

///////////////////////////////////////////////////////////////////////////////////////////////////

// Blood Alcohol Calculator

// BAC% = (A × 5.14) / (W × r) - .015 × H

// A: Total alcohol consumed, in ounces (oz)
// W: Body weight, in pounds (lbs)
// r: The alcohol distribution ratio, 0.73 for man, and 0.66 for women
// H: Time passed since drinking, in hours
// Create a function getBAC(weight, gender, drinks, drinkType, hours) that takes the following:

// weight - a person's body weight,
// gender - their gender as a string "M" or "F",
// drinks - the number of drinks they've had
// drinkType - a string "beer" or "whiskey" representing the type of drinks
// hours - hours since last drink
// Note:
// Beers are 8oz and 5% alcohol by volume
// Whiskeys are 4oz and 40% alcohol by volume

// The function should return the correct BAC for arguments you feed in. For example:

getBAC(125, "F", 4, "whiskey", 4) // => 0.2590
getBAC(160, "M", 22, "beer", 2) // => 0.3573
getBAC(180, "M", 45, "beer", 3) // => 0.6591
getBAC(180, "F", 35, "beer", 3) // => 0.5607
getBAC(400, "M", 1, "whiskey", 3) // => -0.0225 and answer should not generate because it is not
// greater than or equal to zero. 0 is the lowest BAC, not a negative number.
// Fun fact: You might wonder why weight and sex matters in this calculation. 
//It's because the rate at which a person can metabolize alcohol is dependent on the amount of the enzyme 
//alcohol dehydrogenase that's in the blood! And that amount differs between the sexes.

function getBAC(weight, gender, drinks, drinkType, hours) {
    //distribution between Male and Female
    //IF ELSE Statement
  let distribution;
    if (gender == "F") {
        distribution = 0.66;
    } 
    else {
        distribution = 0.73;
    }

    //total ALC IF ELSE Statement
    let totalAlc;    
    if (drinkType == 'beer') {
        totalAlc = 8 * drinks * 0.05;
    } 
    else {
        totalAlc = 4 * drinks * 0.40;
    }

    //BAC IF ELSE Statement
    const BAC = ((totalAlc * 5.14) / (weight * distribution)) - (0.015 * hours);
    if (BAC >= 0) {
        //Return a Number type BAC and have 4 decimal places.
        return Number(BAC.toFixed(4));
    }
    else {
        console.log("BAC is NOT greater than or equal to 0");
    }      
}
