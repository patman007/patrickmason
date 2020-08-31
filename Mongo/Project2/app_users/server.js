const express = require('express')
const app =  express()
const mongoose = require('mongoose')


const PORT = process.env.PORT || 3000

//Connection
mongoose.connect('mongodb://localhost:27017/PM', {useNewUrlParser: true , useUnifiedTopology: true,})

//Blueprints



//Write Queries
app.get('/', (req, res) => {
    res.send('I am the route route')
})

app.listen(PORT, () => console.log(`App is listening to ${PORT}`))