//Attempt 1
// function onload() {

//     var button = document.getElementById("buttonid");
//     //add onclick event
//     button.onclick = function() {
//         alert("alert");
//     }


//     if(button.addEventListener){
//          button.addEventListener("click", function() { alert("alert");});
//     } else {
//          button.attachEvent("click", function() { alert("alert");});
//     };
// };


// function init() {
//     var button = document.getElementById("buttonid");
//     if(button.addEventListener){
//         button.addEventListener("click", function() { alert("alert");}, false);
//     } else if(button.attachEvent){
//         button.attachEvent("onclick", function() { alert("alert");});
//     }
// };
// if(window.addEventListener){
//     window.addEventListener("load", init, false);
// } else if(window.attachEvent){
//     window.attachEvent("onload", init);
// } else{
//    document.addEventListener("load", init, false);
// }


displayInfo = () => {
    let nameVal = myNames.value;
    let ageVal = myAge.value;
    let addressVal = myAddress.value;
    let txt = `${nameVal}, you are ${ageVal} years old and live at ${addressVal}.`
    demo.innerHTML = txt;
}
 
     