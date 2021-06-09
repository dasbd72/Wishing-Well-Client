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
      <div className="Task d-flex flex-row">
        <div className="UserDisplay col-3">
          <UserDisplay/>
        </div>
        <div className="col-9">
          <div className="TodoTask">
            <TodoTask/>
          </div>
          <div className="RejectedTask">
            <RejectedTask/>
          </div>
          <div className="ProgressBar">
            <ProgressBar/>
          </div>
        </div>
      </div>
    );
  }
}