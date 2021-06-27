import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Progress } from "reactstrap";

import "./Prize.css";
export class PrizeItem extends Component {
  static propTypes = {
    prizeId: PropTypes.number,
    prizeName: PropTypes.string,
    isAccepted: PropTypes.number,
    curPoints: PropTypes.number,
    targetPoints: PropTypes.number,
    targetUser: PropTypes.string,
    ts: PropTypes.number,
  };

  render() {
    let percentage = (this.props.curPoints / this.props.targetPoints) * 100;
    return (
      <div className="PrizeItem">
        <div className="container d-flex h-100 flex-column py-3">
          <div className="title">{this.props.prizeName}</div>
          <div className="mt-auto">
            <Progress
              // bar
              barStyle={{ backgroundColor: "gray" }}
              value={percntage}
            ></Progress>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PrizeItem);
