
//Exercise 1
const button = document.querySelector("input[type='button']")
const error = document.querySelector('.error')
button.addEventListener('click', () => {
    button.style.backgroundColor = 'red'
    button.value = 'Turn Off'
})

//Exercise 2
// create a variable with the value of 10
// select the p tag 
let numDisplay = document.getElementById('numDisplay')
// create increment and decrement functions
// function increment(){
//     number++;
//     // Number should not exceed 20 
//     if(number > 20){
//         // If it does show an error message and do nothing else
//         return error.innerText = 'Sorry you need to go the other way'
//     } 
//     else error.innerText = ''
    
//     return numDisplay.innerHTML = number
// }
// const decrement = () => {
//     number--;
//     // Number should not go below 0
//     if(number < 0){
//         // If it does show an error message and do nothing else
//         return error.innerText = 'Sorry you need to go the other way'
//     }
//     return numDisplay.innerHTML = number
// }

//Exercise 3 and Exercise 4
let number = 10
// dom manipulation to display the number
numDisplay.innerHTML = number
// const incre = document.querySelector('input[value="Increment"]')
const numberHandler = (num) => {
    // Number should not be greater than 20 or less than 0
    if(number + num > 20 || number + num < 0){
        // if it is show an error message
        return error.innerText = 'Sorry you need to go the other way'
    }
    // 10  = 10 + 1
    number += num
    // if the number is valid do not show the error message
    if(error.innerText){
        error.innerText = ''
    }
    // numberHandler should return the global "number" variable plus num 
    return numDisplay.innerText = number
}


//Exercise 5
const displayTime = document.getElementById('displayTime')
setInterval(() => {
    let date = new Date
    return displayTime.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}, 1000)


///Exercise 6
// create an age and names array 
const names = ["George", "Martha", "Sally"]
const ages = [23, 26, 5]
const tbody = document.querySelector('tbody')
const fillHouse = () => {
    for(let i = 0; i < names.length; i++){
        // names[0] == "George"
        // ages[0] == 23
        tbody.insertAdjacentHTML('afterbegin', `
            <tr>
                <td>${names[i]}</td>
                <td>${ages[i]}</td>
            </tr>
        `)
    }
}


//Old ROUGHT DRAFT Do Not Use
// //Exercise 1
// const button = document.querySelector("input[type='button']")
// const error = document.querySelector(".error")
// button.addEventListener('click', () => {
//     button.style.backgroundColor = 'red';
//     button.value = 'Turn Off';
// })


// // //Exercise 2
// // // create a variable with the value of 10
// // let number = 10
// // // select the p tag 
// let numDisplay = document.getElementById('numDisplay')
// // // dom manipulation to display the number
// // numDisplay.innerHTML = number
// // // create increment and decrement functions
// // function increment(){
// //     number++;
// //     return numDisplay.innerHTML = number;
// // }
// // const decrement = () => {
// //     number--;
// //     return numDisplay.innerHTML = number;
// // }


// // //Exercise 3
// let number = 10;
// // // select the p tag 
// let numDisplay = document.getElementById('numDisplay');
// // // dom manipulation to display the number
// // numDisplay.innerHTML = number;
// // // create increment and decrement functions
// // function increment(){
// //     number++;
// //     //Number should not exceed 20
// //     //If it does show an error message and do nothing else
// //     if (number > 20) { 
// //         //If it does show an error message and do nothing else 
// //         return error.innerText = "Sorry you need to go the other way"  
// //     }        
// //     return numDisplay.innerHTML = number
// // }

// // const decrement = () => {
// //     number--;
// //     if (number < 0) {
// //         return error.innerText = "Sorry you need to go the other way"
// //     } 
    
// //     return numDisplay.innerHTML = number      
// // }

// //Exercise 4
// let number = 10;
// numDisplay.innerHTML = number

// const numberHandler = (num) => {  
//     //Number should not be greater than 20 or less than 0
//     if(number + num > 20 || number + num < 0) {
//         //If it is show an error message
//         return error.innerText = "Sorry you need to go the other way"
//     }
//     // 10 = 10 + 1
//     number += num    
//     //If the number is valid do not show an error message
//     if(error.innerText) {
//         error.innerText = ''
//     }
//     //numberHandler should return the global "number" variable plus num    
//     return numDisplay.innerText = number
// }


// //Exercise 5 
// const displayTime = document.getElementById('display');

// setInterval(() => {
//     let date = new Date
//     return displayTime.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
// }, 1000)


// //Exercise 6
// //Create array for names, ages
// const names = ["George", "Marth", "Sally"];
// const ages = [23, 26, 5];

// //Use tbody as selector to have a reference to insert your new HTML
// const tbody = document.querySelector("tbody").

// const fillHouse = () => {    
//     for(let i = 0; i < names.length; i++ ){
//         tbody.insertAdjacentHTML('afterend', `
//             <tr>
//                 <td>${names[i]}</td>
//                 <td>${age[i]}</td>
//             </tr>
//         `)        
//     }
// } 