Take a look at this code snippet

https://jsbin.com/yohivodobe/edit?html,output

## Question: 

1. Why can I not set the margin-top on the span with the id "txt" ? 

### Answer: 
The span is set inside a div element, which is for block elements (not inline elements).

1. Why can I not set the margin-top on the img with the id "pic" in the head section?

### Answer:
There is an inline style done for the image and the inline style will
have more specificity than style done in the header.
