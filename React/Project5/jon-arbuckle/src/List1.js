import React, { Component } from 'react';
import './App.css';

//Unordered List Component
class List1 extends Component {
  render(){
    return (      
    <div className="List1">
        <h3 className="title2">Garfield's favorite foods</h3>
        <ul className="unordered">
            <li>Pepperoni Pizza</li>
            <li>Spaghetti with meatballs</li>
            <li>Jumbo shrimp</li>
            <li>Lobster with filet mignon</li>            
        </ul>
      </div>
    );
  }
}

//Exporting Unordered List Component
export {List1};