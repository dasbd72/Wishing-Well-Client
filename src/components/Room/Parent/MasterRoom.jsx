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

import Menu from "Components/Room/Parent/Menu.jsx";
import Task from "Components/Room/Parent/Task.jsx";
import Request from "Components/Room/Parent/Request.jsx";

import "./MasterRoom.css";

export default class MasterRoom extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="MasterRoom">
          <Navbar>
            <Nav vertical>
              <NavItem>
                <NavLink tag={Link} to="/room/parent">
                  Menu
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/room/parent/task">
                  Task
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/room/parent/request">
                  Request
                </NavLink>
              </NavItem>
            </Nav>
          </Navbar>
        </div>
        <Route exact path="/room/parent" render={() => <Menu />} />
        <Route exact path="/room/parent/task" render={() => <Task />} />
        <Route exact path="/room/parent/request" render={() => <Request />} />
      </Router>
    );
  }
}
