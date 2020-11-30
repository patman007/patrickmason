// $(document).ready(function(){
//     $("form#changeQuote").on('submit', function(e){
//         e.preventDefault();
//         let data = $('input[name=quote]').val();
//         $.ajax({
//             type: 'post',
//             url: '/ajax',
//             data: data,
//             dataType: 'text'
//         })
//         .done(function(data){
//             $('h1').html(data.quote);
//         });
//     });
// });