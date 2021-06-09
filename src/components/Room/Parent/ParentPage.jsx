import React from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useParams,
  useRouteMatch,
  Switch,
  withRouter,
  Redirect,
} from "react-router-dom";
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
import { AiOutlineMenu } from "react-icons/ai";

import ParentMenu from "Components/Room/Parent/ParentMenu.jsx";
import Task from "Components/Room/Parent/Task.jsx";
import Request from "Components/Room/Parent/Request.jsx";

import "./ParentPage.css";

export default class ParentPage extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="ParentPage d-flex flex-row">
          <ul className="ParentNavbar col-1">
            <li>
              <Link to="/parent">Menu</Link>
            </li>
            <li>
              <Link to="/parent/task">Task</Link>
            </li>
            <li>
              <Link to="/parent/request">Request</Link>
            </li>
          </ul>
          <div className="ParentRoom col-11">
            <Route exact path="/parent" render={() => <ParentMenu />} />
            <Route exact path="/parent/task" render={() => <Task />} />
            <Route exact path="/parent/request" render={() => <Request />} />
          </div>
        </div>
      </Router>
    );
  }
}
