//Foundation
const express = require('express')
const yelp = require('yelp-fusion')
const client = yelp.client('DPt7lsXbCbBYJG_V0GlmR9q0bz_8Tbc3H66yZ-yTXYTyrN2xfNzdgAl_FuXLCWJYd4oVqAAvPrS4q9u8tXH4cfFvOyVzuRROWQR_eQP9Td5Tf9DkQr67TKenVelCX3Yx') //API Key
// iQbursVWrtaKbPA009p7GQ //Client ID
const app = express();

//Set up PORT 3000 
const PORT = process.env.PORT || 3000;

//Route Handlers

//endpoint for API 
let endpoint = "asdjfdsfasldf"

//Home.ejs
app.get('/', (req, res) => {
    console.log('I am home ejs')
    res.render('home.ejs')
})

//Searchresults.ejs 
app.get('/searchresults', (req, res) => {
    let url = `${endpoint}`
    console.log(endpoint)
    fetch(url)
    .then(response => {
        if(!response.ok) {
            //Test error first
            //throw errors will find other errors
            //different from catch errors
            throw Error('Issue with receiving Response')
        }
        //json does parsing and return a string
        return response.json()
    })
    .then(data => {
        console.log(data)
        res.render('searchresults.ejs', {data})
    })
    //Catch error will only show connection error
    .catch(err => console.log('I am the error: ', err))
})


//Listeners
app.listen(PORT, () => console.log(`App listening on port ${PORT}`))