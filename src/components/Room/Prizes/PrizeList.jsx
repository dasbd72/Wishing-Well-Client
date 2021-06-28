import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import PrizeItem from "./PrizeItem";
import "./Prize.css";

export class PrizeList extends Component {
  static propTypes = {
    prizes: PropTypes.array,
  };

  render() {
    let prizelist = this.props.prizes.map((el) => {
      return (
        <div className="col">
          <PrizeItem {...el} />
        </div>
      );
    });
    return (
      <div className="PrizeList p-4">
        <div className="container">
          <div className="row"></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PrizeList);
