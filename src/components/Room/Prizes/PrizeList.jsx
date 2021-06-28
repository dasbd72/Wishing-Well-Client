import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import shortid from "shortid";

import PrizeItem from "./PrizeItem";
import "./Prize.css";

export class PrizeList extends Component {
  static propTypes = {
    prizes: PropTypes.array,
  };

  render() {
    let prizelist = this.props.prizes.map((el) => {
      return (
        <div className="col-md-6 p-4" key={shortid.generate()}>
          <PrizeItem {...el} />
        </div>
      );
    });
    return (
      <div className="PrizeList p-4">
        <div type="unstyled" className="container">
          <div className="row">{prizelist}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PrizeList);
