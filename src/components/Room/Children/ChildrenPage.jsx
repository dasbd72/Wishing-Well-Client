import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";

import RoomSidebar from "Components/Room/RoomSidebar";
import RoomUserDisplay from "Components/Room/RoomUserDisplay";
import ChildrenMenu from "Components/Room/Children/ChildrenMenu";
import ChildrenWish from "Components/Room/Children/ChildrenWish";

import "./ChildrenPage.css";
import { ListGroupItemText } from "reactstrap";

class ChildrenPage extends Component {
  static propTypes = {};
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    const { match } = this.props;
    return (
      <div className="ChildrenPage d-flex">
        <RoomSidebar />
        <RoomUserDisplay />
        <Switch>
          <Route exact path={`${match.url}/`}>
            <ChildrenMenu />
          </Route>
          <Route path={`${match.url}/wish`}>
            <ChildrenWish />
          </Route>
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
)(withRouter(ChildrenPage));
