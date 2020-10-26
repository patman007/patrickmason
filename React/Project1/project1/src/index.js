import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

//Components to Render
import Box1Render from './Box1Render';
import Box2Render from './Box2Render';
import Box3Render from './Box3Render';
import Box4Render from './Box4Render';

//Render Component 1
ReactDOM.render(
  <Box1Render />,document.getElementById('root1')  
);

//Render Component 2
ReactDOM.render(
  <Box2Render />,document.getElementById('root2')  
);

//Render Component 3
ReactDOM.render(
  <Box3Render />,document.getElementById('root3')  
);

//Render Component 4
ReactDOM.render(
  <Box4Render />,document.getElementById('root4')  
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
