import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import PrizeList from "Components/Room/Prizes/PrizeList";
import { listPrizes } from "Api/prizes";

export class ChildrenPrize extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    console.log("child prizes", this.props.room.c_prizeList);
    return (
      <div className="ChildrenPrize">
        {this.props.room.c_prizeList.length == 0 ? (
          <div className="d-flex align-items-center justify-content-center h-100">
            <h1
              className="m-3"
              style={{
                color: "white",
                background: "black",
                paddingLeft: "0.5rem",
                paddingRight: "0.5rem",
              }}
            >
              Go make some wish.
            </h1>
          </div>
        ) : (
          <PrizeList prizes={this.props.room.c_prizeList} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  room: state.room,
  session: state.session,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ChildrenPrize);
