## Question A (50% credit): 

What does the following code do?  How can you reverse the order?

    ```
    var points = [40, 100, 1, 5, 25, 10];
    points.sort(function(roo,raa){return roo-raa});
    ```
### Answer: The code sorts the points array from least to greatest in value.
###         The sorted array is [1, 5,10, 25, 40, 100].

###         To sort the code in reverse order (descending order) we have to change
###         roo-raa to raa-roo for the return as shown below.
    var points = [40, 100, 1, 5, 25, 10];
    points.sort(function(roo,raa){return raa-roo});


## Question B (50% credit): 

What's wrong with my code below?  How would you fix it?  Would using `var pi =` help? Why or why not?

    http://jsbin.com/zugaginigu/edit?js,console
    
    (function myFn(radius){
   const pi = 3.1415926;
    var boundary = Math.pow(radius, 2) * pi;    
    if(boundary) console.log('boundary is ', boundary);
}(20))

### Answer: The code was not working because 'pi' could not be accessed before initialization.
### I fixed the code above by placing the const pi on the second line instead of the thrird line.

### Var pi would not be the best help for us because var is global scoped while both let and const are block 
### scoped. Variable with var can be redeclared and updated in the the scope, while const variable cannot
### be redeclared or updated. Let variable cannot be re-declared, but can be updated.
    

All the above answers are good.  However, you are making a distinction of let vs. var saying let cannot be redeclared.  Really?  Block scoped really means it can only be accessed within the block.  Even var cannot be redeclared within a scope.

Score: 2.5/3.0