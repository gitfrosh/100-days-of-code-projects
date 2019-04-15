import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';

class App extends Component {
  render() {

    const robots = ['robot1', 'robot2', 'robot3']
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo1" />
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
          <MyComponent robots={robots} />
        </header>
      </div>
    );
  }
}

export default App;
