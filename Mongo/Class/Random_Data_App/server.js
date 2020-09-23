//Adding Styling and partials for practice

//Foundation
const express = require('express')
const app = express()

//environment variables are always capitalized PORT
const PORT = process.env.PORT || 3000

const casual = require('casual');

const mongoose =require('mongoose');

//CONNECTION
const url = 'mongodb://localhost:27017/clients'
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> console.log('Connected to database'))
.catch(()=> {
console.log('Issue connecting to database')
mongoose.disconnect()

})

//BLUEPRINTS - Schema and Model
const customerSchema = new mongoose.Schema({
    fName: String,
    lName: String,
    phone: String

})

const CustomerModel = mongoose.model('customers', customerSchema)


//Routes Handlers
//response is coming back from server
//request is to the the server
//Know these
//res.send, res.json, res.render, res.

app.get('/', (req, res)=>{
    // res.send(' I made it')
    res.render('index.ejs')
})


app.get('/createPage', (req, res) => {
    res.render('createPage.ejs')
})


// //Before Mongoose
// app.get('/createData', (req, res) => {
//     //create fake data
//     let data = {
//             fName: casual.first_name,
//             lName: casual.last_name,
//             phone: casual.phone   
//     }
//     console.log(data)
//     //make an argument to send as a variable
//     res.render('results.ejs', { data: data})
// })


//Mongoose stuff
//Write queries
app.get('/createData', (req, res) => {
    //create fake data
    // let data = {
    //         fName: casual.first_name,
    //         lName: casual.last_name,
    //         phone: casual.phone   
    //     }
  
    CustomerModel.create(
        {
            fName: casual.first_name,
            lName: casual.last_name,
            phone: casual.phone   
        },
        (err, customer)=> {
            err ?
                console.log('Error: ', err)
                : res.render('results.ejs', {data: customer})
                console.log(data)
        }
    )    
})


// //Before Mongoose
// app.get('/readPage', (req, res) => {
//     res.render('readPage.ejs')
// })


//Mongoose Stuff
app.get('/readPage', (req, res) => {
    CustomerModel.find({}, (err, customers) =>{
        err?
            console.log('Error: ', err)
            : res.render('readPage.ejs', {data: customers})

    })
    //db.customer.find()
    //Make sure res.render here is deleted here for Mongoose
    // res.render('readPage.ejs')
})

//Listener
app.listen(PORT, () => console.log(`App listening on port ${PORT}`))
