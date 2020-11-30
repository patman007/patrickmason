Take a look at this code snippet

https://jsbin.com/yohivodobe/edit?html,output

## Question: 

1. Why can I not set the margin-top on the span with the id "txt" ? 

### Answer WORDING A LITTLE CONFUSING: 
The span is set inside a div element, which is for block elements (not inline elements).

### Rewritten Answer POST Exam
span is inline and margin-top doesn't apply to inline.


1. Why can I not set the margin-top on the img with the id "pic" in the head section?

### Answer:
There is an inline style done for the image and the inline style will
have more specificity than style done in the header.


### Feedback: correct. A small nitpicky thing is that your 1st answer is not stated very clearly.
### you might say, "span is inline and margin-top doesn't apply to inline". 
### It has nothing to do with the fact it is within a div which is block level element.

### Score 3/3