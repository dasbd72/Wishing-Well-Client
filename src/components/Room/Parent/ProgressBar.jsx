import React from "react";
import PropTypes from "prop-types";
import { Progress } from "reactstrap";

import "./ProgressBar.css";

export default class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="progressbarForm">
        <Progress value="25"></Progress>
      </div>
    );
  }
}
