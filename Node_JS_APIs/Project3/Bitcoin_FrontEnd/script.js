//API url as a variable
let url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

//Radio event listener buttons
//based on individual listeners
var rad = document.myForm.currency;
var curr = 'USD';

// Button variable by id
let btn = document.getElementById('btn');

//Event Listener
//When an the Get Price button is clicked by the user
//the fetch steps statements will be intiated  
btn.addEventListener('click', event => {
    event.preventDefault();
    fetch(url)
    .then(function(res) {
        if(res.ok) {
            return res.json()
        }
        //throw an error if the code does not work correctly
        throw Error('The code is not working')
    }) 
    //Set data depending on the radio button selected   
    .then (data => {
        rad.forEach(function(radio){
            if(radio.checked) curr = radio.value;
        })
        document.getElementById('result').innerHTML = data.bpi[curr].rate_float.toFixed(2)                
    })
    
    //Catch an error to show in the console.log message
    .catch(err => console.error('Error connecting', err))   
})