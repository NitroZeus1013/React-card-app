
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import './index.css';

const valueReturned =ReactDOM.render(
  <App></App>,
  document.getElementById("container")
 

);


console.log(valueReturned);