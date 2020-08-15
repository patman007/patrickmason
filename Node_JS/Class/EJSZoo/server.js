//FOUNDATION
const express = require('express');
const app = express();


//zoo[0] or zoo[0].breed for alligation for here and on home.ejs
//Each element is an object
//ZOO ARRAY
const zoo = [
    {
        name: "Tik-tok",
        breed: 'alligator',
        size: 'large',
        isPet: false,
        country: 'Neverland',
        owner: {
            fname: 'Peter',
            lname: 'Pan',
            phone: '999-HOOK'
        }
    },
    {
        name: "Melman",
        breed: 'giraffe',
        size: 'x-large',
        isPet: false,
        country: 'Madagascar',
        owner: {
            fname: 'Vitaly',
            lname: 'Zaragoza',
            phone: '512-RICO'
        }
    },
    {
        name: "Mickey",
        breed: 'mouse',
        size: 'x-small',
        isPet: true,
        country: 'U.S.',
        owner: {
            fname: 'Walt',
            lname: 'Disney',
            phone: '555-EARS'
        }
    },
    {
        name: "Bruce",
        breed: 'hyena',
        size: 'medium',
        isPet: true,
        country: 'U.S',
        owner: {
            fname: 'Harleen',
            lname: 'Quinzel',
            phone: '12J-OKER'
        }
    },
    {
        name: "Squeak",
        breed: 'bat',
        size: 'small',
        isPet: true,
        country: 'Transylvania',
        owner: {
            fname: 'Vlad',
            lname: 'Tempus',
            phone: 'TR6-5000'
        }
    },
    {
        name: "Francis",
        breed: 'lady bug',
        size: 'x-x-small',
        isPet: false,
        country: 'Your Backyard',
        owner: {
            fname: 'P.T.',
            lname: 'Flea',
            phone: 'BUG-LIFE'
        }
    }
]


//ROUTE HANDLER
////IMPORTANT IF YOU ARE DIGGING DOWN IN THE CODE HUGE LIST
//Part to include 
//allows to run an instance of ejs
console.log(process);

//Include line 19 in server refer to JM post on 
//slack will talk about again.
//Important part to include for future
const PORT = process.env.PORT || 3000


//Route Route Handler
app.get ('/', (req, res) => {
    res.send('I am the Route route');
})

//Route Home route Handler
app.get('/home', (req, res) => {
    // res.send('I am the home page') 
    //data is getting send and render to the front
    //IMPORTANT PART TO KNOW TO GET EACH PART ON
    //HOME.EJS file
    res.render('home.ejs',{data : zoo});

    //Alternate Way 1     
    // res.render('home.ejs',{zoo : zoo})
    //This has an array of objects while the top
    //one does not and important in the EJS file
    //not exactly the same the one in Line 36

    //Alternate Way 2
    // res.send('home.ejs',{zoo})
    //Use this if the key and variable are the same
})
//IMPORTANT
//second arguement you send you have to send as an object
app.get('/about', (req, res) => {
    //IMPORTANT PART TO KNOW TO GET THE FOR EACH PART ON 
    //ABOUT.EJS file
    res.render('about.ejs',{data : zoo})
})


//IMPORTANT TO KNOW
//RES.end RES.send Res.RENDER and REQ
//All Deal with responses from the server what they have in common
//RES.end is used to close out the request and stop cycle move on
//RES.send is used to send a response(html, files) and stop the cycle moves on
//RES.render is used to compile or render a file (Ex home.ejs) the and stops the cycle
//RES.JSON is used to send a JSON and stops the cycle moves on

//Changes in EJS file will not have to kill server.


//LISTENER
app.listen(3000, () => console.log('App listening on port 3000'));
//This Changes the Port
// app.listen(PORT, () => console.log(`App listening on port ${PORT}`))


//IMPORTANT FOR THE EJS FILE
// # in the code to commend in EJS file



///////////////////////////////////////////////////////////////////////////////////////

// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 3000; // there isn't usually a default PORT that the server is listening to, but if there is, this says to use it
// const zoo = [
//     {
//         name: "Tik-tok",
//         breed: 'alligator',
//         size: 'large',
//         isPet: false,
//         country: 'Neverland',
//         owner: {
//             fname: 'Peter',
//             lname: 'Pan',
//             phone: '999-HOOK'
//         }
//     },
//     {
//         name: "Melman",
//         breed: 'giraffe',
//         size: 'x-large',
//         isPet: false,
//         country: 'Madagascar',
//         owner: {
//             fname: 'Vitaly',
//             lname: 'Zaragoza',
//             phone: '512-RICO'
//         }
//     },
//     {
//         name: "Mickey",
//         breed: 'mouse',
//         size: 'x-small',
//         isPet: true,
//         country: 'U.S.',
//         owner: {
//             fname: 'Walt',
//             lname: 'Disney',
//             phone: '555-EARS'
//         }
//     },
//     {
//         name: "Bruce",
//         breed: 'hyena',
//         size: 'medium',
//         isPet: true,
//         country: 'U.S',
//         owner: {
//             fname: 'Harleen',
//             lname: 'Quinzel',
//             phone: '12J-OKER'
//         }
//     },
//     {
//         name: "Squeak",
//         breed: 'bat',
//         size: 'small',
//         isPet: true,
//         country: 'Transylvania',
//         owner: {
//             fname: 'Vlad',
//             lname: 'Tempus',
//             phone: 'TR6-5000'
//         }
//     },
//     {
//         name: "Francis",
//         breed: 'lady bug',
//         size: 'x-x-small',
//         isPet: false,
//         country: 'Your Backyard',
//         owner: {
//             fname: 'P.T.',
//             lname: 'Flea',
//             phone: 'BUG-LIFE'
//         }
//     }
// ]
// app.get('/', (req, res) => {
//     res.send('I am the Root route');
// });
// // app.get('/home', (req, res) => {
// //     // res.send('I am the home page');
// //     // res.render('home.ejs', {data: zoo});
// //     // res.render('home.ejs', {zoo: zoo});
// //     res.render('home.ejs', {zoo}); // in ES6, if key and value are same name, can just write it once
// //     // res.render('home.ejs', {breed1: zoo[0].breed,
// //     //                         breed2: zoo[1].breed}); // do the work on my server or on the client's end?
// // });
// app.get('/home', (req, res)=>{
//     res.render('home.ejs', {zoo});
// });
// app.get('/about', (req, res)=>{
//     res.render('about.ejs', {zoo});
// });
// app.listen(PORT, () => console.log(`App listening on port ${PORT}`));