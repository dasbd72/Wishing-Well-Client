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
  Card,
  CardText
} from "reactstrap";

import "./TaskItem.css";

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card>
        <CardText>Task</CardText>
        <CardText>points</CardText>
        <Button></Button>
        <Button></Button>
      </Card>
    );
  }
}