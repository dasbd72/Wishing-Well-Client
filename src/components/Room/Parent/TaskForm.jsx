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

import CreateTask from "Components/Room/Parent/CreateTask.jsx"

import "./TaskForm.css";

export default class TaskForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="menu">
        <div className="createtask">
          <CreateTask />
        </div>
      </div>
    );
  }
}