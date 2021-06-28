import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Auth } from "aws-amplify";
import {
  AmplifyAuthenticator,
  AmplifySignUp,
  AmplifySignIn,
} from "@aws-amplify/ui-react";

import { reloadUser } from "Api/amplify";

export class CustomSignIn extends Component {
  static propTypes = {
    onStateChange: PropTypes.func,
  };
  handleAuthStateChange = (state) => {
    if (state === "signedin" || state === "signedout") {
      reloadUser();
      if (state === "signedin" && this.props.onSignedIn)
        this.props.onSignedIn();
    }
  };
  render() {
    return (
      <React.Fragment>
        <AmplifyAuthenticator
          federated={{ googleClientId: this.props.googleClientId }}
          handleAuthStateChange={this.handleAuthStateChange}
          style={{
            "--container-height": `fit-content`,
            "--container-width": `fit-content`,
          }}
        >
          <AmplifySignUp
            slot="sign-up"
            formFields={[
              {
                type: "username",
                label: "Email",
                placeholder: "example@email.com",
                inputProps: { required: true, autocomplete: "email" },
              },
              {
                type: "password",
                label: "Password",
                placeholder: "Passwd1223",
                inputProps: { required: true, autocomplete: "new-password" },
              },
            ]}
          ></AmplifySignUp>
          <AmplifySignIn
            slot="sign-in"
            usernameAlias="email"
            federated={{
              googleClientId: this.props.googleClientId,
            }}
          />
        </AmplifyAuthenticator>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  session: state.session,
  ...state.federated,
  navHeight: state.main.navHeight,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CustomSignIn);
