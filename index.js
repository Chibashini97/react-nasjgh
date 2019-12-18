import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";
import Login from "./Login";
import Display from "./Display";
import reducer from './reducer';
import {createStore} from 'redux';
import Provider from 'react-redux';

const store = createStore(reducer);
class App extends Component {
  
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
        <Display />
      </div>
    );
  }
}

render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
