import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import { Element } from "react-scroll";
import moment from "moment";

import TaskGroup from "Components/Room/Tasks/TaskGroup";
import { c_listTasks } from "States/room-actions";

export class ChildrenTask extends Component {
  componentDidMount() {
    this.props.c_listTasks(this.props.room.roomId, this.props.session.userId);
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.room.roomId != this.props.room.roomId ||
      prevProps.session.userId != this.props.session.userId
    )
      this.props.c_listTasks(this.props.room.roomId, this.props.session.userId);
  }

  render() {
    return (
      <Container
        className="ChildrenTask d-flex align-items-center flex-column pt-2 pb-4"
        style={{ overflowY: "auto" }}
      >
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
          min={6}
        ></TaskGroup>
        <TaskGroup
          tasks={this.props.room.c_acceptedTasks}
          label="Accepted"
          min={6}
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
  c_listTasks,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChildrenTask);
