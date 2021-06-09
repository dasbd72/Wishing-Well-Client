import React, { Component } from "react";
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
            "h-100 d-flex align-items-center justify-content-center"
          )}
        >
          <BiUserCircle size={200} className="align-self-start mt-3" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RoomUserDisplay);
