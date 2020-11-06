import React, { Component } from 'react';
import './App.css';

//Video Class Component
class Videos extends Component {
    render() {
        const {title, img} = this.props;
        //map method
        // const img = this.props.img.map((ing, index) => (
        //     <li key={index}>{ing}</li>
        // )); 
        return(
            <div className="card">
                <h3 className="title">
                    {title}
                </h3>
                <div>
                    <ul className="videos">
                        <img src={img} 
                        alt={title} 
                        width="500"
                        height="390"
                        allowFullScreen/>
                    </ul>
                </div>
            </div>
        )
    }
}

//Exporting Videos Component
export {Videos};


//ORIGINAL WAY WAS DONE WITH EVERYTHING IN VIDEOS.JS
// import React from "react";

// function Videos(props){
//     return(
//         <div>
//             <iframe
//                 title="YouTube video player"
//                 className="youtube-player"
//                 width="500"
//                 height="390"
//                 src={props.link}
//                 frameBorder="0"
//                 allowFullScreen>
//             </iframe>
//         </div>
//     )
// }

// export default Videos;
  
  