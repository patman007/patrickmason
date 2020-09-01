//Foundation
const express = require('express')
const yelp = require('yelp-fusion')
//Client ID if needed?
// iQbursVWrtaKbPA009p7GQ 
//API key code
const apiKey = 'DPt7lsXbCbBYJG_V0GlmR9q0bz_8Tbc3H66yZ-yTXYTyrN2xfNzdgAl_FuXLCWJYd4oVqAAvPrS4q9u8tXH4cfFvOyVzuRROWQR_eQP9Td5Tf9DkQr67TKenVelCX3Yx' 
//Able to use API Key in the client constant
const client = yelp.client(apiKey) 
console.log(client)


const app = express();

//Set up PORT 3000 
const PORT = process.env.PORT || 3000;


//Route Handlers
//yelp api consume autocomplete api
let endpoint = 'https://api.yelp.com/v3/businesses/search'
console.log(endpoint)
// let url3 = endpoint + apiKey
// console.log(url3)

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
app.get('/searchresults', (req, res) => { 
  
    //API and location for url not sure if
    //important to use here or not
    let location = `${endpoint}/${req.query.location}`
    console.log(location)
    
    //API documentation NPM use on website
    //using the format from Line 32 to Line 40
    //The page will display 50 places
    client.search({     
      location: location,           
      limit: 50
    })

    .then(response => {
        console.log(response.jsonBody.businesses);
        let data = response.jsonBody.businesses
        res.render('searchresults.ejs', {data})         
    })
    //Catch error will only show connection error
    //   Feedback: you returning console.log below
    //             you are really executing console.log
    //             hence I'm making some changes    
    .catch(err => {
        // Feedback: here you may render a specially designed
        //           error.ejs page if you wish and render it.
        // res.render('error.ejs', {error: 'No matches found'})
        console.log("I am the error", {err});
        res.status(400).send({err})
        // res.render('error.ejs', err);
    }); 
});

//Listener
app.listen(PORT, () => console.log(`App listening on port ${PORT}`))