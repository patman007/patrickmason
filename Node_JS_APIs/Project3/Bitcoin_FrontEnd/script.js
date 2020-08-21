
//USD variable by id
let usd = document.getElementById('usd');
usd.getAttribute("src",
'https://api.coindesk.com/v1/bpi/currentprice.json')

//Pounds variable by id
let gbp = document.getElementById('gbp');
gbp.getAttribute("src",
'https://api.coindesk.com/v1/bpi/currentprice.json');

//Euros variable by id
let eur = document.getElementById('eur');
eur.getAttribute("src",
'https://api.coindesk.com/v1/bpi/currentprice.json');

//Button variable by id
let btn = document.getElementById('btn');

//API url as a variable
let url = 'https://api.coindesk.com/v1/bpi/currentprice.json';


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


//Event Listener
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
    //Get back data depending on the radio button selected   
    .then (data => usd.getAttribute("src", data.message))
    .then (data => gbp.getAttribute("src", data.message))
    .then (data => eur.getAttribute("src", data.message))
    
    //Catch an error to show in the console.log message
    .catch(err => console.error('Error connecting', err))   
})