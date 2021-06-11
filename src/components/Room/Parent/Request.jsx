import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter,
} from "react-router-dom";
import PropTypes from "prop-types";

import "./Request.css";

export class Request extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Request">
        <h1>New Request</h1>
        <div className="RequestForm"></div>
      </div>
    );
  }
}

export default withRouter(Request);
