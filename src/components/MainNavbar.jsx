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
import Modal from "react-modal";
import classNames from "classnames";
import { AmplifyGreetings } from "@aws-amplify/ui-react";

import SignIn from "Components/Auth/SignIn";
import { signOut } from "Api/amplify";
import { setNavHeight } from "States/main-actions";

import "./MainNavbar.css";

export class MainNavbar extends Component {
  static propTypes = {
    fixedTop: PropTypes.bool,
  };
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isModalOpen: false,
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
  toggleModal = (next) => {
    if (next === true || next === false) {
      this.setState({
        isModalOpen: next,
      });
    } else {
      this.setState((state) => ({
        isModalOpen: !state.isModalOpen,
      }));
    }
  };
  render() {
    const signedin = this.props.session.signedin;
    const userName = this.props.session.userName;
    const Show = () => {
      if (signedin) {
        return (
          <React.Fragment>
            <NavItem>
              <NavLink style={{ fontSize: "0.8em" }} className="my-auto">
                Hello, {userName}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Button onClick={signOut}>SignOut</Button>
              </NavLink>
            </NavItem>
          </React.Fragment>
        );
      } else {
        return (
          <NavItem>
            <NavLink>
              <Button onClick={this.toggleModal}>LogIn</Button>
            </NavLink>
          </NavItem>
        );
      }
    };
    return (
      <React.Fragment>
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
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav navbar className="me-auto">
                <NavItem>
                  <NavLink tag={Link} to="/room">
                    Room
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav navbar><Show/></Nav>
            </Collapse>
          </Navbar>

          <Modal
            isOpen={this.state.isModalOpen}
            onRequestClose={this.toggleModal}
            className="overflow-hidden d-flex justify-content-center align-items-center h-100"
          >
            <Button close onClick={this.toggleModal} />
            <SignIn
              onSignedIn={() => {
                this.toggleModal(false);
              }}
            />
          </Modal>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  session: state.session,
  ...state.main,
});

const mapDispatchToProps = {
  setNavHeight,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainNavbar);
