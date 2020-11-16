//Variable to define for ids
//Name
let name = document.getElementById('name');
//City
let city = document.getElementById('city');
//State
let state = document.getElementById('state');
//Type
let brewery_type = document.getElementById('brewery_type');
//Phone
let phone = document.getElementById('phone');
//Street
let street = document.getElementById('street');
//Latitude
let lat = document.getElementById('lat');
//Longitude
let long = document.getElementById('long');
//Url
let url = document.getElementById('url');
//Button
let btn = document.getElementById('btn');
//Endpoint
//Consume an endpoint for the API
// let endpoint = 'https://api.openbrewerydb.org/breweries?by_city=san_diego&by_state=california&by_type=micro&sort=name'
let endpoint = 'https://api.openbrewerydb.org/breweries';
console.log(endpoint);

//Event Listener
btn.addEventListener('click', event => { 
    event.preventDefault();   
    let finalurl = `${endpoint}?by_city=${city.value}&?by_state=${state.value}&?by_type=${brewery_type.value}`
    console.log(finalurl);

    fetch(finalurl)
    .then(function(response) {
        if(response.ok) {

            return response.json();
        }
        throw Error('The code is not working')
        // res.send({code: 55, 
        //     message: 'Your response failed, please contact support at support@'})
    })
   
    // // Looking for results with success with the string valuess
    // // send inside of the url endpoint.     
    .then(data => 
       // Set data up with a forEach loop
        data.forEach(function(el) {
            name.innerHTML = el.name,
            city.innerHTML = el.city,
            state.innerHTML = el.state,
            brewery_type.innerHTML = el.brewery_type,
            console.log(el);                
        
    //      Other method does the same thing as the forEach        
    //     let i = 0;
    //     let total = data.length;
    //     let ids = [];
    //     for (; i < total; i++) {
    //         ids.push(data[i].id)
    //     }
    //     console.log(ids)
        
    //     let iterator = data.values()
    //     for (let i of iterator) {
    //         console.log(i);
    //         name.innerHTML = data.name
    //         city.innerHTML = data.city
    //         state.innerHTML = data.state
    //         type.innerHTML = data.brewery_type            
    //     }
    }))

    //Catch an error to show in the console.log message
    .catch(err => console.error('Error connecting', err))
});
