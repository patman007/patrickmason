//Foundation
const express = require('express')
const app = express()

const request = require('request')

app.use(express.static('public'));


//Setup up Port 3000
const PORT = process.env.PORT || 3000


//Root Routes
app.get('/', (req, res) => {
    console.log('I am the home ejs')
    res.render('home.ejs');
})


app.get('results', (req, res) => {
    // console.log('I am the results.ejs')
    console.log(url)
    
    // This is the access token below
    // const access_token = 10158830495094328
    let endpoint = 'https://superheroapi.com/api/10158830495094328/'
    
    let url = `${endpoint}/${req.query.id}`    

    request(url, function(error, response, body){
        if(!error && res.statusCode === 200) {
            // console.log(response)

            let parsedData = JSON.parse(body);
            // console.log(parsedData)

            res.render('results.ejs', {data: parsedData});
            // console.log('The data is', {data:parsedData});
        } else {
            //error handling
            res.render('results.ejs', {data: 'Error getting data'})
        }
    });

});

//Listeners
app.listen(PORT, () => console.log(`App listening on port ${PORT}`))