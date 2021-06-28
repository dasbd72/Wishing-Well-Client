import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import { Element } from "react-scroll";
import moment from "moment";

import TaskGroup from "Components/Room/Tasks/TaskGroup";
import { listTasks } from "States/room-actions";

export class ChildrenTask extends Component {
  componentDidMount() {
    this.props.listTasks(this.props.room.roomId, this.props.session.userId);
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.room.roomId != this.props.room.roomId ||
      prevProps.session.userId != this.props.session.userId
    )
      this.props.listTasks(this.props.room.roomId, this.props.session.userId);
  }

  render() {
    console.log(this.props.room.c_unacceptedTasks);
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
        <TaskGroup
          tasks={this.props.room.c_unacceptedTasks}
          label="Unaccepted"
        ></TaskGroup>
        <TaskGroup
          tasks={this.props.room.c_acceptedTasks}
          label="Accepted"
        ></TaskGroup>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  room: state.room,
  session: state.session,
});

const mapDispatchToProps = {
  listTasks,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChildrenTask);
