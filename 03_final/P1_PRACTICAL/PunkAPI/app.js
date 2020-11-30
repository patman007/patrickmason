//Foundation
const express = require('express');
const app = express()
const fetch =  require('node-fetch')

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

//specified on PORT 3000 or another
//will be used for the environment (env)
const PORT = process.env.PORT || 3000;

//Consume an endpoint for the API
let endpoint = 'https://api.punkapi.com/v2/beers'
console.log(endpoint)

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
    //Variable used to setup the query in url to be fetched
    console.log('req.query is ', req.query)
    let beer_name = req.query.beer_name
    let url = `${endpoint}?beer_name=${beer_name}`
    console.log('my uri is ', url)
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
        data.map(d => console.log(d.id, d.name))
        //do something with the data and renders the results EJS page
        res.render('results.ejs', {data : data})
    })

    //Catch error will show connection errors and
    //handles errors only. Testing of errors are not done here.  
    .catch(error => {
        
        //Console.log message shows a status message 
        //to be handled
        res.status(404).send({error})  
        res.render('/error', {error}) 
        console.log('Catch error: ', error)             
    })
})

app.post('/savestars', (req, res) => {  
    let beer_body = req.body.name
    let beer_description = req.body.description
    let image = req.body.image

    let beer_name = req.query.beer_name

    fetch("https://api.punkapi.com/v2/beers/?beer_name=", {
        method: 'post',
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.parse({
            "name": `${beer_body}`,
            "description": `${beer_description}`,
            "image": `${image}`
        })
      })
      .then(response => {
        
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
      .then(function (data) {
        console.log('Request succeeded with JSON response', data);
        res.render('/savestars', data)
      })
      .catch(function (error) {
        console.log('Request failed', error);
      });
})

//Listener
//app.listen is a function used to bind and listen to the 
//connections on a specified host or port
app.listen(PORT, () => console.log(`App listening on port ${PORT}`))
