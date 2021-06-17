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
  Button,
} from "reactstrap";
import classNames from "classnames";

import { signOut } from "Api/amplify";
import { toggleOpen, setNavHeight } from "States/main-actions";

import "./MainNavbar.css";

export class MainNavbar extends Component {
  static propTypes = {
    fixedTop: PropTypes.bool,
  };
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  componentDidMount() {
    this.props.setNavHeight(
      document.getElementsByClassName("MainNavbar")[0].clientHeight
    );
  }
  componentDidUpdate() {
    this.props.setNavHeight(
      document.getElementsByClassName("MainNavbar")[0].clientHeight
    );
  }
  toggle = () => {
    this.setState((state) => ({
      isOpen: !state.isOpen,
    }));
  };
  render() {
    return (
      <div
        className={classNames(
          "MainNavbar container-fluid px-5 bg-light text-dark",
          { "fixed-top": !(this.props.fixedTop === false) }
        )}
      >
        <Navbar color="faded" light expand="md">
          <NavbarBrand className="text-info" href="/">
            Wishing-Well-Dev
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={!this.state.isOpen} navbar>
            <Nav navbar className="me-auto">
              <NavItem>
                <NavLink tag={Link} to="/room">
                  Room
                </NavLink>
              </NavItem>
            </Nav>
            <Nav navbar>
              {this.props.logged && (
                <NavItem>
                  <NavLink style={{ fontSize: "0.8em" }} className="my-auto">
                    Hello, {this.props.userName}
                  </NavLink>
                </NavItem>
              )}
              {this.props.logged && (
                <NavItem>
                  <NavLink>
                    <Button onClick={signOut}>SignOut</Button>
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
}

const mapStateToProps = (state) => ({
  ...state.session,
  ...state.main,
});

const mapDispatchToProps = {
  setNavHeight,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainNavbar);
