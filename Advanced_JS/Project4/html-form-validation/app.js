const { request } = require('express');
//Foundation
const express = require('express');
const app = express()


app.use (express.static('public'));

//Setup up PORT 3000
const PORT  = process.env.PORT || 3000


//Route Handlers
//Home.ejs route handler
app.get('/', (req, res) => {
    console.log('I am the home ejs')
    // res.send('I am the home ejs');
    res.render('home.ejs');
})

//Submit.ejs route handler
app.post('/submit', (req, res) => {

    let endpoint = 'http://localhost:3000/submit'
    
    request(endpoint, function(error, response, body) {
        
        if(!error && res.StatusCode === 200) {

            let parsedData = JSON.parse(body);

            console.log('I am the submit ejs')
            res.render('submit.ejs', {data: parsedData})

        } else {
            console.log('I am the error')
            res.render('submit.ejs', {data: 'Error getting data'})
        }
    })
})

//Listener
app.listen(PORT, () => console.log(`App listening on ${PORT}`));