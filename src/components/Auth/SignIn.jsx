import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Auth } from "aws-amplify";
import { Authenticator, SignIn } from "aws-amplify-react";
import { Button } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";

import { setUser } from "States/session-actions";

export class CustomSignIn extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <React.Fragment>
        <Authenticator hide={[SignIn]}>
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
        </Authenticator>
      </React.Fragment>
    );
  }

  signIn = (event, values) => {
    Auth.signIn(values.email, values.password)
      .then((user) => this.props.setUser(user))
      .catch((err) => {});
  };
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  setUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomSignIn);
