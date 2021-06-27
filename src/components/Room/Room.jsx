import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import ChildrenPage from "Components/Room/Children/Children";
import ParentPage from "Components/Room/Parent/ParentPage";
import { setRoomId, getUserRole } from "States/room-actions";

export class Room extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
  };
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.setRoomId(this.props.match.params.roomId);
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.session.userId != this.props.session.userId ||
      prevProps.room.roomId != this.props.room.roomId
    ) {
      this.props.getUserRole(this.props.room.roomId, this.props.session.userId);
    }
  }
  render() {
    if (this.props.room.role === "parent") {
      return <ParentPage />;
    } else if (this.props.room.role === "children") {
      return <ChildrenPage />;
    } else {
      return <div />;
    }
  }
}

const mapStateToProps = (state) => ({
  session: state.session,
  room: state.room,
});

const mapDispatchToProps = {
  setRoomId,
  getUserRole,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Room));
