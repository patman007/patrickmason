//Foundation
const express = require('express')
const app = express()
const fetch = require('node-fetch')

//Have app use after the const app
//this is why we can put styles.css for home.ejs
//If this is not here then you have to do 
//public/styles.css
app.use(express.static('public'))

const PORT = process.env.PORT || 3000


//Route Handlers

//Consume an api: Look for endpoint
//What kind of data? and how much data?
//API endpoint used for consuming
//Default is get method
// https://api.lyrics.ovh/v1/artist/title
let endpoint = 'https://api.lyrics.ovh/v1'

//Route Route Handler
app.get('/', (req, res)=> {
    res.render('home.ejs')
})

app.get('/lyricResults', (req, res)=>{
    let url = `${endpoint}/${req.query.artist}/${req.query.title}`
    // console.log(req.query.artist)
    // res.render('lyricResults.ejs')
    fetch(url)
    .then(response => {
        if(!response.ok){

            //We are testing error first
            //throw errors will find other errors difference from catch errors
            throw Error('Issue with receiving Response')
        }
        //json does parsing and return a string
        return response.json()        
    })

    .then(data => {
        console.log(data)
        //String replace argument to make the lyrics look easier to see
        //little 'g' means replace all \n with break tags <br>
        let newLyrics = data.lyrics.replace(/\n/g, '<br>')
        res.render('lyricResults.ejs', {newLyrics: newLyrics})
    })

    //Catch error will only show connection error
    .catch(err => {
        console.log('I am the error: ', err)
        res.render('error.ejs', {error: 'No matches found'})
    })
    
})

app.listen(PORT, ()=>console.log(`App listening on port ${PORT}`))


//id and name on home.ejs art not the same thing
//even though we chose to use artist for both

//label for is for the id on home.ejs

//next method investigate to use besides req and res

//vh is % height of the viewer not px see the lyrics Results page
//overflow allow the scrolling up and down of bar up and down with the mouse
//hides stuff till we need it again

//Know how to make sure to go back and forth to home, about, and contact
//for Midterm two.
//do not use home.ejs or contact.ejs do not use inside href