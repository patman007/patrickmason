// Require express and initialize it
const express = require('express')
const app = express()

//Declare a port variable
const port = process.env.PORT || 3000

//Require socket.io and pass the server object to it
const io = require('socket.io') (
    app.listen(port, function() {
        console.log('App listening on port: '+ port)
    })
)

// Tell our app to use our client folder as static code
app.use(express.static('client'))

// Set up a home route and send the client folder


// Create a socket io connection and handle emissions
// that are received or to be sent out
io.on('connection', socket => {
    console.log('a new user connected')
    socket.on('New User', nickname => {
        console.log('new user is ', nickname)
        io.emit('New User', nickname)
    })

    //On the backend, we should be listening on the 
    //‘New Message’ event and we should take that 
    //data and ‘emit’ it back to the front.

    //server receives a new message and broadcases it to all
    //browsers
    socket.on('New Message', message => {
    console.log('message received is :', message )
    io.emit('New Message', message)
    })
})

