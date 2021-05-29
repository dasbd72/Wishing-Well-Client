import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Input,
  Button,
} from "reactstrap";
import { connect } from "react-redux";
import Auth from "@aws-amplify/auth";
import { withAuthenticator } from "@aws-amplify/ui-react";

import AppEntrance from "Components/AppEntrance.jsx";
import { setUser } from "States/session-actions.js";

import "./Main.css";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.federated);
    Auth.currentAuthenticatedUser().then((user) => {
      console.log(user);
      this.props.dispatch(setUser(user));
    });
    return (
      <Router>
        <div className="main">
          <div className="container">
            <Navbar>
              <NavbarBrand className="text-info" href="/">
                Wishing-Well-Dev
              </NavbarBrand>
              {this.props.logged && (
                <div className="row">
                  <div className="col-auto">
                    <div className="align-middle">
                      Hello, {this.props.userName}
                    </div>
                  </div>
                  <div className="col-auto">
                    <Button onClick={this.signOut}>Sign Out</Button>
                  </div>
                </div>
              )}
            </Navbar>
          </div>
          <AppEntrance />
        </div>
      </Router>
    );
  }
  signOut = () => {
    Auth.signOut();
    window.location.reload();
  };
}
export default connect((state) => ({
  ...state.session,
  federated: state.federated,
}))(Main);
