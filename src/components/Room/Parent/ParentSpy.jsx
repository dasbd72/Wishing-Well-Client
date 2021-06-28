import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Carousel,
  CarouselIndicators,
  CarouselControl,
  CarouselItem,
  CarouselCaption,
  Container,
} from "reactstrap";
import shortid from "shortid";

import { p_listChild } from "States/room-actions";
import { listTasks } from "Api/tasks";
import TaskGroup from "../Tasks/TaskGroup";

export class ParentSpy extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      acceptedTasks: [],
      rejectedTasks: [],
      unacceptedTasks: [],
      doneTasks: [],
      activeIndex: 0,
      animating: false,
    };
  }
  componentDidMount() {
    this.props
      .p_listChild(this.props.room.roomId)
      .then(() => this.setActiveIndex(0));
  }
  nextCarousel = () => {
    const nextIndex =
      this.state.activeIndex === 0 ? 0 : this.state.activeIndex + 1;
    this.setActiveIndex(nextIndex);
  };
  prevCarousel = () => {
    const nextIndex =
      this.state.activeIndex === 0
        ? this.props.room.p_childList.length - 1
        : this.state.activeIndex - 1;
    this.setActiveIndex(nextIndex);
  };
  setActiveIndex = (index) => {
    if (this.state.animating || this.props.room.p_childList.length == 0) return;
    this.setState({ activeIndex: index });
    listTasks(
      this.props.room.roomId,
      this.props.room.p_childList[index].userId,
      0
    ).then((tasks) => {
      this.setState({ unacceptedTasks: tasks });
    });
    listTasks(
      this.props.room.roomId,
      this.props.room.p_childList[index].userId,
      1
    ).then((tasks) => {
      this.setState({ rejectedTasks: tasks });
    });
    listTasks(
      this.props.room.roomId,
      this.props.room.p_childList[index].userId,
      2
    ).then((tasks) => {
      this.setState({ acceptedTasks: tasks });
    });
    listTasks(
      this.props.room.roomId,
      this.props.room.p_childList[index].userId,
      3
    ).then((tasks) => {
      this.setState({ doneTasks: tasks });
    });
  };

  render() {
    const slides = this.props.room.p_childList.map((user) => {
      return (
        <CarouselItem
          onExiting={() => this.setState({ animating: true })}
          onExited={() => this.setState({ animating: false })}
          key={shortid.generate()}
        >
          <div className="slidePage h-100 d-flex justify-content-center align-items-center">
            <div className="w-75">
              <TaskGroup tasks={this.state.acceptedTasks} label={"Accepted"} />
              <TaskGroup
                tasks={this.state.unacceptedTasks}
                label={"Unaccepted"}
              />
              <TaskGroup tasks={this.state.rejectedTasks} label={"Rejected"} />
              <TaskGroup tasks={this.state.doneTasks} label={"Done"} />
            </div>
          </div>
          <CarouselCaption
            captionText={user.userId}
            captionHeader={user.userId}
          />
        </CarouselItem>
      );
    });
    return (
      <div className="ParentSpy d-flex align-items-center justify-content-center">
        {this.props.room.p_childList.length == 0 ? (
          <h1
            style={{
              color: "white",
              background: "black",
              paddingLeft: "0.5rem",
              paddingRight: "0.5rem",
            }}
          >
            No Children Yet
          </h1>
        ) : (
          <Carousel
            next={this.nextCarousel}
            previous={this.prevCarousel}
            activeIndex={this.state.activeIndex}
          >
            <CarouselIndicators
              items={this.props.room.p_childList}
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
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  room: state.room,
  session: state.session,
});

const mapDispatchToProps = {
  p_listChild,
};

export default connect(mapStateToProps, mapDispatchToProps)(ParentSpy);
