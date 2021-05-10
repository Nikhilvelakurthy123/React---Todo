import React from 'react';
import ReactDOM from 'react-dom';
import './myCounter.css';
import Counter1 from './Components/Counter/CounterMyType'
import MyCounterApp from './MyCounterApp'
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

document.write("asdasds");
alert("asds")
console.log("asdas")

ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>, 
  document.getElementById('root')
)
// ReactDOM.render(
//   <React.StrictMode>
//     <MyCounterApp />
//   </React.StrictMode>,
//   document.getElementById('root')  
// );
// document.write("asdasds");
// alert("asds")
// console.log("asdas")
reportWebVitals();
