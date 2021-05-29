import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getImgPath } from "Utilities/utility.js";

import LoginForm from "Components/LoginForm.jsx";

import "./AppEntrance.css";

class AppEntrance extends React.Component {
  static propTypes = {
    language: PropTypes,
  };
  constructor(props) {
    super(props);
    this.state = {
      page: "login",
    };
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
export default connect((state) => ({
  ...state.session,
}))(AppEntrance);
