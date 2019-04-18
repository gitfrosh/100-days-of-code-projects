import * as React from 'react';
import './App.css';
import Robots from './Robots';

import logo from './logo.svg';

export interface IRobot {
  name: string;
  id: number;
  email: string;
}

interface IAppState {
  robots: Array<IRobot>
}

interface IAppProps {

}

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props)
    this.state = {
      robots: [
       
      ]
    }
  }

  componentDidMount(): void {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});
  }

  render(): JSX.Element {
    const { robots } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Robots robots={robots} />
      </div>
      
    );
  }
}

export default App;
