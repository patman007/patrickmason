//FOUNDATION
// require needed modules
const express = require('express');
const app = express();

//Other way to do fetch are $fetch or _fetch
const fetch = require('node-fetch')

//Makes the app.js aware of the public folder
//that contains the style.css for ejs pages
app.use(express.static('public'))


const PORT = process.env.PORT || 3000;

//ROUTE HANDLERS

//Consume an api to look for the end point
//What kind of data? how much data?
//API endpoint used for consuming 
//for Star Wars characters (people)
//'http https://swapi.dev/api/people/:id'
let endpoint = 'http https://swapi.dev/api/'


//Root Route Handler ('/')
// render home page
//app.get will handle only GET HTTP requests 
app.get('/', function(req, res) {

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
    let url = `${endpoint}/${req.query.people}/${req.query.id}`
    console.log(req.query.people)


    //Fetch Framework
    //fetch(url)
    //.then((response) => {})
    //.then(() => {})
    //.catch(() => {})

    //We are using the endpoint
    fetch(url)
    .then(response => {
        //do something with a response as long as there are 
        //no errors.

        //IF Statment: Test for error first before returning
        //response.json
        if(!response.ok) {
             
            //Testing for errors first with throw errors.
            //Throw error will find other error differences 
            //from the catch errors
            throw Error('Issue with receiving Response')
        }

        //When the response has no errors a response will
        //be sent we can do something with the data. 
        //json does parsing and return a string
        return response.json()
    })

    .then(data => {
        console.log(data)
        let name = data.
        let height = 
        let hair_color = 
        res.render('results.ejs', )
    })

    //Catch error will only show connection error and
    //handles errors only. Testing of errors not done here
    .catch(err => {
        console.log('I am the error: ', err)

        res.render('error.ejs'{error: 'No matches found'})
    })

    // also remember to handle the errors if any

    // you may have to use request or axios or any of the http modules
    // to make the call to the sw api.

});


//LISTENER
//app.listen is a function used to bind and listen to the 
//connections on a specified host or port
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));