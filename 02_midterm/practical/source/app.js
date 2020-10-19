//FOUNDATION
// require needed modules
const express = require('express');
const app = express();

//Other way to do fetch are $fetch or _fetch
const fetch = require('node-fetch')


//Makes the app.js aware of the public folder
//that contains the style.css for ejs pages
app.use(express.static('public'))


//Set up a port if it has or has not
//specified for other users on PORT 3000
//or another PORT environment process.
const PORT = process.env.PORT || 3000;


//ROUTE HANDLERS
//Consume an api to look for the end point
//What kind of data? how much data?
//API endpoint used for consuming 
//for Star Wars characters (people)
//'http https://swapi.dev/api/people/'
//Correct endpoint
let endpoint = 'https://swapi.py4e.com/api/people'

//Incorrect endpoint
// let endpoint = 'https://swapi.py4e.com/api/people/?format=json'


//Root Route Handler ('/')
// render home page
//app.get will handle only GET HTTP requests 
app.get('/', function(req, res) {

    console.log('I am the home ejs')
    //renders and send HTML or EJS to the front-end
    //for data to pass from the backend to the home.ejs 
    res.render('home.ejs');
});


//Results Handler
// render results
//app.get will handle only GET HTTP requests
app.get('/results', function(req, res) {

    // fill out the code here which calls the Star Wars API 
    //end point and gets the data to later renders 
    //the results.ejs page.
    //Correct URL
    let url = `${endpoint}/${req.query.userNumber}/`

    //Incorrect URL
    // let url = `${endpoint}/${req.query.id}/?format=json`
    

    //FETCH FRAMEWORK (4 Parts)
    //fetch(url)
    //.then((response) => {})
    //.then(() => {})
    //.catch(() => {})

    console.log(endpoint) 
    console.log(url)
    // console.log(req.query.userNumber)     


    //We are using the url endpoint from API to use
    //in the three other steps below.
    fetch(url)

    //Getting raw data and parsing data for a large object
    //to be usable data.
    .then(response => {

        //do something with a response as long as there are 
        //no errors. We are getting raw data and parsing 
        //the data, but more like extracting data (technically speaking)
        // console.log(response);

        //IF Statment: Tests for errors first before returning
        //response.json to see if we need to work on our code.
        if(!response.ok) {

            //Testing for errors first with throw errors.
            //Throw error will find other error differences 
            //from the catch errors
            //throw Error('Issue with receiving Response')

            //Use a res.send instead of a throw Error because this kills the server
            res.send({code: 1234, message: 'Your response failed, please contact support at support@'})
        }

        //When the response has no errors a response is sent
        //back that to use json format to allow us to manipulate
        //the data later on. JSON does parsing and returns strings,
        //which does the extracting of the data (technically speaking)
        return response.json()
    })

    //Looking for results with success with the string valuess
    //send inside of the url endpoint.
    .then(data => {

        //do something with the data and renders the results EJS page
        //success
        console.log('data is', {data})

        //create a variable to bring in JSON data
        //to manipulate seamlessly
        // let starWars = data.results[req.query.userNumber]

        //Incorrect way on exam
        //let variable for name
        //manipulating to get a string value
        //for name, height, and hair color
        //for star Wars character
        // console.log(starWars.name)       
        // console.log(starWars.height)       
        // console.log(starWars.hair_color)
        // console.log(starWars.eye_color)
        // console.log(starWars.gender)
        // console.log(starWars.url)

        //Correct Way on Exam
        console.log('I am the results.ejs')
        console.log(data.name)       
        console.log(data.height)       
        console.log(data.hair_color)
        console.log(data.eye_color)
        console.log(data.gender)
        console.log(data.url)
        
        //do something with the data and renders the results EJS page
        //success for console log message
        // console.log('data is', {starWars})

        //results.ejs page rendered with data as an
        //object for manipulation for string values
        // res.render('results.ejs', {starWars})
        res.render('results.ejs', {data})
    })

    //Catch error will show connection errors and
    //handles errors only. Testing of errors are not done here.    
    .catch(err => {

        //Console.log message that shows the error caught 
        //to be handled
        console.log('Catch error', err)

        //Error results.ejs renderd with an error
        //message to the user when an error
        //occurs on the handler end.
        res.render('error.ejs', {err})
    })
});


//LISTENER
//app.listen is a function used to bind and listen to the 
//connections on a specified host or port
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));