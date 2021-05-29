import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./AppDescription.css";

class AppDescription extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="AppDescription bg-dark text-light container">
        <div className="align-middle justify-content-center row">
          <div className="col fs-1">Wellcome To Wishing Well.</div>
        </div>
      </div>
    );
  }
}

export default connect()(AppDescription);
