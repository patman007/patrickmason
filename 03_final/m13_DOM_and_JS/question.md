### Which of the following reasons explains this use of Array.from ...

```
  let headingElems = document.querySelectorAll('.article .title')
  let headings = Array.from(headingElems).map(t => t.textContent)
  console.log(headings)
```

1. The code is wrong and wouldn't work
2. Use it because it shows your mastery
3. You need it because querySelectorAll provides a NodeList, which is missing a .map method
4. none of the above

### Answer: skipped

### New Answer: 3.

### Feedback
### Answer is 3.  JS selecting elements gives you an array like structure called nodelist, which is
### missing some key Array methods. Hence Array.from(nodelist) solves this problem like the code above.