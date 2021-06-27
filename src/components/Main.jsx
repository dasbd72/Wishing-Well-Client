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
import { reloadUser } from "Api/amplify";

import "./Main.css";

export class Main extends Component {
  componentDidMount() {
    reloadUser();
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

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
