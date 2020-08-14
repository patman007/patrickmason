//Foundation
const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000;

//Route Handling
//Route Handlers
// app.get('/', (req, res) => {
//     res.send('Hello Express');    
// });
// console.log(process)

//Home EJS Route Handler
app.get('/home', (req, res) => {
    // res.send('I am the home page')
    res.render('home.ejs')
    console.log('I am the home page')
})

//About EJS Route Handler
app.get('/about', (req, res) => {
    // res.send('I am the about page')
    res.render('about.ejs')
    console.log('I am the about page')
})

//Contact EJS Route Handler
app.get('/contact', (req, res) => {
    // res.send('I am the contact page')
    res.render('contact.ejs')
    console.log('I am the contact page')
})


//Listener
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));