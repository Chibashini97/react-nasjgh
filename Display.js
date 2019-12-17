import React, { Component } from "react";
import Login from "./Login";

import Logout from "./Logout";
import HelloRenu from "./HelloRenu";
import { Route, NavLink, HashRouter } from "react-router-dom";

class Display extends Component {
  render() {
    return (
      <HashRouter history={history}>
        <Route exact path="/" component={Login} />
        <Route exact path="/HelloRenu" component={HelloRenu} />
        <Route exact path="/Logout" component={Logout} />
      </HashRouter>
    );
  }
}

export default Display;
