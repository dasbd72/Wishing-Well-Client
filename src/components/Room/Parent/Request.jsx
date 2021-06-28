import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import PrizeList from "Components/Room/Prizes/PrizeList";
import { p_listPrizes } from "States/room-actions";

export class Request extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.p_listPrizes(this.props.room.roomId);
  }
  render() {
    return (
      <Container className="Request">
        <h1 className="mt-3 custom-title">New Requests</h1>
        <PrizeList prizes={this.props.room.p_prizeList} />
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  room: state.room,
});

const mapDispatchToProps = { p_listPrizes };

export default connect(mapStateToProps, mapDispatchToProps)(Request);
