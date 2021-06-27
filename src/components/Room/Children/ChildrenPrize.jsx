import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import PrizeList from "Components/Room/Children/Prizes/PrizeList";
import { listPrizes } from "Api/prizes";

export class ChildrenPrize extends Component {
  static propTypes = {
    // prop: PropTypes
  };

  constructor(props) {
    super(props);
    this.state = {
      prizes: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    listPrizes(this.props.room.roomId, this.props.session.userId, 0).then(
      (prizes) => {
        this.setState({ prizes: prizes }, () => {
          this.setState({ loading: false });
        });
      }
    );
  }

  render() {
    return (
      <div className="ChildrenPrize">
        {this.state.prizes.length == 0 ? (
          <div className="d-flex align-items-center justify-content-center h-100">
            <h1
              className="m-3"
              style={{
                color: "white",
                background: "black",
                paddingLeft: "0.5rem",
                paddingRight: "0.5rem",
              }}
            >Go make some wish.</h1>
          </div>
        ) : (
          <PrizeList prizes={this.state.prizes} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  room: state.room,
  session: state.session,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ChildrenPrize);
