//Foundation
const express = require('express')
const app =express()

const fetch = require('node-fetch')

//Setup up a PORT 3000
const PORT =process.env.PORT || 3000

//Consume API Key
let apiKey = 'pmBnVo1MoSqhZcTEhSBPhAxdaS5GQvG0lPyDCvRY'
let endpoint = `https://developer.nps.gov/api/v1/parks?stateCode=TX&api_key=${apiKey}`

//Route Handlers
//Home.ejs
app.get('/', (req, res) => {
    console.log('I am the home ejs')
    // res.send('I am the home ejs')
    res.render('home.ejs')
})

//Results.ejs
app.get('/results', (req, res) => {
    console.log('I am the results ejs')

    //FETCH Statement
    fetch(endpoint)
       
    .then(response => {
        console.log(endpoint) 

        if (!response.ok) {
            //throw an error will find other errors
            // throw "National Parks returned error"
            res.send({code: 0077, message: 'Your response failed, please contact support at support@'})
        }
        //jsondoes parsing and returns a string
        return res.json()
    })
    .then(data => {
        console.log('data is', {data: data[0]})
        res.render('results.ejs', {data : data[0]})
    })

    .catch(err => {
        // res.status(404).send({err})
        console.log('Catch the error', err)
    });
})

//Listener
app.listen(PORT, () => console.log(`App listening on ${PORT}`));
