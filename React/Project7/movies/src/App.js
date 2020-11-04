import React, {Component} from 'react';
import './App.css';

// Import if using components folder
// import MovieComp from './components/MovieComp'


//Import Components
import Title from './title';
// import Movie from './data';
import MovieList from './dataList';

//App Component
class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <MovieList />        
      </div>
   );
 }
}

//App Component Exported
export default App;


//ORIGINAL APP.js Code
// import React, {Component} from 'react';
// import MovieComp from './Components/MovieComp';

// import movieData from './data';

// import './App.css';

// class App extends Component{
//   render(){
//     return (
//       <div className="App">
//        <MovieComp data={movieData}/>
//       </div>
//     );
//   }
  
// }

// export default App;