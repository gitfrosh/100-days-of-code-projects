import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "react-toggle/style.css";
import Toggle from 'react-toggle';
// import MyWidget from './MyWidget';
import AsyncComponent from './AsyncComponent';

class App extends Component {

  // well there is also the library react-loadble we could
  // use to do component based code splitting

  constructor(props) {
    super(props);
    this.state = {cheeseIsReady: false};
  }

  handleCheeseChange = (e) => {
    console.log(e.target.checked);
    this.setState({
      cheeseIsReady: e.target.checked
    })
  }

  // makes sure component is only loaded when it's needed
  // will create chunk.js
  // performance boost!!
  getAsyncComponent = () => {
    const MyAsyncWidget = AsyncComponent(() => import('./MyWidget'))
    console.log(MyAsyncWidget);
    return <MyAsyncWidget />;
  }

  render() {


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
          <p></p>
          <Toggle
            id='cheese-status'
            defaultChecked={this.state.cheeseIsReady}
            onChange={this.handleCheeseChange} />
        </header>

        {/* {this.state.cheeseIsReady && <MyWidget />} */}
        {this.state.cheeseIsReady && this.getAsyncComponent()}
      </div>
    );
  }
}

export default App;
