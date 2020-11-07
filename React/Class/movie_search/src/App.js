import React, { useState } from 'react';
import './App.css';

const App = () => {

    const [rows, setRows] = useState()    

    const performSearch = movie => {
        const url =  `https://api.themoviedb.org/3/search/movie?api_key=4de3f13a4cdd05831b95a97d3b3e2da6&query=${movie}}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setRows(data.results.map(movie => {
                    console.log(movie.title)
                    let posterImage = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;
                    return (
                        <div key={movie.id}>
                            <h1>{movie.title}</h1>
                            <img src={posterImage} alt="movie" />
                        </div>
                    )
                }))
            })
    }

    const inputHandler = event => {
        return performSearch(event.target.value)
    }

    return (
        <div>
            <input type="text" placeholder="Type to search a movie" onChange={inputHandler}/>
            <div style={{display: 'flex', margin: '5px'}}>
                {rows}
            </div>
        </div>
    )
}

export default App;