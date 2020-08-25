//Foundation
const express = require('express');
const app = express();

//Morgan logger
const logger = require('morgan');
app.use(logger("dev"));
console.log(logger("dev"));
console.log('I am the Morgan/Logger');


//Middleware is the stuff between the function
//app.use and the end of the function
//Body Parser 
const bodyParser = require('body-parser');
// parse application x-www-form-urlencode
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
console.log('I am the body parser man');


//Set up Port 3000
const PORT = process.env.PORT || 3000;

//ToDo Array acting as database
const toDoArray = [
    {"id": 1, "description":  "Call mom", "isComplete":   false},
    {"id": 2, "description":  "Buy groceries", "isComplete":   false},
    {"id": 3, "description":  "Go to movies", "isComplete":   false}
]
console.log(toDoArray)

// Route Route Handler
app.get('/', (req, res) => {  
    res.send('I am the app');             
})

//READ data GET
app.get('/todos', (req, res) => {
    //res.json is res.send under the hood
    //res.json() is better to use for 
    //formatting
    // res.send(toDoArray);
    //sends back the current toDOArray as json
    res.json(toDoArray);
})

let count = 4

//CREATE data POST
app.post('/todos', (req, res) => {
    //array hard coded data for testing purposes
    let newTodo = {
        id: count++,
        description: req.body.description,
        isComplete: false
    }

    //Push adds the new element to 
    //the array at the end
    //append the new todo objec to toDoArray
    toDoArray.push(newTodo);

    //displaying in terminal for testin/debugging purposes
    console.log(toDoArray);

    //set status to 201 which is successful
    //send back json version of newTodo object
    //no need to send whol array back, just the new todo item
    res.status(201).json(newTodo);      
})

//DELETE data
//: is a route parameter below
app.delete("/todos/:todoid", (req, res) => {
    //Get the requestedToDoId from the req.params
    var requestedToDoId = parseInt(req.params.todoid);

    //Find Index method of the requested todo in the ToDoArray
    //The findIndex function loops over the toDoArray
    var requestedToDoIndex = toDoArray.findIndex(function(todo){
        return todo.id === requestedToDoId;
    });

    //Remove the requested todo from the toDoArray
    //using the Splice method
    toDoArray.splice(requestedToDoIndex, 1)

    //send the toDoArray as a confirmation
    res.send(toDoArray);
});

//PUT data
//: is a route parameter below
app.put("/todos/:todoid", function(req, res) {
    //Get the requestedToDoId from the req.params
    let requestedToDoId = parseInt(req.params.todoid);

    //find the todo in the array that matches the todoId
    //passed in
    let requestedToDo = toDoArray.find(function(todo) {
        return todo.id === requestedToDoId
    });

    //Toggle the completion status true to false or
    //false to true
    requestedToDo.isComplete = !requestedToDo.isComplete;

    //if no element is found, let front end know
    res.status(200).send(requestedToDo);
});

//Listener
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));