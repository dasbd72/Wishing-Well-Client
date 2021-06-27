import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import { Element } from "react-scroll";
import moment from "moment";

import TaskGroup from "Components/Tasks/TaskGroup";

export class ChildrenTask extends Component {
  static propTypes = {
    // prop: PropTypes,
  };

  constructor(props) {
    super(props);
  }

  render() {
    var unaccepted = [
      {
        id: "1",
        title: "Sweep The floor",
        information: "",
        points: 100,
        accepted: false,
        deadline: moment().valueOf(),
      },
      {
        id: "2",
        title: "Get A+ in Software Studio",
        information: "",
        points: 200,
        accepted: false,
        deadline: moment().valueOf(),
      },
      {
        id: "1",
        title: "Sweep The floor",
        information: "",
        points: 100,
        accepted: false,
        deadline: moment().valueOf(),
      },
      {
        id: "2",
        title: "Get A+ in Software Studio",
        information: "",
        points: 200,
        accepted: false,
        deadline: moment().valueOf(),
      },
      {
        id: "1",
        title: "Sweep The floor",
        information: "",
        points: 100,
        accepted: false,
        deadline: moment().valueOf(),
      },
      {
        id: "2",
        title: "Get A+ in Software Studio",
        information: "",
        points: 200,
        accepted: false,
        deadline: moment().valueOf(),
      },
      {
        id: "1",
        title: "Sweep The floor",
        information: "",
        points: 100,
        accepted: false,
        deadline: moment().valueOf(),
      },
      {
        id: "2",
        title: "Get A+ in Software Studio",
        information: "",
        points: 200,
        accepted: false,
        deadline: moment().valueOf(),
      },
      {
        id: "1",
        title: "Sweep The floor",
        information: "",
        points: 100,
        accepted: false,
        deadline: moment().valueOf(),
      },
      {
        id: "2",
        title: "Get A+ in Software Studio",
        information: "",
        points: 200,
        accepted: false,
        deadline: moment().valueOf(),
      },
      {
        id: "1",
        title: "Sweep The floor",
        information: "",
        points: 100,
        accepted: false,
        deadline: moment().valueOf(),
      },
      {
        id: "2",
        title: "Get A+ in Software Studio",
        information: "",
        points: 200,
        accepted: false,
        deadline: moment().valueOf(),
      },
    ];
    var accepted = [
      {
        id: "3",
        title: "Say Hello",
        information: "",
        points: 500,
        accepted: true,
        deadline: moment().valueOf(),
      },
    ];
    return (
      <Container className="ChildrenTask d-flex align-items-center flex-column pt-2">
        <h1 className="mr-auto">Your Tasks</h1>
        <TaskGroup tasks={unaccepted} label="Unaccepted"></TaskGroup>
        <TaskGroup tasks={accepted} label="Accepted"></TaskGroup>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ChildrenTask);
