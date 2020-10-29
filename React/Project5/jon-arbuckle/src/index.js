import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//Components for importing
// import {Garfield} from './Garfield';
// import {Text} from './Text';
// import {List1} from './List1';
// import {List2} from './List2';
import reportWebVitals from './reportWebVitals';

//All rendering done here through App.js
ReactDOM.render(   
    <App />,
    document.getElementById('root')
  );

//Image and Title Component Rendered

// ReactDOM.render(
//     <Garfield />,
//     document.getElementById('root1'));

// //p tag text Component Rendered
// ReactDOM.render(<Text />,
//     document.getElementById('root2'));

// //Unordered List and h3 tag Component Rendered
// ReactDOM.render(<List1 />,
//     document.getElementById('root3'));

// //Ordered List and h3 tag Component Rendered
// ReactDOM.render(<List2 />,
//     document.getElementById('root4'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
