import React, { Component } from 'react';
import './App.css';
//Components for importing
import {Garfield} from './Garfield';
import {Text} from './Text';
import {List1} from './List1';
import {List2} from './List2';


//App.js Renders all the Components 
//at once through here instead of 
//individual roots for index.js
class App extends Component {
  render(){
  return (
    <div className="App">
      <Garfield />
      <Text />
      <List1 />
      <List2 />
      </div>
    );
  }
}

export default App;

//ORIGINAL WAY WAS DONE WITH EVERYTHING IN APP.JS
// import React from 'react';
// import './App.css';
// import Garfield from './images/jon-arbuckle.png'

// function App() {
//   return (
//     <div className="App">
//       <h1>About Jon Arbuckle</h1>
//       <img src={Garfield} width="300" height="300" alt='garfield'/>
//       <div id="text_container">
//         <p>Hi there everyone! My name is <u>Jon Arbuckle</u>. I am 30 years old and I am a
//           cartoonist that lives in Muncie, IN. I am the proud owner of a cat named <strong>Garfield</strong> and
//           a dog named <strong>Odie</strong>. Garfield is fat, lazy and loves to eat, while Odie is a dog
//           without a brain. Although my pets drive me crazy, I can't imagine life without them.
//           <br></br>I spend about half my time going to the grocery store to buy enough food to
//           feed Garfield. I have to make sure to buy all of Garfirled's favorite foods, or else
//           he'll get grumpy. This includes milk, cheese, bread, ham, chicken wings, potato chips,
//           pasta with marinara sauce, frozen pizzas, and <strong>lots and lots</strong> of lasagna. When I come home,
//           Garfield usually attacks me and tries to eat everything in the grocery bag before I even have time to
//           put it in the refrigerator. One time he ate everything that I bought in 30 seconds,
//           and I had to go back to the store to buy more food. <em>I wasn't too happy about that.</em>
//         </p>
//       </div>
//     <hr/>

//     <h1>Garfield's Favorite Foods</h1>
//       <ul>
//         <li>Pepperoni pizza</li>
//         <li>Spaghetti with meatballs</li>
//         <li>Jumbo shrimp</li>
//         <li>Lobster with filet mignon</li>
//       </ul>

//     <h1>Things that Garfield hates</h1>
//       <ol>
//         <li>Mondays</li>
//         <li>Spiders</li>
//         <li>Raisins</li>
//         <li>Jon singing in the shower</li>
//       </ol>
//     </div>
//   );
// }

// export default App;
