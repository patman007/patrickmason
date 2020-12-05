window.onload = function(browser){
    $(document).ready(function(){
        $(document).on('change', 'input[type="checkbox"]', function e(){
            //do your stuff here
            // function2 that reads the localStorage and renders
            // the favorites list
            //Beer Name
            // let favorite = $('#favorite').text();

            // localStorage.setItem('favorite', text)

            // document.getElementByIdlocalStorage.getItem(beer_name)

        });
        e()
    });
    browser()
}


console.log('browser side code is working')
// // function1 that saves beer id and name to local storage
// // as an object (convert it to string using JSON.stringify)

function browser() {
    // Get all favorite beers
    let favorites = document.querySelectorAll(".favorite")
    // Get current favorites OR empty array
    let favoriteStorage = JSON.parse(localStorage.getItem('favorites') || "[]")

    // Add event listener to each beer card recieved
    favorites.forEach(favorite => {
        favorite.addEventListener('click', () => {
            // I just stored all of the relevant data on the favorite button.
            // I should have just stringified the data object there instead of making
            // a bunch of data attributes
            let beerObj = JSON.stringify({
                name: favorite.dataset.beer_name,
                description: favorite.dataset.beer_description,
                id: favorite.dataset.beer_id,
                image_url: favorite.dataset.beer_image
            })

            // Add to array of all favorited beers
            favoriteStorage.push(beerObj)

            // Stringify the array and put it into sessionStorage
            localStorage.setItem('favorites', JSON.stringify(favoriteStorage))
            console.log(JSON.parse(localStorage.getItem('favorites')))
        })
    })
}