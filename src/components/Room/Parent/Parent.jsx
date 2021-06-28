import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter, Switch, Route } from "react-router-dom";

import {
  AiOutlineHome,
  AiOutlineStar,
  AiOutlineContainer,
} from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { GoSignOut } from "react-icons/go";
import { IoMdAdd } from "react-icons/io";
import { signOut } from "Api/amplify";

import SidebarContainer from "Components/Room/Sidebar/SidebarContainer";
import SidebarItem from "Components/Room/Sidebar/SidebarItem";
import RoomUserDisplay from "Components/Room/RoomUserDisplay";
import ParentCreateTask from "Components/Room/Parent/ParentCreateTask";
import ParentMenu from "Components/Room/Parent/ParentMenu";
import Request from "Components/Room/Parent/Request";
import ParentSpy from "Components/Room/Parent/ParentSpy";

import "./Parent.css";

export class Parent extends Component {
  static propTypes = {
    // prop: PropTypes,
  };

  render() {
    const { match } = this.props;
    return (
      <div className="Parent d-flex">
        <div className="Parent-bg"></div>
        <SidebarContainer>
          <SidebarItem
            icon={<AiOutlineHome />}
            destination={`${match.url}`}
            label="Menu"
          />
          <SidebarItem
            icon={<AiOutlineStar />}
            destination={`${match.url}/spy`}
            label="Watch"
          />
          <SidebarItem
            icon={<IoMdAdd />}
            destination={`${match.url}/create`}
            label="Tasks"
          />
          <SidebarItem
            icon={<AiOutlineContainer />}
            destination={`${match.url}/request`}
            label="Request"
          />
          <SidebarItem
            icon={<GoSignOut />}
            destination="/room"
            label="Leave"
            bottom
          />
          <SidebarItem
            icon={<FiLogOut />}
            clickFunc={signOut}
            destination="/"
            label="SignOut"
            bottom
          />
        </SidebarContainer>
        <RoomUserDisplay />
        <Switch>
          <Route exact path={`${match.url}/`}>
            <ParentMenu />
          </Route>
          <Route path={`${match.url}/spy`}>
            <ParentSpy />
          </Route>
          <Route path={`${match.url}/create`}>
            <ParentCreateTask />
          </Route>
          <Route path={`${match.url}/request`}>
            <Request />
          </Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Parent));
