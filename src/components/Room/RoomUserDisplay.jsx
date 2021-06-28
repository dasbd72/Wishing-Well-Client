import React, { Component } from "react";
import Clock from "react-live-clock";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classNames from "classnames";
import { BiUserCircle } from "react-icons/bi";

import "./RoomUserDisplay.css";

export class RoomUserDisplay extends Component {
  static propTypes = {
    size: PropTypes.string,
  };

  render() {
    return (
      <div className="RoomUserDisplay">
        <div
          className={classNames(
            "d-flex flex-column align-items-center justify-content-center"
          )}
        >
          <BiUserCircle size={200} className="mt-3" />
          <h1>{this.props.session.userName}</h1>
          <Clock format="HH:mm:ss dddd" interval={1000} ticking={true} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  session: state.session,
  room: state.room,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RoomUserDisplay);
