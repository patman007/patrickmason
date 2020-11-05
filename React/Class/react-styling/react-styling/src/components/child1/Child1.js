import React from 'react'
import './child1.css';

const divStyle = {
    border:'solid blue 5px',
}

const pStyle = {color: 'blue'}


//Child1 Functional Component
const Child1 = () => (
    <div style={divStyle}>     
        <p style={pStyle}>I am the Child1 component</p>    
    </div>
)

export default Child1;

