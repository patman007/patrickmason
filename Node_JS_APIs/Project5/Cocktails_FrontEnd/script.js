//IMAGE as a variable
let image = document.getElementById('image');

//INSTRUCTIONS as a variable
let instructions = document.getElementById('instructions');

// DRINK Name as a variable
let name = document.getElementById('name');

// INGREDIENTs as a variable
let ingredient1 = document.getElementById('ingredient1');
let ingredient2 = document.getElementById('ingredient2');
let ingredient3 = document.getElementById('ingredient3');
let ingredient4 = document.getElementById('ingredient4');



// MEASUREMENTS as a variable
let measurement1 = document.getElementById('measurement1');
let measurement2 = document.getElementById('measurement2');
let measurement3 = document.getElementById('measurement3');
let measurement4 = document.getElementById('measurement4');


//Button variable by id
let btn = document.getElementById('btn');
let url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
console.log(url);

//Event Listener
//When the Need a drink button is clicked by the user 
//the fetch steps statement will be initiated
btn.addEventListener('click', () => {

    console.log('You clicked me')
    console.log(image)  
    //4 parts to the fetch API
    fetch(url)
   
    .then(function(response) {
        console.log(response)

        if(response.ok) {

            return response.json();
        }
        throw Error('Cocktails API is not working !!!')
    })
   
    .then(data =>  (image.setAttribute("src", data.drinks[0].strDrinkThumb),                     
                    (instructions.innerHTML = data.drinks[0].strInstructions),                    
                    (name.innerHTML = data.drinks[0].strDrink),
                    (ingredient1.innerHTML = data.drinks[0].strIngredient1),
                    (ingredient2.innerHTML = data.drinks[0].strIngredient2),
                    (ingredient3.innerHTML = data.drinks[0].strIngredient3),
                    (ingredient4.innerHTML = data.drinks[0].strIngredient4),
                    (measurement1.innerHTML = data.drinks[0].strMeasure1),
                    (measurement2.innerHTML = data.drinks[0].strMeasure2),
                    (measurement3.innerHTML = data.drinks[0].strMeasure3),
                    (measurement4.innerHTML = data.drinks[0].strMeasure4)))
                                         

    //Catch an error to show in console.log message
    .catch(err => console.error('Error connecting', err))
});


// // https://www.thecocktaildb.com/api.php

// $('button').on('click', ()=>{
//     $('#drinkName').empty()
//     $('#displayDrinkImage').empty()
//     $('#displayInstructions').empty()
//     $('#ingredientDisplay').empty()
//     let url = `https://www.thecocktaildb.com/api/json/v1/1/random.php`
//     fetch(url)
//     .then(response => {
//         if(!response.ok){
//             throw Error(response.statusText)
//         }
//         return response.json()
//     })
//     .then(data => {
//         let {strDrink, strDrinkThumb, strInstructions} = data.drinks[0]
//         $('#drinkName').append(strDrink);
//         $('#displayDrinkImage').attr('src', strDrinkThumb)
//         $('#displayInstructions').append(strInstructions)
//         let count = 1;
//         while(data.drinks[0][`strIngredient${count}`]){
//             let ingredient = data.drinks[0][`strIngredient${count}`]
//             let measurements = data.drinks[0][`strMeasure${count}`]
//             $('#ingredientDisplay').append(`
//                 <div class="thumb_container col-lg-2 col-xs-4">
//                     <img class='thumb' src="https://www.thecocktaildb.com/images/ingredients/${ingredient}-Small.png" alt="" srcset="">
//                     <p>${measurements} ${ingredient}</p>    
//                 </div>
//             `)
//             count ++
//         }
//     })
//     .catch(error => console.error('Error from network: ', error))
// })

