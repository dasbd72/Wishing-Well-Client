import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container } from "reactstrap";

export class Request extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <Container className="ChildrenTask d-flex align-items-center flex-column pt-3">
        <h1
          className="m-3"
          style={{
            color: "white",
            background: "black",
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
          }}
        >
          New Request
        </h1>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Request);
