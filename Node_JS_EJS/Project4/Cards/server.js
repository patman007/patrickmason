const express = require('express')
const app = express();

const person = require('./data');

app.use(express.static('public'))

const port = process.env.PORT || 3000

app.get('/', (req, res)=> {
    res.render('home.ejs', {data: person})
})

app.listen(port, ()=> {
    console.log(`Listening on port ${port}`)
})


//in your ejs type in lor and shows fake words
//or use zlor Zombie 
//lorem

//require is the same as import module
//We don't know node completely. We do not know how to to make modules
//We know how to use things for node.js