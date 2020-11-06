import React, { Component } from 'react';
//This import allows Line 11 to be called on
//and be nested inside
import Ninjas from './Ninjas';
//App.js is the Parent component

import AddNinja from './AddNinja';

// Class Component
class App extends Component {
  state =  {
    ninjas: [
      {name: 'Ryu', age: 30, belt: 'black', id: 1},
      {name: 'Yoshi', age: 20, belt: 'green', id: 2},
      {name: 'Crystal', age: 25, belt: 'pink', id: 3}
    ]
  }

  addNinja = (ninja) => {
    ninja.id = Math.random();
    //Spread operator
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    })
    // console.log(ninja);     
  }

  deleteNinja = (id) => {    
    console.log(id)    
    //filter method cycles through array
    //and will return a new array. Certain
    //items will be filtered out.
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id

    })
    this.setState({
      ninjas: ninjas
    })

  }

  componentDidMount() {
    console.log('component mounted')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('component update');
    console.log(prevProps, prevState);

  }
  render() {

    //Passing things as props
    return (
        <div className="App">
          <h1>My first React app!</h1>
          <p>Welcome</p>          
          <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
          <AddNinja addNinja={this.addNinja}/>
        </div>
    );
  }  
}

export default App;
