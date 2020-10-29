import React, { Component } from 'react';
import './App.css';

//Ordered List Component
class List2 extends Component {
  render(){
  return (
    <div className="List2">
        <h3 className="title3">Things that Garfield hates</h3>
        <ol className="ordered">
            <li>Mondays</li>
            <li>Spiders</li>
            <li>Raisins</li>
            <li>Jon Singing in the shower</li>            
        </ol>         
      </div>
    );
  }
}

//Exporting Ordered List Component
export {List2};