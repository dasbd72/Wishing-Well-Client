import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
import { Navbar, NavItem, Nav, NavLink } from "reactstrap";

import { AiOutlineHome, AiOutlineStar } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { GiCardAceSpades } from "react-icons/gi";
import { RiArrowGoBackFill } from "react-icons/ri";
import { signOut } from "Api/amplify";

import SidebarContainer from "Components/Room/Sidebar/SidebarContainer";
import SidebarItem from "Components/Room/Sidebar/SidebarItem";
import RoomUserDisplay from "Components/Room/RoomUserDisplay";
import ChildrenTask from "Components/Room/Children/ChildrenTask";
import ChildrenWish from "Components/Room/Children/ChildrenWish";
import ChildrenPrize from "Components/Room/Children/ChildrenPrize";
import { c_getChosenPrize, c_listPrizes } from "States/room-actions";

import "./Children.css";

class Children extends Component {
  render() {
    const { match } = this.props;
    return (
      <div className="Children d-flex">
        <div className="ChildrenPage-bg"></div>
        <SidebarContainer vertical={this.props.main.width > 520}>
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
            icon={<RiArrowGoBackFill />}
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
            <ChildrenTask />
          </Route>
          <Route path={`${match.path}/wish`}>
            <ChildrenWish />
          </Route>
          <Route path={`${match.path}/card`}>
            <ChildrenPrize />
          </Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  room: state.room,
  main: state.main,
});

const mapDispatchToProps = { c_getChosenPrize };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Children));
