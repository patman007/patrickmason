// ***** starts code for recipe part of project 9 *****
// begins recipe object constructor
function recipe(name, num, count, items) { //receives arguments for name of recipe, num of served, how many ingredients and the items array
    this.title = name; //passes prompt value into object
    this.servings = num; //passes prompt number served into object
    this.ingredients = items; //passes items array into constructor
    this.recipeDisplay = function() { //function to build array and display results
        titleDisplay.innerHTML = this.title; //dieplays title of recipe based on id

        // all the following can be done in CSS but wanted to practice adding style from javascript
        titleDisplay.style.textTransform = "uppercase"; //turns text into all uppercase
        titleDisplay.style.fontWeight = "bold"; //makes display bold
        titleDisplay.style.fontSize = "1.75em"; //increases font-size
        titleDisplay.style.color = "#491818"; //changes color of font to match border

        servingsDisplay.innerHTML = "Serves: " + this.servings; //displays number served based on id
        servingsDisplay.style.fontWeight = "bold"; //makes display bold
        servingsDisplay.style.fontSize = "1.25em"; //increases font size of text

        ingredientsDisplay.innerHTML = "Ingredients: "; // displays the word ingredients
        ingredientsDisplay.style.fontWeight = "bold"; //bold display
        ingredientsDisplay.style.fontSize = "1.25em"; //larger font

        //element constructor for display
        for (i = 0; i < count; i++) { //start loop and runs based on the number of ingredients passed by arguments
            var node = document.createElement("LI"); //creates a node with <li> element
            var textnode = document.createTextNode(items[i]); //creates text based item at index i
            node.appendChild(textnode); //adds text AFTER the <li> created element
            ingredientsItems.appendChild(node); //adds new <li> element AFTER id ingerdientsItems which is based on <ul> element
            ingredientsItems.style.textTransform = "uppercase"; //changes text to all uppercase
        };//closes li builder

    };//ends recipeDisplay function
};//ends recipe constructor

//called when button is clicked
function recipeConstructor () { //takes user input and passes values to object constructor
    let items = []; // declares as an array
    let name = prompt("Please enter name of your favorite recipe: "); //asks user for name of recipe
    let num = Number(prompt("How many does it serve: ")); //asks user for number served
    let count = Number(prompt("How many ingredients are there: ")); //asks for number of ingredients to be used for for...loop
    for (i = 0; i < count; i++) { //starts loop based on number of ingredients
        let x = prompt("Enter ingredient #" + (i+1) + ": "); //assigns temp value to x for current ingerdient
        items[i] = x; //assigns current ingredient to variable with index of i
        }; //closes for loop
    let newDish =  new recipe(name, num, count, items); //creates ne object based on recipe constructor

    newDish.recipeDisplay();

};//close recipe constructor


// ******starts code for book part of project 9 *****
let bookData = []; // creates new array to hold book objects

// book object constructor
function book(title, author, read) {
    this.title = title;
    this.author = author;
    this.alreadyRead = read;
    var newInfo = ('"' + this.title + '" by ' + this.author);
    var node = document.createElement("LI"); //creates a node with <li> element
    var textnode = document.createTextNode(newInfo); //creates text based item at index i
    node.appendChild(textnode); //adds text AFTER the last <li> created element


    // tests to see if book has been read using boolean for read argument
    if (read) { //true, then do this
        this.message = function(){
            bookDisplayRead.appendChild(node); //adds new <li> element AFTER id bookDisplayRead which is based on <ul> element
            };// closes true this.message object function
        } else { // false, do this
        this.message = function(){
            bookDisplayNeed.appendChild(node); //adds new <li> element AFTER id bookDisplayNeed which is based on <ul> element
            };//closes false this.message object function
    }; // closes test for read or not read
}; //closes book object constructor

// create new book objects
bookData[0] = new book("Cujo", "Stephen King", true);
bookData[1] = new book("Carrie", "Stephen King", true);
bookData[2] = new book("Winter People", "Jennifer MacMahon", false);
bookData[3] = new book("Dance of Dragons", "George R.R. Martin", true);
bookData[4] = new book("Interview With the Vampire", "Anne Rice", false);
bookData[5] = new book("Psycho", "Robert Bloch", true);
bookData[6] = new book("Lovecraft Country", "Matt Ruff", false);
bookData[7] = new book("Mortal Engines", "Philip Reeve", false);
bookData[8] = new book("Man With the Golden Torc", "Simon Green", true);
bookData[9] = new book("The Boy on the Bridge", "M. R. Carey", false);
bookData[10] = new book("The Ritual", "Adam Nevill", false);
bookData[11] = new book("Bone Clocks", "David Mitchell", false);


// called when button is clicked
function displayBooks(){
    for (i = 0; i < bookData.length; i++) { //starts loop based on the number og book objects in bookData
        bookData[i].message(); //calls message function based on bookData with index of i
    }; // closes for loop
};//closes function called from click event