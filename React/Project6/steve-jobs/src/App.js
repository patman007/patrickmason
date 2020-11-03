import React, { Component } from 'react';
import './App.css';

//Components for importing
import { Top } from './Top';
import { Links } from './Links';
import { VideosList } from './VideosList';

//App Component
class App extends Component {
  render() {
  return (
    <div className="App">
      <Top />
      <Links />       
      <VideosList /> 
    </div>
     );
  }
}



//Export App Component
export {App};
