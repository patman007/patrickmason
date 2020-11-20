//Foundation
//Express
const express = require('express')
const app =express()

//Dotenv
require('dotenv').config()

// constdb =require('db')
// DB_HOST = localhost
// db.connect({
//     host:process.env.DB_HOST
// })

// if(result.error) {
//     throw result.error
// }
// console.log(result.parsed)


//Cors
const cors = require('cors')
app.use(cors())

//Chalk
const chalk = require('chalk')
console.log(chalk.blue('I am Chalk'));

//Morgan
const logger = require('morgan')
app.use(logger('dev'))
console.log(chalk.blue('I am Mogran'));

//Middleware is the stuff between the 
//function app.use and the end of the 
//function.
//Body Parser
const bodyParser = require('body-parser');
//parse application x www-form-urlencode
app.use(bodyParser.urlencoded({ extended: false}));
//parse application/json
app.use(bodyParser.json());
console.log(chalk.red('I am the body parser man'));

//Setup environment
const PORT = process.env.PORT || 3000

//Mongoose
const mongoose =  require('mongoose')
const url = 'mongodb:://localhost:27017/PM'
console.log(chalk.green('I am Mongoose'));

//Mongoose Connection
mongoose.connect(url, 
    { useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> {
        console.log(chalk.green(`Connected to the ${url} database`))
    })
    .catch(err => 
        console.log(chalk.red('Issues connecting to database.', err)))

//Mongoose Blueprints: Schema and Model

//Mongoose Schema
let formSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, 'Must have string first name key']
    }, 
    last_name: {
        type: String,
        required: [true, 'Must have a string last name key']
    },    
    email: {
        type: String,
        required: [true, 'Must have a string email key']
    },
    phone: Number,
    message: {
        type: String,
        default: 'No message submited'
    }    
})
console.log(chalk.yellow(formSchema))

//Mongoose Model
let FormModel = mongoose.model('Form', formSchema)
console.log(chalk.green(FormModel))


//Root Route Handlers
//Root Handler - GET METHOD
app.get('/', (req, res) => {
    res.send('I am the app')
})

//New Handler - POST METHOD
app.post('/new', (req, res)=>{
    req.body.message = req.body.message ? 
                        req.body.message 
                        : undefined;
    FormModel.create(
        { ...req.body},
        (err, result) => {
            err ?
                console.log('Error: ', chalk.yellow(err.message), ()=>{
                    res.status(400).json(err)
                })
                :res.status(201).json(result);
        }
    )
})


//Listener
app.listen(PORT, () => 
    console.log(chalk.green(`App listening on Port ${PORT}`)))