import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Authenticator, SignIn } from "aws-amplify-react";

import AmplifyGoogleSignIn from "Components/Auth/GoogleSignIn";
import SignInWithGoogle from "Components/Auth/SignInWithGoogle";
import AwsConfig from "Components/../aws-exports.js";

import { setUser } from "States/session-actions";

export class LoginForm extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="LoginForm">
        {/* <AmplifyGoogleSignIn /> */}
        {/* <SignInWithGoogle /> */}
        <Authenticator
          authState="signIn"
          federated={this.props.federated}
          hide={[SignIn]}
          hideDefault={true}
          amplifyConfig={AwsConfig}
        >
          <SignIn federated={this.props.federated} />
        </Authenticator>
        {/* <AmplifyAuthenticator
          federated={{
            googleClientId: this.props.googleClientId,
          }}
          handleAuthStateChange={(nextAuthState, user) => {
            console.log(user);
            setUser(user);
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
          <AmplifySignIn
            slot="sign-in"
            usernameAlias="email"
            federated={{
              googleClientId: this.props.googleClientId,
            }}
          />
        </AmplifyAuthenticator>*/}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.session,
  federated: state.federated,
});

const mapDispatchToProps = {
  setUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
