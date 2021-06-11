import React from "react";
import PropTypes from "prop-types";

import "./RejectedTask.css";

export default class RejectedTask extends React.Component {
  static propTypes = {};

  render() {
    return (
      <>
        <h1>RejectedTask</h1>
        <div className="RejectedTaskForm"></div>
      </>
    );
  }
}
