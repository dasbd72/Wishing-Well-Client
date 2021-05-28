import React from "react";
import PropTypes from "prop-types";

import AppEntrance from "Components/AppEntrance.jsx";

import "./Main.css";
export default class Main extends React.Component {
  static propTypes = {};
  constructor(props) {
    super(props);
    this.state = {
      hasLoggedIn: false,
      language: "en",
    };
  }

  render() {
    return (
      <div className="container">
        <AppEntrance />
      </div>
    );
  }
}
