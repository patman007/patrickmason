import React, { Component } from 'react';
import './App.css';

//Video Class Component
class Videos extends Component {
    render() {
        const {title, videos} = this.props;
        //map method
        // const videos = this.props.videos.map((ing, index) => (
        //     <li key={index}>{ing}</li>
        // )); 
        return(
            <div className="Bottom">
                <h3 className="title">{title}</h3>
                <ul className="videos">
                    {videos}
                </ul>
            </div>
        )
    }
}

//Exporting Videos Component
export {Videos};



  
  