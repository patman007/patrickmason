import React, {Component} from 'react';
import './App.css';
import './data.css';


//Data Component
class Movie extends Component {
    render() {
        const {title, img, director} = this.props;
        const cast = this.props.cast.map((ing, index) => (
            <li key={index}>{ing}</li>
        ))
        return (
            <div className="card">
                {/* <div className="now-playing">{poster}</div> */}
                <div className="poster">
                    <img src={img} 
                    alt={title}/>
                </div>                
                <h1 className="title">
                    {title}
                </h1>
                <h3 className="director">
                    Directed By: {director}
                </h3>
                <h3 className="cast"> CAST:
                    <ul>
                       {cast}
                    </ul>
                </h3>
            </div>
        );       
    }
}

//Data Component Exported
export default Movie


//ORIGINAL WAY how to do data.js
// let movieData = [
//     {
//         "title": "Black Widow",
//         "director": "Cate Shortland",
//         "poster" : "http://images6.fanpop.com/image/photos/43000000/Black-Widow-2020-movie-poster-the-avengers-43006006-1280-1812.jpg",
//         "cast": [
//             "Scarlett Johansson", 
//             "David Harbour", 
//             "Florence Pugh"
//         ]
//     },
//     {
//         "title": "Eternals",
//         "director": "Chloé Zhao",
//         "poster" : "https://m.media-amazon.com/images/M/MV5BOTYzMTlhM2ItMmFkYi00ZTJhLTg3MWQtNzM1NTRkM2NiNzRjXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SY1000_CR0,0,737,1000_AL_.jpg",
//         "cast": [
//             "Angelina Jolie", 
//             "Richard Madden", 
//             "Kumail Nanjiani", 
//             "Lauren Ridloff"
//         ]
//     },
//     {
//         "title": "Doctor Strange in the Multiverse of Madness",
//         "director": "Scott Derrickson",
//         "poster" : "https://terrigen-cdn-dev.marvel.com/content/prod/1x/ds2_card_1.jpg",
//         "cast": [
//             "Benedict Cumberbatch", 
//             "Elizabeth Olsen"
//         ]
//     }
// ]

// export default movieData;