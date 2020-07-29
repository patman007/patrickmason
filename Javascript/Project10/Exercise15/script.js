//Attempt 1
changeMessage = () => {
    var str = document.getElementById("words").value;    
    var res = str.replace("cry", "smile");
    document.getElementById("words").value = res;
    console.log(res);
};

// function changeMessage() {
//     var sentInput = document.getElementById('sentence1').value; // entered by user
//     var sentOut = sentInput.replace(/cry/ig, "smile");//replaces ‘cry’ anywhere in string with word smile
//     document.getElementById('sentenceDisplay1').innerHTML = sentOut;
// };

