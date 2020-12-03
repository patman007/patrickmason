//Apple Object
const apple = {
    type: 'Granny Smith',
    weight:  4
}

//Object.assign copies the apple object
var orange = Object.assign({}, apple);

//With object.assign Clementine
//is ignored.
orange.type = 'Clementine';

//Console message to show the type
//of apple is a Granny Smith
console.log('Apple type is', apple.type);