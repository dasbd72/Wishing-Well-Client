import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { Button, Row, Col } from "reactstrap";

class RoomEntrance extends React.Component {
  constructor(props) {
    super(props);
  }
}

export default connect((state) => ({
  ...state.session,
}));
