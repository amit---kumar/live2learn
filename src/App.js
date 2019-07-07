import React from 'react';
import './App.css';
import Clock from './components/Clock';
import Task from './components/Task';

function App() {
  return (
    <div id='main' >

      <div id='header'>
        <h1>
          <Task></Task> Welcome to Live to Learn <span> </span><Clock></Clock>
        </h1>  
      </div>

      <div id='left'>
        <div id='upperleft'> upperleft</div>
        <div id='lowerleft'> lowerleft</div>
      </div>

      <div id='right'>
        <div id='upperRight'>upperRight</div>
        <div id='lowerRight'>lowerRight</div>
      </div>

      <div id='content'>content</div>

      <div id='footer'>footer</div>
    </div>    
  );
}

export default App;
