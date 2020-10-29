import React, {Component} from 'react';

class Box3Component extends Component {

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
        return (
            <div style={{
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
                border: `10px groove ${borderColor}`                                               
            }}>
                Box3Component</div>
        )
    }
}

export default Box3Component;
