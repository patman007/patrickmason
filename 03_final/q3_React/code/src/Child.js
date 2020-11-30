//Import React
import React from 'react'

//Child Functional Component
//passed with props as argument(parameter)
const Child = props => {

    //Console.log message of the props 
    //when sending data from child
    //to parent.
    console.log(props)

    return (
        <div>
            <input type="text" 
            placeholder="Please Enter Your Name"
            onChange={event => props.onChange(event.target.value)}
            />
        </div>
    )
}

//Export Child Component
export default Child