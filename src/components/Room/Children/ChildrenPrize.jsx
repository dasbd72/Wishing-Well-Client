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
      <div className="ChildrenPrize">
        <PrizeList />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ChildrenPrize);
