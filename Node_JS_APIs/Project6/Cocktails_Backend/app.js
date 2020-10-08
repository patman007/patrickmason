//Foundation
const express = require('express')
const app = express()
const fetch = require('node-fetch')

const bodyParser = require('body-parser')

//Body Parser app.use
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.urlencoded({ extended: false }))

//Location of the styles.css and other static files 
//in the public folder to use
app.use(express.static('public'))

const PORT = process.env.PORT || 3000

const initDrink = {
    strInstructions: `Mix lemonade and water according to instructions on back of can. If the instructions say 
    to add 4 1/3 cans of water do so. Mix into pitcher. Add 1 1/2 cup of Vodka (Absolut). 
    Mix well. Pour into glass of crushed ice. Excellent!`,
    strDrink: 'Shark Attack',
    strDrinkThumb: `https://www.thecocktaildb.com/images/media/drink/uv96zr1504793256.jpg`,
    strIngredient1: 'Vodka',
    strIngredient2: 'Vodka',
    strIngredient3: 'Vodka',
    strIngredient4: 'Vodka',
    strMeasure1: '1st can',
    strMeasure2: '2nd can',
    strMeasure3: '3rd can',
    strMeasure4: '4th can',
    imageSrc: "https://www.thecocktaildb.com/images/ingredients/gin-Small.png"
}
console.log(initDrink)

//Route Handlers

//home ejs root route
app.get('/', (req, res) => {
    // res.send('I am the home ejs')
    console.log('I am the home ejs')
    res.render('home.ejs', {data: initDrink})    
})


//results ejs root route
app.get('/results', (req, res) => { 

    // let initDrink = {
    //     strInstructions: req.body.data.drinks[0].strInstructions,
    //     strDrink: req.body.data.drinks[0].strDrink,
    //     strDrinkThumb: req.body.data.drinks[0].strDrinkThumb,
    //     strIngredient1: req.body.data.drinks[0].strIngredient1,
    //     strIngredient2: req.body.data.drinks[0].strIngredient2,
    //     strIngredient3: req.body.data.drinks[0].stringredient3,
    //     strIngredient4: req.body.data.drinks[0].strIngredient4,
    //     strMeasure1: req.body.data.drinks[0].strMeasure1,
    //     strMeasure2: req.body.data.drinks[0].strMeasure2,
    //     strMeasure3: req.body.data.drinks[0].strMeasure3,
    //     strMeasure4: req.body.data.drinks[0].strMeasure4,
    //     imageSrc: "https://www.thecocktaildb.com/images/ingredients/gin-Small.png"
    // }  
    
    //API endpoint (url) to use
    let url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php' 

    
    fetch(url)
    console.log(url)

    .then(response => {
        if(!response.ok) {

            //Testing error first not handling error.
            //throw errors will find other errors different from
            //catch errors
            throw Error(response.statusText)
        }
        //json does parsing and returns a string
        console.log(response.json())
        return response.json()

    })

    console.log('Get Through')
    .then(data => {
        console.log('data is', {data: data.drinks[0]})
        res.render('index.ejs', {data: data.drinks[0]})
    })

    //Catch error will only show connection error
    .catch(err => console.error('Error connecting', err))
});

//Listener
app.listen(PORT, () => console.log(`App listening on port ${PORT}`))

