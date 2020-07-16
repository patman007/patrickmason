//Attempt 1
// checkSentence = () => {
//     let yourSentence = {
//         fName: sentence.value,       
//         makeSentence: function(){
//             return `My sentence is: ${this.fName}`;
//         }
//     }
//     demo.innerHTML = yourSentence.makeSentence();
//     sentence.value = '';    
// }
 

checkSentence = () => {
    let sentence = document.getElementById('sentence');
    let text = sentence.value;
    //Replace all letter a's with letter x's using /_/g 
    let newText = text.replace(/a/gi, 'x');
    let displayText = document.getElementById('displaySentence');
    displayText.innerHTML = `Your original sentence was: ${text} <br>
                                and your new sentence is: ${newText}`;
};
 
 

