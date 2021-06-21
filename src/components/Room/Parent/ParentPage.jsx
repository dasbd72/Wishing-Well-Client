import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, withRouter, Switch, Route } from "react-router-dom";

import classNames from "classnames";
import * as IconAi from "react-icons/ai";
import * as IconFi from "react-icons/fi";
import * as IconGo from "react-icons/go";
import { signOut } from "Api/amplify";

import { sidebarToggle } from "States/room-actions";
import SidebarContainer from "Components/Room/Sidebar/SidebarContainer";
import SidebarItem from "Components/Room/Sidebar/SidebarItem";
import ParentMenu from "Components/Room/Parent/ParentMenu";
import Task from "Components/Room/Parent/Task";
import Request from "Components/Room/Parent/Request";
import RoomUserDisplay from "Components/Room/RoomUserDisplay";

import "./ParentPage.css";

export class ParentPage extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    const { match } = this.props;
    return (
      <div className="ParentPage d-flex">
        <SidebarContainer>
          <SidebarItem
            icon={<IconAi.AiOutlineHome />}
            destination={`${match.url}`}
            label="Menu"
          />
          <SidebarItem
            icon={<IconAi.AiOutlineStar />}
            destination={`${match.url}/task`}
            label="Tasks"
          />
          <SidebarItem
            icon={<IconAi.AiOutlineContainer />}
            destination={`${match.url}/request`}
            label="Request"
          />
          <SidebarItem
            icon={<IconGo.GoSignOut />}
            destination="/room"
            label="Leave"
            bottom
          />
          <SidebarItem
            icon={<IconFi.FiLogOut />}
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
          <Route path={`${match.url}/task`}>
            <Task />
          </Route>
          <Route path={`${match.url}/request`}>
            <Request />
          </Route>
        </Switch>
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
)(withRouter(ParentPage));
