import React, { Component } from 'react';
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
    const value = !isNaN(parseInt(val)) ? parseInt(val) : 0;
    const newCount = Count.updateCount(parseInt(id), value);
    this.setState({
      count: newCount
    });
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
