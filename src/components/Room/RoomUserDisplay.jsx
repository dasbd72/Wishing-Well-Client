import React, { Component } from "react";
import Clock from "react-live-clock";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classNames from "classnames";
import { BiUserCircle } from "react-icons/bi";

import "./RoomUserDisplay.css";
import PrizeItem from "./Prizes/PrizeItem";

export class RoomUserDisplay extends Component {
  static propTypes = {
    size: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="RoomUserDisplay">
        <div
          className={classNames(
            "d-flex flex-column align-items-center justify-content-center h-100"
          )}
        >
          <BiUserCircle size={200} className="mt-3" />
          <h1>{this.props.session.userName}</h1>
          <Clock format="HH:mm:ss dddd" interval={1000} ticking={true} />
          <div className="mb-auto"></div>
          {this.props.room.role === "children" &&
            this.props.room.c_currentPrize.prizeId && (
              <div className="pb-3">
                <PrizeItem {...this.props.room.c_currentPrize} />
              </div>
            )}
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
