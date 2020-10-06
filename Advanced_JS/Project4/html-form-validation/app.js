//Foundation
const express = require('express');
const app = express()

//public folder to use CSS styling
app.use (express.static('public'));

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
    console.log('I am the submit page')
    // res.render('submit.ejs');
    res.render('submit');
});


//Submit.ejs route handler
app.post('/submit', (req, res) => {
    let applicant = 
        {
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            tel: req.body.tel,
            country: req.body.country,
            resume: req.body.resume
        }        
    res.redirect("/submit", {data: applicant})
    console.log('I am the submit page', {data: applicant})
})

//It just tells express that you're using EJS, 
//and it removes the need to write ".ejs" 
//on the file names
app.set('view engine', 'ejs');

//Listener
app.listen(PORT, () => console.log(`App listening on ${PORT}`));


// Other way to do possibly
// const express = require('express');
// const app = express();
// const bp=require('body-parser')
// const PORT = process.env.PORT || 3000;
// app.use(express.static("public"));
// app.use(bp.json({ type: 'application/*+json' }))
// app.use(bp.urlencoded({ extended: false }))
// app.get('/', (req, res)=>{
//     res.render("home.ejs")
// })
// app.post('/submit', (req, res)=>{
//     res.render("submit.ejs", {data:req.body} )
// })
// app.listen(PORT, ()=> console.log(`App listening on port ${PORT}`))