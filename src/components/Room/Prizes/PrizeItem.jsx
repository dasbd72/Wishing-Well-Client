import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ButtonGroup, Progress, Button } from "reactstrap";
import classNames from "classnames";

import { responsePrize } from "Api/prizes";
import "./Prize.css";

export class PrizeItem extends Component {
  static propTypes = {
    prizeId: PropTypes.number,
    prizeName: PropTypes.string,
    isAccepted: PropTypes.number,
    curPoints: PropTypes.number,
    targetPoints: PropTypes.number,
    userId: PropTypes.string,
    ts: PropTypes.string,
  };

  responsePrize = (accept) => {
    return () => {
      responsePrize(this.props.prizeId, accept).then(()=>{
        
      });
    };
  };

  render() {
    let percentage = (this.props.curPoints / this.props.targetPoints) * 100;
    if (this.props.room.role === "children") {
      return (
        <div
          className={classNames("PrizeItem", {
            accepted: this.props.isAccepted == 1,
          })}
        >
          <div className="container d-flex h-100 flex-column py-3">
            <div className="title">{this.props.prizeName}</div>
            <div className="mt-auto">
              <Progress
                // bar
                barStyle={{ backgroundColor: "gray" }}
                value={percentage}
              ></Progress>
            </div>
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
          <div className="container d-flex h-100 flex-column py-3">
            <div className="title">{this.props.prizeName}</div>
            <div className="mt-auto">
              <ButtonGroup>
                <Button>Accept</Button>
                <Button>Reject</Button>
              </ButtonGroup>
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  room: state.room,
  session: state.session,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PrizeItem);
