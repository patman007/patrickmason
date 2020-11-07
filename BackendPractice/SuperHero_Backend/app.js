//Foundation
const express = require('express')
const app = express()

const request = require('request')

const bodyParser = require('body-parser')


//Body Parser app.use
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.urlencoded({ extended: false }))

//Have the ability to use static files 
//to acces them and use in the public folder
app.use(express.static('public'));

//Establish PORT 3000 environment (env)
const PORT = process.env.PORT || 3000


//Route Handlers

//Home.ejs Root Handler
app.get('/', (req, res) => {
    console.log('I am the home ejs')
    res.render('home.ejs');
})


//Results.ejs Root Handler
app.get('/results', (req, res) => {
    console.log('I am the results ejs')    
    
    // This is the access token below
    // const access_token = 10158830495094328
    let endpoint = 'https://superheroapi.com/api/10158830495094328/'
    
    // let url = `${endpoint}/${req.query.id}` 
    //ID is enabled to be randomized between
    //any called from the API
    let url = `${endpoint}${req.query.id}/powerstats`  
    console.log(url) 

    //Request the API instead of Fetch
    request(url, function(error, response, body){
        if(!error && res.statusCode === 200) {
            // console.log(response)

            let parsedData = JSON.parse(body);
            // console.log(body)

            res.render('results.ejs', {data: parsedData});
            console.log('The data is', {data: parsedData});            

        } else {

            //error handling            
            res.render('results.ejs', {data: 'Error getting data'});
        }
    });

});

//Listeners
app.listen(PORT, () => console.log(`App listening on port ${PORT}`))