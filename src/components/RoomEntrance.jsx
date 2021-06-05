import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Input,
  Button,
} from "reactstrap";
import { connect } from "react-redux";
import { AvForm, AvField } from "availity-reactstrap-validation";

import MasterRoom from "Components/Room/Parent/MasterRoom.jsx";

import "./RoomEntrance.css";

class RoomEntrance extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="RoomEntrance">
          <Navbar>
            <Nav>
              <NavLink tag={Link} to="/room/parent">
                Parent
              </NavLink>
            </Nav>
          </Navbar>
        </div>
        <Route exact path="/room/parent" render={() => <MasterRoom/>} />
      </Router>
    );
  }
}

export default connect((state) => ({
  ...state.session,
}))(RoomEntrance);
