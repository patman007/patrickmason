import React, {Component} from 'react';
import './App.css';

//Import Components
import Title from 'react';
import Movie from 'react';

//App Component
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Title title="poster" /> */}
        <Title />
        <Movie />      
      </div>
   );
 }
}

//App Component Exported
export default App;
