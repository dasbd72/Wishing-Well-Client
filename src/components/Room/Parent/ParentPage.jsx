import React, { Component } from "react";
import { connect } from "react-redux";
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
import ParentSidebar from "Components/Room/Parent/ParentSidebar.jsx";

import "./ParentPage.css";

class ParentPage extends Component {
  static propTypes = {};
  constructor(props) {
    super(props);
  }

  render() {
    const { match } = this.props; 
    console.log(match.url);
    return (
        <div className="ParentPage d-flex">
          <ParentSidebar />
          <Switch>
            {/* <ul className="ParentNavbar col-1">
              <li>
                <Link to={`${match.url}/`}>Menu</Link>
              </li>
              <li>
                <Link to={`${match.url}/parent/task`}>Task</Link>
              </li>
              <li>
                <Link to={`${match.url}/parent/request`}>Request</Link>
              </li>
            </ul> */}
            <div className="ParentRoom">
              <Route exact path={`${match.path}/task`}>
                <Task />
              </Route>
              <Route exact path={`${match.path}/request`}>
              <Request />
              </Route>
              <Route exact path={`${match.path}/`}>
                <ParentMenu />
              </Route>
            </div>
          </Switch>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  sidebarOpen: true,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleSidebar: () =>
      dispatch({ type: "toggle", sidebarOpen: !ownProps.sidebarOpen }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ParentPage));