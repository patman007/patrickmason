## Question A (40% credit):

In CSS3, how would you select:

  - Every `<a>` element whose `href` attribute value begins with “https”.
  - Every `<a>` element whose `href` attribute value ends with “.pdf”.
  - Every `<a>` element whose `href` attribute value contains the substring “css”.

### Answer: a[href^="https"]
###         a[href$=".pdf"]
###         a[href*="css"]

### Answer:
### a[href^="https"]
### means “begins with” selector to select a beginning value of https.

### a[href$=".pdf"] 
### means “ends with” selector to select an ending value of .pdf.

### a[href*="css"] 
### means “contains” selector to select a value containing "css"at least one instance or more.


## Question B (30% credit):

What is the purpose of the z-index and how is it used? What possible values does the z-index take (e.g. one of those is "auto")?

### Answer:
### The z-index property looks at the stack order of a specific element such as a img in the background of a webpage.
### A element with a greater z-index( or higher stack) will be in front of elements of lower z-indexes (lower stack).
### The different values of z-index are absolute, auto (default value), relative, fixed, and sticky.