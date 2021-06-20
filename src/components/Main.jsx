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
import { Auth } from "aws-amplify";

import AppDescription from "Components/AppDescription";
import AppEntrance from "Components/AppEntrance";
import RoomEntrance from "Components/RoomEntrance";
import { setUser } from "States/session-actions";

import "./Main.css";

export class Main extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Auth.currentAuthenticatedUser().then((user) => {
      this.props.setUser(user);
    });
  }

  render() {
    return (
      <Router>
        <div
          className="Main"
          //style={{ overflow: "hidden" }}
        >
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
