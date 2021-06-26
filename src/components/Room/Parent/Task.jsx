import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter,
} from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classNames from "classnames";
import { Container } from "reactstrap";
import UUID from "uuid";
import moment from "moment";
import { Progress } from "reactstrap";

import TaskGroup from "Components/Tasks/TaskGroup";

import "./Task.css";

export class Task extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var rejected = [
      {
        id: "1",
        text: "Sweep The floor",
        points: 100,
        accepted: false,
        deadline: moment().valueOf(),
      },
      {
        id: "2",
        text: "Get A+ in Software Studio",
        points: 200,
        accepted: false,
        deadline: moment().valueOf(),
      },
    ];
    var todo = [
      {
        id: "3",
        text: "Say Hello",
        points: 500,
        accepted: true,
        deadline: moment().valueOf(),
      },
    ];
    return (
      <Container className="Task d-flex align-items-center justify-content-center flex-column">
        <TaskGroup tasks={rejected} label="Rejected"></TaskGroup>
        <div className="p-2"></div>
        <TaskGroup tasks={todo} label="Todo"></TaskGroup>
        <Progress className="w-100" style={{ height: "3rem" }} value="25"></Progress>
      </Container>
    );
  }
}

export default withRouter(Task);
