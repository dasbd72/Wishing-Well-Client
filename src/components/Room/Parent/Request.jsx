import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import PrizeList from "Components/Room/Prizes/PrizeList";
import { listPrizes } from "Api/prizes";

export class Request extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prizeList: [],
    };
  }
  componentDidMount() {
    listPrizes(this.props.room.roomId, "", 0).then((prizes) => {
      this.setState({ prizeList: prizes });
    });
  }
  render() {
    return (
      <Container className="ChildrenTask d-flex align-items-center flex-column pt-3">
        <h1
          className="m-3"
          style={{
            color: "white",
            background: "black",
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
          }}
        >
          New Requests
        </h1>
        <PrizeList prizes={this.state.prizeList} />
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  room: state.room,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Request);
