import React, {Component} from 'react';

class Box4Component extends Component {

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
                color: "white"                                               
            }}>
                Box4Component</div>
        )
    }
}

export default Box4Component;
