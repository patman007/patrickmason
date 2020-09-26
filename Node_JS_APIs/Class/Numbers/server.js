const request = require('request')
const express = require('express')
const app = express()

const fetch = require('node-fetch')

const PORT = process.env.PORT || 3000

let url = 'http://numbersapi.com/random/year?json'

app.get('/', (req, res) => {
    res.send('I am the numbers API. Woohoo!!!')
})

//FETCH
//res on Line 14 is completely different than response on line 19
app.get('/doggyHorse', (req, res) => {
    fetch(url)
    .then( response => {
        return response.json()
    })
    .then((data)=>{ 
        console.log(data)
        res.send(data.text)
        res.send(data.type)
        //Send back to the client on front end
        //Looking for an Object look in console.log(data.text)
        // res.render('example.ejs', {cat: data.text})
        //This is an object called cat which can be send if needed
        //in a console message
        res.render('example.ejs', {cat: data.type})
    })
    //This is not complete to handle errors refer to other code for this.
    .catch(error => {
        console.log('My error:', error)
        res.end()
    })
})


// //REQUEST FETCH
// //Using request npm parts another way to do the above process
// //Look at his olde code examples
// app.get('/doggyHorse', (req, res)=> {
//     //request with callback function cb
//     // request(url, cb)
//     request(url, (err, response, body)=>{
//         //http calls to fetch the endpoint(url)
//         console.log(response)

//         let parsedData = JSON.parse(body)
//         res.render('example.ejs', { cat: parsedData.type})
//     })

// })


app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})