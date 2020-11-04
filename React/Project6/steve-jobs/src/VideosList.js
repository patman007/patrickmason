import React, { Component } from 'react';
import './App.css';
import { Videos } from './Videos';

// VideoList Class Component
class VideosList extends Component {
    // static properties with videos array as an object
    static defaultProps = {
        videos: [
            {
                title: "Steve Jobs Vision of the World",
                img: <a href='https://www.youtube.com/embed/KGFhML-rNHg'/>,                            
            },
            {
                title: "Steve Jobs on Microsoft",
                img: <a href='https://www.youtube.com/embed/upzKj-1HaKw'/>,                
            },
            {
                title: "Steve Jobs on programming",
                img: <a href='https://www.youtube.com/embed/kVOTHKAqgK4'/>,                
            }
        ]
    }    

    // Check the validity of the props received
    // static propTypes = {
    //     videos: PropTypes.arrayOf(PropTypes.object).isRequired,
    // } 

    render() {
        // const videos = this.props.videos.map((r, index) => (            
        //     <Videos key={index}{...r} />
        // ));
            
        return (
            <div className="card">   
                {this.props.videos.map((r, index) =>(
                    <Videos key={index} {...r} />
                ))}                             
            </div>
       );
    }
}

// Exporting Videos Component
export {VideosList};



  
  