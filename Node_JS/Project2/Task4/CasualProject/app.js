//Foundation
let casual = require('casual');
console.log('casual');

//myProgram Function
const myProgram = () => {
    //Name
    let name = casual.name;
    console.log(`Hello there ${name}!`);
    //Country
    let country = casual.country;
    console.log(`How was your trip to ${country}?`);
    //City
    let city = casual.city;
    console.log(`Did you visit ${city}?\nI sure do hope you had a wonderful time.`);
    //Phone Number
    let phone_number = casual.phone;
    console.log(`Is your phone number still ${phone_number}?\nI will try to give you a call sometime.`);
    //Address
    let address = casual.address;    
    console.log(`By the way, I want to send you a fresh loaf of bread at your address of:\n${address}.`);
    //Month
    let month =  casual.month_name;
    console.log(`Well, I will see you soon. I will be visiting sometime before ${month}.\nUntil then, farewell!`);
};
myProgram();
