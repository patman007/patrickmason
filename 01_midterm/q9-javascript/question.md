In JavaScript, how do you append a value to an array?  List 4 ways you can find (you may be able to find more) (25% credit).  

Provide example code showing the use of each of the methods you list. (40% credit)

How do you remove a specified member from the array?  Provide small sample. (35% credit)

### Answer:
### Three ways to append a value to an array are by the push(), splice(), 
### and length() will change (mutate) the array while two ways to 
### append a value to an array that will note change (not mutate) are 
### concat() and spread().


### Answer:
### Push Method (Mutate Type)
### const vehicles = ['airplane' , 'tank'];
### vehicles.push('submarine');
### console.log(vehicles);
### // Answer: ['airplane', 'tank' , 'submarine']


### Splice Method (Mutate Type)
### const vehicles = ['airplane' , 'tank'];
### vehicles.splice('submarine', 'helicopter');
### console.log(vehicles);
### // Answer: ['airplane', 'tank' , 'submarine', 'helicopter']


### Length Method (Mutate Type)
### const vehicles = ['airplane' , 'tank'];
### vehicles[2] = 'submarine'; 
### consol.log(vehicles);// Answer: ['airplane', 'tank' , 'submarine']
### vehicles[3] = 'helicopter'
### console.log(vehicles);
### // Answer: ['airplane', 'tank' , 'submarine', 'helicopter']


### Concat Method (Non Mutate Type)
### const flying = ['airplane' , 'helicopter'];
### const nonflying = ['tank' , 'submarine'];
### const vehicles = flying.concat(nonflying); 
### consol.log(vehicles);
### // Answer: ['airplane' , 'helicopter' , 'tank', 'submarine']


### Spread Method (Non Mutate Type)
### const flying = ['airplane' , 'helicopter'];
### const nonflying = ['tank' , 'submarine'];
### const vehicles = [...flying, ...nonflying]; 
### consol.log(vehicles);
### // Answer: ['airplane' , 'helicopter' , 'tank', 'submarine']
### flying; // ['airplane' , 'helicopter'];
### nonflying; // ['tank', 'submarine']


### Answer:
### To remove a specified member from an array it depends which element you
### want removed such as at the begining, shift() method or at the end
### pop() method of the array.


### Pop() Method
### const vehicles = ['airplane', 'tank' , 'submarine', 'helicopter']
### vehicles.pop();
### Answer: // ['airplane', 'tank' , 'submarine']

### Shift() Method
### const vehicles = ['airplane', 'tank' , 'submarine', 'helicopter']
### vehicles.shift();
### Answer: // ['tank' , 'submarine' , 'helicopter']