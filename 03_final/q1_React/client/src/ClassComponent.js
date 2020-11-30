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
