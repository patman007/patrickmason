// //Attempt 2 Grab the current date instead of a specific day
// setMyDate = () => {
//     //Make an array for the day of the week    
//     const days =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 
//     'Thursday', 'Friday', 'Saturday'];
//     let d = new Date();      

//     //Day of the Week presently  
//     let dayName = days[d.getDay()];
//     console.log(days[d.getDay()]);


//     //Month
//     //Make an array for the month of the year
//     const monthx =['January', 'February', 'March', 'April', 
//     'May', 'June', 'July' , 'August', 'September', 'October',
//     'November','December']  

//     //Month of the year presently
//     let month = monthx[d.getMonth()];
//     console.log(monthx[d.getMonth()]);



//     //Date
//     let numberMonth = d.getDate();
//     console.log(numberMonth);


//     //Year
//     let year = d.getFullYear();
//     console.log(year);

    
//     //displays results
//     document.getElementById('theDay').innerHTML = "The Date is " + 
//     dayName + " " + month + " " + numberMonth + ", "  + year;

// }


//Attempt 1 Looking for date set at January 1, 2020
const setMyDate = () => {
    //Make an array for the days of the week
    let days =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 
     'Thursday', 'Friday', 'Saturday'];
    let d = new Date();
    let dayName = days[d.getDay()];
    let theDate = new Date("01Jan2020");
    
    //displays results
    document.getElementById('theDay').innerHTML = dayName;
    document.getElementById('theDate').innerHTML = "The Date is " + theDate;
}



// setMyDate = () => {
//     // create days of the week array
//     let nameDays = ["Sunday","Monday", "Tuesday", "Wednesday", 
//      "Thursday", "Friday", "Saturday"];
    
//     let d = new Date();// creates Date object

//     d.setFullYear(2020, 0, 1);// sets Date object to Jan 1st, 2020.

//     let dateName = d.getDay();// sets variable based on actual day of the week (0-6)
//     //using dateName variable to get position in array nameDays
//     // and displays result (0=Sunday, 1=Monday, etc...)

//     dayDisplay.innerHTML = "01Jan2020 will fall on a " + nameDays[dateName];    
// }


