//Foundation
const express = require('express');
const app = express();

//PORT constant for port 3000
const PORT = process.env.PORT || 3000


//Route Handlers

//Route Route
app.get('/', (req, res) => {
    res.send('Hello Express');
    console.log('Route Handler activated');
});

//Home EJS Route Handler
app.get('/home', (req, res) => { 
    //Sending message to the home page to double check 
    // res.send('You have reached the home page');

    //Render const pizza    
    res.render('home.ejs', {
        //pizza variable
        pizza: "I like my pizza with extra pineapple" 
    }); 
    //Console message to show the Home EJS works   
    console.log('Home EJS Page activated');
});

//About EJS Route Handler
app.get('/about', (req, res) => { 
    //Sending message to the about page to double check
    // res.send('You have reached the about page');

    //Render cappuccino variable string to about page    
    res.render('about.ejs', {
        //cappuccino variable
        cappuccino:'I like my cappuccino to be sweet.'
    } );
    //Console message to show the About EJS works  
    console.log('About EJS Page activated')
});

//Contact EJS Route Handler
app.get('/contact', (req, res) => {
    //Sending message to the contact page to double check
    // res.send('You have reached the contact page');

    //Render fries variable string to contact page 
    res.render('contact.ejs', {
        //fries variable
        fries: 'I like my fries crispy with extra salt.'
    });
    //Console message to show the Contact EJS works  
    console.log('Contact EJS Page activated');
});


//Listeners
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));