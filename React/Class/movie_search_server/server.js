/* *************************************************************
1) Create a parent directory
2) Create server.js file INSIDE parent directory
3) npm init
4) install express, cors, body-parser, node-fetch,  and then morgan as dev depend
5) Build the basic server with root route listener and default port 5000
6) set up our logger to see what is happening
7) What is happening to route listeners? Working?
8) Move our API key to server
9) Need CORS?
10) Use fetch? - How?
11) Still see the API? What about GitHub? config.js file

PACKAGE.JSON => server-side
12) add the following to the scripts of your package.json (server):
        "server": "nodemon server",
        "client": "npm start --prefix client",
        "dev": "concurrently \"npm run server\" \"npm run client\""
13) install modules => concurrently and nodemon as dev dependencies

REACT APP
12) npx create-react-app client
13) Inside package.json (client) add the following:
            "proxy": "http://localhost:5000"
14) You should be able to run your server and app by using : npm run dev


15) Styling - bootstrap module - install - src
16) index.js => add     import 'bootstrap/dist/css/bootstrap.min.css';
17) Styling - react-strap module - install - src
16) Create components folder - add card component
17) build with bootstrap cardgroup, card
18) adjust CSS
19) what if there is no image? 


************************************************************* */
const {CONFIG} = require('./config.js');

const express = require('express');
const app = express();

const cors = require('cors')
app.use(cors())

const logger = require('morgan')
app.use(logger('dev'))

const fetch = require('node-fetch');
const port = process.env.PORT || 5000;
const movie_API_KEY = CONFIG.TMDB_KEY;

// NOTE: endpoint => https://api.themoviedb.org/3/search/movie?api_key=APIKEY&query=
const url = `https://api.themoviedb.org/3/search/movie?api_key=${movie_API_KEY}&query=`;



// // NOTE: testing if routes working
// app.get('/search/:title', (req, res)=> {
//     console.log(`${req.params.title}`);
//     res.json({name: `${req.params.title}`})
// })

app.get('/search/:title', (req, res)=> {
    fetch(`${url}${req.params.title}`)
    .then(response => {return response.json()})
    .then(results => {res.send(results)})
    .catch(err => {console.error(err)})
})

app.listen(port, ()=> {
    console.log(`Listening port: ${port}`)
})
