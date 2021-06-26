import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import PrizeItem from "./PrizeItem";
import "./Prize.css";

export class PrizeList extends Component {
  static propTypes = {
    // prop: PropTypes,
  };

  render() {
    return (
      <div className="PrizeList p-4">
        <div className="container">
          <div className="row">
            <div className="col">
              <PrizeItem />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PrizeList);
