//Attempt 1
checkSentence = () => {
    let sentence = document.getElementById('sentence');
    let text = sentence.value;
    //Replace all letter a's with 
    //letter x's using /_/g 
    let newText = text.replace(/a/gi, 'x');
    let displayText = document.getElementById('displaySentence');
    displayText.innerHTML = `Your original sentence was: ${text} <br>
    and your new sentence is: ${newText}`;
    
    sentence.value = "";
};

clearDisplay = () => {
    displaySentence.innerHTML = '';
}

//Atempt 1
// clearDisplay = () => {
//     document.addEventListener("onclick", checkSentence());
//     // ....
//     document.removeEventListener("onclick", checkSentence());
// }



 
 

