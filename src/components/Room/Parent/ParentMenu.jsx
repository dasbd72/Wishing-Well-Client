import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export class ParentMenu extends Component {
  static propTypes = {};

  render() {
    return <div className="ParentMenu d-flex justify-content-center align-items-center"><h1>Let's get start it!</h1></div>;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ParentMenu);
