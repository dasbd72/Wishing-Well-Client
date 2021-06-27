import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import MainNavbar from "Components/MainNavbar";
import RoomCardList from "Components/Room/RoomCardList";

import { listRooms } from "Api/rooms";

import "./Lobby.css";

class RoomEntrance extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      roomLoading: false,
    };
  }

  componentDidUpdate() {
    this.listRooms();
  }

  render() {
    return (
      <React.Fragment>
        <div className="Lobby-bg"></div>
        <div className="Lobby">
          <MainNavbar fixedTop={false} />
          <RoomCardList rooms={this.state.rooms} />
        </div>
      </React.Fragment>
    );
  }

  listRooms = () => {
    if (this.props.session.userId)
      listRooms(this.props.session.userId).then((rooms) => {
        this.setState({ rooms: rooms });
      });
  };
}

const mapStateToProps = (state) => ({
  session: state.session,
  navHeight: state.main.navHeight,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RoomEntrance);
