import React, { Component } from 'react';
// import './App.css';

class Garfield extends Component {
  render(){
    return (
    <div className="title_image">
      <h1 className='title'>About Jon Arbuckle</h1>
      <img src="./jon-arbuckle.png" alt="jon-arbuckle" width="310"/>
    </div>
    );
  }
}

export {Garfield};
