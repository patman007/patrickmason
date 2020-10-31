import React, { Component } from 'react';
import './App.css';
//Components for importing
import { Top } from './Top';
import { Links } from './Links';
import {Videos} from './Videos';

class App extends Component {
  render() {
  return (
    <div className="App">
      <Top />
      <Links />
      <Videos />
    </div>
     );
  }
}

export {App};