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
import RejectedTask from "Components/Room/Parent/RejectedTask.jsx";
import TodoTask from "Components/Room/Parent/TodoTask.jsx";
import ProgressBar from "Components/Room/Parent/ProgressBar.jsx";

import "./Task.css";

export default class Task extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Task">
        <div className="userdisplay">
          <UserDisplay/>
        </div>
        <div className="rejecttask">
          <RejectedTask/>
        </div>
        <div className="todotask">
          <TodoTask/>
        </div>
        <div className="progressbar">
          <ProgressBar/>
        </div>
      </div>
    );
  }
}