//Apple Object
const apple = {
    type: 'Granny Smith',
    weight:  4
}

//Object.assign copies the apple object
var orange = Object.assign({}, apple);

orange.type = 'Clementine';

console.log('Apple type is ', apple.type);