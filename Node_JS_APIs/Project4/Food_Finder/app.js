//Foundation
const express = require('express')
const yelp = require('yelp-fusion')

//API key code
const apiKey = 'DPt7lsXbCbBYJG_V0GlmR9q0bz_8Tbc3H66yZ-yTXYTyrN2xfNzdgAl_FuXLCWJYd4oVqAAvPrS4q9u8tXH4cfFvOyVzuRROWQR_eQP9Td5Tf9DkQr67TKenVelCX3Yx' 

//Able to use API Key in the client
const client = yelp.client(apiKey) 
console.log(client.transactionSearch)
// iQbursVWrtaKbPA009p7GQ //Client ID if needed

const app = express();

//Set up PORT 3000 
const PORT = process.env.PORT || 3000;

//Route Handlers

//yelp api consume autocomplete api
let endpoint = 'https://api.yelp.com/v3/transactions/{transaction_type}/search' 
console.log(endpoint)
//Home.ejs
app.get('/', (req, res) => {
    console.log('I am home ejs')
    res.render('home.ejs')
})

//API documentation NPM use on website
// client.transactionSearch('delivery', {
//     location: 'san diego'
//   }).then(response => {
//     console.log(response.jsonBody.businesses[0].name);
//   }).catch(e => {
//     console.log(e);
//   });

//Searchresults.ejs 
app.get('/searchresults/lattitude/longtitude/location', (req, res) => { 
    //API documentation NPM use on website
    client.transactionSearch( 'delivery', {
        location: 'austin'        
    }) 
    console.log(client.transactionSearch)  
    console.log(`${endpoint}/${req.query.latitude}/${req.query.longitude}/${req.query.location}`)   
    let url = `${endpoint}/${req.query.latitude}/${req.query.longitude}/${req.query.location}`       
    fetch(url)
    .then(response => {
        if(!response.ok) {
            //Test error first
            //throw errors will find other errors
            //different from catch errors
            throw Error('Issue with receiving Response')
        }
        //json does parsing and return a string
        console.log(response.jsonBody.description)
        return response.jsonBody.businesses[0].name()
        
    })
    .then(data => {
        console.log('data is', {data})
        res.render('searchresults.ejs', {data})
    })
    //Catch error will only show connection error
    .catch(err => console.log('I am the error: ', err))
    console.log(err)
    
})


//Listeners
app.listen(PORT, () => console.log(`App listening on port ${PORT}`))