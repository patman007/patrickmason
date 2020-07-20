// //Attempt 1
// compareStrings = () => {    
//     let str1 = document.getElementById("textbox1").value;    
//     let str2 = document.getElementById("textbox2").value; 
    
//     //Local Compare the strings
//     let result = str1.localeCompare(str2);    

//     if(str1 == str2) {
//         console.log("Equal")
//         alert("equal");
//     } else {
//         console.log("Not Equal");
//         alert("not equal");
//     }    

//     document.getElementById("display").innerHTML = result;
// }


compareStrings = () => {
    //sets value of first string entered
    var compStr1 = document.getElementById('compString1').value;
    //sets value of second string entered
    var compStr2 = document.getElementById('compString2').value;
    // sets result based on true or false
    let result = (compStr1 === compStr2) ? 'is the same as' : 'is different than';
    compStringDisplay.innerHTML = `The first string you entered: ${compStr1}
                                <br>${result}<br>
                                the second string you entered: ${compStr2}`;
