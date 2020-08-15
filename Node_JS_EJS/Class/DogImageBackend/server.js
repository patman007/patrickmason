//Foundation
const express = require('express');
const app = express();

//Other way to do fetch are :$fetch or _fetch
const fetch =require('node-fetch')


const PORT = process.env.PORT ||3000

//IMPORTANT
//If I have any static files I want to access them 
//must be in a public folder
app.use(express.static('public'))




let defaultImg = "https://images.dog.ceo/breeds/pyrenees/n02111500_7655.jpg";
const url = 'https://dog.ceo/api/breeds/image/random';

//Route Handlers
app.get('/', (req, res) => {
    // res.send("I am the route route");
    res.render('index.ejs', {image: defaultImg});
})

//Getting this route from index.ejs not hard coded in like 
//previous examples
//This enabless the image to happen
app.get('/getImage', (req, res) => {

    // Fetch Framework
    // fetch(url)
    // .then((response) => {})
    // .then(() => {})
    // .catch(() => {})    

    fetch(url)
    .then((response) => {
        //Testing the system is not okay
        if(!response.ok) {
            //This is a fetch method response.json
            //not a general response call
            // return response.json()
            
            //We are testing error first
            //throw errors will find other errors difference from catch errors
            throw Error('Jessica is not working!!!');
        }
        //json does parsing and return a string
        return response.json()
    })
    .then((data) => {        
        res.render('index.ejs', {image: data.message})
    })    
    //Catch error will only show connection error
    .catch((err)=> {console.log('Catch error: ', err)})

    
})

//Listeners
app.listen (PORT, () => console.log(`App listening on port ${PORT}`));