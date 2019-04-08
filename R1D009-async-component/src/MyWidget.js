import React, { Component } from 'react';
import './App.css';
import cheese from './Leerdammer-cheese-40075007-360-360.jpg';

class MyWidget extends Component {
  render() {
    return (
      <div>
        <img src={cheese} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default MyWidget;