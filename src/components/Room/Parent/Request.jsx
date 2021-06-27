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

import "./Request.css";

export class Request extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var accepted = [
      {
        id: "3",
        text: "Say Hello",
        points: 500,
        accepted: true,
        deadline: moment().valueOf(),
      },
    ];
    return (
      <Container className="ChildrenTask d-flex align-items-center flex-column pt-3">
        <h1
          className="m-3"
          style={{
            color: "white",
            background: "black",
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
          }}
        >
          New Request
        </h1>
        <TaskGroup tasks={accepted} label="Accepted"></TaskGroup>
      </Container>
    );
  }
}

export default withRouter(Request);
