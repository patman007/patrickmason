//Project 9B
//Global Variables
//Make a variable that contains book titles, 
//book authors, and if they have been read 
//already or not. 
var books = [
    {
        title: "Winter People",
        author: "Jennifer MacMahon",
        alreadyRead: false,
    },
    {
        title: "Interview With the Vampire",
        author: "Anne Rice",
        alreadyRead: false,
    },
    {
        title: "Lovecraft Country",
        author: "Matt Ruff",
        alreadyRead: false,
    },
    {
        title: "Mortal Engines",
        author: "Phillip Reeve",
        alreadyRead: false,
    },
    {
        title: "The Boy on the Bridge",
        author: "M.R. Carey",
        alreadyRead: false,
    },
    {
        title: "The Ritual",
        author: "Adam Nevill",
        alreadyRead: false,
    },
    {
        title: "Bone Clocks",
        author: "David Mitchell",
        alreadyRead: false,
    },
    {
        title: "Cujo",
        author: "Stephen King",
        alreadyRead: true,
    },
    {
        title: "Carrie",
        author: "Stephen King",
        alreadyRead: true,
    },
    {
        title: "Dance of Dragons",
        author: "George R.R. Martin",
        alreadyRead: true,
    },
    {
        title: "Psycho",
        author: "Robert Bloch",
        alreadyRead: true,
    },
    {
        title: "Man With the Golden Torc",
        author: "Simon Green",
        alreadyRead: true,
    },
    {
        title: "The Hobbit",
        author: "JRR Tolkien",
        alreadyRead: true,
    },
    {
        title: "The Lord of the Rings",
        author: "JRR Tolkien",
        alreadyRead: false,
    }
] 
 

//FUNCTION: The function is for loop that looks at all 
//the book lengths indexs in the array to pick out which
//books have been read (already) or have not been read 
//(need) to be read.
function Reading() {

    for (var i = 0; i < books.length; i++) { 
        //FOR LOOP: interates with a variable i
        //set as the iterator and increments (x++) 
        //through the books array.
        
        
        var book = books[i];
        //Local Variable
        //Create a new variable and new array that
        //contains the  new array from the book array at the top 
        //of the script with each index(i)


        var bookInfo = book.title + ' by ' + book.author; 
        //Local Variable 
        //Create a new variable that will show book title and
        //book author when the books[i] is run through the for
        //loop at all indexes(i).             
                   

        if (book.alreadyRead) { 
            //IF ELSE STATEMENT: If the book has already
            //been read then the book will in the already read
            //group.

            //Using console.log to double check the next function 
            //is working.
            console.log('You already read ' + bookInfo);

            
            //The group of books that already have been read
            //will appear in the HTML in the already read 
            //group based on the id already using 
            //getElementById with innerHTML.
            document.getElementById("already").innerHTML += " "
            + bookInfo + ", "; 

        } else {
            //ELSE STATEMENT: If the book has not been ready
            //then the book will in the need read group.

            //Using console.log to double check the next function 
            //is working.
            console.log('You still need to read ' + bookInfo);  


            //The group of books that have not been read
            //will appear in the HTML in the need to read 
            //group based on the id need using 
            //getElementById with innerHTML.
            document.getElementById("need").innerHTML += " " 
            + bookInfo + ", ";                                               
        }       
    }
}
//Calling/Invoking the Reading Function to run in the program.
Reading();


//create a variable constant with document.querySelector
//for the click button at the top of the page for the
//addevent listeners at the end of the script.
const clickButton = document.querySelector('.click');


//FUNCTION: Click Reset Button and this will reload the 
//webpage.
function myReset() {


    //Javascript code that automatically reloads/resets
    //the webpage. 
    window.location.reload();   
}

//FUNCTION: After the myReset Function has been clicked
//an alert message will appear to let the user know the
//webpage has been reset.
function myAlert() {


    //Alert message string to let the user know the webpage
    //has been reset.
    alert("This webpage has reset!");    
}


//ADD EVENT LISTENERS and Invoke Functions:
//Both of the addEvent listeners call/invoke
//Functions: myRest() and MyAlert() when the 
//button is clicked by the user.
clickButton.addEventListener('click', myReset);
clickButton.addEventListener('click', myAlert);
