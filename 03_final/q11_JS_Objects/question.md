Consider the following code.  What would be console logged?  Messed up?  Why? (20%)

### Answer
### The code below console logged is Apple type is Clementine.
### The code is messed up because it is calling an orange instead
### of an applie (in this case a Granny Smith apple).
### Basically we are mixing up apples with oranges.

### This error is happening because we are reassign the reference of 
### the apple object to be used in var orange. This can allow us to 
### go into the object using dot notation for orange.type to change
### the value to a Clementine orange in the console log instead of a Granny Smith apple.
### This operation can happen because objects are mutable.



What would you change to address this issue (where the Apple type is, mis-represented in the last line below)? (80%)

    const apple = {
        type: 'Granny Smith',
        weight:  4
    }

    var orange = apple

    orange.type = 'Clementine'

    console.log('Apple type is ', apple.type)

Hint: this question refers to copying of objects.


### Answer Code Below 
//Apple Object
const apple = {
    type: 'Granny Smith',
    weight:  4
}

//Object.assign copies the apple object
var orange = Object.assign({}, apple);

orange.type = 'Clementine';

console.log('Apple type is ', apple.type);  

### Answer Code Explanation continued
### The code above is what we would do to correct to show 
### to get Granny Smith as the apple.type in the console log.
### Since objects are mutable (able to change) we can make a 
### copy by using Object.assign, which copies the source object
### (apple) into where a target object is.

