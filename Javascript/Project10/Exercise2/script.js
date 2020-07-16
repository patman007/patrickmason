
//Attempt 1
// var today = new Date();

// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// document.getElementById("time").innerHTML = time;


// var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// document.getElementById("date").innerHTML = date;

const monthNames = ["January", "February", "March", "April", "May", "June",
 "July", "August", "September", "October", "November", "December"
];

displayTime = () => {
   let d = new Date();
   let hh = d.getHours();
   let mm = d.getMinutes();
   let ss = d.getSeconds();
   let month = d.getMonth();
   let day = d.getDate();
   let year = d.getFullYear();
   demoDateObject.innerHTML = d;
   demoTime.innerHTML = `${hh}:${mm}:${ss}`
   demoFullDate.innerHTML = `${monthNames[month]} ${day}, ${year}`
}
