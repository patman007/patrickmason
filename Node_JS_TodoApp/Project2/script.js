// NOTE: Original trial class code
$("input").keypress(function (event) { //Post Method (Create)
    //If ASCII value 13 which is a return key and 
    //the value cannot be an empty string
    if (event.which === 13 && $(this).val() !== "") {

        //getting a value for todo item
        var todoItem = $(this).val();
        $("ul").append( //Get Method (Read) is not here, but in html instead.
            "<li>" +
            todoItem +
            "<span>" +
            "<i class='far fa-trash-alt'></i>" +
            "</span>" +
            "</li>"
        );
        //Resetting input field setting the value to nothing
        //setting a value
        //This has no character if it was " " this would mean
        //there is a character.
        $("input").val("");
    }
});
//Update Method (Put)
//this allows us to toggle completed
//and not completed tasks. This deals
//with the event listener
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
    //this.____ means this belongs to the object (list, array, span, etc..)
});
//Delete Method
//Remove a list item from the trash can
$("ul").on("click", "span", function (event) {
    $(this)
    //this.____ means this belongs to the object (list, array, span, etc..)
        .parent()
        .remove();
});

