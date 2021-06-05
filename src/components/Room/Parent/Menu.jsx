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
import TaskForm from "Components/Room/Parent/TaskForm.jsx";

import "./Menu.css";

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="menu">
        <div className="userdisplay">
          <UserDisplay/>
        </div>
        <div className="taskform">
          <TaskForm/>
        </div>
      </div>
    );
  }
}