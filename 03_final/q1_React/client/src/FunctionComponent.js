//Importing
import React, { useState, useEffect } from 'react'

function FunctionComponent() {
    
   // Array Destructuring with the useState
   // Declare a new state variable called "count"
    const [count, setCount] = useState(0)

    //UseEffect is used in place of Lifecycle methods
    //in class components
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


