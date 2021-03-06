//ask the browser to invoke the socket.io functionality
const socket = io();
// ---------------------------------------------------------
// Select all HTML elements we will need for the project:  |
// ---------------------------------------------------------

// ------------- Nickname Elements We Need ------------------------------
// 1. Create a variable called "nickname" and select the div with the class
//	  "nickname"
const nickname = document.querySelector('.nickname')

// 2. Create a variable called "nicknameSubmit" and select the button with 
//	  the class "nickname__submit"
const nicknameSubmit = document.querySelector('.nickname__submit')

// 3. Create a variable called "nicknameInput" and select the input with the 
// 	  ID "nickname"
const nicknameInput = document.getElementById('nickname')

// -------------- Chat Elements We Need ---------------------------------
// 1. Create a variable called "message" and select the input with the ID
//	  "message"
const message = document.getElementById('message')

// 2. Create a variable called "chatMessages" and select the div with the 
//	  class "chat__messages"
const chatMessages = document.querySelector('.chat__messages')


// 3. Create a variable called "sendNewMessage" and select the button with 
//    the class "chat__submit"
const sendNewMessage = document.querySelector('.chat__submit')


// ---------------------------------------------------------
//      Set a new nickname in the session storage object   |
// ---------------------------------------------------------

// If no nickname is set then display the nickname modal that covers the screen


//check if a user exists, if not ,ask to create one
if(!sessionStorage.getItem('nickname')) {
    nickname.style.display = 'initial';
    nicknameSubmit.addEventListener('click', function() {
        // todo: return false if there is no text in the nicknameInput
        sessionStorage.setItem('nickname', nicknameInput.value)
        nickname.style.display = 'none'
        //send out an event called New User
        socket.emit('New User', sessionStorage.getItem('nickname'))
    })
}

socket.on('New User', nickname => {
    console.log('new user: ', nickname)
    chatMessages.innerHTML += newUserJoined(nickname)
})

const newUserJoined = nickname => {
    return `
        <div class="chat__new-user-joined">
            <i>${nickname} has joined the chat </i>
        </div>
    `    
}
 
// ------------------------------------
// Functions to create new messages:  |
// ------------------------------------

// Create a new user joined message


// Create a new message from a user


// ------------------------------------
//          Socket Events             |
// ------------------------------------

// When the user clicks to send a new message emit that message and their nickname

//Add an event listener to the sendNewMessage button variable we 
//selected earlier.
// When the user clicks to send a new message, emit that message 
//and their nickname
sendNewMessage.addEventListener('click', () => {
    //When the user clicks on it we want to ‘emit’ 
    //a new event called ‘New Message’
    socket.emit('New Message', {
        //The data we want to emit is an object containing 
        //a key ‘nickname’ with the value of the nickname 
        //set in the sessionStorage and a key called ‘message’ 
        //and its value should be what the user typed into the 
        //message input box.
        nickname: sessionStorage.getItem('nickname'),
        message: message.value
    })
    return message.value = ''
  })

//browser receives a new message and does something with it
socket.on('New Message', messageObj => {
    chatMessages.innerHTML += newUserMessage(
        messageObj.nickname, 
        messageObj.message
    )
})
 
// When the socket receives a new message

 //When the socket receives a new message event
 //On the front our socket should be listening on a 
 //‘New Message’ event where we take the data we receive 
 //and then console.log it

//On the front our socket should be listening on a ‘New Message’ 
//event where we take the data we receive and then console.log it

 //browser receives a  new message and does somethhing with it
//  socket.on('New Message', message => {
//     console.log(message)
// })

// When the socket receives a new user
const newUserMessage = (nickname, messageText) => {
    return `<div class="chat__user-message">
                <div class="chat__user-nickname">${nickname}</div>
                <div class="chat__user-text">
                ${messageText}
                </div>
            </div>`
 }
 
// Optimizations
// 1. Load all previous messages and users who joined
// 2. Add error handling so that users cannot enter empty nicknames or messages
// 3. Make it so that a user can press enter to send the message
// 4. Show when users disconnect from the chat
// 5. Allow users to pick their own color
// 6. InnerHTML is not a good way to insert new HTML. Try to find the appropriate way to do this
