//Foundation
const express = require('express');
const app = express()
const fetch =  require('node-fetch')

//Axios
const axios =  require('axios');

//Morgan
const logger = require("morgan");
app.use(logger("dev"));

const bodyParser = require('body-parser')
// Body Parser app.use
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json())

//Cors
const cors = require('cors')
app.use(cors())

//Have the ability to use static files to 
//access them in public folder
//Examples are CSS and HTML files
app.use(express.static('public'))


//Set up a port if it has or has not
//specified on PORT 3000 or another
//will be used for the environment (env)
const PORT = process.env.PORT || 3000;

//Consume an endpoint for the API
let endpoint = 'https://api.punkapi.com/v2/beers/'
console.log(endpoint)


//Root Route Handlers

//Root Route Handler ('/')
//app.get will handle only GET HTTP requests 
//Home EJS Root Route Handler
app.get('/', (req, res) => {
    // res.send("I am the home ejs")
    console.log("I am the home ejs")
    res.render('index.ejs')
})

//Results Handler
//app.get will handle only GET HTTP requests
app.get('/results', (req, res) => {
    //Variable used to setup the query
    //in url to be fetched
    let beer_name = req.query.name
    let url = `${endpoint}?name=${beer_name}`

    //FETCH FRAMEWORK (4 Parts)
    //fetch(url)
    //.then((response) => {})
    //.then(() => {})
    //.catch(() => {})

    console.log(url)
    fetch(url)
    .then (response => {
        
        //IF Statment: Tests for errors first before returning
        //response.json to see if we need to work on our code.
        if(!response.ok) {
            // console.log(response)

            //We are testing errors first            
            //different from catch errors.
            //Use a res.send instead of a throw Error
            res.send({code: 55, 
                message: 'Your response failed, please contact support at support@'})
        }
        //json does parsing and returns a string
        return response.json()
    })

    //Looking for results with success with the string valuess
    //send inside of the url endpoint.
    .then(data => {
        
        //do something with the data and renders the results EJS page
        //success
        console.log('data is', {data : data})
        res.render('results.ejs', {data : data})
    })

    //Catch error will show connection errors and
    //handles errors only. Testing of errors are not done here.  
    .catch(error => {
        
        //Console.log message shows a status message 
        //to be handled
        res.status(404).send({error})   
        console.log('Catch error: ', error)             
    })
})

//POST METHOD
axios({
    method: 'post',
    url: '/results',
    data: {
        name: 'Beer',
        description: 'Description'
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

// const BeerUrl = 'http://localhost:3000/results'

//POST METHOD OTHER WAY
// app.post('/results', (req, res) => {
//     console.log("I am the saves ejs")
//     let name = req.body.name       
//     let newBeer = {name: name} 
//     $.ajax({
//         url: BeerUrl,
//         method: "POST",
//         data: newBeer
//     })
//     .done(function(newBeer){
//         let checked = newBeer.isComplete ? "checked" : "";
//         $('input').append(
//         `<input data-id=${newBeer.name}class=${checked}>${newBeer.name} name="checked" 
//         type="checkbox" value="true" onChange="this.form.submit()"></input>`
//         );
//         $('input').val('');
    
//     })    
//     visited.push(newBeer)   
//     // console.log(req.body.name); //Output=> like { searchid: 'Array of checked checkbox' }
//     // console.log(req.body.image); // to get array of checked checkbox    
//     res.redirect('/results')
// });


//Listener
//app.listen is a function used to bind and listen to the 
//connections on a specified host or port
app.listen(PORT, () => console.log(`App listening on port ${PORT}`))
