let turnedOn = true;
changeColors= () => {
    if(turnedOn) {
        btn.style.backgroundColor = 'red';
        btn.value = 'OFF';        
    } else {
        btn.style.backgroundColor = 'green';
        btn.value = 'ON';
    }
    turnedOn = !turnedOn;
}