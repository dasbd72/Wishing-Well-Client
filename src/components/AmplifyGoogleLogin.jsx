import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import Auth from "@aws-amplify/auth";

export class AmplifyGoogleLogin extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    const { googleClientId } = this.props;
    return (
      <Button onClick={() => Auth.federatedSignIn()}>SignIn With Google</Button>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.federated,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AmplifyGoogleLogin);
