import React from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter,
} from "react-router-dom";
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

import UserDisplay from "Components/Room/Parent/UserDisplay.jsx";
import CreateTask from "Components/Room/Parent/CreateTask.jsx";

import "./ParentMenu.css";

export class ParentMenu extends React.Component {
  state = {
    seen: false,
  };

  constructor(props) {
    super(props);
  }

  togglePop = () => {
    this.setState({
      seen: !this.state.seen,
    });
  };

  render() {
    return (
      <div className="ParentMenu d-flex d-row">
        <div className="UserDisplay col-3">
          <UserDisplay />
        </div>
        <div className="TaskForm d-flex col-9">
          <h1>
            <span className="ClickToCreate" onClick={this.togglePop}>
              Create a New Task
            </span>
          </h1>
          {this.state.seen ? <CreateTask toggle={this.togglePop} /> : null}
        </div>
      </div>
    );
  }
}

export default withRouter(ParentMenu);
