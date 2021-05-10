import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import first from './App';
//import second from './App';
//import React, { Component } from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Counter1 from './Components/Counter/CounterMyType'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// ReactDOM.render(
//   <BrowserRouter>
//       <Counter1 />
//   </BrowserRouter>, 
//   document.getElementById('root1')
// )
// ReactDOM.render(
//   <React.StrictMode>
//     <Counter1 />
//   </React.StrictMode>,
//   document.getElementById('root1')
// );
/*ReactDOM.render(
  <sec />,
  document.getElementById('root1')
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
