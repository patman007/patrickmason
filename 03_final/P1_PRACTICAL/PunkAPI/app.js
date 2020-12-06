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
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json())

//Cors
const cors = require('cors')
app.use(cors())

//Have the ability to use static files to
//access them in public folder
//Examples are CSS, JS and HTML files
app.use(express.static('public'))
// app.use('/js', express.static(__dirname + 'public'))

//specified on PORT 3000 or another
//will be used for the environment (env)
const PORT = process.env.PORT || 3000;

//Consume an endpoint for the API
let endpoint = 'https://api.punkapi.com/v2/beers'
console.log(endpoint)

//Root Route Handler ('/')
app.get('/', (req, res) => {
    // res.send("I am the home ejs")
    console.log("I am the home ejs")
    res.render('index.ejs')
})

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
            //We are testing errors first
            //Use a res.send instead of a throw Error
            res.send({code: 400,
                message: 'Your response failed, please contact support at support@'})
        }
        //json does parsing and returns a string
        return response.json(bodyParser)
    })
    //Looking for results with success with the string valuess
    .then(data => {
        console.log(data[0])
        //do something with the data and renders the results EJS page
        res.render('results.ejs', {data : data})
    })

    //handles errors only. Testing of errors are not done here.
    .catch(error => {
        //Console.log message shows a status message to be handled
        res.status(404).send({error})
        res.render('/error', error)
        console.log('Catch error: ', error)
    })
})


app.get('/favorites', (req, res)  => {
    res.render('favorites.ejs')
})

app.get('/singlebeer/:id', (req, res) => {
    let url = `https://api.punkapi.com/v2/beers/${req.params.id}`

    fetch(url)
    .then (response => {
        //IF Statment: Tests for errors first before returning
        //response.json to see if we need to work on our code.
        if(!response.ok) {
            //We are testing errors first
            //Use a res.send instead of a throw Error
            res.send({code: 400,
                message: 'Your response failed, please contact support at support@'})
        }
        //json does parsing and returns a string
        return response.json(bodyParser)
    })
    //Looking for results with success with the string valuess
    .then(data => {
        // console.log(data[0])
        //do something with the data and renders the results EJS page
        res.render('singlebeer.ejs', {data : data})
    })

    //handles errors only. Testing of errors are not done here.
    .catch(error => {
        //Console.log message shows a status message to be handled
        res.status(404).send({error})
        res.render('/error', error)
        console.log('Catch error: ', error)
    })
})



//Listener
//app.listen is a function used to bind and listen to the
//connections on a specified host or port
app.listen(PORT, () => console.log(`App listening on port ${PORT}`))
