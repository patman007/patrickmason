import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Login from './components/Login'
import Logout from './components/Logout'
import Newsfeed from './components/Newsfeed'
import Signup from './components/Signup'
import Home from './components/Home'


import "./App.css";

function App() {
  return (
    <div className="App">
      <a href="/signup">Sign up</a>
      <a href="/login">Login</a>
      <a href="/logout">Log out</a>
      <h1>Welcome to the Social Network</h1>

      <Router>
        <Route exact path="/" component={Login} />
        <Route path="/newsfeed" component={Newsfeed} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
      </Router>
    </div>
  );
}

export default App;
