import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css';

//Import Components
import Home from './Components/Home';
import Menu from './Components/Menu';
import Catering from './Components/Catering';


//Functional Component for App
const App = () => (
  <div className="App">
    <div className="container">
      <Router>
          <ul>
            <li><Link to='/home'>Home</Link></li> 
            <li><Link to='/menu'>Menu</Link></li> 
            <li><Link to='/catering'>Catering</Link></li> 
          </ul>  
          <hr/>
            <Route path='/home' component={Home} />
            <Route path='/menu' component={Menu} />
            <Route path='/catering' component={Catering} /> 
      </Router>         
    </div>    
  </div>
)


export default App;
