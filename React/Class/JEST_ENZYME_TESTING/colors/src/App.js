import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

export const colors = ['red', 'green', 'blue', 'yellow', 'orange'];

export const randNum = () => Math.floor(Math.random()*colors.length);

export const randColor = (colors, randNum) => colors[randNum()];

function App() {
  const [backgroundColor, setBackgroundColor] = useState('purple')

   const theStyles = {
     backgroundColor: backgroundColor
   }

   const handleClick = () => {
     let backgroundColor = randColor(colors, randNum)
     setBackgroundColor(backgroundColor)
   }

  return (
    <div className="App" data-test='app-component' style={theStyles}>
     <h1>Hello</h1>
     <button onClick={handleClick}>Click Me</button>
    
    </div>
  );
}

export default App;
