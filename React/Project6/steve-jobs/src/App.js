import React, { Component } from 'react';
import './App.css';

//Components for importing
import { Top } from './Top';
import { Links } from './Links';
import { VideosList } from './VideosList';

//App Component
class App extends Component {
  render() {
  return (
    <div className="App">
      <Top />
      <Links />       
      <VideosList /> 
    </div>
     );
  }
}

//Export App Component
export {App};



//ORIGINAL WAY WAS DONE WITH EVERYTHING IN APP.JS
// import React from "react";
// import "./App.css";
// import Videos from "./Videos";
// import Steve from "./images/steve1.jpg";

// const links = [
//   {
//     description: "Steve Job's Vision of the World",
//     link: "https://www.youtube.com/embed/upzKj-1HaKw",
//   },
//   {
//     description: "Steve Jobs on Microsoft",
//     link: "https://www.youtube.com/embed/jcFbGsl8DDI",
//   },
//   {
//     description: "Steve Jobs on programming",
//     link: "https://www.youtube.com/embed/5fI3zz2cp3k",
//   },
// ];

// let displayLinks = links.map((data, i) => {
//   return (
//     <div>
//       <h3>{data.description}</h3>
//       <Videos link={data.link} key={i} />
//     </div>
//   );
// });

// function App() {
//   return (
//     <div>
//       <h1>Welcome to the Ulitmate Steve Jobs Fan Website!</h1>

//       <img src={Steve} alt="steve jobs" />

//       <p>
//         Steve Jobs was the co-founder and CEO of Apple Inc. He is widely
//         considered to be a brilliant businessman, as well as one of the greatest
//         tech visionaries of out time.
//         <br></br>The story of his life is nothing short of fascinating. After
//         dropping out of college, he started Apple with his friend{" "}
//         <a href="https://en.wikipedia.org/wiki/Steve_Wozniak">Steve Wozniak</a>{" "}
//         in 1976 at the age of 21. The duo gained wealth and fame a year later
//         for the{" "}
//         <a href="https://en.wikipedia.org/wiki/Apple_II)">Apple II</a>, one of
//         the first highly successful mass-produced personal computers. This was
//         followed by the very successful Macintosh in 1984, the first
//         mass-produced computer with a GUI (graphical user interface). After
//         being ousted of Apple in 1985, he went on to oversee the creation of two
//         new companies: NeXT computer and{" "}
//         <a href="https://en.wikipedia.org/wiki/Pixar">Pixar</a>. With the
//         success of the movie Toy Story, Steve became a billionaire.
//         <br></br>In 1997, Steve returned to Apple. Bill Gates and Microsoft
//         dominated the computer industry, and Apple was on the brink of
//         extinction. Nonetheless,{" "}
//         <a href="https://en.wikipedia.org/wiki/Reality_distortion_field">
//           Steve was a fantastic salesman
//         </a>
//         , and used his business acumen to slowly bring the company back to
//         profitability.
//       </p>

//       <hr />
//       <h1>Steve Jobs Resources</h1>

//       <p>Apple's tribute to Steve Jobs:</p>
//       <a href="http://www.apple.com/stevejobs/">Remembering Steve</a>

//       <p>The Steve Jobs Biography</p>
//       <a href="https://www.amazon.com/Steve-Jobs-Walter-Isaacson/dp/1451648537">
//         Steve Jobs
//       </a>

//       <p>The Steve Jobs Movie</p>
//       <a href="http://www.imdb.com/title/tt2080374/">Steve Jobs on IMDB</a>

//       <hr />
//       <h1>Check out these Steve Job's Videos</h1>
//       {displayLinks}
//     </div>
//   );
// }

// export default App;
