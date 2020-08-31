const express = require('express')
const app =  express()
const mongoose =  require('mongoose')

const PORT = process.env.PORT || 3000

//Connection
mongoose.connect(
    'mongodb://localhost:27017/PM', 
    { useNewUrlParser: true ,
         useUnifiedTopology: true,          
    }
)

.then(()=> console.log('Mongo db running'))

//Blueprints
//Schema and Model

let userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String 
})

let UserModel = mongoose.model('User', userSchema)


// var User = new UserModel({
//     name: "Jerry",
//     age: 45,
//     email: 'jerryseinfield@gmail.com'
// })

// var User = new UserModel({
//     name: "Kramer",
//     age: 47,
//     email: 'Cosmokramer@gmail.com'
// })

// //Write a queries
// User.save(function(error, result) {
//     if(error) {
//         console.log('There was an error saving to db')
//     } else {
//         console.log('Data successfully saved: ', result)
//     }
// })

//Create Method (Alternative to doing Line 29 to Line 48)
UserModel.create(
    {
    name: 'Elaine',
    age: 39,
    email: "ElaineBenes@gmail.com"
    }, (error, result) => {
    error?
        console.log('Error: ', error)
        : console.log('Here is your new user: ', result)
    }    
)

app.get('/', (req, res) => {
    res.send('I am the root route')
})

app.listen(PORT, () => console.log(`App is listening to ${PORT}`))