

//Submit Button
//$( "button, input[type='submit']" ).

// $("button, input[type='sumbmit").on("click",function(){
//     $(this).toggleClass('red');
//   });



$("button, input[type='submit").on("click",function(){
    $(this).addClass('marked', function() {
        $("#displayMessage").text( "For this type jQuery found " + input.length + "." );        
    });
    // Prevent the form from submitting
    $("form").submit(function(event) {
        event.preventDefault();
        console.log(#displayMessage);
  });   
});

