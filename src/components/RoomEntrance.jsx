import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";

import ParentPage from "Components/Room/Parent/ParentPage";
import Children from "Components/Room/Children/Children";
import MainNavbar from "Components/MainNavbar";
import Room from "Components/Room/Room";
import RoomCardList from "Components/Room/RoomCardList";

import { listRooms } from "Api/rooms";

import "./RoomEntrance.css";

class RoomEntrance extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      roomLoading: false,
    };
  }

  componentDidUpdate() {
    this.listRooms();
  }

  render() {
    const { match } = this.props;
    return (
      <Switch>
        <Route exact path={`${match.path}/`}>
          <div className="RoomEntrance-bg"></div>
          <div className="RoomEntrance">
            <MainNavbar fixedTop={false} />
            <RoomCardList rooms={this.state.rooms} />
          </div>
        </Route>
        <Route path={`${match.path}/children`}>
          <Children />
        </Route>
        <Route path={`${match.path}/parent`}>
          <ParentPage />
        </Route>
        <Route path={`${match.path}/:id`}>
          <Room />
        </Route>
      </Switch>
    );
  }

  listRooms = () => {
    if (this.props.session.userId)
      listRooms(this.props.session.userId).then((rooms) => {
        this.setState({ rooms: rooms });
      });
  };
}

const mapStateToProps = (state) => ({
  session: state.session,
  navHeight: state.main.navHeight,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(RoomEntrance));
