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

import UserDisplay from "Components/Room/Parent/UserDisplay.jsx";
import CreateTask from "Components/Room/Parent/CreateTask.jsx";

import "./ParentMenu.css";

export default class ParentMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ParentMenu d-flex flex-row">
        <div className="UserDisplay col-3">
          <UserDisplay />
        </div>
        <div className="TaskForm col-9">
          <h1>Create a New Task</h1>
          <CreateTask />
        </div>
      </div>
    );
  }
}