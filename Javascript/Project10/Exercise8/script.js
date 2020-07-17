// //Attempt 1
// setMyDate = () => {
//     //Make an array for the days of the week
//     let days =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     // let d = newDate(dateString);
//     // let dayName = days[d.getDay()];
//     let theDate = new Date("01Jan2020");
    
//     //displays results
//     // document.getElementById('theDay').innerHTML = dayName;
//     document.getElementById('theDate').innerHTML = "The Date is " + theDate;
// }

setMyDate = () => {
    // create days of the week array
    let nameDays = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    let d = new Date();// creates Date object

    d.setFullYear(2020, 0, 1);// sets Date object to Jan 1st, 2020.

    let dateName = d.getDay();// sets variable based on actual day of the week (0-6)
    //using dateName variable to get position in array nameDays
    // and displays result (0=Sunday, 1=Monday, etc...)

    dayDisplay.innerHTML = "01Jan2020 will fall on a " + nameDays[dateName];    
}


