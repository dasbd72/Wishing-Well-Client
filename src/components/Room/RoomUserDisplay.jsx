import React, { Component } from "react";
import Clock from "react-live-clock";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classNames from "classnames";
import { BiUserCircle } from "react-icons/bi";

import "./RoomUserDisplay.css";

export class RoomUserDisplay extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <div className="RoomUserDisplay">
        <div
          className={classNames(
            "d-flex d-col align-items-center justify-content-center"
          )}
        >
          <BiUserCircle size={200} className="align-self-start mt-3" />
          <Clock format="HH:mm:ss dddd" interval={1000} ticking={true} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RoomUserDisplay);
