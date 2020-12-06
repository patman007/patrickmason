window.onload = function () {
    //Object
    let favorites  = JSON.parse(localStorage.getItem('myfavorites'))

    var snippet = ''

    //Create a snippet and convert to an array
    Object.keys(favorites).forEach( function(el) {
        snippet +=  `<p><a data-id="${el}" href="/singlebeer/${el}">${favorites[el]} </a></p>`
    })
    document.getElementById('myfavorites').innerHTML = snippet

}