import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import { Element } from "react-scroll";
import moment from "moment";

import TaskGroup from "Components/Tasks/TaskGroup";
import { listTasks } from "Api/tasks";

export class ChildrenTask extends Component {
  static propTypes = {
    // prop: PropTypes,
  };

  constructor(props) {
    super(props);
    this.state = {
      unaccepted: [],
      accepted: [],
    };
  }

  componentDidMount() {}

  loadTasks() {
    listTasks(this.props.room.roomId, this.props.session.userId, 0).then(
      (tasks) => {
        this.setState({ unaccepted: tasks });
      }
    );
    listTasks(this.props.room.roomId, this.props.session.userId, 2).then(
      (tasks) => {
        this.setState({ accepted: tasks });
      }
    );
  }

  render() {
    return (
      <Container className="ChildrenTask d-flex align-items-center flex-column pt-2 pb-4">
        <h1
          className="ml-auto mr-auto mt-5 mb-4"
          style={{
            color: "white",
            background: "black",
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
          }}
        >
          Your Tasks.
        </h1>
        <TaskGroup tasks={this.state.unaccepted} label="Unaccepted"></TaskGroup>
        <TaskGroup tasks={this.state.accepted} label="Accepted"></TaskGroup>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  room: state.room,
  session: state.session,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ChildrenTask);
