import logo from './logo.svg';
import './App.css';
import Display from "./components/Display";
import React,{Component} from 'react'
//import calculate from "../logic/calculate";
import ButtonLayout from './components/ButtonLayout'

class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    return (
      <div className="component-app">
        <Display value={this.state.next || this.state.total || "0"} />
        <ButtonLayout clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
