import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Comp1 } from './Comp1';
import Comp2 from './Comp2';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Comp1 />
      <Comp2 />
    </div>
  );
}

export default App;
