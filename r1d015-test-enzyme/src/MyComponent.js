import React, { Component } from 'react';

class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            button: 0
        }
    }
    

  render() {
    return (
        <div>
      <div>
          {this.props.robots.map(robot => 
            <span key={robot}>{robot}</span>)}
      </div>
      <div>
          <button id="button1" onClick={() => this.setState({ button: this.state.button + 1 })}>
            {this.state.button}
          </button>
      </div>
      </div>
    );
  }
}

export default MyComponent;
