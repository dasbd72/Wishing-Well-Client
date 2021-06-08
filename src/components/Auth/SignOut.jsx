import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import { Auth } from "aws-amplify";

import { setSignOut } from "States/session-actions";

export class CustomSignOut extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <Button light outline sm border="0" onClick={this.signOut}>
        Sign Out
      </Button>
    );
  }

  signOut = () => {
    Auth.signOut();
    this.props.setSignOut();
  };
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  setSignOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomSignOut);
