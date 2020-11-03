import React, {Component} from 'react';
import './App.css';


//Title Component
class Title extends Component {
  render() {
      const {title} = this.props;
    //   const titles = this.props.title.map((ing, index) => (
    //       <li key={index}>{ing}</li>
    //   ))
    return (
    <div className="poster">
        Now Playing {title}
    </div>
   );
 }
}

//Title Component Exported
export default Title;