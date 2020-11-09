### Question 11:

Write the jQuery code to set the background color of alternative paragraph elements to light grey color (#ddd). Provide complete sample code, either pasted below or link to a codepen (or similar tool)

## Answer $("p").css("background-color", "#ddd")

### Correct Answer
### The question asked for alternate paragraphs, thereofore the code would like this: $("p:odd").css("background-color", "#ddd");