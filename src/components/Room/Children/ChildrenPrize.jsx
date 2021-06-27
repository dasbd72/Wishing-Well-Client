import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import PrizeList from "Components/Room/Children/Prizes/PrizeList";

export class ChildrenPrize extends Component {
  static propTypes = {
    // prop: PropTypes
  };

  render() {
    return (
      <div className="ChildrenPrize d-flex align-items-center flex-column pt-4">
        <h1
          className="m-3"
          style={{
            color: "white",
            background: "black",
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
          }}
        >
          Your Wishs
        </h1>
        <PrizeList />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ChildrenPrize);
