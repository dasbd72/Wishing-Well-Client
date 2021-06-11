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
import * as IconGo from "react-icons/go";
import { FuncSignOut } from "Components/Auth/SignOut";

import { sidebarToggle } from "States/room-actions";

import "./RoomSidebar.css";

export class RoomSidebar extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    console.log(this.props.match);
    const { isSidebarOpen, sidebarToggle, match } = this.props;
    const tagClass =
      "d-flex flex-row align-items-center justify-content-between";
    return (
      <div className="RoomSidebar">
        <div
          className={classNames("sidebar bg-info h-100 d-flex flex-column", {
            "is-open": isSidebarOpen,
          })}
        >
          <Nav vertical className="list-unstyled flex-column mb-auto">
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
              <NavLink tag={Link} to={`${match.url}/wish`}>
                <div className={classNames(tagClass)}>
                  <Col>
                    <IconAi.AiOutlineStar />
                  </Col>
                  <Col hidden={!isSidebarOpen}>Wish</Col>
                </div>
              </NavLink>
            </NavItem>
          </Nav>
          <Nav vertical className="list-unstyled flex-column">
            <NavItem>
              <NavLink tag={Link} to={`/room`}>
                <div className={classNames(tagClass)}>
                  <Col>
                    <IconGo.GoSignOut />
                  </Col>
                  <Col hidden={!isSidebarOpen}>Leave Room</Col>
                </div>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={FuncSignOut}>
                <div className={classNames(tagClass)}>
                  <Col>
                    <IconFi.FiLogOut />
                  </Col>
                  <Col hidden={!isSidebarOpen}>SignOut</Col>
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
)(withRouter(RoomSidebar));

// https://codesandbox.io/s/5ku6t?file=/src/components/sidebar/SideBar.js
