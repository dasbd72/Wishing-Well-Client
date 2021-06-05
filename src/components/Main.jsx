import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
} from "react-router-dom";

import Auth from "@aws-amplify/auth";

import AppDescription from "Components/AppDescription.jsx";
import AppEntrance from "Components/AppEntrance.jsx";
import RoomEntrance from "Components/RoomEntrance.jsx";
import { setUser } from "States/session-actions.js";

import "./Main.css";

export class Main extends Component {
  static propTypes = {};

  render() {
    Auth.currentAuthenticatedUser().then((user) => {
      console.log(user);
      this.props.setUser(user);
    });
    return (
      <Router>
        <div className="main">
          <Switch>
            <Route exact path="/">
              <AppDescription />
            </Route>
            <Route path="/login">
              <AppEntrance />
            </Route>
            <Route path="/room">
              <RoomEntrance />
            </Route>
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.session,
  federated: state.federated,
});

const mapDispatchToProps = {
  setUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
