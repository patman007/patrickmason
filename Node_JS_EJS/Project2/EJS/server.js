//Foundation
const express = require('express');
const app =  express();

//Port const for port 3000
const PORT = process.env.PORT || 3000

var messages = [
    {name: "Jim",   message:"I'm a cartoonist."},
    {name: "Jane",  message:"How about pasta for dinner?"},
    {name: "Gary",  message:"I like my pasta with butter."}
]

//Route Handlers
app.get('/', (req, res) => {
    res.send('Hello Express');    
});

//Messages EJS Route Handler
app.get('/messages', (req, res) => {
    ////Sending message to the about page to double check
    // res.send('You have reached the message page');

    res.render('messages.ejs', {messages});


    console.log("You have reached the message page");
});


//Listener
app.listen(PORT, () => 
console.log(`App listening on port ${PORT}`));



