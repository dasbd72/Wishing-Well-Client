import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  AmplifyAuthenticator,
  AmplifySignUp,
  AmplifySignIn,
  AmplifyGoogleButton,
  AmplifyAuthContainer,
} from "@aws-amplify/ui-react";

import { setUser } from "States/session-actions.js";
import "./LoginForm.css";

export class LoginForm extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="LoginForm">
        <AmplifyAuthContainer>
          <AmplifyAuthenticator
            federated={{
              googleClientId: this.props.federated.googleClientId,
            }}
            handleAuthStateChange={(nextAuthState, user) => {
              console.log(user);
              this.props.dispatch(setUser(user));
            }}
          >
            <AmplifySignUp
              slot="sign-up"
              formFields={[
                {
                  type: "username",
                  label: "Username",
                  placeholder: "Username",
                  inputProps: { required: true },
                },
                {
                  type: "email",
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
            <AmplifyGoogleButton
              slot="sign-up"
              id={this.props.federated.googleClientId}
            />
            <AmplifySignIn
              slot="sign-in"
              usernameAlias="email"
              federated={{
                googleClientId: this.props.federated.googleClientId,
              }}
            />
          </AmplifyAuthenticator>
        </AmplifyAuthContainer>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.session,
  federated: state.federated,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
