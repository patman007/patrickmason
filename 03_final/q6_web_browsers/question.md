## Question A (30% credit): 

Does the HTML below trigger a HTTP GET request for the picture file, when the page first loads?  

### Answer:
### visibility:hidden means the HTTP GET request for the image element will be triggered (not ignored) 
### in the flow of the HTML.
### display:none means the HTTP GET request for the image element will be not triggered (but ignored) 
### in the flow of the HTML.


### Devtools Observation 
### I observed in the Devtools the visibility:hidden CSS property (Case 1) makes the image not visible 
### to the human eye, but the Devtools shows the space the image would be located (no) on the webpage. I observed 
### in the Devtools the display:none CSS property (Case 2) makes the image not visible to the human eye, 
### but the Devtools cannot show the image element actually exists (ignored) on the webpage. 

### Please see Case1 and Case2 jpg files.

Hint: you may put it in a sample page, load it and check out the network tab in the Devtools.

Case 1:
    `<img src="dog.jpg" style="visibility: hidden" alt="my dog">`

Case 2:
    `<img src="dog.jpg" style="display:none" alt="my dog">`


## Question B (30% credit)

1. What are `data-` attributes good for? (100 words max)

### Answer
### data- can be used to store custom data private to a webpage or app. data attrbutes have the ability to store (custom) data allows an HTML 
### page's JavaScript used to be more engaging experience for the user. The data attribute in Javascript allows reading values
### easier to use than using Javascript codes such as queryselector or getattribute(). Styling CSS with data- attributes lets users get
### on/off ability and ability to do a selection based on the value it has at the same specificity level to display on a webpage were needed.


2. Describe the differences between a cookie, sessionStorage and localStorage and when would you use each of them. Please make it your answer, and not a copy and paste from somwhere (150 words max)

### Answer
### Cookies has the lowest storage capacity (4kb), is accessible from any window, storage location is in the 
### client (browser) and server, has an expiration  that can only set manually, and can be sent with requests.

### Local Storage has the highest storage capacity (10mb), is accessible from any window, storage location is 
### in the client (browser) only, has an expiration that can never be done, and cannot be sent with requests. 

### Session Storage has a little less amount of storaage capacity (5mb) than local storage, is accessible from the same tab (session based),
### storage location is in the client (browser) only, has an expiration happens when the tab closes, and cannot be sent with requests.