import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Auth } from "aws-amplify";
import {
  AmplifyAuthenticator,
  AmplifySignUp,
  AmplifySignIn,
} from "@aws-amplify/ui-react";
// import { Authenticator, SignIn } from "aws-amplify-react";
// import { Button } from "reactstrap";
// import { AvForm, AvField } from "availity-reactstrap-validation";

import { setUser, setErrSignIn } from "States/session-actions";

export class CustomSignIn extends Component {
  static propTypes = {
    prop: PropTypes,
  };
  handleAuthStateChange = (state) => {
    if (state === "signedin" || state === "signedout") {
      Auth.currentAuthenticatedUser().then((user) => {
        this.props.setUser(user);
      });
    }
  };
  render() {
    return (
      <React.Fragment>
        <AmplifyAuthenticator
          federated={{
            googleClientId: this.props.googleClientId,
          }}
          handleAuthStateChange={this.handleAuthStateChange}
          style={{ "--container-height": "auto" }}
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
        </AmplifyAuthenticator>
        {/* <Authenticator hide={[SignIn]}>
          <AvForm onValidSubmit={this.signIn}>
            <AvField
              name="email"
              label="Email"
              type="text"
              validate={{
                required: true,
                email: true,
              }}
            />
            <AvField
              name="password"
              label="Password"
              type="password"
              validate={{
                required: {
                  value: true,
                  errorMessage: "Please enter your password",
                },
                pattern: {
                  value: "^[A-Za-z0-9]+$",
                  errorMessage:
                    "Your password must be composed only with letter and numbers",
                },
                minLength: {
                  value: 6,
                  errorMessage:
                    "Your password must be between 6 and 16 characters",
                },
                maxLength: {
                  value: 16,
                  errorMessage:
                    "Your password must be between 6 and 16 characters",
                },
              }}
            />
            <Button id="submit">Submit</Button>
          </AvForm>
        </Authenticator> */}
      </React.Fragment>
    );
  }

  signIn = (event, values) => {
    Auth.signIn(values.email, values.password)
      .then((user) => this.props.setUser(user))
      .catch((err) => {
        this.props.setErrSignIn(err.message);
      });
  };
}

const mapStateToProps = (state) => ({
  session: state.session,
  ...state.federated,
});

const mapDispatchToProps = {
  setUser,
  setErrSignIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomSignIn);
