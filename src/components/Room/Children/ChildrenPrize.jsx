import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import PrizeList from "Components/Room/Prizes/PrizeList";
import { c_listPrizes } from "States/room-actions";

export class ChildrenPrize extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.c_listPrizes(this.props.room.roomId, this.props.session.userId);
  }

  render() {
    return (
      <Container className="ChildrenPrize d-flex justify-content-center">
        {this.props.room.c_prizeList.length == 0 ? (
          <div className="d-flex justify-content-center h-100">
            <h1 className="m-3 custom-title">Go make some wish.</h1>
          </div>
        ) : (
          <PrizeList
            prizes={this.props.room.c_prizeList.filter(
              (el) => el.isAccepted != 2
            )}
          />
        )}
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  room: state.room,
  session: state.session,
});

const mapDispatchToProps = {
  c_listPrizes,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChildrenPrize);
