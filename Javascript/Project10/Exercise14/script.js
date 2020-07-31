//Attempt 1
displaySelectMonths = () => { 

    let monthx = [
               {
                   month: "January",
                   name: "Julia", 
                   number: 1               
               },
               {
                   month: "February",
                   name: "Fergie",
                   number: 1        
               },
               {
                   month: "March",
                   name: "Matt", 
                   number: 1       
               },
               {
                   month: "April",
                   name: "Jennie", 
                   number: 1        
               },
               {
                   month: "May",
                   name: "Jim", 
                   number: 1        
               },
               {
                   month: "June",
                   name: "Joesph",
                   number: 1         
               },
               {
                   month: "July",
                   name: "Nicole", 
                   number: 1        
               },
               {
                   month: "August",
                   name: "Stephen", 
                   number: 1        
               },
               {
                   month: "September",
                   name: "Jon", 
                   number: 1        
               },
               {
                   month: "October",
                   name: "George", 
                   number: 1        
               },
               {
                   month: "November",
                   name: "Robert", 
                   number: 1        
               },
               {
                   month: "December",
                   name: "Tasha", 
                   number: 1        
               }
    ]          
                
               let i = 0;  
               let arrayLength =  monthx.length;              
                 
                while (i < arrayLength) {
                    let val = monthx[i];
                    i++; 
                    // console.log(val)                                                               
                     document.getElementById("birthMonth1").innerHTML += 
                     `${val["month"]}: \t`;                     
                     document.getElementById("birthMonth1").innerHTML += 
                     `${val["name"]} \t :\t`;
                     document.getElementById("birthMonth1").innerHTML += 
                     `${val["number"]}\t<br>`;   
                     
                     console.log(`${val["month"]} : ${val["name"]} : 
                     ${val["number"]}`);
                                                                            
                }                  

}



// displaySelectMonths = () => {
//     var selectMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October","November", "December"];//creates 12 month array
//     var numb = ["0", "2", "3", "4", "11"];//creates array of specific values
//     var i = 0;//resets counter
//     var txt = "";//resets string to empty
//     while (numb[i]) {//start while loop; continue running as long as numb[i] is not null
//         txt += selectMonths[numb[i]] + " ";//concatenates data that matches numb[]
//         i++;//adds one to counter to continue while loop
//         }
//     document.getElementById('month2Display').innerHTML = txt;//displays text 
// }
