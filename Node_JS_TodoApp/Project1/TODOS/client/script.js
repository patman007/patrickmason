// NOTE: Original trial class code

const todoUrl = 'http://localhost:3000/todos'

//READ
$(document).ready(() => {
  $.ajax(
    {
      url: todoUrl,
      method: 'GET'
    }
  )
  .done((dataObj)=> {
    $('ul').empty()
    dataObj.map((todo)=> {
      $('ul').append(
        `<li> data-id=${todo.id}${todo.description}<span><i class='far fa-trash-alt'></i></span></li>`
      )
    })

  })
  .fail((error)=> {
    console.error('Issues getting data from server', error)
  })

})
 
// CREATE
$("input").keypress(function(event) {
  if (event.which === 13 && $(this).val() !== "") {
    var todoItem = {
      description: $(this).val()
    }  
    $.ajax({
      url: todoUrl,
      method: 'POST',
      data: todoItem
    })
    .done((newTodo)=> {
      $("ul").append(
        `<li>${newTodo.description}<span><i class='far fa-trash-alt'></i></span></li>`
      );
      $("input").val("");
    })
    .fail((error)=> {
      console.error('Failed getting new todo created in server', error)
    })
  }
});

//Try to the put and delete


$("input").keypress(function(event) {
  if (event.which === 13 && $(this).val() !== "") {
    var todoItem = $(this).val();
    $("ul").append(
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

$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});


//Delete
$("ul").on("click", "span", function(event) {
  console.log(this)
  event.stopPropagation();
  let todoId = $(this).partner().data('id')
  $.ajax({
    url: todoUrl + '/' + todoId,
    method: 'DELETE'    
  })
  .done(() => {
    console.log(this)
    $(this)
    .parent()
    .remove();
  })
  .fail(() => {})


  // $(this)
  //   console.log(this)
  //   .parent()
  //   .remove();
});



