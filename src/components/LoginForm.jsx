import React from "react";
import { connect } from "react-redux";
import Auth, { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";
import { Button, Row, Col } from "reactstrap";
import {
  AmplifyAuthenticator,
  AmplifySignUp,
  AmplifySignIn,
  AmplifyGoogleButton,
  AmplifyAuthContainer,
} from "@aws-amplify/ui-react";

import { setUser } from "States/session-actions.js";
import "./LoginForm.css";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
  }
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
export default connect((state) => ({
  ...state.session,
  federated: state.federated,
}))(LoginForm);
