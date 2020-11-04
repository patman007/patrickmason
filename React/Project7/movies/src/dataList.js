import React, {Component} from 'react';
import './App.css';
import Movie from './data'; 


//Data Component
class MovieList extends Component {
    static defaultProps = {
        movies: [
            {
                title: "Black Widow",
                director: "Cate Shortland",
                img: "https://cdn.flickeringmyth.com/wp-content/uploads/2020/03/Black-Widow-promo-posters-3.jpg",
                cast: ['Scarlett Johansson', 'David Harbour', 'Florence Pugh'],
            },
            {
                title: "Eternals",
                director: "Chloe Zhao",
                img: "https://fontlot.com/wp-content/uploads/2020/06/Eternals-1.jpg",
                cast: ['Angelina Jolie', 'Richard Madden', 'Kuamli Nanjiani', 'Lauren Ridloff'],
            },
            {
                title: "Doctor Strange in the Multiverse of Madness",
                director: "Scott Derrickson",
                img: "https://i.pinimg.com/736x/72/95/48/7295484829f68be1017b09921829df23.jpg",
                cast: ['Benedict Cumberbatch', 'Elizabeth Olsen'],
            }
        ]
    }
        render() {        
            return (
                <div>
                    {this.props.movies.map((r, index) => (
                        <Movie key={index} {...r} />
                    ))}   
                </div>
            )       
        }
}

//Data Component Exported
export default MovieList


