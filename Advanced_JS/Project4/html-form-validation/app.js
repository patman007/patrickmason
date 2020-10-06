//Foundation
const express = require('express');
const app = express()

const bodyParser = require('body-parser')  

//public folder to use CSS styling
app.use (express.static('public'));

//Body Parser app.use
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.urlencoded({ extended: false }))

//Setup up PORT 3000
const PORT  = process.env.PORT || 3000

//Route Handlers
//Home.ejs route handler
app.get('/', (req, res) => {
    console.log('I am the home ejs')
    // res.send('I am the home ejs');
    // res.render('home.ejs');
    res.render('home');
})

//Submit app.get route handler
app.get("/submit", (req, res) => {    
    // res.render('submit.ejs');
    res.render('submit', {data: req.body.applicant})
    console.log('I am the submit page GET', {data : req.body.applicant})
});


//Submit app.post route handler
app.post('/submit', (req, res) => {  
    // let applicant = 
    // 
    //     "fname": fname,
    //     "lname": lname,
    //     "email": email,
    //     "tel": tel,
    //     "country": country,
    //     "resume": resume
    // 
    res.redirect('/submit')
    console.log('I am the submit page POST', {data : req.body.applicant})
})

// It just tells express that you're using EJS, 
// and it removes the need to write ".ejs" 
// on the file names
app.set('view engine', 'ejs');

//Listener
app.listen(PORT, () => console.log(`App listening on ${PORT}`));

