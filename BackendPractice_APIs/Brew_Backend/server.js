//Foundation
const express = require('express')
const app = express()

const fetch = require('node-fetch')

//Establish PORT 3000 environment(env)
const PORT = process.env.PORT || 3000

app.use(express.static('public'))

//Consume an endpoint for the API
// let endpoint = 'https://api.openbrewerydb.org/breweries?by_city=san_diego&by_state=california&by_type=micro&sort=name'
let endpoint = 'https://api.openbrewerydb.org/breweries'

//Root Route Handlers

//Home EJS Root Route Handler
app.get('/', (req, res) => {
    // res.send("I am the home ejs")
    console.log("I am the home ejs")
    res.render('home.ejs')
})

//Results EJS Root Route Handler
app.get('/results', (req, res) => {
    //Variables used to setup the query
    let city = req.query.city
    let state = req.query.state
    let type = req.query.type
    let url = `${endpoint}?by_city=${city}&?by_state=${state}&?by_type=${type}?per_page=50`

    //FETCH Statement
    //4 parts
    fetch(url)
    .then (response => {
        if(!response.ok) {
            // console.log(response)

            //We are testing errors first            
            //different from catch errors.
            //Use a res.send instead of a throw Error
            res.send({code: 55, 
                message: 'Your response failed, please contact support at support@'})
        }
        //json does parsing and returns a string
        return response.json()
    })
    .then(data => {
        console.log('data is', {data})
        res.render('results.ejs', {data})
    })

    .catch(error => {
        res.status(404).send({error})   
        console.log('Catch error: ', error)             
    })
})

//Listener
app.listen(PORT, () => console.log(`App listening on port ${PORT}`))
