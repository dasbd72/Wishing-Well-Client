import React, { Component } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import AppDescription from "Components/AppDescription";
import RoomEntrance from "Components/RoomEntrance";
import { reloadUser } from "Api/amplify";
import { getUserInfo } from "States/session-actions";

import "./Main.css";

export class Main extends Component {
  componentDidMount() {
    reloadUser();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.session.userId != this.props.session.userId) {
      this.props.getUserInfo(this.props.session.userId);
    }
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
  session: state.session,
  federated: state.federated,
});

const mapDispatchToProps = {
  getUserInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
