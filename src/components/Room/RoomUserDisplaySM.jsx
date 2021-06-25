import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { BiUserCircle } from "react-icons/bi";
import classNames from "classnames";

import "./RoomUserDisplay.css";

export class RoomUserDisplaySM extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggle = () => {
    this.setState((state) => ({
      isOpen: !state.isOpen,
    }));
  };

  render() {
    return (
      <div className="RoomUserDisplaySM">
        <BiUserCircle
          size={150}
          className="mt-3"
          onClick={this.toggle}
          className="avatar"
        />
        <div className={classNames("information", { show: this.state.isOpen })}>
          i'm user
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  session: state.session,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RoomUserDisplaySM);
