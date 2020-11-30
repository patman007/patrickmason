### Question:

Where in a react component would you put a function 
that you only want to invoke when said component mounts?

Include class and functional component methods of doing this. If you don't recall, research it and provide working examples.

### Answer: skipped

### Ok.  Look at componentDidMount function and its equivalent in the function based react components,
### aka useEffect hook.

###### ################################################################################################
### New Answer: componentDidMount() is used to invoke immediately after the component is mounted. setState() can be used to do this immediate call. 

### In functional components, useEffect hook replaces componentDidMount() from class components and is used to invoke immediately after the component is mounted. 


### See below for example code or see the client folder
### for the FunctionComponent.js and ClassComponent.js


### Functional Components Example
//Importing
import React, { useState, useEffect } from 'react'

function FunctionComponent() {
    
   // Array Destructuring with the useState
   // Declare a new state variable called "count"
    const [count, setCount] = useState(0)

    //UseEffect is used in place of Lifecycle methods
    //from class components
    useEffect(() => {

        const id = setInterval(() => {
          // When a function is passed, 
          // React calls that function with the current
          // state and whatever we return becomes the new state.
          setCount(count + 1)

          // Console message to indicate when UseEffect is happening
          // and a timer is set at an interval of 1 second
          console.log('UseEffect Happening')
        }, 1000)

        // Return the function and clear
        // the interval id after the 
        // count is made.
        return () => clearInterval(id)
    }, [count])

    return (
       // Updating State uses setState 
       // We do not need to use "this"
       // as would be in class components
        <div>
            <button onClick={() => setCount(count + 1)}>
                Function Component Count {count} </button>
        </div>
    )
}

//Function Component Exported
export default FunctionComponent

#### ######################################################

### Class Components Example
//Importing
import React, { Component } from 'react'

class ClassComponent extends Component {
    
    //Constructor is the only place to 
    //assign this.state.    
    constructor(props) {

        //setState() is not assigned here  
        //props are assigned here instead
        super(props)

        this.state = {
            count: 0
        }
    }
    
    //IncrementCount Function to 
    //use for setState
    incrementCount = () => {
       this.setState ({
        count: this.state.count + 1        
       })      
    }

    //Lifecycle method not used in Function Components
    componentDidMount() {

        setInterval(() => {
          // When a function is passed, 
          // React calls that function with the current
          // state and whatever we return becomes the new state.
          this.setState({ count: this.state.count + 1 })

          // Console message to indicate when UseEffect is happening
          // and a timer is set at an interval of 1 second
          console.log('componentDidMount Happening')
        }, 1000);
    }

    render() {
        // Updating State uses this.setState()
        //We need to use "this" for the state
        // for each count
        return (
            <div>
                <button onClick={this.incrementCount}>
                    Class Component Count {this.state.count}</button>                
            </div>
        )
    }
}

// Component Exported
export default ClassComponent