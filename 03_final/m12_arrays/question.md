### Which new Array method replaces this annoying piece of code?

```
var myArray = [2, 4, 64, 1]

function test(myArr) {
  for(let i=0; i<myArr.length; i++) {
    if(myArr[i] > 32) {
      return myArr[i]
    }
  }
  return false
}
### test(myArray);
```

1. find
2. findIndex
3. search

### Answer: 1 - find, will give a value of 64 because it is the only number over 32.

### I am attaching the code because I am unsure if you are asking a value or an array
