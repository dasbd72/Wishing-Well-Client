import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Carousel,
  CarouselIndicators,
  CarouselControl,
  CarouselItem,
  CarouselCaption,
} from "reactstrap";

import { listUsers } from "Api/rooms";
import shortid from "shortid";

export class ParentSpy extends Component {
  static propTypes = {
    // prop: PropTypes,
  };

  constructor(props) {
    super(props);
    this.state = {
      childrenList: [],
      carouselItems: [],
      activeIndex: 0,
      animating: false,
    };
  }
  componentDidMount() {
    listUsers(this.props.room.roomId, "children").then((users) => {
      this.setState(
        { childrenList: users }
        // this.setState((state) => ({ carouselItems: state.users }))
      );
    });
  }
  componentDidUpdate(prevProps, prevStates) {
    if (prevStates.childrenList != this.state.childrenList) {
      console.log(this.state.childrenList);
      this.setState((state) => ({ carouselItems: state.childrenList }));
    }
  }
  nextCarousel = () => {
    const nextIndex =
      this.state.activeIndex === 0 ? 0 : this.state.activeIndex + 1;
    this.setActiveIndex(nextIndex);
  };
  prevCarousel = () => {
    const nextIndex =
      this.state.activeIndex === 0
        ? this.state.carouselItems.length - 1
        : this.state.activeIndex - 1;
    this.setActiveIndex(nextIndex);
  };
  setActiveIndex = (index) => {
    if (this.state.animating) return;
    this.setState({ activeIndex: index });
  };

  render() {
    const slides = this.state.carouselItems.map((user) => {
      return (
        <CarouselItem
          onExiting={() => this.setState({ animating: true })}
          onExited={() => this.setState({ animating: false })}
          key={shortid.generate()}
        >
          <CarouselCaption
            captionText={user.userId}
            captionHeader={user.userId}
          />
        </CarouselItem>
      );
    });
    return (
      <div className="ParentSpy d-flex align-items-center justify-content-center">
        <Carousel
          next={this.nextCarousel}
          previous={this.prevCarousel}
          activeIndex={this.state.activeIndex}
        >
          <CarouselIndicators
            items={this.state.carouselItems}
            activeIndex={this.state.activeIndex}
            onClickHandler={this.setActiveIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={this.prevCarousel}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={this.nextCarousel}
          />
        </Carousel>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  room: state.room,
  session: state.session,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ParentSpy);
