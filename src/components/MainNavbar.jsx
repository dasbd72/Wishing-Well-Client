import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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
import Auth from "@aws-amplify/auth";

import { toggleOpen } from "States/main-actions";

export class MainNavbar extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="fixed-top px-5 bg-light text-dark">
        <Navbar color="faded" light expand="md">
          <NavbarBrand className="text-info" href="/">
            Wishing-Well-Dev
          </NavbarBrand>
          <NavbarToggler onClick={this.props.toggleOpen} />
          <Collapse isOpen={!this.props.isOpen} navbar>
            <Nav className="me-auto">
              <NavItem>
                <NavLink tag={Link} to="/room">
                  Room
                </NavLink>
              </NavItem>
            </Nav>
            <Nav>
              {this.props.logged && (
                <NavItem>Hello, {this.props.userName}</NavItem>
              )}
              {this.props.logged && (
                <NavItem>
                  <NavLink>
                    <Button onClick={this.signOut}>Sign Out</Button>
                  </NavLink>
                </NavItem>
              )}
              {!this.props.logged && (
                <NavItem>
                  <NavLink>
                    <Button tag={Link} to="/login">
                      LogIn
                    </Button>
                  </NavLink>
                </NavItem>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }

  signOut = () => {
    Auth.signOut();
    window.location.reload();
  };
}

const mapStateToProps = (state) => ({
  ...state.session,
  ...state.main,
  federated: state.federated,
});

const mapDispatchToProps = {
  toggleOpen,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainNavbar);
