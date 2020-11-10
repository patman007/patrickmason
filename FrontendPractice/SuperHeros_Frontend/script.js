//ID variable of SuperHero
let id = document.getElementById('id');
//NAME variable of SuperHero
let name = document.getElementById('name');
//INTELLIGENCE variable of SuperHero
let intelligence = document.getElementById('intelligence');
//STRENGTH variable of SuperHero
let strength = document.getElementById('strength');
//SPEED variable of SuperHero
let speed = document.getElementById('speed');
//DURABILITY variable of SuperHero
let durability = document.getElementById('durability');
//POWER variable of SuperHero
let power = document.getElementById('power');
//COMBAT variable of SuperHero
let combat = document.getElementById('combat');

//BUTTON variable of SuperHero
let btn = document.getElementById('btn');


//Consume apiKey and API Url endpoint
let apiKey = 10158830495094328; 
// let endpoint = 'https://superheroapi.com/api/10158830495094328';
let endpoint = `https://superheroapi.com/api/${apiKey}/`
console.log(endpoint)

// let superhero = document.getElementById('superhero').value
let url = `${endpoint}1/powerstats`
console.log(url)

//IMAGE variable of SuperHero
let image = document.getElementById('pic')
image.setAttribute('src', `https://superheroapi.com/api/${apiKey}/1/image`)

//Suggested Fix online for Cor
// (function() {
//     var cors_api_host = 'cors-anywhere.herokuapp.com';
//     var cors_api_url = 'https://' + cors_api_host + '/';
//     var slice = [].slice;
//     var origin = window.location.protocol + '//' + window.location.host;
//     var open = XMLHttpRequest.prototype.open;
//     XMLHttpRequest.prototype.open = function() {
//         var args = slice.call(arguments);
//         var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
//         if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
//             targetOrigin[1] !== cors_api_host) {
//             args[1] = cors_api_url + args[1];
//         }
//         return open.apply(this, args);
//     };
// })();

btn.addEventListener('click', event  => {    
    event.preventDefault();
    console.log('You clicked me')

    //4 parts of Fetch API
    fetch(url)
    .then(function(response) {

        console.log(response)
        
        if(!response.ok) {

             // throw Error('SuperHeros API is not working !!!')
            res.send({code: 67, message: "SuperHero API not working"})                      
        }       
        return response.json()     

    })
    .then(data =>(image.setAttribute("src", data.image),                    
                (id.innerHTML = data.id),                    
                (name.innerHTML = data.name),
                (intelligence.innerHTML = data.intelligence),
                (strength.innerHTML = data.strength),
                (speed.innerHTML = data.speed),
                (durability.innerHTML = data.durability),
                (power.innerHTML = data.power),
                (combat.innerHTML = data.combat)))    
                    
    .catch(err => console.error("Error connecting", err))   
    // .catch(() => console.log("Cant access " + url + "response.Blocked by Browser"))             

});
