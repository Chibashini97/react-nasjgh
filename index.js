import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";
import Login from "./Login";
import Display from "./Display";

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

render(<App />, document.getElementById("root"));
