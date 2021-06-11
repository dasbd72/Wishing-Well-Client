import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { GoogleButton } from "aws-amplify-react";

export class CustomGoogleSignIn extends Component {
  static propTypes = {
    googleClientId: PropTypes.string,
  };

  render() {
    const style = {};
    const { googleClientId } = this.props;
    return (
      <div>
        <GoogleButton clientId={googleClientId} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.federated,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CustomGoogleSignIn);
