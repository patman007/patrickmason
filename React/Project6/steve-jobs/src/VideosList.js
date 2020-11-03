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
                videos: 'https://www.youtube.com/embed/KGFhML-rNHg',
                // videos: <a href='https://www.youtube.com/embed/KGFhML-rNHg' />             
            },
            {
                title: "Steve Jobs on Microsoft",
                videos: 'https://www.youtube.com/embed/upzKj-1HaKw',
                // videos: <a href='https://www.youtube.com/embed/upzKj-1HaKw' />
            },
            {
                title: "Steve Jobs on programming",
                videos: 'https://www.youtube.com/embed/kVOTHKAqgK4',
                // videos: <a href='https://www.youtube.com/embed/kVOTHKAqgK4' />
            }
        ]
    }    

    // Check the validity of the props received
    // static propTypes = {
    //     videos: PropTypes.arrayOf(PropTypes.object).isRequired,
    // } 

    render() {
        const videos = this.props.videos.map((r, index) => (
            
            <Videos key={index}{...r} />
        ));
            
        return (
            <div className="videos-list">                
                {videos}                
            </div>
       );
    }
}

// Exporting Videos Component
export {VideosList};



  
  