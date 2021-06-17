import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

export class Room extends Component {
  render() {
    const { match } = this.props;
    console.log(match.params);
    return <div></div>;
  }
}

const mapStateToProps = (state) => ({
  ...state.session,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Room));
