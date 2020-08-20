//Foundation
const express = require('express')

const app = express()
const request = require('request')

const PORT = process.env.PORT || 3000;


//Route Handlers
//Home ejs
app.get('/', (req, res) => {
    console.log('I am home ejs')
    res.render('home.ejs')
})

//Results ejs
//API address  https://www.metaweather.com/api/
app.get('/results', (req, res) => {
    console.log('I am the results page')      
    //make the call 'https://www.metaweather.com/api/location/2487956/'
    let url = 'https://www.metaweather.com/api/location/2487956/';
    request(url, function(error, response, body) {
        if(!error && response.statusCode === 200) {
          console.log(response)
          //receive and parse the json
          let parsedData = JSON.parse(body);
          console.log(parsedData)
          //do something with the parsed json
          res.render('results.ejs', {data: parsedData});
        //   res.render('results.ejs', {data: partsedData.consolidated_weather[0]})
        } else {
            //error handling
            res.render('results.ejs', {data: 'Error getting data'});
        }        
    });   
});

//Listeners
app.listen(PORT, () => console.log(`App listening on port ${PORT}`))
