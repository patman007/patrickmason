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
app.get('/', (req, res) => {
    // res.send('I am the Route route')
    // console.log('I am the index route')
    res.render('index.ejs')
})

//Results ejs Handler

app.get('/results', (req, res ) => {
    let currencyChosen = req.query.currency;
    console.log(`${req.query.currency}`)
    //Endpoint let endpoint = 'https://api.coindesk.com/v1/bpi/currentprice.json'
    //  Feedback: this following statement is not really doing much
    //            you might just use endpoint in the statement after
    // let url = `${endpoint}`
    // console.log("I am the app.js, url is: ", endpoint)
    //Fetch Url statements
    fetch(endpoint)
    .then(res => {
        if(!res.ok) {
            //Testing error first
            //throw an error will find other errors
            throw "Coindesk returned error"
        }
        //json does parsing and returns a string
        return res.json()
    })
    .then(data => {
        console.log('data is', data.bpi[currencyChosen])        
        res.render('results.ejs', {data: data.bpi[currencyChosen]})
    })
    //Catch error will only show connection error
    //   Feedback: you returning console.log below
    //             you are really executing console.log
    //             hence I'm making some changes
    .catch((err) => {
        // Feedback: here you may render a specially designed
        //           error.ejs page if you wish and render it.
        // res.render('error.ejs', {error: 'No matches found'})
        res.status(404).send(err)
        console.log('Catch error', err)
    });     
})

//Listener
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));