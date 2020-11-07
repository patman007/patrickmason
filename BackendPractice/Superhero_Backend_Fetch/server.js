//Foundation
const express = require('express')
const app = express()

const fetch =require('node-fetch')

const bodyParser = require('body-parser')

// //Body Parser app.use
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.urlencoded({ extended: false }))

//Have the ability to use static files 
//to acces them and use in the public folder
// app.use(express.static('public'))

//Establish PORT 3000 environment (env)
const PORT = process.env.PORT || 3000


//Route Handlers

//Home EJS Root Route
app.get ('/', (req, res) => {
    console.log('I am the home ejs')
    res.render('home.ejs');
})

//Results EJS Root Route
app.get ('results', (req, res) => {

    console.log('I am the reusults ejs')
    //ID is enabled to be randomized between
    //any called from the API
    //Consume API 
    //Access Token = 10158830495094328
    let apiKey = 10158830495094328 
    let endpoint = `https://superheroapi.com/api/${apiKey}/`
    // let endpoint = 'https://superheroapi.com/api/10158830495094328/'
    console.log(endpoint)
    // let superhero = req.query.id

    //API call to be used in the fetch(url)
    let url =`${endpoint}1`

    console.log(url)

    //FETCH the API instead of Request
    fetch(url)
    .then(response => {
        if (!response.ok) {
            
            //We are testing errors first
            //throw errors will find other responses
            //different from catch errors. 
            console.log(response)

            throw Error('API is not working')
            //Use a res.send instead of a throw Error because 
            //this kills the server
            // res.send({code: 1234, message: 'Your response failed, please contact support at support@'})
        } 
        //json does parsing and returns a string     
        return response.json();
    })
    .then((data) => {
        console.log('data is' , {data} )
        res.render('results.ejs',{data} )
    })

    //Catch error wil only show connection error
    .catch(err => {
        console.log('I am error: ', err)
        res.render('home.ejs', {error: 'No matches found'})
    })

})

//Listener
app.listen(PORT, () => console.log(`App listening on post ${PORT}`))