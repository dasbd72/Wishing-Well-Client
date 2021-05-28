import React from "react";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { Button, Row, Col } from "reactstrap";

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: false };
  }

  render() {
    const modalError = this.state.error ? "not" : ""; // This is just for the modal
    return (
      <div>
        <AvForm
          onValidSubmit={this.handleValidSubmit}
          onInvalidSubmit={this.handleInvalidSubmit}
        >
          <Row>
            <Col xs="12">
              <AvField
                name="email"
                label="Email Address"
                type="email"
                validate={{
                  required: true,
                  email: true,
                }}
              />
            </Col>
            <Col xs="12">
              <AvField
                name="password"
                label="Password"
                type="password"
                validate={{
                  required: {
                    value: true,
                    errorMassage: "Please enter your password",
                  },
                  pattern: {
                    value: "^[A-Za-z0-9]+$",
                    errorMassage:
                      "Your password must be composed only with letter and number",
                  },
                  minLength: {
                    value: 6,
                    errorMessage:
                      "Your password must be between 6 and 16 characters",
                  },
                }}
              />
            </Col>
            <Col xs="12" className="text-center">
              No account yet ? <a href="">Register</a>
            </Col>
            <Col xs={{ size: 6, offset: 3 }} md={{ size: 4, offset: 4 }}>
              <Button color="primary" id="submit" className="">
                Submit
              </Button>
            </Col>
          </Row>
        </AvForm>
      </div>
    );
  }

  handleValidSubmit = (e, values) => {
    this.setState({ email: values.email });
    console.log(`Login Successful`);
  };

  handleInvalidSubmit = (event, errors, values) => {
    this.setState({ email: values.email, error: true });
    console.log(`Login failed`);
  };

  closeModal = () => {
    this.setState({ email: false, error: false });
  };
}
