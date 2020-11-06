import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css';

//Import Components
// import Home from 'react';
// import Catering from 'react';
// import Menu from 'react';


//Functional Component for App
const App = () => (
  <div className="App">
    <div className="container">
      <ul>
        <li><a href="/">Home</a></li> 
        <li><a href="/menu">Menu</a></li> 
        <li><a href="/catering">Catering</a></li> 
      </ul>        
    </div>    
  </div>
)


export default App;
