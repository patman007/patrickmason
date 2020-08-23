//API url as a variable
let url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

// USD variable by id
let usd = document.getElementById('usd');
usd.setAttribute("src",
'https://api.coindesk.com/v1/bpi/currentprice.json')

//Pounds variable by id
let gbp = document.getElementById('gbp');
gbp.setAttribute("src",
'https://api.coindesk.com/v1/bpi/currentprice.json');

//Euros variable by id
let eur = document.getElementById('eur');
eur.setAttribute("src",
'https://api.coindesk.com/v1/bpi/currentprice.json');

//Radio event listener buttons
//based on individual listeners
var rad = document.myForm.myRadios;
var prev = null;

//For Loop going through the radio buttons
for (var i = 0; i < rad.length; i++) {

    //radio buttons are in an array and added to the 
    //when the radio button is changed.
    //The change function allows the user to go back 
    //and forth on the three currencies
    rad[i].addEventListener('change', function() {

        //If statement for the previous clicked to
        //show a console.log message for the previous value
        (prev) ? console.log(prev.value): null;

        //If statement for the current value selected
        //is not equal to the previous value
        if (this !== prev) {

            //This enable to only show the current value
            //not the previous value for the console.log
            //message below
            prev != this;
        }
        //Console.log message for the radio button currently
        //selected
        console.log(this.value)
    });
}

// Button variable by id
let btn = document.getElementById('btn');


//Event Listener
//When an the Get Price button is clicked by the user
//the fetch steps statements will be intiated  
btn.addEventListener('click', () => {
    console.log('You clicked me')    
    //Fetch Url Statments
    //url
    fetch(url)
    .then(function(res) {
        console.log(res)
        if(res.ok) {
            return res.json()
        }
        //throw an error if the code does not work 
        //correctly
        throw Error('The code is not working')

    }) 
    //Set data depending on the radio button selected   
    .then (data => usd.getAttribute("src", data.message))
    .then (data => gbp.getAttribute("src", data.message))
    .then (data => eur.getAttribute("src", data.message))
    
    //Catch an error to show in the console.log message
    .catch(err => console.error('Error connecting', err))   
})


//Attempt 2
// function displayRadioValue() {
//     var ele = document.getElementsByName('myRadios');

//     for(i = 0; i < ele.length; i++) {
//         if(ele[i].checked)
//         document.getElementById("result").innerHTML = "myRadios"+ele[i].value;
        
//     }
// }
// console.log("result");