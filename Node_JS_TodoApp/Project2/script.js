// NOTE: Original trial class code
$("input").keypress(function (event) { //Post Method (Create)
    if (event.which === 13 && $(this).val() !== "") {
        var todoItem = $(this).val();
        $("ul").append( //Get Method (Read)
            "<li>" +
            todoItem +
            "<span>" +
            "<i class='far fa-trash-alt'></i>" +
            "</span>" +
            "</li>"
        );
        $("input").val("");
    }
});
//Update Method (Put)
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});
//Delete Method
$("ul").on("click", "span", function (event) {
    $(this)
        .parent()
        .remove();
});