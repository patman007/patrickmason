// // NOTE: Original trial class code
// $("input").keypress(function(event) {
//   if (event.which === 13 && $(this).val() !== "") {
//     var todoItem = $(this).val();
//     $("ul").append(
//       "<li>" +
//         todoItem +
//         "<span>" +
//         "<i class='far fa-trash-alt'></i>" +
//         "</span>" +
//         "</li>"
//     );
//     $("input").val("");
//   }
// });

// $("ul").on("click", "li", function() {
//   $(this).toggleClass("completed");
// });

// $("ul").on("click", "span", function(event) {
//   $(this)
//     .parent()
//     .remove();
// });

const todoUrl = 'http://localhost:3000/todos'

// Read - GET
$(document).ready(function(){
    $.ajax({
        url: todoUrl,
        method: "GET"
    })
    .done(function(dataObj){
        $('ul').empty();
        dataObj.map(function(todo){
            let completed = todo.isComplete ? "completed" : "";
            $('ul').append(
                `<li data-id=${todo.id} class=${completed}>${todo.description}<span><i class='far fa-trash-alt'></i></span></li>`
            );
        })
    })
    .fail(function(errorObj){
        console.error('Issues getting create data from back end API ', errorObj);
    })
})

// Create - POST
$('input').keypress(function(event) {
    if(event.which === 13 && $(this).val() !== '') {
      var todoItem = {
        description: $(this).val()
      }
      $.ajax({
        url: todoUrl,
        method: "POST",
        data: todoItem
      })
      .done(function(newTodo){ 
        let completed = newTodo.isComplete ? "completed" : "";
        $('ul').append(
            `<li data-id=${newTodo.id} class=${completed}>${newTodo.description}<span><i class='far fa-trash-alt'></i></span></li>`
        );
        $('input').val(""); // moved the "" to within the parentheses
      })
    }  // closes if (event.which === 13) ...
  });

// NOTE: this is not needed for the app p but is used to show
// bubbling in action if stopPropagation() is not used in DELETE method
$('body').on('click',()=>{
    console.log('I am the body')
})

$('div').on('click',()=>{
    console.log('I am the div')
})

// Update - PUT
$('ul').on('click', 'li', function(){
    let self = this;
    let thisTodoId = $(this).data('id')
    $.ajax({
        url: `${todoUrl}/${thisTodoId}`,
        method: 'PUT'
    })
    .done(function(){
        $(self).toggleClass('completed');
    })
    .fail(err => console.log(`Issues with trying to update class: ${err}`))
});

// Delete - DELETE
$('ul').on('click', 'span', function(event){
  event.stopPropagation(); // TODO: what is stopPropagation?
  var self = this; // this refers to span and is global inside the function
                  // I need access to it later in another function so I am
                  // setting self var to this so I have access throughout the handler
  // handles route based on id of the parent element since user clicks on span element (no id)
  var thisId = $(this).parent().data('id');
  var url = `${todoUrl}/${thisId}`;
  $.ajax({
      url: url,
      method: 'DELETE',
  })
  .done(function(){
      $(self).parent().remove(); // removes the li element of the span clicked in browser
  })
  .fail(function(err){
      console.log('Delete failed with error ', err)
  });
});