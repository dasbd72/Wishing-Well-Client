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
} from "reactstrap";
import ReactModal from "react-modal";
import classNames from "classnames";
import Popper from "popper.js";

import SignIn from "Components/Auth/SignIn";
import { reloadUser, signOut, updateUserName } from "Api/amplify";
import { setNavHeight } from "States/main-actions";

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
      isUserOpen: false,
    };
    this.userNameEl = null;
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
  toggleAuth = (next) => {
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
  toggleUser = (next) => {
    if (next === true || next === false) {
      this.setState({
        isUserOpen: next,
      });
    } else {
      this.setState((state) => ({
        isUserOpen: !state.isUserOpen,
      }));
    }
  };

  updateUserName = () => {
    updateUserName(this.userNameEl.value)
      .then((data) => {
        reloadUser();
        this.toggleUser(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleUserNameType = (e) => {
    var keyCode = e.keyCode || e.which;
    if (keyCode === 13) {
      this.updateUserName();
    }
  };

  render() {
    const signedin = this.props.session.signedin;
    const userName = this.props.session.userName;
    const Show = () => {
      if (signedin) {
        return (
          <React.Fragment>
            <NavItem className="d-flex align-items-center">
              <NavLink style={{ fontSize: "0.8em" }} className="my-auto">
                Hello,
                <Button color="link" onClick={this.toggleUser}>
                  {userName}
                </Button>
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
              <Button onClick={this.toggleAuth}>LogIn</Button>
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
              <Nav navbar className="me-auto">
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
          onRequestClose={this.toggleAuth}
          className="overflow-hidden d-flex justify-content-center align-items-center h-100"
        >
          <div>
            <Button
              close
              onClick={this.toggleAuth}
              style={{
                position: "relative",
                top: "1.5em",
                left: "0.3em",
                fontSize: "2em",
                zIndex: "999",
              }}
            />
            <SignIn
              onSignedIn={() => {
                this.toggleAuth(false);
              }}
            />
          </div>
        </ReactModal>
        <ReactModal
          isOpen={this.state.isUserOpen}
          onRequestClose={this.toggleUser}
          className="overflow-hidden d-flex justify-content-center align-items-center h-100"
          ariaHideApp={false}
          style={{
            content: { backgroundColor: "rgba(20,30,150,0.5)" },
          }}
        >
          <div>
            <Label for="userName" color="light">
              New Username
            </Label>
            <Input
              type="text"
              name="userName"
              onKeyPress={this.handleUserNameType}
              innerRef={(e) => (this.userNameEl = e)}
              style={{ minWidth: "200px", width: "fit-content" }}
            />
            <Button onClick={this.updateUserName}>Submit</Button>
            <Button onClick={this.toggleUser} color="danger">
              Cancel
            </Button>
          </div>
        </ReactModal>
      </div>
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
