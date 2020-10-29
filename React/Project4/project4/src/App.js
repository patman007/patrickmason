import React, {Component} from 'react'
import './App.css';
//Components to Render
import Box1Render from './Box1Render';
import Box2Render from './Box2Render';
import Box3Render from './Box3Render';
import Box4Render from './Box4Render';


//App.js Renders all the Components 
//at once through here instead of 
//individual roots for index.js
class App extends Component {
  render(){
  return (
    <div className="App">
      <Box1Render />
      <Box2Render />
      <Box3Render />
      <Box4Render />
    </div>
    );
  }
}

export default App;
