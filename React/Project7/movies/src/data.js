import React, {Component} from 'react';
import './App.css';


//Data Component
class Movie extends Component {
    static defaultProps ={
        movies: [
            {
                title: "Black Widow",
                director: "Cate Shortland",
                image: "https://i.pinimg.com/originals/9e/84/af/9e84afdaecadf4ebcde368fb535ef35e.png",
                cast: ['Scarlett Johansson', 'David Harbour', 'Florence Pugh'],
            },
            {
                title: "Eternals",
                director: "Chloe Zhao",
                image: "https://i.redd.it/64oq4r14qhb31.jpg",
                cast: ['Angelina Jolie', 'Richard Madden', 'Kuamli Nanjiani', 'Lauren Ridloff'],
            },
            {
                title: "Doctor Strange in the Multiverse of Madness",
                director: "Scott Derrickson",
                image: "https://popculturetimes.com/wp-content/uploads/2020/01/Doctor-Strange-In-The-Multiverse-Of-Madness-6.jpg",
                cast: ['Benedict Cumberbatch', 'Elizabeth Olsen'],
            }
        ]
    }

        render() {
            const movies = this.props.movies.map((r, index) => (
                <Movie key={index} {...r}
            ))
                    return (
                // <div className="poster">
                    // {movies}                     
                // </div>
            )       
    }
}

// //Data Component Exported
// export default Movie;
