import React, { Component } from 'react';
import './App.css';
import Step from './step.js'
import Count from './data.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      steps: 2
    }
  }

  handleStep(id, val) {
    console.log(id, val)
    const value = !isNaN(parseInt(val)) ? parseInt(val) : 0;
    const newCount = Count.updateCount(parseInt(id), value);
    this.setState({
      count: newCount
    });
  }

  addNewStep() {
    Count.createStepHelper();
    this.setState({
      count: this.state.count,
      steps: ++this.state.steps
    })
  }

  makeStep(i) {
    return(
      <Step
        key={i}
        id={i}
        onChange={(id, val) => {this.handleStep(id, val)}}
      />
    )
  }

  renderSteps() {
    const stepCount = this.state.steps;
    let steps = []
    for (let i = 0; i < stepCount; i++) {
      let newStep = this.makeStep(i);
      steps.push(newStep);
    }
    console.log(steps)
    return steps;
  }

  render() {
    return (
      <div className="App">
        <p>Total Count: {this.state.count}</p>
        <button onClick={() => {this.addNewStep()}}>
          Add a new Step
        </button>
        {this.renderSteps()}
      </div>
    );
  }
}

export default App;
