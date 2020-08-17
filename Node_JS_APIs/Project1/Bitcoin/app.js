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
//https://www.coindesk.com/coindesk-api
let endpoint = 'https://www.coindesk.com/coindesk-api'
//Coindesk price index page
//https://www.coindesk.com/price/bitcoin


//Route route Handler
app.get('/', (req, res) => {
    // res.send('I am the Route route')
    console.log('I am the route route')
    // res.render('index.ejs')
})

app.get('/index', (req, res ) => {
    // https://www.coindesk.com/price/bitcoin
    //confused here
    let url = `${endpoint}/${req.query.text}`

    //Fetch Url statements
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
        //confused here
        res.render('index.ejs', {data})
    })

    //Catch error will only show connection error
    .catch(err => console.log('I am the error: ', err))    
})

//Listener
app.listen(PORT, () => console.log(`App listening on port ${PORT}`))