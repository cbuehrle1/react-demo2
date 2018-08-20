import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Step from './step.js'
import Count from './data.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  handleStep(id, val) {
    if (!isNaN(parseInt(val))) {
      let newCount = Count.updateCount(parseInt(id), parseInt(val));
      this.setState({
        count: newCount,
        warning: false
      });
    }
  }

  render() {
    return (
      <div className="App">
        <p>Total Count: {this.state.count}</p>
        <Step
          id='0'
          onChange={(id, val) => {this.handleStep(id, val)}}
        />
        <Step
          id='1'
          onChange={(id, val) => {this.handleStep(id, val)}}
        />
      </div>
    );
  }
}

export default App;
