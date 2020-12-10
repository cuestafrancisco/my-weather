import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import "./App.css";
import App from './App';
//import registerServiceWorker from './registerServiceWorker';


//method  with first argument component 
//second argument the location where you want to insert your component
//conects react to my html
ReactDOM.render(<App />, document.getElementById('root')); 
//registerServiceWorker();

