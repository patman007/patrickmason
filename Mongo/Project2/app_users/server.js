const express = require('express')
const app =  express()
const mongoose = require('mongoose')


const PORT = process.env.PORT || 3000

//Connection
//Connect to mongodb using the db you want to access/create
mongoose.connect('mongodb://localhost:27017/PM', {useNewUrlParser: true , useUnifiedTopology: true,})

//Visual verification that connection succeded
.then(()=>
console.log('Mongo db running'))

//Blueprints
let customerSchema =  new mongoose.Schema({
    username: String,
    age: Number,
    favorite_pizza: String,
    member: {
        type: Boolean,
        required: [true, "Must have boolean for memeber key"]
    },
    created: {
        type: Date,
        default: Date.now
    }
})

let Customer = mongoose.model('Customer', customerSchema)

// var Customer = new CustomerModel({
//     username: "Nancy",
//     age: 22,
//     favorite_pizza: "pepperoni" 
// })

// var Customer = new CustomerModel({
//     username: "Tommy",     
//     favorite_pizza: "veggies" 
// })

Customer.create({
    username: "Tommy",
    favorite_pizza: "veggie",
    member: true
}, function(err, result){
    err ?
        console.log('Error creating document: ', err)
        : console.log('Success: ', result)    
})


//Write Queries Part 1
// Customer.save((err, result) => {
//     err ? console.log('You customer is an error', err)
//     : console.log('Document saved', result)
// })

//Write Queries Part 2
app.get('/', (req, res) => {
    res.send('I am the route route')
})

app.listen(PORT, () => console.log(`App is listening to ${PORT}`))