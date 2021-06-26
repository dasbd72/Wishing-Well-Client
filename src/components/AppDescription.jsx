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
      <React.Fragment>
        <MainNavbar />
        <div className="AppDescription-bg" />
        <div className="AppDescription text-light text-center d-flex flex-row align-items-center justify-content-center">
          <h1>Welcome To Wishing Well.</h1>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AppDescription);
