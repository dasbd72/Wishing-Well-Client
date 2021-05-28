import React from "react";
import PropTypes from "prop-types";
import { getImgPath } from "Utilities/utility.js";

import LoginForm from "Components/LoginForm.jsx";

export default class AppEntrance extends React.Component {
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
      <div className="container">
        <div className="d-md-flex flex-md-row-reverse row">
          <div className="col my-auto">
            <div className="row row-cols-1 align-items-center">
              <div className="col text-center">
                <h1>Login</h1>
              </div>
              <div className="col self-align-center">
                <LoginForm />
              </div>
            </div>
          </div>
          <div className="col">
            <img src={getImgPath("wishing-well-logo")} alt="logo" />
          </div>
        </div>
      </div>
    );
  }
}
