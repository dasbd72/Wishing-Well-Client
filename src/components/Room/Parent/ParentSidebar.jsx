import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  NavItem,
  NavLink,
  Nav,
  Row,
  Col,
  Navbar,
  NavbarBrand,
} from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import classNames from "classnames";
import * as IconAi from "react-icons/ai";
import * as IconFi from "react-icons/fi";

import { sidebarToggle } from "States/room-actions";

import "./ParentSidebar.css";

export class ParentSidebar extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    console.log(this.props);
    const { isSidebarOpen, sidebarToggle, match } = this.props;
    const tagClass =
      "d-flex flex-row align-items-center justify-content-between";
    return (
      <div className="RoomSidebar">
        <div
          className={classNames("sidebar", "bg-info", "h-100", {
            "is-open": isSidebarOpen,
          })}
        >
          <Nav vertical className="list-unstyled pb-3">
            <NavItem>
              <NavLink onClick={sidebarToggle}>
                <div className={classNames(tagClass)}>
                  <Col hidden={isSidebarOpen}>
                    <IconAi.AiOutlineBars />
                  </Col>
                  <Col hidden={!isSidebarOpen}>
                    <IconAi.AiOutlineBars />
                  </Col>
                  <Col hidden={!isSidebarOpen}>Sidebar</Col>
                </div>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to={`${match.url}`}>
                <div className={classNames(tagClass)}>
                  <Col>
                    <IconAi.AiOutlineHome />
                  </Col>
                  <Col hidden={!isSidebarOpen}>Menu</Col>
                </div>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to={`${match.url}/task`}>
                <div className={classNames(tagClass)}>
                  <Col>
                    <IconAi.AiOutlineStar />
                  </Col>
                  <Col hidden={!isSidebarOpen}>Task</Col>
                </div>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to={`${match.url}/request`}>
                <div className={classNames(tagClass)}>
                  <Col>
                    <IconAi.AiOutlineStar />
                  </Col>
                  <Col hidden={!isSidebarOpen}>Request</Col>
                </div>
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.room,
});

const mapDispatchToProps = {
  sidebarToggle,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ParentSidebar));
