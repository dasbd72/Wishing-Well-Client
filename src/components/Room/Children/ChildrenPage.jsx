import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";

import * as IconAi from "react-icons/ai";
import * as IconFi from "react-icons/fi";
import * as IconGo from "react-icons/go";
import * as IconBi from "react-icons/bi";
import { signOut } from "Api/amplify";

import SidebarContainer from "Components/Room/Sidebar/SidebarContainer";
import SidebarItem from "Components/Room/Sidebar/SidebarItem";
import RoomUserDisplay from "Components/Room/RoomUserDisplay";
import RoomUserDisplaySM from "Components/Room/RoomUserDisplaySM";
import ChildrenMenu from "Components/Room/Children/ChildrenMenu";
import ChildrenWish from "Components/Room/Children/ChildrenWish";

import "./ChildrenPage.css";

class ChildrenPage extends Component {
  static propTypes = {};
  constructor(props) {
    super(props);
  }
  render() {
    const { match } = this.props;
    return (
      <div className="ChildrenPage d-flex">
        <SidebarContainer>
          <SidebarItem
            icon={<IconAi.AiOutlineHome />}
            destination={`${match.url}`}
            label="Menu"
          />
          <SidebarItem
            icon={<IconAi.AiOutlineStar />}
            destination={`${match.url}/wish`}
            label="Wish"
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
          <Route exact path={`${match.path}/`}>
            <ChildrenMenu />
          </Route>
          <Route path={`${match.path}/wish`}>
            <ChildrenWish />
          </Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch, ownProps) => {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ChildrenPage));
