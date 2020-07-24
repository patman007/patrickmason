//Intialize Particle.js with window.onload event
window.onload = function() {
    Particles.init({
      selector: '.background',
      // must use #hex for colors or the particles will look like little balls.
      color: ["#5e5eb9", "#7CFC00","#FF0000","#ffffff"],
      connectParticles: true,
      minDistance: "150",
    });
};

// Intialize Parallax in Javascript
$('.parallax-window').parallax({imageSrc: 'assets/black.jpg'});


//BUTTONS
//Find the Sign Up button for Selecting
var button1 = $('btn-success');
console.log(button1);

// Alternatively choose this
// Sign Up Button
// Find method by Selecting for Sign Up Button
var button2 = $('.btn').find('button[class="btn-success"]');
console.log(button2);

// Sign Up Button
// Add Class Method
// Console.log message every time the sign up button is clicked
$('.btn-success').click(function(){
        console.log('clicked');
    })
    .addClass('bordered'); 
//Hover mouse over SignUp button and the class goes away


//IMAGES
//Either Image 1 or Image 2 shows an alert box using the double click method
//Using Double click dblclick
$("img").on("dblclick", function() {
  alert("You doubleclicked on a image!");
}); 

//Either Image 1 or Image 2 shows an has the images fadeout at 10 seconds on a click event
//Using the click event
$("img").on("click", function() {    
  //Using this and fadeOut in 10 seconds
  $(this).fadeOut(10000, function() {
      //This is a call back function 
      //and then will complete the alert last
      alert("The image is now gone");
  });
});


//H3 ELEMENTS
//Attribute method to select h3 elements
$('h3').attr('style', 'border: 4px solid orange');


//Selecting h3 elements and showing console message
var elements = $('h3');
console.log(elements);

//Click method h3 elements to display a red background 
$('h3').on("click",function(){
  $(this).toggleClass('red');
});


//ICONS
//All Icons have a chaining event invidually
// $('i').addClass('highlight bordered');
// $('i').height('200px');
// $('i').width('50%');

//Alternatively for chaning
//Chaining method grouped together
$('i').addClass('highlight bordered')
                         .height('80px')
                         .width('20%');


//Using Attribute Method to change the CSS style
//for pay icon ids 2 and 3 DOM manipulation
$('#pay2').attr('style', 'background-color: wheat');
$('#pay3').attr('style', 'width: 95%');