// require needed modules
var express = require('express');
var app = express();

//Other way to do fetch are $fetch or _fetch
const fetch = require('node-fetch')

//Have 

// render home page
app.get('/', function(req, res) {
    res.render('home.ejs');
});

// render results
app.get('/results', function(req, res) {

    //Fetch Framework
    //fetch(url)
    //.then((response) => {})
    //.then(() => {})
    //.catch(() => {})

    // fill out the code here which calls the Star Wars api end point
    // gets the data and then renders the results.ejs page.

    // also remember to handle the errors if any

    // you may have to use request or axios or any of the http modules
    // to make the call to the sw api.

});

app.listen(3000, function() {
    console.log("Star Wars backend running on port 3000");
});