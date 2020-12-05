//Foundation
const express = require('express')
const yelp= require("yelp-fusion")
const app = express()
app.use(express.static('public'))

PORT= process.env.PORT || 3000

const client = yelp.client('vPzqiQZR35u54VDMj6oBi9dKN58U-GcJx52axGEwUc-UxS320uWDeKvKFiSC4dsJ0oUZ8xDyL4xjOUMp6d3KqbFNzvAPA_JmOOciHFQ-3MdPc_tcSkDa5iC5ru9HX3Yx');
const clientId = "kl7b_me7EFPqnrMD_HuLkw"

// const endpoint= "https://api.yelp.com/v3/businesses/search"
// const url="https://api.yelp.com/v3/businesses/kl7b_me7EFPqnrMD_HuLkw"

let eventendpoint=`https://api.yelp.com/v3/events/featured`


//Root Handlers

//Home EJS Root Route Handler
app.get('/',(req,res)=>{
    
    res.render('home.ejs')
})

//Results EJS Root Route Handler
app.get('/results',(req,res)=>{
    var location= `${eventendpoint}/${req.query.location}`
    console.log(location)

    //Yelp Fetch statement
    //4 part
    client.eventSearch({      
        categories: 3,
        is_free: true,
        location: location
      }).then(response => {
        let data = response.jsonBody.events
        // console.log(response.jsonBody.events);
        console.log(data)
        res.render('results.ejs', {data})
      }).catch(err => {        
        console.log(err);
        res.status(403).send({err})
      });

    // res.render('results.ejs')
})

//Listener
app.listen(PORT, ()=>{
    console.log('app is listening on port: ', PORT)
})


// //Foundation
// const express = require('express')
// const app = express();

// //Public Folder to use static files
// //such as CSS
// app.use(express.static('public'))

// //Port Environment
// const PORT = process.env.PORT || 3000

// //API key code
// const yelp = require('yelp-fusion')

// const apiKey = 'DPt7lsXbCbBYJG_V0GlmR9q0bz_8Tbc3H66yZ-yTXYTyrN2xfNzdgAl_FuXLCWJYd4oVqAAvPrS4q9u8tXH4cfFvOyVzuRROWQR_eQP9Td5Tf9DkQr67TKenVelCX3Yx'
// //Able to use API Key n the client constant
// const client = yelp.client(apiKey)
// console.log(client)


// //Consume API endpoint
// let endpoint = 'https://api.yelp.com/v3/events/featured'
// console.log(endpoint)

// //Root Handlers
// //Home Route Handler
// app.get('/', (req, res) => {
//     console.log('I am the home ejs')
//     // res.send('I am the home page')
//     res.render('home.ejs')    
// })

// //Results Route Handler
// app.get('/results', (req, res) => {   

//     //Location
//     var location = `${endpoint}/${req.query.location}`
//     console.log(location)

//     //API document NPm use on website using the format 
//     //Fetch call done with YELP method
//     // client.featuredevent({
//     //     location: location
//     // }).then(response => {
//     //     console.log(response.jsonBody.description);
//     //     let data = response.jsonBody.description
//     //     res.render('results.ejs', {data})
//     // }).catch(err => {
//     //     console.log('I am the error', {err});
//     //     res.status(400).send({err})
//     // });

//     client.eventSearch({
//         categories: 2,
//         is_free: true,
//         location: location
//       }).then(response => {
//         console.log(response.jsonBody.events[0]);
//       }).catch(err => {
//         console.log(err)
//         res.status(403).send({err});
//       });

//       res.render('results.ejs')
// })

// //Listener
// app.listen(PORT, () => console.log(`App listening on port ${PORT}`))