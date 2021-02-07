// src/index.js: This is the javascript file corresponding to index.html. 
//This file has the following line of code which is very significant. 
//ReactDOM.render(<App />, document.getElementById(‘root’));


import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById('root')
);


