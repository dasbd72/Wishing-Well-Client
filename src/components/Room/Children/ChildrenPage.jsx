import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";

import RoomSidebar from "Components/Room/RoomSidebar";
import ChildrenMenu from "Components/Room/Children/ChildrenMenu";

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
        <RoomSidebar />
        <Switch>
          <Route exact path={`${match.url}/`}>
            <ChildrenMenu />
          </Route>
          <Route path={`${match.url}/wish`}>
            <div className="d-flex align-items-center justify-content-center flex-column">
              Wish Page
            </div>
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
