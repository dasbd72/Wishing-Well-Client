import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as IconBs from "react-icons/bs";

import MainNavbar from "Components/MainNavbar";

import "./AppDescription.css";

export class AppDescription extends Component {
  static propTypes = {};
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="AppDescription text-light text-center d-flex flex-row align-items-center justify-content-center">
        <MainNavbar />
        <div className="AppDescription-bg"></div>
        <div className="Description col fs-1 white">
          <h1>Welcome To Wishing Well.</h1>
          {/* <h6>"I want a pineapple SOOOOO bad!!!"</h6> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AppDescription);
