//Foundation
const express = require('express');
const app = express()
const fetch =  require('node-fetch')

//Request
// const request = require('request')

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
            res.send({code: 400, 
                message: 'Your response failed, please contact support at support@'})
        }
        //json does parsing and returns a string        
        return response.json(bodyParser)
    })

    //Looking for results with success with the string valuess
    //send inside of the url endpoint.
    .then(data => {
        // data.map(d => console.log(d.id, d.name))
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

// app.post('/savestars', (req, res) => {
//     console.log('I am the post')
//     let endpoint = `https://api.punkapi.com/v2/beers`
//     console.log(endpoint)
//     let beer_name = req.params.beer_name
//     let url = `https://api.punkapi.com/v2/beers/?beer_name=${beer_name}`
//     console.log(url)
//     request (url, function(error, response, body) {
//         if(!error && response.statusCode === 200) {
//             // console.log(response)
//             //receive and parse the json
//             let parsedData = JSON.parse(body)
//             console.log(parsedData)
//             //do something with parsed json
//             res.render('/savestars', {data : parsedData});
//         } else {
//             res.status(404).send({error})
//             res.render('/error', {error})
//         }
//     })
// })

app.post('/savestars', (req, res)  => {  
    console.log('I got a post')

    const body = { 
        beer_name : 'Buzz',
        description: 'asdkasjd;f',
        image:  'image'       
    }

    console.log('req.body is ', req.body) 

    fetch('https://api.punkapi.com/v2/beers/random', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {            
            'Content-type': 'application/json'}
      })
      .then(response => {
        
        //IF Statment: Tests for errors first before returning
        //response.json to see if we need to work on our code.
        if(!response.ok) {
            // console.log(response)

            //We are testing errors first            
            //different from catch errors.
            //Use a res.send instead of a throw Error
            res.send({code: 404, 
                message: 'Your response failed, please contact support at support@'})
        }
     
        //json does parsing and returns a string
        return response.json(bod)
    })
      .then(function (json) {
        console.log('Request succeeded with JSON response: ', json);
        res.render('/savestars', json)
      })
      .catch(function (error) {
        console.log('Request failed: ', error);
      });
})

//Listener
//app.listen is a function used to bind and listen to the 
//connections on a specified host or port
app.listen(PORT, () => console.log(`App listening on port ${PORT}`))
