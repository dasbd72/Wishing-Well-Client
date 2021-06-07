import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getImgPath } from "Utilities/utility.js";
import { DiJqueryUiLogo } from "react-icons/di";

import LoginForm from "Components/LoginForm.jsx";

import "./AppEntrance.css";

export class AppEntrance extends Component {
  static propTypes = {
    language: PropTypes.string,
  };
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="AppEntrance container ">
        <div className="d-flex h-100">
          <div className="display-1">
            {/* <img
              src={getImgPath("wishing-well-logo")}
              alt="logo"
              className="rounded  img-fluid my-auto"
            /> */}
            <DiJqueryUiLogo />
          </div>
          <div className="">
            <LoginForm />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.session,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AppEntrance);
