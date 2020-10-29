import React, {Component} from 'react';

class Box2Component extends Component {

    render() {
        const backgroundColor = [
            'yellow',
            'red',
            'blue',
            'green',
            'orange',
            'brown',
            'purple',
            'grey']
            [Math.floor(Math.random() * 8)];
        let borderColor = [
            'yellow',
            'red',
            'blue',
            'green',
            'orange',
            'brown',
            'purple',
            'grey'
            ][Math.floor(Math.random() *8)];;  
        const ProptoComponent = {
            // display: "flex", 
            // flexDirection: 'row',                                              
            // justifyContent: "center",
            // alignItems: "center",
            display: "inline",
            backgroundColor: backgroundColor,
            height: "150px",
            width: "200px",
            margin: "30px",
            fontWeight: "bold",
            color: "white",
            border: `10px double ${borderColor}` 
        }      
        //prop to pass styles to a child component 
        return (
            <div style={ProptoComponent}>
                Box2Component
            </div>
        )
    }
}

export default Box2Component;
