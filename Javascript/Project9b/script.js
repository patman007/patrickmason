
//Global Variables in an Array of listed Books
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
 
//For Loop
function Reading() {
    for (var i = 0; i < books.length; i++) {        
        //Local Variable
        var book = books[i];
        //Local Variable                
        var bookInfo = book.title + ' by ' + book.author;            
        if (book.alreadyRead) {            
            console.log('You already read ' + bookInfo);                        
            document.getElementById("already").innerHTML += " "
            + bookInfo + ", ";                                                        
        } else {
            console.log('You still need to read ' + bookInfo);                                    
            document.getElementById("need").innerHTML += " " 
            + bookInfo + ", ";                                   
        }       
    }
}
//Invoking the function
Reading();