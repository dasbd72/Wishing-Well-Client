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
import { setWidth } from "States/main-actions";

import "./Main.css";

export class Main extends Component {
  componentDidMount() {
    reloadUser();
    this.loadWindowWidth();
    window.addEventListener("resize", this.loadWindowWidth);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.session.userId != this.props.session.userId) {
      this.props.getUserInfo(this.props.session.userId);
    }
  }
  loadWindowWidth = () => {
    const { innerWidth: width } = window;
    this.props.setWidth(width);
  };

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
  setWidth,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
