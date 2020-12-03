//Create a variable called and select the input with the
//ID "favorite"
// let favorite = document.getElementById('favorite')


// //Store
// // localStorage.setItem("name", "value");
// localStorage.setItem("favorite", JSON.stringify("true"));

// //Retrieve
// // document.getElementById("favorite").innerHTML = localStorage.getItem("favorite");
// favorite.innerHTML = localStorage.getItem("favorite");

// //Console.log Message
// let techStack = localStorage.getItem("favorite");
// console.log(techStack);
/////////////////////////////////////////////////////////////////////

window.onload = function(){
    // function2 that reads the localStorage and renders
    // the favorites list
}

console.log('browser side code is working')
// function1 that saves beer id and name to local storage
// as an object (convert it to string using JSON.stringify)


// document.querySelector('form').addEventListener('checkbox', function(e) {
//     const task = document.querySelector('#favorite').value;
//     let tasks;
//     if(localStorage.getItem('favorite') === null) {
//         tasks = [];
//     } else {
//         tasks = JSON.parse(localStorage.getItem('favorite'));
//     }

//     tasks.push(task)
//     localStorage.setItem('favorite', JSON.stringify(tasks))
//     const tasks = JSON.parse(localStorage.getItem('favorite'));
//     tasks.forEach(function(task) {
//         console.log(task)
//     })
// })