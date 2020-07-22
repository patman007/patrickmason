//Attempt 1
displaySelectMonths = () => { //creates birthMonth object
    let birthMonth = {
            January: "Jon-Mikel", 
            February: "Fred", 
            March: "Mary", 
            April: "Aaron", 
            May: "Marjorie", 
            June: "Justin",
            July: "Julia", 
            August: "Andrea", 
            September: "Sergio", 
            October: "Octavio", 
            November: "Norman",
            December: "Destiny"
        };
    let monthx = [
       //         {
       //             month: "January",
       //             name: "Julia", 
       //             number: 1               
       //         },
       //         {
       //             month: "February",
       //             name: "Fergie",
       //             number: 1        
       //         },
       //         {
       //             month: "March",
       //             name: "Matt", 
       //             number: 1       
       //         },
       //         {
       //             month: "April",
       //             name: "Jennie", 
       //             number: 1        
       //         },
       //         {
       //             month: "May",
       //             name: "Jim", 
       //             number: 1        
       //         },
       //         {
       //             month: "June",
       //             name: "Joesph",
       //             number: 1         
       //         },
       //         {
       //             month: "July",
       //             name: "Nicole", 
       //             number: 1        
       //         },
       //         {
       //             title: "August",
       //             name: "Stephen", 
       //             number: 1        
       //         },
       //         {
       //             title: "September",
       //             name: "Jon", 
       //             number: 1        
       //         },
       //         {
       //             title: "October",
       //             name: "George", 
       //             number: 1        
       //         },
       //         {
       //             title: "November",
       //             name: "Robert", 
       //             number: 1        
       //         },
       //         {
       //             title: "December",
       //             name: "Tasha", 
       //             number: 1        
       //         }
    ]        
            let txt = "";//re-sets var to empty string
            for (var prop in birthMonth) {//assigns "prop" value of the Month Object
                txt += prop + " : " + birthMonth[prop] + "<br>"; 
                // concatenates the "prop"  value with the object in position "prop"
                    //and sets it to the txt variable
                }
             birthMonth1.innerHTML = txt;//displays txt variable
} // closes displayBrithMonth()