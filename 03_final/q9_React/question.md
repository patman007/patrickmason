When does React's Virtual DOM update the real DOM?

### Answer
When new elements are addeded the virtual DOM of each element is like a node on a tree. 
Also when the state is changed in the elements a new virtual DOM tree will be created and
the virtual DOM tree will be compared to a previous virtual DOM tree. Once the virtual
DOM has been calculated the to best possible method with the changes made the changes
themselves will be sent to the real DOM. 

### Correct