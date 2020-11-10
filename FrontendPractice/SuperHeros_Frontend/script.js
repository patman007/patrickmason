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
// let apiKey = 10158830495094328; 
let endpoint = 'https://superheroapi.com/api/10158830495094328';
console.log(endpoint)

// let superhero = 'req.query.id'

let url = `${endpoint}/1/`
console.log(url)

const proxyurl = 'https://cors-amywhere.herokuapp.com/'

//IMAGE variable of SuperHero
let image = document.getElementById('pic')
// image.setAttribute('src', `https://superheroapi.com/api/${apiKey}${req.query.id}/image`)



btn.addEventListener('click', event  => {    
    event.preventDefault();
    console.log('You clicked me')

    //4 parts of Fetch API
    fetch(proxyurl + url)
    .then(function(response) {

        console.log(response)
        response.text()
        if(response.ok) {

            return response.json()                        
        }
        res.send({code: 67, message: "SuperHero API not working"})   

    })
    .then(data =>(image.setAttribute("src", data.image),                    
                (id.innerHTML = data.id),                    
                (name.innerHTML = data.name),
                (intelligence.innerHTML = data.powerstats.intelligence),
                (strength.innerHTML = data.powerstats.strength),
                (speed.innerHTML = data.speed),
                (durability.innerHTML = data.durability),
                (power.innerHTML = data.power),
                (combat.innerHTML = data.combat)))
                
    
                    
    // .catch(err => console.error("Error connecting", err))   
    .catch(() => console.log("Cant access " + url + "response.Blocked by Browser"))             

});
