//Attempt 1
displayBirthMonth = () => { 

    let monthx = [
               {
                   month: "January",
                   name: "Julia"                               
               },
               {
                   month: "February",
                   name: "Fergie"                        
               },
               {
                   month: "March",
                   name: "Matt"                        
               },
               {
                   month: "April",
                   name: "Jennie"                            
               },
               {
                   month: "May",
                   name: "Jim"                           
               },
               {
                   month: "June",
                   name: "Joesph"                           
               },
               {
                   month: "July",
                   name: "Nicole"                          
               },
               {
                   month: "August",
                   name: "Stephen"                           
               },
               {
                   month: "September",
                   name: "Jon"                          
               },
               {
                   month: "October",
                   name: "George"                           
               },
               {
                   month: "November",
                   name: "Robert"                         
               },
               {
                   month: "December",
                   name: "Tasha"                          
               }

    ]          
                let iterator = monthx.values();
                 
                for(let monthx of iterator) {
                    iterator += + " " + [monthx] + "<br>";
                    console.log(monthx);  
                    document.getElementById("month1Display").innerHTML += monthx["month"] + ": ";
                    document.getElementById("month1Display").innerHTML += monthx["name"] + "\t" + "<br>";                         
                                                                            
                } 
                iterator += '';                
                return iterator;   

}




// function displayBirthMonth() { //creates birthMonth object
//     let birthMonth = {
//             January: "Jon-Mikel", 
//             February: "Fred", 
//             March: "Mary", 
//             April: "Aaron", 
//             May: "Marjorie", 
//             June: "Justin",
//             July: "Julia", 
//             August: "Andrea", 
//             September: "Sergio", 
//             October: "Octavio", 
//             November: "Norman",
//             December: "Destiny"};
//             let txt = "";//re-sets var to empty string
//             for (var prop in birthMonth) {//assigns "prop" value of the Month Object
//                 txt += prop + " : " + birthMonth[prop] + "<br>"; 
//                 // concatenates the "prop"  value with the object in position "prop"
//                     //and sets it to the txt variable
//                 }
//              birthMonth1.innerHTML = txt;//displays txt variable
//          } // closes displayBrithMonth()