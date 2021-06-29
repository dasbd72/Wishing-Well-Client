import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ButtonGroup, Progress, Button } from "reactstrap";
import classNames from "classnames";

import { responsePrize } from "Api/prizes";
import { c_choosePrize, p_listPrizes } from "States/room-actions";
import "./Prize.css";

export class PrizeItem extends Component {
  static propTypes = {
    prizeId: PropTypes.string,
    prizeName: PropTypes.string,
    isAccepted: PropTypes.number,
    curPoints: PropTypes.number,
    targetPoints: PropTypes.number,
    userId: PropTypes.string,
    ts: PropTypes.string,
  };

  p_responsePrize = (accept) => {
    if (this.props.room.role !== "parent") return;
    return () => {
      responsePrize(this.props.prizeId, accept).then(() => {
        this.props.p_listPrizes(this.props.room.roomId);
      });
    };
  };

  c_choosePrize = () => {
    if (this.props.room.role !== "children") return;
    this.props.c_choosePrize(this.props.prizeId, this.props.room.roomId);
  };

  render() {
    let percentage = (this.props.curPoints / this.props.targetPoints) * 100;
    const barStyle =
      this.props.room.role === "children"
        ? { backgroundColor: "rgba(255, 171, 103, 0.87)" }
        : { backgroundColor: "rgba(120, 101, 103, 0.87)" };
    if (this.props.isAccepted == 1) {
      return (
        <div
          className={classNames("PrizeItem", {
            accepted: this.props.isAccepted == 1,
          })}
          onClick={this.c_choosePrize}
        >
          <div className="container d-flex h-100 flex-column py-3">
            <div className="title">{this.props.prizeName}</div>
            <div className="mt-auto">
              <Progress
                barStyle={barStyle}
                value={percentage}
                hidden={this.props.isAccepted != 1}
              ></Progress>
            </div>
          </div>
        </div>
      );
    } else {
      if (this.props.room.role === "children") {
        return (
          <div className={classNames("PrizeItem")}>
            <div className="container d-flex h-100 flex-column py-4">
              <div className="title">{this.props.prizeName}</div>
              <div className="mt-auto"></div>
            </div>
          </div>
        );
      } else {
        return (
          <div
            className={classNames("PrizeItem", {
              accepted: this.props.isAccepted == 1,
            })}
          >
            <div className="container d-flex h-100 flex-column py-4">
              <div className="title">{this.props.prizeName}</div>
              <div className="mt-auto">
                <ButtonGroup>
                  <Button onClick={this.p_responsePrize(true)}>Accept</Button>
                  <Button onClick={this.p_responsePrize(false)}>Reject</Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
        );
      }
    }
  }
}

const mapStateToProps = (state) => ({
  room: state.room,
  session: state.session,
});

const mapDispatchToProps = { c_choosePrize, p_listPrizes };

export default connect(mapStateToProps, mapDispatchToProps)(PrizeItem);
