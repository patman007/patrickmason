// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import './App.css';

// //Video Class Component
// class Videos extends Component {
//     //static properties with video array as an object
//     static defaultProps = {
//         videos: [
//             {
//                 title: "Steve Jobs Vision of the World",
//                 iframe: "https://www.youtube.com/embed/KGFhML-rNHg"
//             },
//             {
//                 title: "Steve Jobs Vision of the World",
//                 iframe: "https://www.youtube.com/embed/KGFhML-rNHg"
//             },
//             {
//                 title: "Steve Jobs Vision of the World",
//                 iframe: "https://www.youtube.com/embed/KGFhML-rNHg"
//             }
//         ]
//     }    


//     //Check the validity of the props received
//     static propTypes = {
//         videos: PropTypes.arrayOf(PropTypes.object).isRequired,
//     } 

//     render() {
//         const videos = this.props.videos.map((r, index) => (
//             <Videos key={index}{...r} />
//         ));
            
//         return (
//             <div className="Videos">
//                 {videos}                
//             </div>
//        );
//     }
// }

// //Exporting Videos Component
// export {Videos};



  
  