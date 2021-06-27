import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";

import Parent from "Components/Room/Parent/Parent";
import Children from "Components/Room/Children/Children";
import Room from "Components/Room/Room";
import Lobby from "Components/Room/Lobby";

import "./RoomEntrance.css";

class RoomEntrance extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { match } = this.props;
    return (
      <Switch>
        <Route exact path={`${match.path}/`}>
          <Lobby />
        </Route>
        <Route path={`${match.path}/children`}>
          <Children />
        </Route>
        <Route path={`${match.path}/parent`}>
          <Parent />
        </Route>
        <Route path={`${match.path}/:roomId`}>
          <Room />
        </Route>
      </Switch>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(RoomEntrance));
