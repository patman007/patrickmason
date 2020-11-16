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
let endpoint = `https://superheroapi.com/api/${apiKey}`
console.log(endpoint)


//IMAGE variable of SuperHero
let image = document.getElementById('pic')
image.setAttribute('src', 'https://www.superherodb.com/pictures2/portraits/10/100/1460.jpg')

btn.addEventListener('click', event  => {    
    event.preventDefault();
    console.log('You clicked me')
    // let superhero = document.getElementById('superhero').value
    // let url = `${endpoint}1/powerstats`
    let url = `${endpoint}/${id.value}/powerstats/image/url`
    console.log(url)

    //4 parts of Fetch API
    fetch(url)
    .then(function(response) {

        console.log(response)
        
        if(!response.ok) {
             // throw Error('SuperHeros API is not working !!!')
            res.send({code: 67, message: "SuperHero API not working"})                      
        }      
        //parse the information in json
        return response.json()     
    })
    
    .then(data =>(image.setAttribute('src', data.image),                    
                (id.innerHTML = data.id),                    
                (name.innerHTML = data.name),
                (intelligence.innerHTML = data.intelligence),
                (strength.innerHTML = data.strength),
                (speed.innerHTML = data.speed),
                (durability.innerHTML = data.durability),
                (power.innerHTML = data.power),
                (combat.innerHTML = data.combat)
    ))                        

    .catch(err => console.error("Error connecting", err))   
    // .catch(() => console.log("Cant access " + url + "response.Blocked by Browser"))             

});
