import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classNames from "classnames";
import { Container } from "reactstrap";
import UUID from "uuid";
import moment from "moment";

import TaskGroup from "Components/Tasks/TaskGroup";

export class ChildrenMenu extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    var unaccepted = [
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
      <Container className="ChildrenMenu d-flex align-items-center justify-content-center flex-column">
        <TaskGroup tasks={unaccepted} label="Unaccepted"></TaskGroup>
        <div className="p-2"></div>
        <TaskGroup tasks={accepted} label="Accepted"></TaskGroup>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ChildrenMenu);
