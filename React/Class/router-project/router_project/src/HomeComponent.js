//Functional Component
import React from 'react'

const HomeComponent = () => (
   <div>
       <h1>Home View</h1>
       <img src="https://i.imgur.com/aXtojQT.gif" width="70%" alt="comic" />
   </div>
);

export default HomeComponent

//Component Way
// import React, { Component } from 'react'
// class HomeComponent extends Component {
//  render() {
//      return (
//        <div>
//            <h1>Home View</h1>
//            <img src="https://i.imgur.com/aXtojQT.gif" width="70%" alt="comic" />
//        </div>
//      );
//  }
// }

// export default HomeComponent