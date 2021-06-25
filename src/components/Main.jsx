import React, { Component } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
} from "react-router-dom";
import { Auth } from "aws-amplify";
import { onAuthUIStateChange } from "@aws-amplify/ui-components";

import AppDescription from "Components/AppDescription";
import RoomEntrance from "Components/RoomEntrance";
import { setUser } from "States/session-actions";

import "./Main.css";

export class Main extends Component {
  componentDidMount() {
    Auth.currentAuthenticatedUser().then((user) => {
      this.props.setUser(user);
    });
  }
  render() {
    return (
      <Router>
        <div className="Main">
          <Switch>
            <Route exact path="/">
              <AppDescription />
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
