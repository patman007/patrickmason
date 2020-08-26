//Foundation
const express = require('express')
const yelp = require('yelp-fusion')
//API key code
const apiKey = 'DPt7lsXbCbBYJG_V0GlmR9q0bz_8Tbc3H66yZ-yTXYTyrN2xfNzdgAl_FuXLCWJYd4oVqAAvPrS4q9u8tXH4cfFvOyVzuRROWQR_eQP9Td5Tf9DkQr67TKenVelCX3Yx' 
//Able to use API Key in the client constant
const client = yelp.client(apiKey) 
console.log(client)
// iQbursVWrtaKbPA009p7GQ //Client ID if needed?

const app = express();

//Set up PORT 3000 
const PORT = process.env.PORT || 3000;

//Route Handlers
//yelp api consume autocomplete api
let endpoint = 'https://api.yelp.com/v3/businesses/search'
console.log(endpoint)

//Home.ejs
app.get('/', (req, res) => {
    console.log('I am home ejs');
    res.render('home.ejs');        
})
 
//NPM business search code in documentation
// client.search({
//   term: 'Four Barrel Coffee',
//   location: 'san francisco, ca',
// }).then(response => {
//   console.log(response.jsonBody.businesses[0].name);
// }).catch(e => {
//   console.log(e);
// });

//Searchresults.ejs 
app.get('searchresults', (req, res) => {  
    //API documentation NPM use on website
    client.search({     
      location: location
    })
    //location variable has an error at this point
    // but also doe not work outside of the function
    //code keeps breaking down on Line 46    
    var location = req.query.location

    //API and location for url not sure if
    //important to use here or not
    let url = `${endpoint}/${location}`
    console.log(url) 
    //Response
    .then(response => {
      console.log(response.jsonBody.businesses[0].name)   
      res.render('/searchresults.ejs', response)
    })
    //Catch error had said  code 400, which is say my
    //The request could not be understood by the server 
    //due to malformed syntax. 
    //The client SHOULD NOT repeat the request without modifications.
    .catch(err => {
      console.log('I am the error: ', err);
    });    
})

//Listeners
app.listen(PORT, () => console.log(`App listening on port ${PORT}`))