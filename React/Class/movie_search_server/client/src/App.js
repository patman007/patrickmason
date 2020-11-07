import React, {useState, useEffect} from 'react';
import CardComp from './components/CardComp';
import {randSearch} from './helpers.js'

import defaultImage from '../src/images/skwerel-logo-1280.png';
import './App.css';

function App() {
  const [rows, setRows] = useState("");

  useEffect(()=> {
    let initSearchTerm = randSearch
    performSearch(initSearchTerm)
  },[])

  const performSearch = (searchTerm) =>{
    fetch(`http://localhost:3000/search/${searchTerm}`)
    .then(response => {
      // console.log(response) // NOTE: debugging tool
      return response.json()})
    .then(searchResults => {
        console.log(searchResults);
        let movies = searchResults.results;
        var movieRows = [];
        movies.forEach((movie) => {
            // let posterImage = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;
            let posterImage = movie.poster_path !== null ?
                                              `https://image.tmdb.org/t/p/w200${movie.poster_path}` 
                                              : defaultImage;

            const movieRow = <CardComp 
                                poster={posterImage}
                                data={movie}
                              />
            movieRows.push(movieRow)
        })
        setRows(movieRows);
        
    })
    .catch(error => {
        console.error('Error coming from back end:   ', error)
    })
  
  }
  
  const searchChangeHandler = (event) => {
    performSearch(event.target.value);
  }


  return (
    <div>
      <div id='movieSearch'>
        <h1>Movie Search</h1>
        <input id="inputField"
              onChange={searchChangeHandler} 
              placeholder="Enter your movie">
        </input>
      </div>
      {rows}
    </div>
  );
}

export default App;
