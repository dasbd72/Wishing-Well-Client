import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { DiJqueryUiLogo } from "react-icons/di";
import { Container } from "reactstrap";

import SignIn from "Components/Auth/SignIn";
import MainNavbar from "Components/MainNavbar";

export class AppEntrance extends Component {
  static propTypes = {
    language: PropTypes.string,
    navHeight: PropTypes.number,
  };
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="AppEntrance">
        <MainNavbar fixedTop={false} />
        <Container fluid>
          <div
            className="d-flex row align-items-center justify-content-center "
            style={{ height: `calc(100vh - ${this.props.navHeight}px)` }}
          >
            <div className="col-5 d-flex justify-content-center">
              <DiJqueryUiLogo size={240} />
            </div>
            <div className="col-5">
              <SignIn />
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.session,
  navHeight: state.main.navHeight,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AppEntrance);
