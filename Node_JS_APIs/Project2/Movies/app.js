//Foundation
const express = require('express')

const app = express()
const request = require('request')

app.use(express.static('public'));

//Setup up Port 3000
const PORT = process.env.PORT || 3000

//Route Handlers
//Home.ejs
app.get('/', (req, res) => {
    console.log('I am home ejs')
    res.render('home.ejs');
})

//Results
//API address
app.get('/results', (req, res) => {
    console.log("I am the results ejs")
    //make the API call: https://api.themoviedb.org/3/authentication/token/new?api_key=pmason007
    //API Key code 23dc5ffbe5f36f742c01757c0a8966fc
    //The token below is temporary and will need to be changed to access again
    let endpoint = 'https://api.themoviedb.org/3/movie/now_playing?api_key=23dc5ffbe5f36f742c01757c0a8966fc&language=en-US&page=1';    

    request(endpoint, function(error, response, body) {
        // let url = `${endpoint}`
        if(!error && res.statusCode === 200) {
            // console.log(response)
            //receive and parse the json
            let parsedData = JSON.parse(body);
            // console.log(parsedData)

            //do something with the parsed json
            res.render('results.ejs', {data: parsedData});            
            console.log('The data is', {data: parsedData});          
        } else {
            //error handling    
            res.render('results.ejs', {data: 'Error getting data'});
        }   
    });
});

//Listener
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));