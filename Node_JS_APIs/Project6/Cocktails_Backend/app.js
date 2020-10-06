//Foundation
const express = require('express')
const app = express()
const fetch = require('node-fetch')

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

//Location of the styles.css and other static files 
//in the public folder to use
app.use(express.static('public'))

const PORT = process.env.PORT || 3000

//Route Handlers

//home ejs root route
app.get('/', (req, res) => {
    // res.send('I am the home ejs')
    res.render('home.ejs')
    console.log('I am the home ejs')
})


//results ejs root route
app.get('/results', (req, res) => { 

    //API endpoint (url) to use
    let url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php' 

    console.log(url)
    fetch(url)

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
        console.log('data is', data.drinks[0])
        res.render('results.ejs', {data: data.drinks[0]})
    })

    //Catch error will only show connection error
    .catch(err = console.error('Error connecting', err))
});



//Listener
app.listen(PORT, () => console.log(`App listening on port ${PORT}`))

