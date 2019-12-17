import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import Login from "./Login";

class Logout extends Component {
  constructor(){
      super();
      this.handleChange=this.handleChange.bind(this);
    }
handleChange(){
  this.props.history.push('/');
}

render() {
    return (
      <div>
        <button onClick={handleChange}></button>
      </div>
    );
  }
}

export default Logout;
