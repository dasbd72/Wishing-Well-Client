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
  Input,
  Label,
  Form,
} from "reactstrap";
import ReactModal from "react-modal";
import classNames from "classnames";

import SignIn from "Components/Auth/SignIn";
import { signOut } from "Api/amplify";
import { setNavHeight } from "States/main-actions";
import { setUserName } from "States/session-actions";

import "./MainNavbar.css";
ReactModal.setAppElement("#root");
export class MainNavbar extends Component {
  static propTypes = {
    fixedTop: PropTypes.bool,
  };
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isAuthOpen: false,
      isUserNameModalOpen: false,
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
  toggleAuthModal = (next) => {
    if (next === true || next === false) {
      this.setState({
        isAuthOpen: next,
      });
    } else {
      this.setState((state) => ({
        isAuthOpen: !state.isAuthOpen,
      }));
    }
  };
  toggleUserNameModal = (next) => {
    if (next === true || next === false) {
      this.setState({
        isUserNameModalOpen: next,
      });
    } else {
      this.setState((state) => ({
        isUserNameModalOpen: !state.isUserNameModalOpen,
      }));
    }
  };
  handleUsernameSubmit = (e) => {
    e.preventDefault();
    this.props.setUserName(this.props.session.userId, newUserName.value);
  };

  render() {
    const Show = () => {
      if (this.props.session.signedin) {
        return (
          <React.Fragment>
            <NavItem className="d-flex align-items-center">
              <NavLink className="my-auto">
                <span className="align-middle">Hello,</span>
                <div
                  className="btn btn-link"
                  onClick={this.toggleUserNameModal}
                >
                  {this.props.session.userName}
                </div>
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
              <Button onClick={this.toggleAuthModal}>LogIn</Button>
            </NavLink>
          </NavItem>
        );
      }
    };

    return (
      <div className="MainNavbar">
        <div
          className={classNames("container-fluid px-5 bg-light text-dark", {
            "fixed-top": !(this.props.fixedTop === false),
          })}
        >
          <Navbar color="faded" light expand="md">
            <NavbarBrand className="text-info" href="/">
              Wishing-Well-Dev
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav navbar className="mr-auto">
                <NavItem>
                  <NavLink tag={Link} to="/room">
                    Room
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav navbar>
                <Show />
              </Nav>
            </Collapse>
          </Navbar>
        </div>
        <ReactModal
          isOpen={this.state.isAuthOpen}
          onRequestClose={this.toggleAuthModal}
          className="overflow-hidden d-flex justify-content-center align-items-center h-100"
        >
          <div>
            <Button
              close
              onClick={this.toggleAuthModal}
              style={{
                position: "relative",
                left: "-0.5em",
                fontSize: "2em",
                zIndex: "999",
              }}
            />
            <SignIn
              onSignedIn={() => {
                this.toggleAuthModal(false);
              }}
            />
          </div>
        </ReactModal>
        <ReactModal
          isOpen={this.state.isUserNameModalOpen}
          onRequestClose={this.toggleUserNameModal}
          className="overflow-hidden d-flex justify-content-center align-items-center h-100"
          ariaHideApp={false}
          style={{
            content: { backgroundColor: "rgba(20,30,150,0.5)" },
          }}
        >
          <Form onSubmit={this.handleUsernameSubmit}>
            <Label for="userName" color="light">
              New Username
            </Label>
            <Input
              type="text"
              name="userName"
              id="newUserName"
              style={{ minWidth: "200px", width: "fit-content" }}
            />
            <Button type="submit">Submit</Button>
            <Button
              onClick={this.toggleUserNameModal}
              type="reset"
              color="danger"
            >
              Cancel
            </Button>
          </Form>
        </ReactModal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  session: state.session,
});

const mapDispatchToProps = {
  setNavHeight,
  setUserName,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainNavbar);
