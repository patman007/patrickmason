//Foundation
const express = require('express')
const app = express()
const fetch = require('node-fetch')

//Have the ability to use static files app 
//to access them and use in the public folder
app.use(express.static('public'))

//establish PORT 3000 environment (env)
const PORT = process.env.PORT || 3000

//Route Handlers

//Consume an endpoint for the API
let endpoint = 'https://api.coindesk.com/v1/bpi/currentprice.json'
//Coindesk price index page

//Route Handlers

//Index ejs Handler
app.get('/index', (req, res) => {
    // res.send('I am the Route route')
    console.log('I am the index route')
    res.render('index.ejs')
})

//Results ejs Handler

app.get('/results', (req, res ) => {
    //Endpoint let endpoint = 'https://api.coindesk.com/v1/bpi/currentprice.json'
    let url = `${endpoint}`
    console.log("I am the app.js, url is: ", url)
    //Fetch Url statements
    //url
    fetch(url)
    .then(res => {
        if(!res.ok) {

            //Testing error first
            //throw an error will find other errors
            throw Error('Issue with Response')
        }
        //json does parsing and returns a string
        return res.json()
    })
    .then(data => {
        console.log(data)        
        res.render('results.ejs', {data})
    })

    //Catch error will only show connection error
    .catch(err => console.log('I am the error: ', err));     
})

//Listener
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));