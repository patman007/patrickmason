const express = require("express");
const app = express();

const logger = require("morgan");
app.use(logger("dev"));

const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

const cors = require('cors')
app.use(cors())

const port = process.env.PORT || 3000;

//Note How to Convert to Mongo/Mongoose
//1 Build our connection
  //a install Mongoose
  //b connect
const mongoose =  require('mongoose')  

const db = 'pm_todo_list'

const url = 'mongodb://localhost:27017/' + db

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log(`Connected to ${db} database.`))
.catch((error) => console.log(`Error connecting to ${db} database: `, error))


//2 Build blueprints
  //a Schema
  //b Model
let todoSchema =  new mongoose.Schema(
  {      
    description: {
      type: String,
      required:[true, 'Must have a description']
    },
    isComplete: {
      type: Boolean,
      default: false
    } 
  }
)

let TodoModel = mongoose.model('todos', todoSchema)

//3 Build queries  
  //a Read with Mongoose -> .find()
  //b Read with Mongoose -> .create() or .save()
  //c Read with Mongoose -> .findByIdAndDelete()
  //d Read with Mongoose -> .findById() and .save()

//Dont use this now
// let toDoArray = [
//   { id: 1, description: "Call mom", isComplete: false },
//   { id: 2, description: "Buy groceries", isComplete: false },
//   { id: 3, description: "Go to movies", isComplete: false }
// ];

let num = 4;

app.get("/", function(req, res) {
  res.send("Hello");
});

// Read data
app.get("/todos", function(req, res) {
  // sends back the current toDoArray as json
  //error and result need to be the callback 
  TodoModel.find({}, (error, results) => {
    if(error){
      console.log('Error finding documents from database', error)
    } else {
      console.log('My results: ', results)
      //Tool used to communicate for front end
      res.status(220).json(results)
      // res.json(results)
    }
  })
  // res.json(toDoArray);
});

// Create data
app.post("/todos", function(req, res) {
  // array of hard-coded data for testing purposes
  // let newTodo = {
  //   id: 4,
  //   description: "Buy more Stuff",
  //   isComplete: false
  // };
  // NOTE: allows for real application where user inputs todo and 
  // auto-increment of id
  let newTodo = new TodoModel({ 
    // id: num++, 
    description: req.body.description
    // isComplete: false 
  })
  newTodo.save((error, results)=> {
    if(error) {
      console.log('Error save document to db: ', error)
    } else{
      res.status(201).json(newTodo);
    }
  })
  // append the new todo object to toDoArray array
  // toDoArray.push(newTodo);
  // displaying in terminal for testing/debugging purposes
  // console.log(toDoArray);
  // set status to 201 which is successful
  // send back json version of newTodo object
  // no need to send whole array back, just the new todo item
  // res.status(201).json(newTodo);
});


// Delete data
app.delete("/todos/:id", (req, res) => {
  let requestedToDoId = req.params.id;

  console.log(requestedToDoId)

  TodoModel.findByIdAndDelete(requestedToDoId, function(error, result){
    if(error){
      res.status(400).send('Id does not exist for deletion')
      
    } else {
      res.status(201).send(result)
    }

  })

});

// // Delete data
// app.delete("/todos/:id", (req, res) => {
//   // get the requestedToDoId from req.params and ensure it is a number
//   let requestedToDoId = req.params.id;

//   // use the findIndex() method to find the index of the requested
//   // todo in the toDoArray
//   // let requestedToDoIndex = toDoArray.findIndex(function(todo) {
//   //   return todo.id === requestedToDoId;
//   // });
//   // Find a document whose  

// // User.findByIdAndDelete(id, function (err, docs) { 
// //     if (err){ 
// //         console.log(err) 
// //     } 
// //     else{ 
// //         console.log("Deleted : ", docs); 
// //     } 
// // });

//   if(requestedToDoId){
//      //Put code in after class for update and delete

//     TodoModel.findByIdAndDelete(requestedToDoId, function(err, result) {
//       if(err) {
//         res.status(400).send('Id not found')
//       } else {
//         res.status(201).send(toDoArray)
//       }
//     })
//     // send the toDoArray as a confirmation only,
//     // front end will not need the actual data for anything
//   } else {
//     res.status(400).send('Id not sent')        
//   }
// });


// Update data
app.put("/todos/:id", (req, res) => {
  let requestedToDoId = req.params.id;

  TodoModel.findById(requestedToDoId, function(error, result){
    if(error){

      res.status(666).send('Id does not exist for updating')

    } else {
      result.isComplete = !result.isComplete

      result.save(function(err, updatedTodo){
        if(err){

          res.status(667).send('Cannot update document')
        } 
          else {
          res.status(202).send(updatedTodo)
        }

      }) 

    }

  })
  
})


// // Update data
// app.put("/todos/:id", (req, res) => {
//   // get the requestedToDoId from req.params and ensure it is a number
//   let requestedToDoId = req.params.id;

//   //SPECS:
//   //need to find the doucment that matches the id
//   //once we find it, need to flip the iscomplete
//   //then .save()
//   //Must be updated in database

//   if(requestedToDoId){

//     //Put code in after class for update and delete

//     TodoModel.findById(requestedToDoId, function(error, result) {
//       if(error) {
//         res.status(666).send(`Id ${requestedToDoId} does not exist in our DB!`)
//       } else {
//         results.isComplete = !result.isComplete;
//         result.save(function(error, result){
//           if(error) {
//             res.status(666).send('Unable to save data to DB')
//           } else {
//             res.status(202).send(result)
//           }
//         });
//         result.status(202).send(requestedToDo)
//       }
//     })
//     // toggle the completion status
//     requestedToDo.isComplete = !requestedToDo.isComplete

//     // return the toggled todo as confirmation only
//     // data not needed for anything
//     res.status(202).send(requestedToDo)
//   } else {

//     // if no element is found, let front end know
//     res.status(666).send('Id does not exist for updating')
//   }
// });

app.listen(port, () => {
  console.log(`Listen on port ${port}`);
});