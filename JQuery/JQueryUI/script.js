//Accordion()
//How do we start get the third panel to be open when page loads?
$('#twd').accordion({active:2});
//Accodion style mint chocolate style;
//Lory Grimes is active Panel active: -1 can work as well

//What if we do not want any of the panels to be open when page loads?
$('#twd').accordion({active:false, collapsible: true});
// or $('#twd').accordion({active: true});

//How would we speed up the animation effect of the panels opening?
$('#twd').accordion({active: true, animate: 200});

//What do we need to do to have panels open when mouse hovers over
//instead of clicking on panels?
$('#twd').accordion({active: true, animate: 200, event: "mouseover"});

//How do we get the accordion to be 50% of the page width and auto
//margins? HINT: style.css file
//on CSS



//Sortable()
//How do we allow sorting only on the ‘y’ axis?
$("#cast").sortable({axis:"y"});

//How do we change our cursor to the “grab” hand when we sort?
$("#cast").sortable({axis:"y", cursor: "grab"});

//What if we only wanted the even items to be sortable?
$("#cast").sortable({axis:"y", cursor: "grab", items:">li:nth-child(2n)"});

//How do we add a placeholder?
$("#cast").sortable({axis:"y", cursor: "grab", items:">li:nth-child(2n)", 
placeholder: "sortable-placeholder"});



//Draggable()
//How do we contain the smaller box inside the bigger box?
$("#innerDiv1").draggable({containment:"body"});
//or
$("#innerDiv1").draggable({containment:"parent"});
//Stays inside the parent id

// // Example #1 done another way:
// $("#innerDiv1").draggable(
//     2 > 1 ? {containment: "parent", revert: true} : {disabled: true}
// )

// // Example #2 done another way:
// $("#innerDiv1").draggable(
//     {
//         containment: "parent", 
//         revert: true,
//         disabled: todaysDate() > vactionDate() ? true : false
//     }
// )

//What if we wanted the blue box to revert back to its starting position?
$( "#innerDiv1" ).draggable({containment:"body", revert: true });

$( "#innerDiv1" ).draggable({containment:"parent", revert: true });
//Stays inside the parent id

//You are going on vacation. What method would you use to “disable” the
//ability to drag?
// $( "#innerDiv1" ).draggable({"disable"});



//Resizable()
//Add the animate is true option. What is happening? Problems with this?
$("article").resizable({animate: true});

// What if we want it to always be a square? How do we maintain the
// aspect ratios?
$("article").resizable({animate: true, aspectRatio: true});

// Still hard to tell what is going on. Anyway we can ‘see’ the resizing as it
// happens?
$("article").resizable({animate: true, aspectRatio: true, ghost: true});

// What if we want to control the maximum height and width? We do not
// want it to be taller or wider than 400 pixels?
$("article").resizable({animate: true, aspectRatio: true, ghost: true,
maxHeight: 400, maxWidth: 400});



//Bounce()
// What is happening? How does it work?
$("#circleDiv").click(function() {
    $("#bounceCircle" ).toggle( "bounce", { times: 3, distance: 100 }, "slow" );
});



//Explode()
// What is happening? How does it work?
$('#explodeDiv').click(function() {
    $( "#explodeCircle" ).toggle( "explode" );
});
   