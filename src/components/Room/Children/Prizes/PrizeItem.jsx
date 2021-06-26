import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Progress } from "reactstrap";

import "./Prize.css";
export class PrizeItem extends Component {
  static propTypes = {
    // prop: PropTypes,
  };

  render() {
    return (
      <div className="PrizeItem">
        <div className="container d-flex h-100 flex-column py-3">
          <div className="title fs-1">IphoneX</div>
          <div className="mt-auto" style={{}}>
            <Progress
              // bar
              barStyle={{ backgroundColor: "purple" }}
              value={35}
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
