import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import MainNavbar from "Components/MainNavbar.jsx";

import "./AppDescription.css";

export class AppDescription extends Component {
  static propTypes = {};
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="AppDescription bg-dark text-light text-center d-flex flex-row align-items-center justify-content-center">
        <MainNavbar />
        <div className="col fs-1">Welcome To Wishing Well.</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AppDescription);
