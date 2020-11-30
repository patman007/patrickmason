The following questions have equal weightage. The 2nd question has a choice. Each answer MUST be completed within 150 words:

1. Describe pseudo-elements and discuss what are they used for?

### Answer:
### Pseudo-elements are used to style specfic parts of an element.

### Pseudo elements can be used to style first letters and lines of certain elements. 
### Content for pseudo elements can be inserted before, or the after the content of an element. 


2. What does * { box-sizing: border-box; } do? What are its advantages?
or
2. What’s the difference between inline and inline-block?

### Answer:
### Inline-Block have width and height for the elements that are able to be set and respected. 
### Inline-Block have top/bottom margins and paddings that are respected. 
### Inline-Block have left/right margins and paddings that are respected.

### Inline have a width and height for the elements that will NOT be accepted and will be ignored.
### Inline have top/bottom margins and paddings that are NOT respected.
### Inline have left/right margins and paddings that are respected. 


3. What are the differences between a relative, fixed, absolute and statically positioned element?

### Answer:
### Static means the element appears in the order as they appear on the webpage when rendered in order.
### Relative means the element is positioned relative to its normal position.
### Absolute means the element is positioned relative to its first positioned ancestor element.
### Fixed means the element is positioned related to the window of the browser.

### Sticky means the element is positioned based on the user's scroll position.
### Sticky elements can toggle between relative and fixed, depending on the scroll position.
### This means the position is Relative until a given offset position is met in the viewport,
### which the element"sticks in place similiar to Fixed. 


4. What are the different ways to visually hide content and make it available only for screen readers?

### There are two different ways to visually hide content and make it available only for screen readers.
### One way is use of the absolute position with the .sr-only CSS class code to reference the tag of element 
## being hidden as shown below as a recommended style.
.sr-only {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
}

### Another way is the use of the CSS clip code that is visually hidden, but still readable by the screen readers.
{clip: rect(1px, 1px, 1px, 1px);
clip-path: inset(50%);
height: 1px;
width: 1px;
margin: -1px;
overflow: hidden;
padding: 0;
position: absolute;}

##### ############## ##############################################################################################

### In addition, listed below are two methods to visually hide content and do not involve using screen readers at all. 
### In CSS you can use display:none or visibility:hidden, literal content can be set to 0 pixels
### for the width and height (width: 0px; height: 0px). Another way is to move visible content off the
### visible screen (Text-intent: -100000px) or make a hidden class in HTML and adapting it to the CSS
### to move off the screen (<div class="hidden">This text is hidden.</div>). Finally, the aria-hidden="true"
### can hide the content from assitive technology.