//Foundation
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

//Less information display
app.use(morgan('tiny'));

//Set up Port 3000
const PORT = process.env.PORT || 3000;

const toDoArray = [
    {
        "id": 1,
        "description":  "Call mom",
        "isComplete":   false   
    },
    {
        "id": 2,
        "description":  "Buy groceries",
        "isComplete":   false   
    },
    {
        "id": 3,
        "description":  "Go to movies",
        "isComplete":   false   
    }
]
console.log(toDoArray)

//Route Handlers
// Body parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted:\n')
  res.end(JSON.stringify({toDoArray}, null, 2))
})
console.log('I am the body parser')


//Morgan  example set up
app.use(morgan({toDoArray}))
console.log('I am the morgan')

// Route Route Handler
app.get('/todos', (req, res) => {    
    res.send({toDoArray})        
})

//POST for Task 4
app.post('/todos', (req, res) => {    
    res.send({toDoArray})        
})

//Less information display
app.use(morgan('combined'));
console.log('I am the morgan too')

//Listener
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));