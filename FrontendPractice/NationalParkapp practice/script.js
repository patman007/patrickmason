


//Button variable by Ids
let btn = document.getElementById('btn');

let api_key = 'pmBnVo1MoSqhZcTEhSBPhAxdaS5GQvG0lPyDCvRY'
let url = `https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=${api_key}`
console.log(url)


btn.addEventListener('click', event => {
    event.preventDefault();
}