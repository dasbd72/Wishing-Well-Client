import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";

import { AiOutlineHome, AiOutlineStar } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { GoSignOut } from "react-icons/go";
import { GiCardAceSpades } from "react-icons/gi";
import { signOut } from "Api/amplify";

import SidebarContainer from "Components/Room/Sidebar/SidebarContainer";
import SidebarItem from "Components/Room/Sidebar/SidebarItem";
import RoomUserDisplay from "Components/Room/RoomUserDisplay";
import RoomUserDisplaySM from "Components/Room/RoomUserDisplaySM";
import ChildrenMenu from "Components/Room/Children/ChildrenMenu";
import ChildrenWish from "Components/Room/Children/ChildrenWish";
import ChildrenCard from "Components/Room/Children/ChildrenCard";

import "./Children.css";

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
            icon={<AiOutlineHome />}
            destination={`${match.url}`}
            label="Menu"
          />
          <SidebarItem
            icon={<AiOutlineStar />}
            destination={`${match.url}/wish`}
            label="Wish"
          />
          <SidebarItem
            icon={<GiCardAceSpades />}
            destination={`${match.url}/card`}
            label="Card"
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
          <Route exact path={`${match.path}/`}>
            <ChildrenMenu />
          </Route>
          <Route path={`${match.path}/wish`}>
            <ChildrenWish />
          </Route>
          <Route path={`${match.path}/card`}>
            <ChildrenCard />
          </Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ChildrenPage));
