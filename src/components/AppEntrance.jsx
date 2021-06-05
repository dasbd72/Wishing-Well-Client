import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getImgPath } from "Utilities/utility.js";

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
        <div className="d-md-flex row h-50">
          <div className="col">
            <img
              src={getImgPath("wishing-well-logo")}
              alt="logo"
              className="rounded  img-fluid my-auto"
            />
          </div>
          <div className="col">
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
