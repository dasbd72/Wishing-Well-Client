import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import MainNavbar from "Components/MainNavbar";
import LobbyRoomList from "Components/Room/LobbyRoomList";

import { userListRooms } from "States/lobby-actions";

import "./Lobby.css";
import { Alert } from "reactstrap";

class RoomEntrance extends React.Component {
  static propTypes = {};
  componentDidMount() {
    this.props.userListRooms(this.props.session.userId);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.session.userId != this.props.session.userId) {
      this.props.userListRooms(this.props.session.userId);
    }
  }

  render() {
    return (
      <React.Fragment>
        <MainNavbar fixedTop={false} />
        <div className="Lobby-bg"></div>
        <div className="Lobby">
          <LobbyRoomList rooms={this.props.lobby.rooms} />
          {this.props.lobby.loading && (
            <Alert color="warning" className="loading">
              loading...
            </Alert>
          )}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  session: state.session,
  lobby: state.lobby,
});

const mapDispatchToProps = {
  userListRooms,
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomEntrance);
